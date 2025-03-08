export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const response = await fetch("http://localhost:5678/webhook/748b3b19-fce7-4948-87ee-c6f6477b55ba", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: req.body.chatInput }),  // Ajuste clave
    });

    const data = await response.json();
    
    if (!data.Mensaje) {
      throw new Error("Respuesta inválida de n8n");
    }

    return res.status(200).json({ message: data.Mensaje });
  } catch (error) {
    console.error("Error fetching from n8n:", error);
    return res.status(500).json({ error: "Failed to fetch response", details: error.message });
  }
}

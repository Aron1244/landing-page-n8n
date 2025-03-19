export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const response = await fetch(
      "http://localhost:5678/webhook/748b3b19-fce7-4948-87ee-c6f6477b55ba",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body: req.body.chatInput }), // Envía el input del chat
      }
    );

    const text = await response.text(); // Obtener la respuesta como texto
    console.log("⚠️ Respuesta cruda de n8n:", text); // Depuración

    // Intentamos convertirlo en JSON si es posible
    let data;
    try {
      data = JSON.parse(text);
    } catch (error) {
      console.warn("⚠️ La respuesta de n8n no es JSON, usando texto plano.");
      data = { Mensaje: text }; // Usar el texto directamente si no es JSON
    }

    if (!data.Mensaje) {
      throw new Error("Respuesta inválida de n8n");
    }

    return res.status(200).json({ message: data.Mensaje });
  } catch (error) {
    console.error("❌ Error al obtener respuesta de n8n:", error);
    return res
      .status(500)
      .json({ error: "Failed to fetch response", details: error.message });
  }
}

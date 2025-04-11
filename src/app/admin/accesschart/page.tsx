"use client";

import { useEffect, useRef, useState } from "react";
import { select, pie, arc, scaleOrdinal } from "d3";
import ArrowBack from "@/components/admin/ArrowBack";

export default function AccessChart() {
  const [users, setUsers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error al cargar usuarios:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (chartRef.current && !isLoading) {
      // Filtra usuarios con y sin acceso
      const usersWithAccess = users.filter((user: any) => user.has_access);
      const usersWithoutAccess = users.filter((user: any) => !user.has_access);

      // Datos para el gráfico
      const data = [
        { label: "Con acceso", value: usersWithAccess.length },
        { label: "Sin acceso", value: usersWithoutAccess.length },
      ];

      // Define el radio del gráfico y los márgenes
      const width = 400;
      const height = 400;
      const margin = 40;

      const radius = Math.min(width, height) / 2 - margin;

      // Crea el gráfico de pastel (pie chart) con D3.js
      const svg = select(chartRef.current)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

      const color = scaleOrdinal()
        .domain(data.map((d) => d.label))
        .range(["#4F46E5", "#D1D5DB"]); // Colores para las secciones

      const pieGenerator = pie<{ label: string; value: number }>().value(
        (d: { label: string; value: number }) => d.value
      );
      const arcGenerator = arc<any>().innerRadius(0).outerRadius(radius);

      const arcData = pieGenerator(data);

      const paths = svg
        .selectAll("path")
        .data(arcData)
        .enter()
        .append("path")
        .attr("d", arcGenerator)
        .attr("fill", (d) => color(d.data.label) as string)
        .attr("stroke", "#fff")
        .attr("stroke-width", 2);

      // Agregar las etiquetas al gráfico
      svg
        .selectAll("text")
        .data(arcData)
        .enter()
        .append("text")
        .attr("transform", (d) => `translate(${arcGenerator.centroid(d)})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "14px")
        .attr("fill", "white")
        .text((d) => `${d.data.label}: ${d.data.value}`);

      // Efectos de hover
      paths
        .on("mouseover", function (event, d) {
          // Aumenta el tamaño y cambia el color
          select(this)
            .transition()
            .duration(300)
            .attr("transform", "scale(1.1)") // Aumenta el tamaño
            .attr("fill", "#3B82F6"); // Cambia el color a un azul más intenso
        })
        .on("mouseout", function (event, d) {
          // Restaura el tamaño y el color original
          select(this)
            .transition()
            .duration(300)
            .attr("transform", "scale(1)") // Restaura el tamaño
            .attr("fill", color(d.data.label) as string); // Restaura el color original
        });
    }
  }, [users, isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArrowBack />
        <h1 className="text-3xl font-bold text-gray-900 mt-4">
          Gráfico de Usuarios con Acceso
        </h1>

        <div className="mt-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-indigo-600 to-purple-600">
              <h2 className="text-lg leading-6 font-medium text-white">
                Gráfico circular de usuarios
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-indigo-100">
                Muestra la cantidad de usuarios con acceso y sin acceso.
              </p>
            </div>

            <div className="px-4 py-5 sm:p-6 mb-20">
              <div className="flex justify-center items-center">
                <svg ref={chartRef} className="w-1/2"></svg>
                <div className="flex flex-col justify-center items-center w-1/2">
                  <div className="text-center mx-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Con acceso
                    </h3>
                    <p className="text-2xl font-bold text-indigo-600">
                      {(
                        (users.filter((user: any) => user.has_access).length /
                          users.length) *
                        100
                      ).toFixed(2)}
                      %
                    </p>
                  </div>
                  <div className="text-center mx-4 mt-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Sin acceso
                    </h3>
                    <p className="text-2xl font-bold text-indigo-600">
                      {(
                        (users.filter((user: any) => !user.has_access).length /
                          users.length) *
                        100
                      ).toFixed(2)}
                      %
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

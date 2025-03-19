"use client";

import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  DoughnutController,
} from "chart.js";
import ArrowBack from "@/components/admin/ArrowBack";

// Registra los componentes necesarios de Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  DoughnutController
);

export default function AccessChart() {
  const [users, setUsers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/user");
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
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const usersWithAccess = users.filter((user: any) => user.has_access);
      const usersWithoutAccess = users.filter((user: any) => !user.has_access);

      const chartData = {
        labels: ["Con acceso", "Sin acceso"],
        datasets: [
          {
            label: "Usuarios con acceso",
            data: [usersWithAccess.length, usersWithoutAccess.length],
            backgroundColor: ["#4F46E5", "#D1D5DB"], // Colores del gráfico
            borderColor: ["#4338CA", "#6B7280"],
            borderWidth: 1,
          },
        ],
      };

      const config = {
        type: "doughnut" as const,
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top" as const,
            },
            tooltip: {
              callbacks: {
                label: function (context: any) {
                  const value = context.raw;
                  return `${context.label}: ${value} usuarios`;
                },
              },
            },
          },
        },
      };

      // Crea el gráfico
      chartInstanceRef.current = new ChartJS(chartRef.current, config);
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

            <div className="px-4 py-5 sm:p-6">
              <div className="h-80">
                <canvas ref={chartRef}></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

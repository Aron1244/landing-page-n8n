"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import ArrowBack from "@/components/admin/ArrowBack";

interface Payment {
  created_at: string | number | Date;
  status: string;
  amount: number;
  plan_id: number;
  user_id?: number;
  id?: number;
  payment_method?: string;
  starts_at?: string | number | Date;
  ends_at?: string | number | Date;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const EarningsDashboard = () => {
  const [paymentsData, setPaymentsData] = useState<Payment[]>([]);
  const [userPayments, setUserPayments] = useState<Payment[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [showFilteredUsers, setShowFilteredUsers] = useState(false); // New state
  const [totalIncome, setTotalIncome] = useState(0);
  const barChartRef = useRef(null);
  const userChartRef = useRef(null);

  // Fetch all payments data
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/payments");
        const data = await response.json();
        setPaymentsData(data.data || []);

        // Calculate total income
        const income = data.data.reduce(
          (sum: number, payment: { status: string; amount: string }) => {
            return payment.status === "completed"
              ? sum + parseFloat(payment.amount)
              : sum;
          },
          0
        );
        setTotalIncome(income);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    fetchPayments();
  }, []);

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/users");
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchTerm, users]);

  // Fetch user payments when selectedUser changes
  useEffect(() => {
    if (selectedUser) {
      const fetchUserPayments = async () => {
        try {
          const response = await fetch(
            `http://localhost:8000/api/payments/${selectedUser.id}`
          );
          const data = await response.json();
          setUserPayments(data.data || []);
        } catch (error) {
          console.error("Error fetching user payments:", error);
        }
      };

      fetchUserPayments();
    }
  }, [selectedUser]);

  // Draw/update bar chart (same as before)
  useEffect(() => {
    if (paymentsData.length === 0 || !barChartRef.current) return;

    // Group by plan_id and sum amounts
    const planGroups = d3.rollup(
      paymentsData.filter((p) => p.status === "completed"),
      (v) => d3.sum(v, (d) => parseFloat(String(d.amount))),
      (d) => d.plan_id
    );

    const planData = Array.from(planGroups, ([plan_id, amount]) => ({
      plan_id,
      plan_name:
        plan_id === 1
          ? "Plan Básico"
          : plan_id === 2
          ? "Plan Premium"
          : "Otro Plan",
      amount,
    }));

    // Set up chart dimensions
    const width = 600;
    const height = 400;
    const marginTop = 40;
    const marginRight = 20;
    const marginBottom = 60;
    const marginLeft = 60;

    // Clear previous chart
    d3.select(barChartRef.current).selectAll("*").remove();

    // Create SVG container
    const svg = d3
      .select(barChartRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    // Create scales
    const x = d3
      .scaleBand()
      .domain(planData.map((d) => d.plan_name))
      .range([marginLeft, width - marginRight])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(planData, (d) => d.amount) ?? 0])
      .nice()
      .range([height - marginBottom, marginTop]);

    // Define gradients
    const defs = svg.append("defs");

    defs
      .append("linearGradient")
      .attr("id", "gradient-basic")
      .attr("x1", "0%")
      .attr("x2", "0%")
      .attr("y1", "0%")
      .attr("y2", "100%")
      .selectAll("stop")
      .data([
        { offset: "0%", color: "#3b82f6" },
        { offset: "100%", color: "#60a5fa" },
      ])
      .enter()
      .append("stop")
      .attr("offset", (d) => d.offset)
      .attr("stop-color", (d) => d.color);

    defs
      .append("linearGradient")
      .attr("id", "gradient-premium")
      .attr("x1", "0%")
      .attr("x2", "0%")
      .attr("y1", "0%")
      .attr("y2", "100%")
      .selectAll("stop")
      .data([
        { offset: "0%", color: "#6366f1" },
        { offset: "100%", color: "#818cf8" },
      ])
      .enter()
      .append("stop")
      .attr("offset", (d) => d.offset)
      .attr("stop-color", (d) => d.color);

    defs
      .append("linearGradient")
      .attr("id", "gradient-other")
      .attr("x1", "0%")
      .attr("x2", "0%")
      .attr("y1", "0%")
      .attr("y2", "100%")
      .selectAll("stop")
      .data([
        { offset: "0%", color: "#9ca3af" },
        { offset: "100%", color: "#d1d5db" },
      ])
      .enter()
      .append("stop")
      .attr("offset", (d) => d.offset)
      .attr("stop-color", (d) => d.color);

    // Tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "white")
      .style("padding", "5px 10px")
      .style("border-radius", "4px")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    // Create bars
    svg
      .append("g")
      .selectAll("rect")
      .data(planData)
      .join("rect")
      .attr("x", (d) => x(d.plan_name) ?? 0)
      .attr("y", (d) => y(d.amount))
      .attr("height", (d) => y(0) - y(d.amount))
      .attr("width", x.bandwidth())
      .attr("fill", (d) => {
        if (d.plan_id === 1) return "url(#gradient-basic)";
        if (d.plan_id === 2) return "url(#gradient-premium)";
        return "url(#gradient-other)";
      })
      .attr("rx", 4)
      .attr("ry", 4)
      .on("mouseover", function (event, d) {
        d3.select(this).style("filter", "brightness(1.2)");
        tooltip
          .style("opacity", 1)
          .html(`Ganancias: $${d.amount.toFixed(2)}`)
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 20}px`);
      })
      .on("mousemove", function (event) {
        tooltip
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 20}px`);
      })
      .on("mouseout", function () {
        d3.select(this).style("filter", "brightness(1)");
        tooltip.style("opacity", 0);
      });

    // Add x-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .attr("text-anchor", "end")
      .attr("dx", "-0.5em")
      .attr("dy", "0.5em");

    // Add y-axis
    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickFormat((d) => `$${d}`))
      .call((g) => g.select(".domain").remove());

    // Add chart title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", marginTop / 2)
      .attr("text-anchor", "middle")
      .text("Ganancias Totales por Plan")
      .attr("font-weight", "bold")
      .attr("font-size", "16px");
  }, [paymentsData]);

  // Draw/update user chart
  useEffect(() => {
    if (userPayments.length === 0 || !userChartRef.current || !selectedUser)
      return;

    // Process user payments data
    const userData = userPayments.map((payment) => ({
      ...payment,
      amount: parseFloat(String(payment.amount)),
      date: new Date(payment.created_at),
    }));

    // Sort by date
    userData.sort((a, b) => a.date.getTime() - b.date.getTime());

    // Set up chart dimensions
    const width = 600;
    const height = 400;
    const marginTop = 40;
    const marginRight = 20;
    const marginBottom = 60;
    const marginLeft = 60;

    // Clear previous chart
    d3.select(userChartRef.current).selectAll("*").remove();

    // Create SVG container
    const svg = d3
      .select(userChartRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    // Create scales
    const x = d3
      .scaleTime()
      .domain(d3.extent(userData, (d) => d.date) as [Date, Date])
      .range([marginLeft, width - marginRight]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(userData, (d) => d.amount) ?? 0])
      .nice()
      .range([height - marginBottom, marginTop]);

    // Create line generator
    const line = d3
      .line<{ date: Date; amount: number }>()
      .x((d) => x(d.date))
      .y((d) => y(d.amount));

    // Add line path
    svg
      .append("path")
      .datum(userData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 3)
      .attr("d", line);

    // Add circles for each data point
    svg
      .append("g")
      .selectAll("circle")
      .data(userData)
      .join("circle")
      .attr("cx", (d) => x(d.date))
      .attr("cy", (d) => y(d.amount))
      .attr("r", 6)
      .attr("fill", "steelblue")
      .attr("stroke", "white")
      .attr("stroke-width", 2);

    // Add value labels
    svg
      .append("g")
      .selectAll("text")
      .data(userData)
      .join("text")
      .attr("x", (d) => x(d.date))
      .attr("y", (d) => y(d.amount) - 15)
      .attr("text-anchor", "middle")
      .text((d) => `$${d.amount.toFixed(2)}`)
      .attr("fill", "#333")
      .attr("font-size", "12px");

    // Add x-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(5)
          .tickFormat((domainValue) =>
            d3.timeFormat("%b %d, %Y")(new Date(domainValue as Date))
          )
      );

    // Add y-axis
    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickFormat((d) => `$${d}`))
      .call((g) => g.select(".domain").remove());

    // Add chart title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", marginTop / 2)
      .attr("text-anchor", "middle")
      .text(`Ganancias del Usuario: ${selectedUser.name}`)
      .attr("font-weight", "bold")
      .attr("font-size", "16px");
  }, [userPayments, selectedUser]);

  return (
    <div className="container mx-auto px-4 py-8">
      <ArrowBack />
      <h1 className="text-3xl font-bold text-gray-800 mb-8 mt-3">
        Dashboard de Ganancias
      </h1>

      {/* Total Income Display */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-indigo-800 mb-4">
          Ingresos Totales
        </h2>
        <div className="flex items-center">
          <span className="text-4xl font-bold text-blue-600">
            ${totalIncome.toFixed(2)}
          </span>
          <span className="ml-2 text-gray-500">USD</span>
        </div>
      </div>

      {/* Bar Chart - Ganancias por Plan */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-indigo-800 mb-4">
          Ganancias por Plan
        </h2>
        <div className="w-full overflow-x-auto text-gray-800">
          <svg ref={barChartRef} className="mx-auto"></svg>
        </div>
      </div>

      {/* User Earnings Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-indigo-800 mb-4">
          Ganancias por Usuario
        </h2>
        <div className="mb-6 relative">
          <label
            htmlFor="userSearch"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Buscar Usuario
          </label>
          <div className="flex items-center text-gray-800">
            <input
              type="text"
              id="userSearch"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowFilteredUsers(true); // Show the dropdown when typing
              }}
              onBlur={() => setShowFilteredUsers(false)} // Hide the dropdown on blur
              className="flex-1 rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              placeholder="Escriba el nombre del usuario"
            />
            <button
              onClick={() => setShowFilteredUsers(true)} // Trigger search on button click
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold rounded-r-md shadow-md hover:from-indigo-600 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Buscar
            </button>
          </div>
          {searchTerm && showFilteredUsers && filteredUsers.length > 0 && (
            <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                  onMouseDown={() => {
                    setSelectedUser(user);
                    setSearchTerm(user.name);
                    setShowFilteredUsers(false); // Hide the dropdown on selection
                  }}
                >
                  {user.name} ({user.email})
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedUser && userPayments.length > 0 ? (
          <div className="w-full overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 text-gray-800">
              <thead>
                <tr className="bg-gray-100 text-indigo-800">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    ID
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Plan
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Monto
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Estado
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Método de Pago
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Fecha de Compra
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Inicio del Plan
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Fin del Plan
                  </th>
                </tr>
              </thead>
              <tbody>
                {userPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      {payment.id}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {payment.plan_id === 1
                        ? "Plan Básico"
                        : payment.plan_id === 2
                        ? "Plan Premium"
                        : "Otro Plan"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      ${payment.amount.toFixed(2)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {payment.status}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {payment.payment_method}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {new Date(payment.created_at).toLocaleDateString(
                        "es-ES",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {payment.starts_at
                        ? new Date(payment.starts_at).toLocaleDateString(
                            "es-ES",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )
                        : "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {payment.ends_at
                        ? new Date(payment.ends_at).toLocaleDateString(
                            "es-ES",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )
                        : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            {selectedUser
              ? "No se encontraron pagos para este usuario"
              : "Busque y seleccione un usuario para ver sus ganancias"}
          </div>
        )}
      </div>
    </div>
  );
};

export default EarningsDashboard;

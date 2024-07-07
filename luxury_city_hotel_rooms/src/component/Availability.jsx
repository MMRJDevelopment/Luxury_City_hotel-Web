import { useState } from "react";

function Calendar() {
  const [month, setMonth] = useState(8); // September
  const [year, setYear] = useState(2021);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getDaysArray = (month, year) => {
    const days = [];
    const firstDay = new Date(year, month).getDay(); // 0 - 6

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth(month, year); i++) {
      days.push(i);
    }

    return days;
  };

  const handleMonthChange = (e) => {
    setMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center bg-gray-300 p-2 rounded-t-md">
        <button className="text-lg font-bold">&lt;</button>
        <h2 className="text-lg font-bold">TODAY</h2>
        <button className="text-lg font-bold">&gt;</button>
      </div>

      <div className="flex justify-between items-center bg-gray-200 p-2 rounded-b-md">
        <select
          value={month}
          onChange={handleMonthChange}
          className="bg-transparent px-2 rounded-md"
        >
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>

        <select
          value={year}
          onChange={handleYearChange}
          className="bg-transparent px-2 rounded-md"
        >
          {Array.from({ length: 5 }, (_, i) => year + i).map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center">SUN</th>
            <th className="px-4 py-2 text-center">MON</th>
            <th className="px-4 py-2 text-center">TUE</th>
            <th className="px-4 py-2 text-center">WED</th>
            <th className="px-4 py-2 text-center">THU</th>
            <th className="px-4 py-2 text-center">FRI</th>
            <th className="px-4 py-2 text-center">SAT</th>
          </tr>
        </thead>
        <tbody>
          {getDaysArray(month, year).map((day, index) => {
            if (index % 7 === 0) {
              return (
                <tr key={index} className="border-b">
                  {Array(7)
                    .fill(0)
                    .map((_, i) => {
                      const dayIndex = index + i;
                      return (
                        <td
                          key={dayIndex}
                          className={`px-4 py-2 text-center ${
                            dayIndex < getDaysArray(month, year).length &&
                            dayIndex >= 0 &&
                            dayIndex !== 0 &&
                            "bg-green-400"
                          }`}
                        >
                          {getDaysArray(month, year)[dayIndex]}
                        </td>
                      );
                    })}
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;

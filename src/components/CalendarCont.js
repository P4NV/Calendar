import React, { useState, useEffect } from 'react';

export default function CalendarCont() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [calendarDays, setCalendarDays] = useState([]);

  // Get number of days in a month
  const daysInMonth = (month, year) => {
    return 32 - new Date(year, month, 32).getDate();
  };

  // Generate calendar for the current month and year
  const showCalendar = (month, year) => {
    // Get the first day of the month (0 = Sunday, 6 = Saturday)
    const firstDay = new Date(year, month).getDay();
    
    // Get the total days in the month
    const totalDays = daysInMonth(month, year);
    
    // Create array to hold calendar days
    const days = [];
    
    // Add empty slots for days from previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= totalDays; day++) {
      days.push(day);
    }
    
    setCalendarDays(days);
  };

  // Update calendar when month or year changes
  useEffect(() => {
    showCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  // Navigate to previous month
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Navigate to next month
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Handle month selection from dropdown
  const handleMonthChange = (e) => {
    setCurrentMonth(parseInt(e.target.value));
  };

  // Handle year selection from dropdown
  const handleYearChange = (e) => {
    setCurrentYear(parseInt(e.target.value));
  };

  // Generate array of years (current year ±50 years)
  const generateYearRange = () => {
    const years = [];
    for (let year = currentYear - 50; year <= currentYear + 50; year++) {
      years.push(year);
    }
    return years;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="calendar-container">
      {/* Navigation Controls */}
      <div className="calendar-controls">
        <button className="nav-btn prev-btn" onClick={handlePrevMonth}>
          ← Previous
        </button>

        <div className="dropdowns">
          <select 
            className="month-dropdown" 
            value={currentMonth} 
            onChange={handleMonthChange}
          >
            {monthNames.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>

          <select 
            className="year-dropdown" 
            value={currentYear} 
            onChange={handleYearChange}
          >
            {generateYearRange().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <button className="nav-btn next-btn" onClick={handleNextMonth}>
          Next →
        </button>
      </div>

      {/* Current Month and Year Display */}
      <h2 className="current-month-display">
        {monthNames[currentMonth]} {currentYear}
      </h2>

      {/* Calendar Table */}
      <div className="calendar-table-wrapper">
        <table className="calendar-table">
          <thead>
            <tr>
              {dayNames.map((day) => (
                <th key={day}>{day.substring(0, 3)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Create rows of 7 days */}
            {calendarDays.length > 0 && 
              Array.from({ length: Math.ceil(calendarDays.length / 7) }).map((_, weekIndex) => (
                <tr key={weekIndex}>
                  {calendarDays.slice(weekIndex * 7, (weekIndex + 1) * 7).map((day, dayIndex) => (
                    <td key={dayIndex} className={day ? 'calendar-day' : 'empty-day'}>
                      {<h1>{day}</h1>}
                    </td>
                  ))}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

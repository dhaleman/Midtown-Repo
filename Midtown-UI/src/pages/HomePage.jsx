import React, { useState } from "react";
import Taskbar from "../components/Taskbar.jsx";
import logo from "../HelpingHands3.png";
import PageFooter from "../components/PageFooter.jsx";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarStyles.css';

function HomePage() {
  // Sample events
  const [selectedDate, setSelectedDate] = useState(null);
  const events = [
    {
      title: 'Meeting with Client',
      description: 'Discuss project scope and requirements',
      date: new Date(2024, 3, 25), // year, month (0-based), day
    },
    {
      title: 'Lunch with Team',
      description: 'Team building activity',
      date: new Date(2024, 3, 26),
    },
    {
      title: 'Conference Call',
      description: 'Presentation on upcoming features',
      date: new Date(2024, 3, 28),
    },
    {
      title: 'Brainstorming Session',
      description: 'Generate ideas for new project',
      date: new Date(2024, 3, 28),
    },
  ];

  // Function to handle click on date tile
  const handleDateClick = date => {
    setSelectedDate(date);
  };

  // Function to get events for selected date
  const getEventsForDate = () => {
    if (!selectedDate) return [];

    return events.filter(event => event.date.toDateString() === selectedDate.toDateString());
  };

  // Custom CSS styles for the calendar
  const customCalendarStyles = {
    calendar: {
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    tile: {
      color: '#333',
    },
    activeStartDate: {
      color: '#333',
    },
    monthAndYear: {
      color: '#333',
    },
    weekDay: {
      color: '#333',
    },
    day: {
      color: '#333',
    },
    weekNumber: {
      color: '#333',
    },
    tileContent: {
      color: '#333',
    },
  };

  return (
    <div>
      <Taskbar imagesrc={logo} />
      <div className="flex flex-row">
        <div className="hero">
          <div className="hero-content text-left">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        {/* Small calendar */}
        <div>
          <h2>Calendar with Events</h2>
          <Calendar
            onClickDay={handleDateClick}
            tileContent={({ date }) => {
              const event = events.find(event => event.date.toDateString() === date.toDateString());
              return event ? <span className="event-dot"></span> : null;
            }}
            tileClassName={({ date }) => {
              const event = events.find(event => event.date.toDateString() === date.toDateString());
              return event ? 'has-event' : null;
            }}
            style={customCalendarStyles}
          />
          {/* Popup for displaying events */}
          {selectedDate && (
            <div className="popup">
              <h3>Events for {selectedDate.toDateString()}:</h3>
              <ul>
                {getEventsForDate().map((event, index) => (
                  <li key={index}>
                    <strong>{event.title}</strong>
                    <br />
                    {event.description}
                  </li>
                ))}
              </ul>
              <button onClick={() => setSelectedDate(null)}>Close</button>
            </div>
          )}
        </div>
      </div>
      <PageFooter imagesrc={logo} />
    </div>
  );
}

export default HomePage;

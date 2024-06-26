import React, { useState } from "react";
import Taskbar from "../components/Taskbar.jsx";
import logo from "../HelpingHands3.png";
import PageFooter from "../components/PageFooter.jsx";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarStyles.css';
import { Link, useParams } from "react-router-dom";

function ChildPage() {
  // Sample events
  const [selectedDate, setSelectedDate] = useState(null);
  const events = [
    {
      title: 'Pizza Party!',
      description: 'Pizza for lunch.',
      date: new Date(2024, 3, 26),
    },
    {
      title: 'Spanish class',
      description: 'Come learn Spanish with our teachers!',
      date: new Date(2024, 3, 30),
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
          {/* <img
              src="https://www.211childcare.org/assets/marketing/Home-Hero-ffc2ef4c3edba13a068fac9becb576a0b683d4fa64aab0777e842302592bc252.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            /> */}
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">Our Child Care</h1>
              <p className="py-2">
                Helping Hand Care Centers' vision is to help modern
                working families with daytime childcare. We help by
                ensuring our staff members provide a safe environment
                for your children. Schedule a date and time for drop-off
                and pick-up through our application.
              </p>
              {/* <Link to="/schedule" className="btn btn-primary">Schedule</Link> */}
              <h1 className="text-2xl font-bold">Education</h1>
              <p className="py-2">
                Here, we provide teaching services. We understand
                that the stages of child development are crucial. 
                We have teaching events that include learning new
                languages, reading, and promoting problem-solving.
              </p>
              <Link to={`/schedule`} className="btn btn-primary">Schedule</Link>
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

export default ChildPage;

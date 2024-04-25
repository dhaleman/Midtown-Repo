import React, { useState } from "react";
import Taskbar from "../components/Taskbar.jsx";
import logo from "../HelpingHands3.png";
import PageFooter from "../components/PageFooter.jsx";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendarStyles.css";

// Define the EventPopup component to display details of the calendar event
function EventPopup({ event, onClose }) {
  return (
    <div
      className="popup"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function DailyParentalTips() {
  // Array of daily tips
  const tips = [
    " • Encourage outdoor play for physical activity and fresh air •",
    "• Set aside quality time for one-on-one bonding with your child •",
    "• Limit screen time and encourage activities that promote creativity •",
    "• Model good behavior and manners for your child to emulate •",
    "• Encourage reading together as a family •",
    "• Practice positive reinforcement rather than punishment •",
    "• Teach your child problem-solving skills •",
    "• Listen actively to your child and validate their feelings •",
    "• Lead by example in showing kindness and empathy •",
  ];

  return (
    <div className="daily-tips" style={{ marginTop: "20px" }}>
      <marquee
        behavior="scroll"
        direction="left"
        style={{ whiteSpace: "nowrap", overflow: "hidden" }}
      >
        <strong>Daily Parental Tips:</strong>
        <ul style={{ display: "inline", paddingInlineStart: 0 }}>
          {tips.map((tip, index) => (
            <li
              key={index}
              style={{
                display: "inline",
                marginRight: "20px",
                fontSize: "larger",
              }}
            >
              {tip}
            </li>
          ))}
        </ul>
      </marquee>
    </div>
  );
}

function ParentDiscussionPanel() {
  const [comments, setComments] = useState([
    {
      text: "I'm struggling with getting my child to eat vegetables. Any tips?",
      type: "question",
    },
    {
      text: "What are your favorite bedtime stories to read with your kids?",
      type: "question",
    },
    { text: "How do you handle sibling rivalry?", type: "question" },
    {
      text: "Any recommendations for educational apps for preschoolers?",
      type: "question",
    },
    {
      text: "You can try making eating vegetables fun by involving your child in meal preparation. Also, offer a variety of vegetables in different forms.",
      type: "answer",
    },
    {
      text: "Some popular bedtime stories are 'Goodnight Moon', 'Where the Wild Things Are', and 'The Very Hungry Caterpillar'.",
      type: "answer",
    },
    {
      text: "Sibling rivalry is common. Encourage positive interactions and teach conflict resolution skills.",
      type: "answer",
    },
    {
      text: "There are many great educational apps like ABCmouse, Khan Academy Kids, and PBS Kids Games.",
      type: "answer",
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const parentDiscussionPanelHeight = "280px"; // Adjusted height

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const type = newComment.trim().endsWith("?") ? "question" : "answer";
      setComments([...comments, { text: newComment, type }]);
      setNewComment("");
    }
  };

  return (
    <div
      className="parent-discussion-panel"
      style={{
        width: "250px",
        height: parentDiscussionPanelHeight,
        overflowY: "auto",
        padding: "10px",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        marginTop: "20px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Parent Discussion Panel</h2>
      <ul style={{ padding: 0 }}>
        {comments.map((comment, index) => (
          <li
            key={index}
            style={{
              marginBottom: "5px",
              padding: "5px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              backgroundColor:
                comment.type === "question" ? "#ffc0cb" : "#90ee90",
            }}
          >
            {comment.text}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          value={newComment}
          onChange={handleInputChange}
          placeholder="Enter your question or comment"
          style={{
            width: "100%",
            padding: "5px",
            marginBottom: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleAddComment}
          style={{
            width: "100%",
            padding: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

function HomePage() {
  // Sample events
  const [selectedDate, setSelectedDate] = useState(null);
  const [popupEvent, setPopupEvent] = useState(null); // New state for managing the event pop-up
  const events = [
    {
      title: "Pizza Party!",
      description: "Pizza for lunch.",
      date: new Date(2024, 3, 26),
    },
    {
      title: "Spanish class",
      description: "Come learn Spanish with our teachers!",
      date: new Date(2024, 3, 30),
    },
  ];

  // Function to handle click on date tile
  const handleDateClick = (date) => {
    setSelectedDate(date);
    const event = events.find(
      (event) => event.date.toDateString() === date.toDateString()
    );
    setPopupEvent(event); // Set the event for the pop-up
  };

  // Function to get events for selected date
  const getEventsForDate = () => {
    if (!selectedDate) return [];

    return events.filter(
      (event) => event.date.toDateString() === selectedDate.toDateString()
    );
  };

  // Custom CSS styles for the calendar
  const customCalendarStyles = {
    calendar: {
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
    },
    tile: {
      color: "#333",
    },
    activeStartDate: {
      color: "#333",
    },
    monthAndYear: {
      color: "#333",
    },
    weekDay: {
      color: "#333",
    },
    day: {
      color: "#333",
    },
    weekNumber: {
      color: "#333",
    },
    tileContent: {
      color: "#333",
    },
  };

  return (
    <div>
      <Taskbar imagesrc={logo} />
      <div className="flex justify-center">
        {/* Welcome Section */}
        <div className="hero">
          <div className="hero-content text-left">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Welcome</h1>
              <p className="py-6">
                Helping Hand Care Centers' vision is to help modern working
                families with daytime and overnight childcare, pet care, and
                elderly care. We provide trustworthy and cost-effective
                on-campus and off-campus care centers. Come see a virtual tour
                of our care centers.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        {/* Calendar and Parent Discussion Panel */}
        <div className="flex flex-row">
          <div className="calendar-container" style={{ marginRight: "20px" }}>
            <h2>Calendar with Events</h2>
            <Calendar
              onClickDay={handleDateClick}
              tileContent={({ date }) => {
                const event = events.find(
                  (event) => event.date.toDateString() === date.toDateString()
                );
                return event ? <span className="event-dot"></span> : null;
              }}
              tileClassName={({ date }) => {
                const event = events.find(
                  (event) => event.date.toDateString() === date.toDateString()
                );
                return event ? "has-event" : null;
              }}
              style={customCalendarStyles}
            />
          </div>
          <ParentDiscussionPanel /> {/* Render parent discussion panel */}
        </div>
      </div>
      <DailyParentalTips /> {/* Render daily parental tips */}
      <PageFooter imagesrc={logo} />
      {/* Conditionally render the event pop-up */}
      {popupEvent && (
        <EventPopup event={popupEvent} onClose={() => setPopupEvent(null)} />
      )}
    </div>
  );
}

export default HomePage;

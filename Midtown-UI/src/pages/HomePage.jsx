import React, { useState, useEffect } from "react";
import Taskbar from "../components/Taskbar.jsx";
import logo from "../HelpingHands3.png";
import PageFooter from "../components/PageFooter.jsx";
import "./calendarStyles.css";

function DailyParentalTips() {
  const tips = [
    " • Encourage outdoor play for physical activity and fresh air •",
    " • Set aside quality time for one-on-one bonding with your child •",
    " • Limit screen time and encourage activities that promote creativity •",
    " • Model good behavior and manners for your child to emulate •",
    " • Encourage reading together as a family •",
    " • Practice positive reinforcement rather than punishment •",
    " • Teach your child problem-solving skills •",
    " • Listen actively to your child and validate their feelings •",
    " • Lead by example in showing kindness and empathy •",
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

function DailyEvents({ events, date }) {
  const colors = ['#FFD700', '#FFA500', '#FF6347', '#FF69B4', '#00BFFF']; // Different light shades resembling a rainbow

  return (
    <div className="bubble daily-events" style={{ height: "300px", width: "350px", overflowY: "auto" }}>
      <h2 className="date-label">Care Center Schedule for {date}</h2>
      {events.length > 0 ? (
        <div>
          {events.map((event, index) => (
            <div key={index} className="event-item" style={{ backgroundColor: colors[index % colors.length] }}>
              <div className="event-time">{event.time}</div>
              <div className="event-details">
                <span className="event-title">{event.title}</span>
                <span className="event-description">{event.description}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No events scheduled for today.</p>
      )}
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
  const [vibrating, setVibrating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly delete and re-add a bubble
      const randomIndex = Math.floor(Math.random() * comments.length);
      const updatedComments = [...comments];
      const deletedComment = updatedComments.splice(randomIndex, 1)[0];

      // Randomly add a bubble after deletion
      const randomComment = {
        text: deletedComment.text, // Use the same text as the deleted bubble
        type: deletedComment.type,
      };
      const newComments = [...updatedComments];
      newComments.push(randomComment); // Add the new bubble at the bottom
      setComments(newComments);

      // Trigger vibrating effect
      setVibrating(true);
      setTimeout(() => setVibrating(false), 500); // Turn off vibrating effect after 500ms
    }, 10000); // Adjust timing as needed

    return () => clearInterval(interval);
  }, [comments]);

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const type = newComment.trim().endsWith("?") ? "question" : "answer";
      setComments([...comments, { text: newComment, type }]);
      setNewComment("");
      setVibrating(true); // Trigger vibrating effect
      setTimeout(() => setVibrating(false), 500); // Turn off vibrating effect after 500ms
    }
  };

  return (
    <div
      className={`parent-discussion-panel ${vibrating ? 'vibrating' : ''}`}
      style={{
        width: "260px", // Adjusted width
        height: "280px", // Adjusted height
        overflowY: "auto",
        padding: "10px",
        backgroundColor: "#B3FFB3", // Light green background color
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        marginTop: "20px",
        marginLeft: "30px", // Added margin to move it to the right
      }}
    >
      <h2 style={{ marginBottom: "10px", fontWeight: "bold" }}>Parent Discussion Panel</h2>
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
                comment.type === "question" ? "#F3E1F7" : "#FDD2E4",
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
  const currentDate = new Date().toLocaleDateString();
  const events = [
    {
      time: "8:00 AM - 9:00 AM",
      title: "Drop-off & Breakfast Time",
      description: "Welcome your child and enjoy a nutritious breakfast.",
    },
    {
      time: "9:30 AM - 10:30 AM",
      title: "Outdoor Playtime",
      description: "Kids get to play outside and enjoy the fresh air.",
    },
    {
      time: "10:45 AM - 11:30 AM",
      title: "Storytelling Session",
      description: "Teachers will read engaging stories to the children.",
    },
    {
      time: "12:00 PM - 1:00 PM",
      title: "Lunch Time",
      description: "Time to refuel with a delicious and healthy lunch.",
    },
    {
      time: "3:00 PM - 4:00 PM",
      title: "Creative Arts & Crafts",
      description: "Let your child explore their creativity through arts and crafts activities.",
    },
  ];

  return (
    <div>
      <Taskbar imagesrc={logo} />
      <div className="flex justify-center">
        <div className="welcome-section">
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
              <button to="/virtual" className="btn btn-primary">
                VR Tour
              </button>
            </div>
          </div>
        </div>
        <div className="bubble">
          <DailyEvents events={events} date={currentDate} />
        </div>
        <ParentDiscussionPanel />
      </div>
      <DailyParentalTips />
      <PageFooter imagesrc={logo} />
    </div>
  );
}

export default HomePage;

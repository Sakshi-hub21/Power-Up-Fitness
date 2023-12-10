import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Sidebar from "./components/sidebar.js";
import "./calender.css";
const localizer = momentLocalizer(moment);

// Custom Event component to render the title dynamically
const CustomEvent = ({ event }) => {
  const titleRef = useRef(null);
  const [eventHeight, setEventHeight] = useState(0);

  useEffect(() => {
    // Calculate the height of the title dynamically
    if (titleRef.current) {
      setEventHeight(titleRef.current.clientHeight);
    }
  }, [event.clientName]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: eventHeight }}>
      <div ref={titleRef} style={{ display: "flex", flexDirection: "column" }}>
        <span>{event.clientName}</span>
        <span style={{ fontSize: "1.2em", color: "white" }}>{event.time}</span>
      </div>

    </div>
  );
};

const MyCalendar = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    // Fetch dates from your Node.js backend
    axios
      .get("https://power-up-fitness-database1.onrender.com/dates")
      .then((response) => {
        setDates(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching dates:", error);
      });
  }, []);

  // Transform dates into events format expected by react-big-calendar
  const events = dates.map((date) => ({
    start: new Date(date.date),
    end: new Date(date.date),
    title: "", // Empty title to use custom event rendering
    clientName: date.clientName,
    time: date.time,
  }));

  const eventStyleGetter = (event, start, end, isSelected) => {
    return {
      style: {
        backgroundColor: "red", // Set background color to red
        borderRadius: "8px",
        color: "white",
        opacity: 0.8,
        display: "block"

      },
    };
  };

  return (
    <>
      <Sidebar />
      
        <div className="bg-calendar">
          <h1 className="text-center h1-calendar">Calendar</h1>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          tooltipAccessor="title"
          className="calendar"
          eventPropGetter={eventStyleGetter}
          components={{
            event: CustomEvent, // Use the CustomEvent component for rendering events
          }}/>
        </div>
        
      
    </>
  );
};

export default MyCalendar;

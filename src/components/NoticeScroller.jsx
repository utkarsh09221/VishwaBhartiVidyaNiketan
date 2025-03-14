import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const notices = [
  { text: "Date: 11-03-2025 - School will remain closed on Friday.", pdf: "/files/admission.pdf" },
  { text: "Date: 12-03-2025 - Admission forms are now available online.", pdf: "/files/notice2.pdf" },
  { text: "Date: 13-03-2025 - Parent-teacher meeting scheduled for next week.", pdf: "/files/notice3.pdf" },
  { text: "Date: 14-03-2025 - Sports Day registration deadline extended.", pdf: "/files/notice4.pdf" },
  { text: "Date: 15-03-2025 - Winter vacation starts next Monday.", pdf: "/files/notice5.pdf" },
  { text: "Date: 16-03-2025 - Classes will resume after the holidays.", pdf: "/files/notice6.pdf" },
  { text: "Date: 17-03-2025 - New syllabus for next semester is uploaded.", pdf: "/files/notice7.pdf" },
  { text: "Date: 18-03-2025 - Science fair registrations open today.", pdf: "/files/notice8.pdf" },
];

const NoticeScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const noticesToShow = 5;
  const autoScrollRef = useRef(null);
  const manualScrollRef = useRef(false);

  // Function to start auto-scroll
  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollRef.current = setInterval(() => {
      if (!manualScrollRef.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % notices.length);
      }
    }, 5000);
  };

  // Function to stop auto-scroll
  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  // Circular scrolling function
  const handleScroll = (direction) => {
    stopAutoScroll();
    manualScrollRef.current = true;

    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      
      // Circular scrolling logic
      if (newIndex < 0) newIndex = notices.length - 1;
      if (newIndex >= notices.length) newIndex = 0;

      return newIndex;
    });

    setTimeout(() => {
      manualScrollRef.current = false;
      startAutoScroll();
    }, 10000);
  };

  return (
    <div
      className="notice-scroller-container"
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #ddd",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
        maxWidth: "500px",
        width: "100%",
        margin: "20px auto",
        overflow: "hidden",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Scroll Up Button */}
      <button
        onClick={() => handleScroll(-1)}
        style={{
          backgroundColor: "#007bff",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer",
          color: "white",
          fontSize: "18px",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        <FaChevronUp />
      </button>

      {/* Notices List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <AnimatePresence>
          {Array.from({ length: noticesToShow }).map((_, i) => {
            const noticeIndex = (currentIndex + i) % notices.length; // Wraps around
            const notice = notices[noticeIndex];

            return (
              <motion.div
                key={noticeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#0056b3",
                  textAlign: "center",
                  padding: "8px 12px",
                  width: "90%",
                  borderRadius: "6px",
                  background: "#f8f9fa",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <a
                  href={notice.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#0056b3" }}
                >
                  {notice.text}
                </a>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={() => handleScroll(1)}
        style={{
          backgroundColor: "#007bff",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer",
          color: "white",
          fontSize: "18px",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        <FaChevronDown />
      </button>
    </div>
  );
};

export default NoticeScroller;

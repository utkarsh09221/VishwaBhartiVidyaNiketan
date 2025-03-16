import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const notices = [
  { text: "Date: 11-03-2025 - School will remain closed on Friday.", pdf: "/files/admission.pdf" },
];

const NoticeScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const noticesToShow = 5;
  const autoScrollRef = useRef(null);
  const manualScrollRef = useRef(false);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollRef.current = setInterval(() => {
      if (!manualScrollRef.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % notices.length);
      }
    }, 5000);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const handleScroll = (direction) => {
    stopAutoScroll();
    manualScrollRef.current = true;

    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
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
        backgroundColor: "#e9ecef",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #adb5bd",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
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
      <button
        onClick={() => handleScroll(-1)}
        style={{
          backgroundColor: "#495057",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer",
          color: "#ffffff",
          fontSize: "18px",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#343a40")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#495057")}
      >
        <FaChevronUp />
      </button>

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
            const noticeIndex = (currentIndex + i) % notices.length;
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
                  color: "#212529",
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
                  style={{ textDecoration: "none", color: "#0d6efd" }}
                >
                  {notice.text}
                </a>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <button
        onClick={() => handleScroll(1)}
        style={{
          backgroundColor: "#495057",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer",
          color: "#ffffff",
          fontSize: "18px",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#343a40")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#495057")}
      >
        <FaChevronDown />
      </button>
    </div>
  );
};

export default NoticeScroller;
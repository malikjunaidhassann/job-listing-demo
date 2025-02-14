import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REPORT_OPTIONS = [
  "I’m just not interested in this job",
  "Doesn’t match my skills or preferences",
  "Vague project description",
  "Unrealistic budget",
  "Overly lengthy requirements",
  "Unprofessional tone",
  "Requesting unpaid test tasks",
];

export default function ReportDropdown({ isOpen, onClose }) {
  const [selected, setSelected] = useState([]);
  const dropdownRef = useRef(null);

  const toggleOption = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTimeout(() => onClose(), 100); // Small delay to avoid toggle issue
      }
    };
  
    if (isOpen) {
      document.addEventListener("click", handleClickOutside, true);
    }
  
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isOpen, onClose]);
  

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute mt-2 right-0 top-12 w-[320px] bg-white rounded-lg shadow-lg border p-4 z-50"
          role="dialog"
          aria-hidden={!isOpen}
          onClick={(e) => e.stopPropagation()} 
        >
          <div className="space-y-3">
            {REPORT_OPTIONS.map((option, index) => (
              <label
                key={index}
                className="flex items-center space-x-2 cursor-pointer text-sm text-gray-800"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600"
                  checked={selected.includes(option)}
                  onChange={() => toggleOption(option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <button
            className={`mt-4 w-full py-2 text-white rounded-lg font-medium transition ${
              selected.length > 0
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={selected.length === 0}
            onClick={() => alert("Report Sent!")}
          >
            Send report
          </button>

          <p className="text-xs text-gray-500 mt-2 flex items-start gap-1">
            <span>🔒</span> Your report is private, the client won’t be notified.
            We’ll use your feedback to improve job matching.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

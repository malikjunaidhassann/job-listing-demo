import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pic7 from "../../assets/star.png";

export default function ApplyToJobModal({ isOpen, onClose }) {
  const [text, setText] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Close modal when clicking outside
        >
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white w-full max-w-[560px] rounded-xl shadow-lg p-6"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-[24px] leading-[120%] font-[550] text-[#18181B]">Apply to job</h2>
              <img src={pic7} alt="Close" className="cursor-pointer" onClick={onClose} />
            </div>

            {/* Subtitle */}
            <p className="text-base font-inter leading-[150%] text-[#52525B] -tracking-[0.32px] font-normal mt-2">
              Introduce yourself and tell the client why you think you'd be perfect for this job.
            </p>

            {/* Textarea */}
            <div className="border rounded-lg p-3 mt-4">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Start typing..."
                className="w-full h-[200px] resize-none border-none outline-none tracking-[-0.32px] leading-[150%]"
              />
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => alert("Applied!")}
                className={`px-4 py-2 rounded-lg text-white font-medium shadow-md transition ${
                  text ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"
                }`}
                disabled={!text}
              >
                Apply
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

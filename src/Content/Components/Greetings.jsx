/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Greetings() {
  const greetings = [
    { id: 0, text: "Hello", language: "English" },
    { id: 1, text: "Hola", language: "Spanish" },
    { id: 2, text: "Bonjour", language: "French" },
    { id: 3, text: "你好", language: "Chinese" },
    { id: 4, text: "Hallo", language: "German" },
    { id: 5, text: "Ciao", language: "Italian" },
    { id: 6, text: "こんにちは", language: "Japanese" },
    { id: 7, text: "Здравствуйте", language: "Russian" },
    { id: 8, text: "مرحبا", language: "Arabic" },
    { id: 9, text: "नमस्ते", language: "Hindi" },
    { id: 10, text: "Olá", language: "Portuguese" },
    { id: 11, text: "안녕하세요", language: "Korean" },
    { id: 12, text: "Merhaba", language: "Turkish" },
    { id: 13, text: "Hallo", language: "Dutch" },
    { id: 14, text: "Hej", language: "Swedish" },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 1000); // Change greeting every second

    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <div className="App text-lg">
      <AnimatePresence>
        <motion.div
          className=" w-full"
          key={greetings[index].id}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 5, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: "35%",
            left: "45vw",
            transform: "translate(-50%, -50%)",
          }}
        >
          <p className="text-3xl font-light ">{greetings[index].text}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Greetings;

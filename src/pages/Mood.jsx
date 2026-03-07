import { useState, useEffect } from "react";
import axios from "axios";

const Mood = () => {
  const moods = ["😊", "😔", "😰", "😌", "😡"];
  const [exercises, setExercises] = useState([]);

  // Initialize state from localStorage
  const [selectedMood, setSelectedMood] = useState(() => {
    const saved = localStorage.getItem("MoodEntry");
    return saved ? JSON.parse(saved).selectedMood : "";
  });

  const [note, setNote] = useState(() => {
    const saved = localStorage.getItem("MoodEntry");
    return saved ? JSON.parse(saved).note : "";
  });

  // Save mood to localStorage
  useEffect(() => {
    localStorage.setItem(
      "MoodEntry",
      JSON.stringify({ selectedMood, note })
    );
  }, [selectedMood, note]);

  // Fetch exercises from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/exercises")
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => {
        console.error("Error fetching exercises:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#f3f6f4]">
      <div className="p-10">
        <h1 className="text-3xl font-bold text-center mb-10">
          How are you feeling today?
        </h1>

        {/* Mood Selection */}
        <div className="flex justify-center gap-6 mb-8">
          {moods.map((mood, index) => (
            <button
              key={index}
              onClick={() => setSelectedMood(mood)}
              className={`text-4xl p-4 rounded-xl transition ${
                selectedMood === mood
                  ? "bg-[#297194] text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {mood}
            </button>
          ))}
        </div>

        {/* Reflection Input */}
        <div className="max-w-xl mx-auto">
          <textarea
            placeholder="Write a short reflection..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Affirmation */}
        <p className="text-center mt-8 italic text-gray-600">
          🌿 "Every emotion is valid."
        </p>

        {/* Exercises Section */}
        <h2 className="text-2xl font-semibold text-center mt-12 mb-6">
          🧘 Relaxation Exercises
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-teal-700 mb-3">
                {exercise.name}
              </h3>

              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                {exercise.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mood;
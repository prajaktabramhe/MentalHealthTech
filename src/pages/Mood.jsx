import { useState, useEffect } from "react";
import Chart from "../components/Chart";

const Mood = () => {
  const moods = ["😊", "😔", "😰", "😌", "😡"];

  // ✅ Initialize state from localStorage
  const [selectedMood, setSelectedMood] = useState(() => {
    const saved = localStorage.getItem("MoodEntry");
    return saved ? JSON.parse(saved).selectedMood : "";
  });

  const [note, setNote] = useState(() => {
    const saved = localStorage.getItem("MoodEntry");
    return saved ? JSON.parse(saved).note : "";
  });

  // ✅ Save to localStorage whenever mood or note changes
  useEffect(() => {
    localStorage.setItem(
      "MoodEntry",
      JSON.stringify({ selectedMood, note })
    );
  }, [selectedMood, note]);

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

        {/* Weekly Chart */}
        <Chart/>
      </div>
    </div>
  );
};

export default Mood;
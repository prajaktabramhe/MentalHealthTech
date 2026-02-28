import { useState, useEffect } from "react";

const Journal = () => {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("journalEntries"));
    if (saved) setEntries(saved);
  }, []);

  const addEntry = () => {
    if (!entry) return;

    const newEntry = {
      text: entry,
      date: new Date().toLocaleString(),
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));
    setEntry("");
  };

  return (
   <div className="min-h-screen bg-[#f3f6f4] p-10">
          <h1 className="text-3xl font-bold text-center mb-8">Journal</h1>
          <div className="max-w-2xl mx-auto">
              <textarea
                  value={entry}
                  onChange={(e) => setEntry(e.target.value)}
                  placeholder="Write your thoughts..."
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-400" />

              <button
                  onClick={addEntry}
                  className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-xl hover:bg-teal-700"
              >
                  Save Entry
              </button>

              <div className="mt-10 space-y-6">
                  {entries.map((item, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl shadow">
                          <p className="text-gray-700">{item.text}</p>
                          <p className="text-sm text-gray-400 mt-2">{item.date}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default Journal;
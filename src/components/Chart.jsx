import { moodData } from "../data/moodData";

function Chart() {
  return (
    <div className="mt-16 max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
      
      <h2 className="text-xl font-semibold text-center mb-6 text-gray-700">
        Weekly Mood Trend
      </h2>

      <div className="flex justify-center items-end gap-4 h-40">
        {moodData.map((item, index) => (
          <div
            key={index}
            className="w-8 bg-[#297194] rounded-t-lg transition-all duration-300 hover:opacity-80"
            style={{ height: `${item.mood * 25}px` }}
          ></div>
        ))}
      </div>

      <div className="flex justify-center gap-6 mt-4 text-sm text-gray-500">
        {moodData.map((item, index) => (
          <span key={index}>{item.day}</span>
        ))}
      </div>

    </div>
  );
}

export default Chart;
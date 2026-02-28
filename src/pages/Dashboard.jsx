import Chart from "../components/Chart";

export default function Dashboard() {
 const stats = {
  totalEntries: 25,
  averageMood: 3.8,
  streak: 7,
};

  return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-100 p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Your Wellness Dashboard
        </h1>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Total Entries */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-lg font-semibold text-gray-500 mb-4">
              Total Entries
            </h2>
            <p className="text-4xl font-bold text-teal-600">
              {stats.totalEntries}
            </p>
          </div>

          {/* Average Mood */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-lg font-semibold text-gray-500 mb-4">
              Average Mood
            </h2>
            <p className="text-4xl font-bold text-teal-600">
              {stats.averageMood} / 5
            </p>
          </div>

          {/* Streak */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-lg font-semibold text-gray-500 mb-4">
              Current Streak
            </h2>
            <p className="text-4xl font-bold text-teal-600">
              🔥 {stats.streak} days
            </p>
          </div>

        </div>

        {/* Weekly Mood Bars */}
      <Chart/>

      </div>
  );
}
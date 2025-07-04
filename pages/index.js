export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Pushkar Sindhu</h1>
        <h2 className="text-xl text-gray-600 mb-2">Your Brampton Realtor | SaveMax</h2>
        <p className="text-gray-500 mb-6">
          Helping you find the right home with trust, transparency, and experience.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg hover:bg-purple-700 transition">
          Contact Me
        </button>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-6xl font-bold leading-tight">
          Learn Smarter with
          <br />
          <span className="text-yellow-300">
            CodeMentor AI
          </span>
        </h1>

        <p className="mt-6 text-xl max-w-2xl">
          Your AI-powered platform for coding, interview preparation,
          daily learning streaks, and personalized study guidance.
        </p>

        <button className="mt-8 bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
          Get Started
        </button>

      </div>
    </section>
  );
}

export default Hero;
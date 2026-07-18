function SearchBar() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Ask Anything About Programming 💻
        </h2>

        <p className="text-gray-600 mb-8">
          Search programming concepts, interview questions, code examples and AI explanations.
        </p>

        <div className="flex shadow-lg rounded-xl overflow-hidden">
          <input
            type="text"
            placeholder="Search Java, React, DBMS, Interview Questions..."
            className="flex-1 p-4 outline-none"
          />

          <button className="bg-indigo-600 text-white px-8 hover:bg-indigo-700">
            Search
          </button>
        </div>

      </div>
    </section>
  );
}

export default SearchBar;
import { FaUsers, FaCode, FaLaptopCode, FaBriefcase } from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers size={35} className="text-indigo-600" />,
      number: "10K+",
      title: "Active Students",
    },
    {
      icon: <FaCode size={35} className="text-purple-600" />,
      number: "5000+",
      title: "Interview Questions",
    },
    {
      icon: <FaLaptopCode size={35} className="text-cyan-600" />,
      number: "50+",
      title: "Programming Topics",
    },
    {
      icon: <FaBriefcase size={35} className="text-green-600" />,
      number: "95%",
      title: "Placement Success",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-3 transition duration-300"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h1 className="text-4xl font-bold text-gray-800">
                {item.number}
              </h1>

              <p className="text-gray-500 mt-2">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;
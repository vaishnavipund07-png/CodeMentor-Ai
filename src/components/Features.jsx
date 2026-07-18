import {
  FaRobot,
  FaCode,
  FaUserGraduate,
  FaFire,
  FaChartLine,
  FaUserCircle,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot className="text-4xl text-indigo-600" />,
      title: "AI Assistant",
      desc: "Get instant AI-powered explanations and coding help.",
    },
    {
      icon: <FaCode className="text-4xl text-cyan-600" />,
      title: "Coding Practice",
      desc: "Practice coding problems with solutions.",
    },
    {
      icon: <FaUserGraduate className="text-4xl text-purple-600" />,
      title: "Interview Prep",
      desc: "Prepare for technical and HR interviews.",
    },
    {
      icon: <FaFire className="text-4xl text-orange-500" />,
      title: "Daily Streak",
      desc: "Maintain your learning streak every day.",
    },
    {
      icon: <FaChartLine className="text-4xl text-green-600" />,
      title: "Progress Dashboard",
      desc: "Track your learning progress with analytics.",
    },
    {
      icon: <FaUserCircle className="text-4xl text-pink-600" />,
      title: "Smart Profile",
      desc: "Manage skills, badges, and achievements.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Powerful Features
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Everything you need to become a better developer.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >
              <div className="mb-5">{feature.icon}</div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
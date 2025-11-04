import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-br from-[#1770ff] to-[#07c2f1fa] py-16 text-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-4xl font-bold mb-10 "
        >
          How Nexus Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              title: "Find Your Perfect Course",
              desc: "Browse hundreds of expert-led courses across design, tech, and marketing.",
              icon: "🔍",
            },
            {
              title: "Join Instantly",
              desc: "Enroll in your favorite course and start learning anytime, anywhere.",
              icon: "🎓",
            },
            {
              title: "Learn by Doing",
              desc: "Complete hands-on projects and get feedback from instructors.",
              icon: "💬",
            },
            {
              title: "Earn Certificate",
              desc: "Receive a verified certificate to boost your profile and career.",
              icon: "🏅",
            },
          ].map((item, i) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={i}
              className="bg-white text-gray-800 p-6 rounded-2xl border-1 border-gray-100"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

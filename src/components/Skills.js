import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const frontend = [
  {
    name: "React Native",
    value: 85,
  },
  {
    name: "JavaScript",
    value: 80,
  },
  {
    name: "TypeScript",
    value: 75,
  },
  {
    name: "React Hooks",
    value: 85,
  },
  {
    name: "React Router",
    value: 80,
  },
  {
    name: "React Redux",
    value: 80,
  },
  {
    name: "Firebase",
    value: 70,
  },
  {
    name: "Tailwind CSS",
    value: 75,
  },
];

const Others = [
  {
    name: "Responsive Design",
    value: 95,
  },
  {
    name: "GitHub",
    value: 90,
  },
  {
    name: "GitLab",
    value: 75,
  },
  {
    name: "API Integration",
    value: 95,
  },
  {
    name: "Push Notifications",
    value: 75,
  },
  {
    name: "Google Map Api",
    value: 75,
  },
  {
    name: "Payment Integration",
    value: 80,
  },
  {
    name: "Third Party Libraries",
    value: 85,
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-base-100 via-base-200 to-base-100 relative overflow-hidden" id="skills">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 backdrop-blur-sm border border-primary/20">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Explore my
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Technical <span className="bg-gradient-to-r from-primary via-teal-400 to-secondary bg-clip-text text-transparent animate-gradient">Skills</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-primary rounded-full"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-primary rounded-full"></div>
          </div>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Proficient in modern mobile development technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mobile Development Card */}
          <div
            className="relative bg-gradient-to-br from-base-200/80 via-base-300/50 to-base-200/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-primary/40 transition-all duration-500 border border-primary/20 overflow-hidden group"
            data-aos="fade-right"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                      Mobile Development
                    </h3>
                    <p className="text-sm opacity-60 mt-1">Core Technologies</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold">
                  8 Skills
                </div>
              </div>

              <div className="space-y-3">
                {frontend.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-base-100/50 rounded-xl p-4 hover:bg-primary/5 transition-all border-l-4 border-primary hover:translate-x-1"
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 50}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-semibold text-base">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-primary">{skill.value}%</span>
                    </div>
                    <div className="relative h-2 bg-base-200 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-teal-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Technologies Card */}
          <div
            className="relative bg-gradient-to-br from-base-200/80 via-base-300/50 to-base-200/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-teal-500/40 transition-all duration-500 border border-teal-500/20 overflow-hidden group"
            data-aos="fade-left"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-teal-500/20 to-teal-500/5 rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-teal-400 to-primary bg-clip-text text-transparent">
                      Tools & Technologies
                    </h3>
                    <p className="text-sm opacity-60 mt-1">Professional Toolkit</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-teal-500/10 rounded-full text-teal-400 text-xs font-semibold">
                  8 Tools
                </div>
              </div>

              <div className="space-y-3">
                {Others.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-base-100/50 rounded-xl p-4 hover:bg-primary/5 transition-all border-l-4 border-teal-500 hover:translate-x-1"
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 50}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-teal-400 flex-shrink-0" />
                        <span className="font-semibold text-base">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-teal-400">{skill.value}%</span>
                    </div>
                    <div className="relative h-2 bg-base-200 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-400 to-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up">
          <div className="text-center p-6 bg-gradient-to-br from-base-200/50 to-base-300/30 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 border border-primary/10">
            <div className="text-4xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm opacity-70">Technologies</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-base-200/50 to-base-300/30 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105 border border-teal-500/10">
            <div className="text-4xl font-bold text-teal-400 mb-2">8+</div>
            <div className="text-sm opacity-70">Tools Mastered</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-base-200/50 to-base-300/30 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 border border-primary/10">
            <div className="text-4xl font-bold text-primary mb-2">3.5+</div>
            <div className="text-sm opacity-70">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-base-200/50 to-base-300/30 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105 border border-teal-500/10">
            <div className="text-4xl font-bold text-teal-400 mb-2">81%</div>
            <div className="text-sm opacity-70">Avg. Proficiency</div>
          </div>
        </div>
      </div>
    </div>
  );
}

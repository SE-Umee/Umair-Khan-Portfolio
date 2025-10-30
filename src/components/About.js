import { useEffect } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import MainImage from "../projectImages/main-image.png";

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const features = [
  {
    name: "WhatsApp:",
    description: "+923301493880",
    icon: WhatsAppIcon,
  },
  {
    name: "Email:",
    description: "se.umee22@gmail.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Location:",
    description: "Islamabad, Pakistan",
    icon: MapPinIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 bg-gradient-to-b from-base-100 via-base-200 to-base-100"
      id="about"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Section Header */}
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 backdrop-blur-sm border border-primary/20">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
            </svg>
            Get to know more
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-primary via-teal-400 to-secondary bg-clip-text text-transparent animate-gradient">Me</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-primary rounded-full"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-primary rounded-full"></div>
          </div>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Professional React Native Developer with a passion for creating exceptional mobile experiences
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Text Content */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="bg-gradient-to-br from-base-200/50 to-base-300/30 backdrop-blur-sm rounded-3xl p-8 border border-primary/10 shadow-xl hover:shadow-primary/20 transition-all duration-300">
              <p className="text-xl leading-relaxed">
                I'm <span className="font-bold text-primary text-2xl">Umair Khan</span>, an accomplished Software Engineer and React Native Developer with <span className="font-bold text-primary">3.5+ years of experience</span> creating impactful mobile applications for global clients.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-base-200/50 rounded-2xl border-l-4 border-primary hover:bg-base-200 transition-all">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-base leading-relaxed opacity-90">
                  I hold a degree in <span className="font-semibold text-primary">Software Engineering</span> from the University of Science and Technology in Bannu, KPK, Pakistan.
                </p>
              </div>

              <div className="flex items-start gap-4 p-6 bg-base-200/50 rounded-2xl border-l-4 border-teal-500 hover:bg-base-200 transition-all">
                <div className="flex-shrink-0 p-2 bg-teal-500/10 rounded-lg">
                  <svg className="w-6 h-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-base leading-relaxed opacity-90">
                  My journey spans international markets, working with leading companies including <span className="font-semibold text-teal-400">Dnet (Saudi Arabia)</span>, <span className="font-semibold text-teal-400">Cobone (Dubai)</span>, and <span className="font-semibold text-teal-400">AppFlow Creations (NYC)</span>.
                </p>
              </div>

              <div className="flex items-start gap-4 p-6 bg-base-200/50 rounded-2xl border-l-4 border-secondary hover:bg-base-200 transition-all">
                <div className="flex-shrink-0 p-2 bg-secondary/10 rounded-lg">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-base leading-relaxed opacity-90">
                  With deep expertise in JavaScript and React Native, I specialize in building robust, cross-platform applications for iOS and Android with quality-driven development.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative" data-aos="fade-left">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
            <div className="relative overflow-hidden rounded-3xl border-4 border-primary/20 shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
              <img
                className="w-full h-auto object-cover"
                src={MainImage}
                alt="Umair Khan"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Experience & Education Section */}
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
              {/* Experience Card */}
              <div
                className="relative bg-gradient-to-br from-base-200/80 via-base-300/50 to-base-200/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-primary/40 transition-all duration-500 border border-primary/20 overflow-hidden group"
                data-aos="zoom-in"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                        <BriefcaseIcon className="h-8 w-8 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                          Experience
                        </h2>
                        <p className="text-sm opacity-60 mt-1">Professional Journey</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold">
                      5 Companies
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-base-100/50 rounded-xl p-4 hover:bg-primary/5 transition-all border-l-4 border-primary hover:border-primary hover:translate-x-1">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-bold text-base">React Native Developer</p>
                        <span className="px-2 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs rounded-full font-semibold">Current</span>
                      </div>
                      <p className="text-sm opacity-80 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                        Cobone (Me Digital Group), Dubai
                      </p>
                    </div>
                    <div className="bg-base-100/50 rounded-xl p-4 hover:bg-primary/5 transition-all border-l-4 border-primary/70 hover:border-primary hover:translate-x-1">
                      <p className="font-bold text-base mb-2">React Native Developer</p>
                      <p className="text-sm opacity-80 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                        AppFlow Creations, New York City
                      </p>
                    </div>
                    <div className="bg-base-100/50 rounded-xl p-4 hover:bg-primary/5 transition-all border-l-4 border-primary/50 hover:border-primary hover:translate-x-1">
                      <p className="font-bold text-base mb-2">React Native Developer</p>
                      <p className="text-sm opacity-80 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                        Dnet, Riyadh, Saudi Arabia
                      </p>
                    </div>
                    <div className="bg-base-100/50 rounded-xl p-4 hover:bg-primary/5 transition-all border-l-4 border-primary/30 hover:border-primary hover:translate-x-1">
                      <p className="font-bold text-base mb-2">React Native Developer</p>
                      <p className="text-sm opacity-80 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                        InfinityBits, Islamabad, Pakistan
                      </p>
                    </div>
                    <div className="bg-base-100/50 rounded-xl p-4 hover:bg-primary/5 transition-all border-l-4 border-primary/20 hover:border-primary hover:translate-x-1">
                      <p className="font-bold text-base mb-2">React Native Developer</p>
                      <p className="text-sm opacity-80 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                        Gitrex Technologies, Islamabad, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Education Card */}
              <div
                className="relative bg-gradient-to-br from-base-200/80 via-base-300/50 to-base-200/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-teal-500/40 transition-all duration-500 border border-teal-500/20 overflow-hidden group"
                data-aos="zoom-in"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-gradient-to-br from-teal-500/20 to-teal-500/5 rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                        <AcademicCapIcon
                          className="h-8 w-8 text-teal-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-teal-400 to-primary bg-clip-text text-transparent">
                          Education
                        </h2>
                        <p className="text-sm opacity-60 mt-1">Academic Background</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-teal-500/10 rounded-full text-teal-400 text-xs font-semibold">
                      3 Certificates
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-base-100/50 rounded-xl p-4 hover:bg-primary/5 transition-all border-l-4 border-primary hover:border-primary hover:translate-x-1">
                      <p className="font-bold text-base mb-2">BSc Software Engineering</p>
                      <p className="text-sm opacity-80 flex items-center gap-1 mb-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/></svg>
                        University of Science and Technology
                      </p>
                      <p className="text-xs opacity-60 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                        Bannu, KPK, Pakistan
                      </p>
                    </div>
                    <div className="bg-base-100/50 rounded-xl p-4 hover:bg-primary/5 transition-all border-l-4 border-primary/60 hover:border-primary hover:translate-x-1">
                      <p className="font-bold text-base mb-2">Diploma in Information Technology</p>
                      <p className="text-sm opacity-80 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        Professional Certification
                      </p>
                    </div>
                    <div className="bg-base-100/50 rounded-xl p-4 hover:bg-primary/5 transition-all border-l-4 border-primary/40 hover:border-primary hover:translate-x-1">
                      <p className="font-bold text-base mb-2">Cisco IT Essentials</p>
                      <p className="text-sm opacity-80 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        Cisco Networking Academy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="mx-auto max-w-7xl relative z-10 mt-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 backdrop-blur-sm border border-primary/20">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Let's Connect
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold mb-4">
            Get in <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">Touch</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className="relative group"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative flex flex-col items-center text-center p-8 bg-gradient-to-br from-base-200/80 to-base-300/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-primary/30 transition-all duration-300 border border-primary/20 group-hover:scale-105">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon
                    className="h-8 w-8 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <dt className="font-bold text-lg text-primary mb-2">{feature.name}</dt>
                <dd className="text-base opacity-90">{feature.description}</dd>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

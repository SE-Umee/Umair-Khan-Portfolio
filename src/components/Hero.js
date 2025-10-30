import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import circleImage from "../my-image.png";


import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const navigation = [
  { name: "About Me", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact Me", id: "contact" },
];

export default function Hero() {
  useEffect(() => {
    // Set theme to portfolioTheme permanently
    document.querySelector("html").setAttribute("data-theme", "portfolioTheme");
  }, []);
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <header className="fixed bg-base-300 shadow-2xl shadow-neutral inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <p className="-m-1.5 p-1.5 font-semibold">Umair Khan Portfolio</p>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-sm font-semibold leading-6 cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-2/3 overflow-y-auto backdrop-brightness-90 backdrop-blur-2xl bg-transparent px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 btn btn-ghost"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative min-h-screen flex items-center py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1" data-aos="fade-right">
              <div className="relative">
                {/* Decorative elements around image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative">
                  <img
                    src={circleImage}
                    alt="Umair Khan"
                    className="w-full max-w-md mx-auto rounded-3xl object-cover object-top shadow-2xl ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover:scale-105"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  {/* Floating badges */}
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-content rounded-2xl shadow-2xl drop-shadow-2xl p-4 animate-bounce" style={{ boxShadow: '0 25px 50px -12px rgba(100, 255, 218, 0.4)' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-700 rounded-full animate-pulse"></div>
                      <span className="font-bold text-sm">Available for Work</span>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 bg-primary text-primary-content rounded-2xl shadow-2xl drop-shadow-2xl p-4" style={{ boxShadow: '0 25px 50px -12px rgba(100, 255, 218, 0.4)' }}>
                    <p className="font-bold text-2xl">3.5+</p>
                    <p className="text-xs">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 space-y-8" data-aos="fade-left">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                    👋 Welcome to my portfolio
                  </span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Umair Khan</span>
                </h1>
                
                <div className="text-2xl lg:text-3xl font-semibold text-primary/80 h-20">
                  <TypeAnimation
                    sequence={[
                      "React Native Developer 📱",
                      2000,
                      "Mobile App Developer 🚀",
                      2000,
                      "Cross-Platform Expert 💻",
                      2000,
                      "UI/UX Enthusiast 🎨",
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </div>

                <p className="text-lg leading-relaxed opacity-80 max-w-xl">
                  Crafting exceptional mobile experiences for iOS & Android. Specialized in building high-performance, scalable applications with clean code and modern design principles.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-6">
                  <div className="text-center p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-all">
                    <p className="text-3xl font-bold text-primary">10+</p>
                    <p className="text-sm opacity-70">Projects</p>
                  </div>
                  <div className="text-center p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-all">
                    <p className="text-3xl font-bold text-primary">5+</p>
                    <p className="text-sm opacity-70">Companies</p>
                  </div>
                  <div className="text-center p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-all">
                    <p className="text-3xl font-bold text-primary">100%</p>
                    <p className="text-sm opacity-70">Client Satisfaction</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="btn btn-primary btn-lg gap-2 hover:scale-105 transition-transform"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Hire Me
                  </Link>
                  <a
                    href={`${process.env.PUBLIC_URL}/RN-DEV-UMAIR-KHAN-CV.pdf`}
                    download="RN DEV UMAIR KHAN CV.pdf"
                    className="btn btn-outline btn-lg gap-2 hover:scale-105 transition-transform"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </a>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <p className="text-sm opacity-70 mb-4">Connect with me:</p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      className="btn btn-circle btn-sm hover:btn-primary hover:scale-110 transition-all"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/umair-khan-b4b227240",
                          "_blank"
                        )
                      }
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="h-5 w-5"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </button>
                    <button
                      className="btn btn-circle btn-sm hover:btn-primary hover:scale-110 transition-all"
                      onClick={() =>
                        window.open("https://github.com/SE-Umee", "_blank")
                      }
                      aria-label="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </button>
                    <button
                      className="btn btn-circle btn-sm hover:btn-primary hover:scale-110 transition-all"
                      onClick={() =>
                        window.open("https://www.fiverr.com/se_umair", "_blank")
                      }
                      aria-label="Fiverr"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 19 24"
                      >
                        <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z" />
                        <circle cx="14.375" cy="1.875" r="1.875" />
                      </svg>
                    </button>
                    <button
                      className="btn btn-circle btn-sm hover:btn-primary hover:scale-110 transition-all"
                      onClick={() =>
                        window.open(
                          "https://www.upwork.com/freelancers/~0134cfdcde998bcafb",
                          "_blank"
                        )
                      }
                      aria-label="Upwork"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 -3 30 35"
                      >
                        <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

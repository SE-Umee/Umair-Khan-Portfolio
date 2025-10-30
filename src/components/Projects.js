import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Reko from "../projectImages/Reko.png";
import AmisChoice from "../projectImages/AmisChoice.png";
import Motmaina2 from "../projectImages/Motmaina2.png";
import Motmaina1 from "../projectImages/Motmaina1.png";
import MAS from "../projectImages/MAS.png";
import Fasting from "../projectImages/Fast.png";
import Giveaway from "../projectImages/Giveaway.png";
import Book from "../projectImages/Book.png";
import VIP from "../projectImages/VIP.jpeg";
import PlusOne from "../projectImages/PlusOne.jpeg";
import Sensebod from "../projectImages/Sensebod.png";


const projects = [
  {
    id: 1,
    name: "Reko",
    href: "https://apps.apple.com/us/app/reko-locally-produced-food/id1511967191",
    imageSrc: Reko,
    used: "Expo, TypeScript etc",
    description: "An online local food shopping App",
  },
  {
    id: 2,
    name: "AmisChoice",
    href: "https://play.google.com/store/apps/details?id=com.app.amischoice&pcampaignid=web_share",
    imageSrc: AmisChoice,
    used: "React Native, JavaScript etc",
    description: "An online Grocery shopping App",
  },
  {
    id: 3,
    name: "Motmaina User",
    href: "https://apps.apple.com/us/app/motmaina-%D9%85%D8%B7%D9%85%D8%A6%D9%86%D8%A9/id6477853064",
    imageSrc: Motmaina2,
    used: "React Native, JavaScript etc",
    description: "Motmaina Saudi Hospital Patients App",
  },
  {
    id: 4,
    name: "Motmaina Consultant",
    href: "https://apps.apple.com/us/app/motmaina-%D9%85%D8%B7%D9%85%D8%A6%D9%86%D8%A9/id6477853064",
    imageSrc: Motmaina1,
    used: "React Native, JavaScript etc",
    description: "Motmaina Saudi Hospital Doctor App",
  },
  {
    id: 5,
    name: "MAS-Dallas",
    href: "https://apps.apple.com/us/app/mas-dallas/id1606299572",
    imageSrc: MAS,
    used: "Expo, TypeScript etc",
    description: "Muslim American Society App",
  },
  {
    id: 6,
    name: "Fast",
    href: "#",
    imageSrc: Fasting,
    used: "React Native, JavaScript etc",
    description: "For Fasting, Health and Fitness",
  },
  {
    id: 7,
    name: "Giveaway Insel",
    href: "https://apps.apple.com/de/app/giveaway-insel/id6502561567?l=en-GB",
    imageSrc: Giveaway,
    used: "React native, JavaScript",
    description: "ecommerce and Shopping",
  },
  {
    id: 7,
    name: "Sensebod",
    href: "#",
    imageSrc: Sensebod,
    used: "React native, JavaScript",
    description: "Education with Human and AI mentor",
  },
  {
    id: 8,
    name: "VIP Wholesale",
    href: "https://www.vipwholesaletexas.com/",
    imageSrc: VIP,
    used: "React Native, TypeScript",
    description:
      "VIP Wholesale is an eCommerce app for in-store and wholesale shopping, offering easy browsing, ordering, bulk purchasing, and real-time inventory updates.",
  },
  {
    id: 9,
    name: "PLUS ONE DISTRIBUTION",
    href: "https://www.plusonedistro.com/",
    imageSrc: PlusOne,
    used: "React Native, TypeScript",
    description:
      "Plus One Distribution is an upcoming eCommerce app specializing in Nicotine Pouches, Smoke, Supplements, Vape Juice, IR, and Vaporizers, offering a seamless shopping experience for customers.",
  },
  {
    id: 10,
    name: "Book App",
    href: "#",
    imageSrc: Book,
    used: "React native, JavaScript ",
    description: "Read and Buy Books",
  },
  
];

const testimonials = [
  {
    id: 1,
    name: "abubeckr",
    title: "United States",
    message:
      "I enjoyed hiring him. Work is done on time and correctly with no issues. Great overall experience.",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
    rating: 5.0,
  },
  {
    id: 2,
    name: "shawnxu",
    title: "United States",
    message:
      "I had very pleasant cooperation with Umair regarding a very specific, custom requirement. Umair not only delivered everything in great speed, the overall quality of the output is high and meets our demands well. Going to kick off a follow up request with Umair in a few days.",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
    rating: 5.0,
  },
  {
    id: 3,
    name: "shawnxu",
    title: "United States",
    message:
      "Rn Dev Umair delivered top-notch work with exceptional code expertise and attention to detail. Working with him was a breeze, thanks to his quick responsiveness and outstanding cooperation. Truly a PROFESSIONAL in mobile app development! 🙌",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Stanislav H",
    title: "California",
    message:
      "I highly recommend Umair to anyone looking for a skilled and reliable mobile developer. I can confidently say he is an exceptional React Native developer with high expertise in JavaScript, TypeScript, and a strong understanding of client needs.",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s",
    rating: 5.0,
  },
  {
    id: 5,
    name: "Abdullah Abo..",
    title: "Norway Elverum",
    message:
      "Mr Umair Khan is a committed developer",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewWviN7O6ryCUvog0cEtRDDVebtZrEPWt6A&s",
    rating: 4.1,
  },
  {
    id: 6,
    name: "Abdullah Abo..",
    title: "Norway Elverum",
    message:
      "Mr Umair Khan is a comitted developer, but since this tutoring job more experienced react native developer is requried.",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewWviN7O6ryCUvog0cEtRDDVebtZrEPWt6A&s",
    rating: 3.6,
  },
  {
    id: 7,
    name: "Engr Sajid Khalil (Founder and CEO at Elevatrix Solutions  )",
    title: "Pakistan",
    message:
      "Working with Umair was great, Great work I'd definitely recommend him",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s",
    rating: 5.0,
  },
  {
    id: 8,
    name: "shawnxu",
    title: "United States",
    message:
      "Umair has delivered exceptional code that went beyond our expectation, would love to work with him again!",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
    rating: 5.0,
  },
  {
    id: 9,
    name: "sob2022",
    title: "Poland",
    message: "excelent work",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
    rating: 5.0,
  },
  {
    id: 10,
    name: "Johannes Milke",
    title: "Germany",
    message: '',
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewWviN7O6ryCUvog0cEtRDDVebtZrEPWt6A&s",
    rating: 4.8,
  },
  {
    id: 11,
    name: "bariokandogan",
    title: "Turkey",
    message: "I'm beyond impressed! The task was estimated to take 6 days, but it was completed in less than 24 hours without compromising on quality. The communication was excellent, and the delivery exceeded my expectations. Highly professional and efficient—will definitely work with them again!",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
    rating: 5.0,
  },
  {
    id: 12,
    name: "dynastyhealingc",
    title: "United States",
    message: "Working with Umair was Exceptional, He went Beyond, Really Professional in his field, If you need any help regarding App design, or want to design an app for your business or company, then Umair is the Man, 1000% Recommended, I'll for sure come back for more work, Thank you so much Umair.",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
    rating: 5.0,
  },
  {
    id: 13,
    name: "sajidkhalil0001",
    title: "Pakistan",
    message: "Umair fixed bug in my app in no time, it was very urgent and important for me but kudos to Umair when i reached out to him and explained my issue he immediately understood the issue i mean the bug in my app and fixed it in less then 2 hours, if you have any bugs in your apps or you want to build an app then i definitely recommend Umair! I'll hire him again",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
    rating: 5.0,
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(4);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleViewMore = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  const sliderSettings = {
    dots: true,
    infinite: testimonials.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: testimonials.length > 1,
    autoplaySpeed: 3000,
  };

  return (
    <div id="projects" className="bg-gradient-to-b from-base-200 to-base-100">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-xl leading-7 text-primary font-semibold">Browse my recent</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Projects
          </p>
          <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
            Showcasing innovative mobile applications built with React Native for iOS and Android platforms
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-primary/20 bg-gradient-to-br from-base-200 to-base-300 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-2"
              data-aos="fade-up"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-2xl lg:aspect-none lg:h-64 relative">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    <a href={project.href} target="_blank" rel="noreferrer">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="mt-2 mb-4 text-sm line-clamp-2 opacity-80">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-primary/20">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <p className="text-xs font-medium text-primary">{project.used}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="mt-16 flex justify-center" data-aos="fade-up">
            <button className="btn btn-primary btn-lg gap-2 hover:scale-105 transition-transform" onClick={handleViewMore}>
              View More Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        <div className="mt-32 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-10 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 backdrop-blur-sm border border-primary/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                </svg>
                What clients say
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Client <span className="bg-gradient-to-r from-primary via-teal-400 to-secondary bg-clip-text text-transparent animate-gradient">Testimonials</span>
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-20 h-1 bg-gradient-to-r from-transparent to-primary rounded-full"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-20 h-1 bg-gradient-to-l from-transparent to-primary rounded-full"></div>
              </div>
              <p className="text-lg opacity-70 max-w-2xl mx-auto">
                Trusted by clients worldwide for delivering exceptional mobile solutions
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto testimonial-slider" data-aos="zoom-in">
              <Slider {...sliderSettings}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="px-4 py-1 md:py-2">
                    <div className="relative group">
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-teal-500/30 to-primary/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      <div className="relative bg-gradient-to-br from-base-200/80 via-base-300/50 to-base-200/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-2xl border border-primary/20 overflow-hidden">
                        {/* Background decoration inside card */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl"></div>
                        
                        <div className="relative z-10">
                          {/* Quote icon */}
                          <div className="flex justify-start mb-6">
                            <div className="p-3 bg-primary/10 rounded-2xl">
                              <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Testimonial text */}
                          <p className="text-lg md:text-xl leading-relaxed mb-1 opacity-90 min-h-[100px] md:min-h-[120px]">
                            "{testimonial.message}"
                          </p>
                          
                          {/* Rating stars */}
                          <div className="flex items-center justify-start gap-1 mb-6">
                            {[...Array(5)].map((_, i) => {
                              const fillPercentage = Math.min(Math.max(testimonial.rating - i, 0), 1);
                              return (
                                <div key={i} className="relative w-5 h-5">
                                  {/* Background empty star */}
                                  <svg className="w-5 h-5 text-gray-300 fill-current absolute" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  {/* Filled star (with partial fill) */}
                                  <svg className="w-5 h-5 text-primary fill-current absolute" viewBox="0 0 20 20" style={{ clipPath: `inset(0 ${(1 - fillPercentage) * 100}% 0 0)` }}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </div>
                              );
                            })}
                            <span className="ml-2 text-sm font-semibold text-primary">{testimonial.rating.toFixed(1)}</span>
                          </div>
                          
                          {/* Client info */}
                          <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal-400 rounded-full blur opacity-50"></div>
                              <img
                                src={testimonial.imageSrc}
                                alt={testimonial.name}
                                className="relative w-16 h-16 rounded-full object-cover ring-2 ring-primary/40"
                              />
                            </div>
                            <div className="text-left flex-1">
                              <p className="font-bold text-lg mb-1">{testimonial.name}</p>
                              <div className="flex items-center gap-2 text-sm opacity-70">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{testimonial.title}</span>
                              </div>
                            </div>
                            {/* Verified badge */}
                            <div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-semibold">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                              Verified
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Testimonial stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center p-6 bg-gradient-to-br from-base-200/50 to-base-300/30 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 border border-primary/10">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm opacity-70">Satisfaction Rate</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-base-200/50 to-base-300/30 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105 border border-teal-500/10">
                <div className="text-4xl font-bold text-teal-400 mb-2">4.8</div>
                <div className="text-sm opacity-70">Average Rating</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-base-200/50 to-base-300/30 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 border border-primary/10">
                <div className="text-4xl font-bold text-primary mb-2">13+</div>
                <div className="text-sm opacity-70">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

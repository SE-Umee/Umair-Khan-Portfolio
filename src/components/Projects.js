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
  },
  {
    id: 2,
    name: "shawnxu",
    title: "United States",
    message:
      "I had very pleasant cooperation with Umair regarding a very specific, custom requirement. Umair not only delivered everything in great speed, the overall quality of the output is high and meets our demands well. Going to kick off a follow up request with Umair in a few days.",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 3,
    name: "shawnxu",
    title: "United States",
    message:
      "Rn Dev Umair delivered top-notch work with exceptional code expertise and attention to detail. Working with him was a breeze, thanks to his quick responsiveness and outstanding cooperation. Truly a PROFESSIONAL in mobile app development! 🙌",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 4,
    name: "Stanislav H",
    title: "California",
    message:
      "I highly recommend Umair to anyone looking for a skilled and reliable mobile developer. I can confidently say he is an exceptional React Native developer with high expertise in JavaScript, TypeScript, and a strong understanding of client needs.",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s",
  },
  {
    id: 5,
    name: "Abdullah Abo..",
    title: "Norway Elverum",
    message:
      "Mr Umair Khan is a committed developer",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewWviN7O6ryCUvog0cEtRDDVebtZrEPWt6A&s",
  },
  {
    id: 6,
    name: "Abdullah Abo..",
    title: "Norway Elverum",
    message:
      "Mr Umair Khan is a comitted developer, but since this tutoring job more experienced react native developer is requried.",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewWviN7O6ryCUvog0cEtRDDVebtZrEPWt6A&s",
  },
  {
    id: 7,
    name: "Engr Sajid Khalil (Founder and CEO at Elevatrix Solutions  )",
    title: "Pakistan",
    message:
      "Working with Umair was great, Great work I'd definitely recommend him",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s",
  },
  {
    id: 8,
    name: "shawnxu",
    title: "United States",
    message:
      "Umair has delivered exceptional code that went beyond our expectation, would love to work with him again!",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 9,
    name: "sob2022",
    title: "Poland",
    message: "excelent work",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 9,
    name: "sajidkhalil0001",
    title: "Pakistan",
    message: "Umair fixed bug in my app in no time, it was very urgent and important for me but kudos to Umair when i reached out to him and explained my issue he immediately understood the issue i mean the bug in my app and fixed it in less then 2 hours, if you have any bugs in your apps or you want to build an app then i definitely recommend Umair! I'll hire him again",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
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
    <div id="projects">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              data-aos="flip-left"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:brightness-75 duration-300 delay-100 lg:h-80 rounded-t-2xl">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between p-4">
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <a href={project.href} target="_blank" rel="noreferrer">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1 mb-5 text-sm line-clamp-1">
                    {project.description}
                  </p>
                  <p className="text-sm font-medium">{project.used}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="mt-16 flex justify-center">
            <button className="btn btn-outline" onClick={handleViewMore}>
              View More
            </button>
          </div>
        )}

<div className="mt-32">
<Slider {...sliderSettings}>
    {testimonials.map((testimonial) => (
      <div key={testimonial.id} className="text-center p-8">
        {/* Message */}
        <p className="text-lg italic mb-4">" {testimonial.message} "</p>
        <div className="flex justify-center mt-8 mb-2">
          <img
            src={testimonial.imageSrc}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>

        <div className="flex justify-center items-center">
          <div>
            <p className="font-bold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.title}</p>
          </div>
        </div>
      </div>
    ))}
  </Slider>
        </div>
      </div>
    </div>
  );
}

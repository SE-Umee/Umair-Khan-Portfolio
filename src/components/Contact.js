import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Function to send email directly
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    // Web3Forms Access Key - Loaded from environment variable
    const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

    const formData = new FormData(event.target);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New Contact Form Submission from Portfolio");
    formData.append("from_name", "Portfolio Contact Form");
    formData.append("redirect", "false"); // Disable redirect for better control

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        console.log("Email sent successfully:", data);
        setStatusMessage("Message sent successfully! I'll get back to you soon.");
        event.target.reset();
      } else {
        console.error("Web3Forms Error:", data);
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Failed to send message. Please try again or email me directly at se.umee22@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-base-100 to-base-200" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <h2 className="text-xl leading-7 text-primary font-semibold">Get in touch</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Contact Me
          </p>
          <p className="mt-4 text-lg opacity-80">
            Let's discuss your next mobile app project. I'm always open to new opportunities and collaborations.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20 bg-gradient-to-br from-base-200 to-base-300 p-8 rounded-2xl shadow-2xl ring-2 ring-primary/20"
          data-aos="zoom-in"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 mb-2 text-primary"
              >
                First name
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block bg-base-100 w-full rounded-lg border-0 px-4 py-3 text-current ring-2 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary transition-all sm:text-sm sm:leading-6 hover:ring-primary/40"
                  placeholder="John"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 mb-2 text-primary"
              >
                Last name
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block bg-base-100 w-full rounded-lg border-0 px-4 py-3 text-current ring-2 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary transition-all sm:text-sm sm:leading-6 hover:ring-primary/40"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 mb-2 text-primary"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block bg-base-100 w-full rounded-lg border-0 px-4 py-3 text-current ring-2 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary transition-all sm:text-sm sm:leading-6 hover:ring-primary/40"
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 mb-2 text-primary"
              >
                Message
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  required
                  id="message"
                  rows={5}
                  className="block bg-base-100 w-full rounded-lg border-0 px-4 py-3 text-current ring-2 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary transition-all sm:text-sm sm:leading-6 hover:ring-primary/40 resize-none"
                  placeholder="Tell me about your project..."
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn btn-primary text-base w-full gap-2 hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Sending...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
            {statusMessage && (
              <div className={`mt-4 p-4 rounded-lg text-center ${
                statusMessage.includes("success") 
                  ? "bg-success/10 text-success" 
                  : "bg-error/10 text-error"
              }`}>
                {statusMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
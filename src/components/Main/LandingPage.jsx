// import React from 'react';
import { useEffect, useRef, useState } from "react";
import icon from "../../asset/airbnbLogo.svg";

const images = [
  'https://images.unsplash.com/photo-1590665157704-db269efef6ea?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1666147634350-8c56cac0fb36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1661434044233-25733d12b2f1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1697299261617-91f3902bfeea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1728721797530-e766e5c75024?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1691983832762-e8d2b1f5374d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1729893735212-fd0012ddc2d1?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const LandingPage = () => {
 const slideRef = useRef(null);
  let current = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideRef.current) {
        current.current = (current.current + 1) % images.length;
        slideRef.current.style.transform = `translateX(-${current.current * 100}%)`;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

const testimonials = [
  {
    name: "Emily J.",
    location: "Austin, TX",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 5,
    text: "I’ve stayed in a lot of rentals, but this one? It had *soul*. Woke up to birds, not city chaos. 10/10 experience.",
  },
  {
    name: "Jason T.",
    location: "Vancouver, CA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text: "Super chill vibe. The host even left snacks! Only thing missing? A dog. Everything else? Perfect.",
  },
  {
    name: "Rina S.",
    location: "Amsterdam, NL",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Felt like a mini escape. Cozy lighting, plants, actual books — not the dusty kind either. I could live here.",
  },
];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900">
      <div className="animate-pulse flex flex-col items-center space-y-4">
        <img src={icon} alt="Logo" className="w-16 h-16 invert" />
        <p className="text-neutral-100 text-lg font-medium animate-bounce">Loading nomadnest...</p>
      </div>
    </div>
  );
};

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
      setLoading(false); // Simulate loading done
    }, 2000); // Adjust time if needed
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideRef.current) {
        current.current = (current.current + 1) % images.length;
        slideRef.current.style.transform = `translateX(-${current.current * 100}%)`;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);


return(

<>
    {loading && <Loader />}
    {!loading && (
<div>
<header className=" px-4 lg:px-6 py-4 bg-neutral-900">
        <nav>
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/" class="flex items-center">
                    <img className="mr-1 h-10 invert " src={icon} alt="Nomadnest Logo" />
                    <span class="self-center text-xl ml-2 font-semibold whitespace-nowrap text-neutral-100">nomadnest</span>
                </a>
                <div class="flex items-center lg:order-2">
                    <a href="/home" class="font-semibold  text-gray-200  bg-neutral-600 rounded-lg text-sm px-5 py-2.5 mr-2 hover:bg-neutral-700 ">Go to home</a>
                </div>
            </div>
        </nav>
</header>

{/* slideshow */}
<section className="relative h-[250px] lg:h-[525px] sm:h-[450px] overflow-hidden">
  <div className="absolute inset-0 flex justify-center items-center z-0">
    <div ref={slideRef} className="flex transition-transform duration-1000 ease-in-out">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className="w-full object-cover"
        />
      ))}
    </div>
  </div>

  <div className="relative z-10 bg-neutral-900/60 w-full h-full">
    <div className="grid h-full py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center">
      <div className="place-self-center mr-auto lg:col-span-7">
        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
          Homes that have a story...
        </h1>
        <p className="mb-6 max-w-2xl font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
          Spaces with soul, hosted by humans, not algorithms.
        </p>
      </div>
    </div>
  </div>
</section>

{/* why us? */}
<section className="bg-neutral-800 py-16">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-white text-center mb-12">
      Why Choose Us
    </h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
<div className="bg-neutral-700 p-6 rounded-lg shadow text-center">
  <div className="mb-4 flex justify-center">
    <div className="w-14 h-14 flex items-center justify-center rounded-full  bg-neutral-500/20 text-neutral-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
      </svg>
    </div>
  </div>
  <h3 className="text-xl font-semibold text-white mb-2">Authentic Stays</h3>
  <p className="text-gray-300 text-sm">Handpicked homes with unique charm and comfort.</p>
</div>


      <div className="bg-neutral-700 p-6 rounded-lg shadow text-center">
          <div className="mb-4 flex justify-center">
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-neutral-500/20 text-neutral-300">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>
    </div>
  </div>
        <h3 className="text-xl font-semibold text-white mb-2">Human Hosts</h3>
        <p className="text-gray-300 text-sm">Real people, real hospitality — not algorithms.</p>
      </div>

      <div className="bg-neutral-700 p-6 rounded-lg shadow text-center">
          <div className="mb-4 flex justify-center">
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-neutral-500/20 text-neutral-300">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
    </div>
  </div>
        <h3 className="text-xl font-semibold text-white mb-2">Secure Booking</h3>
        <p className="text-gray-300 text-sm">Encrypted payments and verified listings.</p>
      </div>

      <div className="bg-neutral-700 p-6 rounded-lg shadow text-center">
          <div className="mb-4 flex justify-center">
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-neutral-500/20 text-neutral-300">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
</svg>
    </div>
  </div>
        <h3 className="text-xl font-semibold text-white mb-2">Global Access</h3>
        <p className="text-gray-300 text-sm">Find stays in hidden gems and major cities alike.</p>
      </div>
    </div>
  </div>
</section>

{/* faq */}
<section className="bg-neutral-900 py-16 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* FAQ Content */}
      <div>
        <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-300 mb-10">
          Got questions? We've got answers. Here are some of the most common things people ask us about Nomadnest.
        </p>

        <div className="space-y-6">
          {[
            {
              q: "What makes Nomadnest different?",
              a: "Nomadnest is not just a booking platform—it's a curated experience. We select each home for its story, charm, and connection to local culture. Our hosts are passionate people, not automated systems, making every stay personal, warm, and meaningful."
            },
            {
              q: "Can I cancel my booking?",
              a: "Yes. Each listing comes with its own clear and fair cancellation policy, visible before you book. We strive to ensure flexibility for both guests and hosts. You can cancel via your dashboard and refunds are processed quickly according to the policy terms."
            },
            {
              q: "Are your listings verified?",
              a: "Absolutely. Every property is manually verified for authenticity, cleanliness, comfort, and safety. We work closely with hosts to maintain standards, and guest feedback is continuously monitored to keep the quality top-notch."
            },
            {
              q: "How do I contact my host?",
              a: "Once you book, a direct chat with your host is unlocked. You can coordinate arrival times, get local tips, and ask anything related to your stay—all within our secure platform."
            }
          ].map(({ q, a }, i) => (
            <details
              key={i}
              className="group transition-all duration-300 bg-neutral-800 rounded-lg p-5"
            >
              <summary className="text-lg font-semibold text-white cursor-pointer flex justify-between items-center">
                {q}
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
                <img class="w-full ml-20 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
                <img class="mt- w-full rounded-lg lg:mt-10" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
            </div>
    </div>
  </div>
</section>

{/* testimonials */}
<section className="bg-neutral-950 py-20 px-4 text-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">Guest Reviews</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`bg-neutral-900 p-6 rounded-2xl shadow-xl transform transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center mb-5">
                <img
                  className="w-14 h-14 rounded-full border-2 border-white shadow"
                  src={t.image}
                  alt={t.name}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.location}</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">“{t.text}”</p>
              <div className="flex items-center gap-2 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < t.rating ? "text-yellow-400" : "text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.21 3.722h3.905c.969 0 1.372 1.24.588 1.81l-3.157 2.29 1.21 3.722c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.157 2.29c-.784.57-1.838-.197-1.539-1.118l1.21-3.722-3.157-2.29c-.784-.57-.38-1.81.588-1.81h3.905l1.21-3.722z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
</section>

{/* map */}
<section className="w-full bg-neutral-800 text-white py-20 px-4">
  <div className="max-w-screen-xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold mb-4">Explore Stays on the Map</h2>
    <p className="text-neutral-400">Pan, zoom, and discover charming spots across the globe—just like you’re there.</p>
  </div>

  <div className="relative max-w-screen-xl mx-auto overflow-hidden rounded-3xl shadow-2xl border border-neutral-800">
    {/* Floating info card */}
    <div className="absolute top-6 left-6 z-10 bg-neutral-800/80 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-sm">
      <h3 className="text-xl font-semibold text-white">Nomadnest Stays</h3>
      <p className="text-sm text-neutral-300 mt-1">Discover handpicked homes in your favorite cities, all visualized live on the map.</p>
    </div>

    {/* Marker ping effect */}
    <div className="absolute bottom-8 right-8 z-10 bg-green-500 rounded-full w-4 h-4 animate-ping"></div>
    <div className="absolute bottom-8 right-8 z-20 bg-green-500 rounded-full w-2.5 h-2.5"></div>

    {/* Map embed */}
    <div className="relative w-full h-[500px] sm:h-[600px]">
      <iframe
        title="Live Stay Map"
        className="absolute inset-0 w-full h-full rounded-3xl"
        loading="lazy"
        style={{ border: 0, filter: "brightness(90%) saturate(1.2)" }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019789727529!2d-122.42067968468694!3d37.77902697975853!2m3!1f45!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x8085809c5d82e145%3A0x9e8f2d7d57d5cfb!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1615170150153!5m2!1sen!2sin"
      ></iframe>
    </div>
  </div>
</section>


{/* call to action */}
<section className="relative bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white py-16 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-40 h-40 bg-purple-600 opacity-30 blur-3xl rounded-full animate-ping"></div>
    <div className="absolute bottom-0 right-0 w-52 h-52 bg-indigo-500 opacity-30 blur-3xl rounded-full animate-pulse"></div>
  </div>

  <div className="relative z-10 max-w-screen-xl mx-auto px-6 flex flex-col items-center text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Find your perfect stay</h2>
    <p className="text-lg md:text-xl mb-6 text-neutral-300 max-w-2xl">
      Venture beyond the cookie‑cutter—stay in character‑rich homes where every corner tells a story
    </p>
    <a
      href="/home"
      className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 ease-in-out text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-purple-600/40"
    >
      Explore Now
    </a>
  </div>
</section>


<footer class="p-4 bg-neutral-800">
        <div class="mx-auto max-w-screen-xl">
            <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <a href="https://flowbite.com" class="flex items-center">
                        <img className="mr-1 h-10 dark:invert " src={icon} alt="Nomadnest Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">nomadnest</span>
                    </a>
                </div>
                
                    <div>
                        <h2 class="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
                        <ul class="text-gray-400">
                            <li class="mb-4">
                                <a href="https://themesberg.github.io/tailwind-landing-page/" class="hover:underline">Landing page design</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                            </li>
                        </ul>
                    </div>
            </div>
            <hr class="my-6  sm:mx-auto border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm sm:text-center text-gray-400">© 2025 <a href="/" class="hover:underline">Nomadnest</a>. All Rights Reserved.
                </span>
                <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <a href="#" class="text-gray-500 hover:text-white">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                    </a>
                </div>
            </div>
        </div>
</footer>
    
    <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
</div>
 )}
</>

  );
};

export default LandingPage;
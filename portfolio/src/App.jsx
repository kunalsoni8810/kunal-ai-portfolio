import { useEffect, useState } from "react";

export default function PortfolioUI() {

  const animationVideos = [
    {
      title: 'AI Animation 01',
      thumbnail:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'AI Animation 02',
      thumbnail:
        'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  // =========================
  // EDEN IMAGES
  // =========================

  const edenImages = [
    { image: '/image/ECHOES OF EDEN/1.jpg', title: 'SHOWCASE_01' },
    { image: '/image/ECHOES OF EDEN/2.jpg', title: 'SHOWCASE_01' },
    { image: '/image/ECHOES OF EDEN/3.jpg', title: 'SHOWCASE_01' },
    { image: '/image/ECHOES OF EDEN/4.jpg', title: 'SHOWCASE_01' },
    { image: '/image/ECHOES OF EDEN/5.jpg', title: 'SHOWCASE_01' },
    { image: '/image/ECHOES OF EDEN/6.jpg', title: 'SHOWCASE_01' },
    { image: '/image/ECHOES OF EDEN/7.jpg', title: 'SHOWCASE_01' },
    { image: '/image/ECHOES OF EDEN/8.jpg', title: 'SHOWCASE_01' },
    { image: '/image/ECHOES OF EDEN/9.jpg', title: 'SHOWCASE_01' }
  ];

  // =========================
  // TERRA SOL IMAGES
  // =========================

  const terasolImages = [
    { image: "/image/ELDECO TERRA SOL/1.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/2.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/3.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/4.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/5.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/6.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/7.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/8.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/9.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/10.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/11.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/12.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/13.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/14.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/15.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/16.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/17.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/18.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/19.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/20.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/21.jpg", title: 'SHOWCASE_02' },
    { image: "/image/ELDECO TERRA SOL/22.jpg", title: 'SHOWCASE_02' }
  ];

  // =========================
  // SLIDESHOW STATES
  // =========================

  const [currentEdenImage, setCurrentEdenImage] = useState(0);
  const [currentTerasolImage, setCurrentTerasolImage] = useState(0);

  // =========================
  // EDEN SLIDESHOW
  // =========================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEdenImage((prev) =>
        prev === edenImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // =========================
  // TERRA SOL SLIDESHOW
  // =========================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTerasolImage((prev) =>
        prev === terasolImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-7xl font-black">
            KUNAL AI STUDIO
          </h1>

          <p className="mt-6 text-zinc-400 text-xl">
            3D Compositor • AI Creator • AI Editor
          </p>
        </div>
      </section>

      {/* ========================= */}
      {/* EDEN SECTION */}
      {/* ========================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-black mb-14">
          ECHOES OF EDEN
        </h2>

        <div className="relative w-full h-[650px] overflow-hidden rounded-[2rem]">

          {edenImages.map((img, index) => (
            <img
              key={index}
              src={img.image}
              alt={img.title}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
                index === currentEdenImage
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          ))}

        </div>

        {/* THUMBNAILS */}

        <div className="mt-8 flex flex-wrap gap-4">

          {edenImages.map((img, index) => (
            <img
              key={index}
              src={img.image}
              alt={img.title}
              className="w-20 h-20 object-cover rounded-2xl border border-white/10"
            />
          ))}

        </div>

      </section>

      {/* ========================= */}
      {/* TERRA SOL SECTION */}
      {/* ========================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-black mb-14">
          ELDECO TERRA SOL
        </h2>

        <div className="relative w-full h-[650px] overflow-hidden rounded-[2rem]">

          {terasolImages.map((img, index) => (
            <img
              key={index}
              src={img.image}
              alt={img.title}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
                index === currentTerasolImage
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          ))}

        </div>

        {/* THUMBNAILS */}

        <div className="mt-8 flex flex-wrap gap-4">

          {terasolImages.map((img, index) => (
            <img
              key={index}
              src={img.image}
              alt={img.title}
              className="w-20 h-20 object-cover rounded-2xl border border-white/10"
            />
          ))}

        </div>

      </section>

    </div>
  );
}
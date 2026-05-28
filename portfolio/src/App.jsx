import { useEffect, useState } from "react";

export default function PortfolioUI() {
  const animationVideos = [
    {
      title: 'AI Animation 01',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'AI Animation 02',
      thumbnail: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const stillImages = [

  {
    image: '/image/ECHOES OF EDEN/1.jpg',
    title: 'ECHOES OF EDEN'
  },
  {
    image: '/image/ECHOES OF EDEN/2.jpg',
    title: 'ECHOES OF EDEN'
  },
  {
    image: '/image/ECHOES OF EDEN/3.jpg',
    title: 'ECHOES OF EDEN'
  },
  {
    image: '/image/ECHOES OF EDEN/4.jpg',
    title: 'ECHOES OF EDEN'
  },
  {
    image: '/image/ECHOES OF EDEN/5.jpg',
    title: 'ECHOES OF EDEN'
  },
  {
    image: '/image/ECHOES OF EDEN/6.jpg',
    title: 'ECHOES OF EDEN'
  },
  {
    image: '/image/ECHOES OF EDEN/7.jpg',
    title: 'ECHOES OF EDEN'
  },
  {
    image: '/image/ECHOES OF EDEN/8.jpg',
    title: 'ECHOES OF EDEN'
  },
  {
    image: '/image/ECHOES OF EDEN/9.jpg',
    title: 'ECHOES OF EDEN'
  }

];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) =>
      prev === stillImages.length - 1 ? 0 : prev + 1
    );
  }, 2000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          <h1 className="text-2xl md:text-3xl font-black tracking-[0.3em]">
            KUNAL AI STUDIO
          </h1>

          <nav className="flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-zinc-300">
            <a href="#animation">Animation</a>
            <a href="#stills">Still Images</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black"></div>

        <div className="relative z-10 max-w-5xl">

          <p className="uppercase tracking-[0.4em] text-zinc-500 mb-5 text-sm">
            Creative Portfolio
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-none mb-8">
            Kunal
            <span className="block text-zinc-500">Soni</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-sm md:text-lg uppercase tracking-[0.3em] text-zinc-300 font-semibold">
            <span>3D Compositor</span>
            <span>|</span>
            <span>AI Creator</span>
            <span>|</span>
            <span>AI Editor</span>
          </div>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Showcase your AI videos, cinematic animations, and still artworks in a clean modern portfolio.
          </p>

        </div>
      </section>

      {/* Animation */}
      <section id="animation" className="max-w-7xl mx-auto px-6 py-28">

        <div className="mb-14">
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-3">
            Section 01
          </p>

          <h3 className="text-5xl font-black">
            AI + Animation
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {animationVideos.map((video, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/10"
            >

              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <div>
                  <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">
                    Video Project
                  </p>

                  <h4 className="text-3xl font-bold">
                    {video.title}
                  </h4>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Still Images */}
      <section id="stills" className="max-w-7xl mx-auto px-6 py-28">

        <div className="mb-14">
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-3">
            Section 02
          </p>

          <h3 className="text-5xl font-black">
            Still Images
          </h3>
        </div>

        <div className="max-w-5xl mx-auto">

          <div className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/10">

            <img
              src={stillImages[currentImage].image}
              alt="ECHOES OF EDEN"
              className="w-full h-[650px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-10">

              <div>

                <p className="uppercase tracking-[0.3em] text-zinc-400 text-sm mb-4">
                  Architectural Visualization Project
                </p>

                <h3 className="text-5xl md:text-7xl font-black mb-4">
                  ECHOES OF EDEN
                </h3>

                <p className="text-zinc-300 text-lg max-w-2xl leading-relaxed">
                  Luxury architectural visualization showcasing cinematic environments.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  {stillImages.map((img, index) => (
                    <img
                      key={index}
                      src={img.image}
                      alt={img.title}
                      className="w-20 h-20 object-cover rounded-2xl border border-white/10"
                    />
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-28 text-center">

        <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-3">
          Section 03
        </p>

        <h3 className="text-5xl md:text-6xl font-black mb-8">
          Contact
        </h3>

        <div className="space-y-6 text-lg md:text-xl">

          <a
            href="mailto:kunalsoni9818@gmail.com"
            className="block"
          >
            Email — kunalsoni9818@gmail.com
          </a>

          <a
            href="https://www.instagram.com/kunal_soni_portfolio?igsh=MXhyZDdnNnhzN2cwaQ=="
            target="_blank"
            className="block"
          >
            Instagram — @kunal_soni_portfolio
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            className="block"
          >
            YouTube — KUNAL SONI PORTFOLIO
          </a>

          <a
            href="tel:8810580029"
            className="block"
          >
            Contact — 8810580029
          </a>

        </div>

      </section>

    </div>
  );
}
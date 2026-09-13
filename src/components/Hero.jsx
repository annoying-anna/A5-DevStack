export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Build Your
            <br />
            <span className="gradient-text">Dream Tech Stack</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Discover, compare, and assemble the perfect combination of technologies
            for your next project. From frontend frameworks to DevOps tools — curate
            your ideal development stack in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#technologies"
              className="btn-gradient text-white font-semibold px-8 py-3 rounded-full text-base hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              Explore Technologies
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#about"
              className="border border-white/20 text-gray-200 font-semibold px-8 py-3 rounded-full text-base hover:bg-white/5 hover:border-white/40 transition-all inline-flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
          <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">15+</p>
              <p className="text-gray-500 text-sm mt-1">Technologies</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">7</p>
              <p className="text-gray-500 text-sm mt-1">Categories</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">∞</p>
              <p className="text-gray-500 text-sm mt-1">Combinations</p>
            </div>
          </div>
        </div>

        {/* Right: Banner Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/banner-stack.png"
            alt="Tech Stack Illustration"
            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl shadow-brand-pink/10"
          />
        </div>
      </div>
    </section>
  )
}

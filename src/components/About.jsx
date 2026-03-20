const About = () => {
  const certifications = [
    {
      company: "Sindh Govt",
      items: ["Web Development", "PITP 2024"]
    },
    {
      company: "Verior",
      items: ["Web Developer Intern", "React.js, Tailwind CSS",]
    }
    ,
    {
      company: "Coursera",
      items: ["C++ Basics", "Iteration and Selection"]
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-cyan-400/20 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-blue-400/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-400/20 rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {/* About Me */}  
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 font-mono">
              <span className="text-cyan-400">class</span> Education
            </h3>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-2 font-mono">Bachelor of Computer Systems Engineering</h4>
              <p className="text-gray-300 mb-2 font-mono">Mehran University of Engineering & Technology</p>
              <p className="text-gray-400 mb-3 font-mono">2021 – 2025</p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-green-600/80 text-white px-3 py-1 rounded-full font-mono">CGPA: 3.00/4.00</span>
                <span className="bg-cyan-600/80 text-white px-3 py-1 rounded-full font-mono">Merit Scholarship</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-6 font-mono">
                <span className="text-cyan-400">const</span> Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-600/50 hover:border-cyan-400/40 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2 font-mono">{cert.company}</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.items.map((item, itemIndex) => (
                        <span key={itemIndex} className="bg-gray-700/80 text-gray-300 px-3 py-1 rounded-full text-sm font-mono border border-gray-600/50">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
  <h3 className="text-2xl font-semibold text-white mb-6 font-mono">
    <span className="text-cyan-400">function</span> WhoIAm()
  </h3>

  <p className="text-gray-300 text-lg leading-relaxed mb-6 font-mono">
    <span className="text-cyan-400">{/* */}</span> I&apos;m a Computer Engineer with a strong interest in web development, 
    specializing in building modern and responsive applications using technologies like React and JavaScript. 
    I enjoy turning ideas into real-world projects and continuously improving my development skills.
  </p>

  <p className="text-gray-300 text-lg leading-relaxed mb-6 font-mono">
    <span className="text-cyan-400">{/* */}</span> I have a strong analytical mindset and a passion for problem-solving. 
    I&apos;m always eager to learn new technologies and build efficient, user-friendly solutions that create real value.
  </p>

  <div className="flex flex-wrap gap-2">
    {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail Oriented'].map((trait, index) => (
      <span key={index} className="bg-gray-800/50 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
        {trait}
      </span>
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  )
}

export default About

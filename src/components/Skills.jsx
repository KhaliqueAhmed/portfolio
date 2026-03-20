const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [

        { name: "React.js", level: 90 },
        { name: "Redux Toolkit", level: 75 },
        { name: "Tailwind CSS", level: 90 },
        
      ]
    },

    {
      category: "Tools",
      skills: [
        { name: "GitHub", level: 90 },
       
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-48 h-48 border border-cyan-400/20 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-blue-400/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-400/20 rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-600/50 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
              <h3 className="text-xl font-semibold text-white mb-6 text-center font-mono group-hover:text-cyan-400 transition-colors duration-300">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium font-mono">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-medium font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out shadow-lg"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  )
}

export default Skills


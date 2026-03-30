import {
  Code2,
  Globe,
  Database,
  Server,
  Wrench,
} from "lucide-react";

const skills = [
  {
    category: "Languages & Concepts",
    icon: <Code2 className="w-5 h-5" />,
    techs: [
      { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "DSA", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg" },
    ],
  },
  {
    category: "Frontend Development",
    icon: <Globe className="w-5 h-5" />,
    techs: [
      { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    category: "Database & Deployment",
    icon: <Database className="w-5 h-5" />,
    techs: [
      { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    //   { name: "Render", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/render/render-original.svg" },
      { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Netlify", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
    ],
  },
  {
    category: "Backend & API",
    icon: <Server className="w-5 h-5" />,
    techs: [
      { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "RESTful APIs", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  },
  {
    category: "Other Technologies & Toolkits",
    icon: <Wrench className="w-5 h-5" />,
    techs: [
      { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Hoppscotch", img: "https://hoppscotch.io/favicon.ico" },
      { name: "Jest", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
      { name: "CI/CD", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What I Use
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Technologies that{" "}
            <span className="font-serif italic font-normal text-white">
              power my work.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of tools and technologies I've been learning and building with as a developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Technology Category Items */}
          <div className="space-y-12">
            {skills.map((category, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

                {/* Card — alternates left and right */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">

                    {/* Category Header */}
                    <div className={`flex items-center gap-3 mb-6 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-secondary-foreground">
                        {category.category}
                      </h3>
                    </div>

                    {/* Tech Icons */}
                    <div className={`flex flex-wrap gap-6 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      {category.techs.map((tech, techIdx) => (
                        <div key={techIdx} className="flex flex-col items-center gap-2 group">
                          <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center p-2
                            border border-border/50
                            hover:border-primary/50
                            hover:bg-primary/10
                            hover:scale-110
                            hover:-translate-y-1
                            cursor-pointer
                            transition-all duration-300 ease-out">
                            <img
                              src={tech.img}
                              alt={tech.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-xs text-muted-foreground group-hover:text-primary transition-all duration-300">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
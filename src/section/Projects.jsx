import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Wonderlust",
    description:
      "A full-stack property rental platform where users can list, discover, and book unique stays from around the world.",
    image: "projects/project1.png",
    tags: ["Html", "Css", "JavaScript", "Node.js", "Express", "MongoDB"],
    link: "https://wonderlust-411z.onrender.com/",
    github: "https://github.com/PujaSingh8942/WonderLust.git",
  },

  {
    title: "TradeHive",
    description:
      "A full-stack stock trading platform featuring a real-time dashboard, market data visualization, trade execution, portfolio management, and performance analytics.",
    image: "projects/project4.jpeg",
    tags: [
      "Html",
      "Css",
      "JavaScript",
      "React",
      "RESTful APIs",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    link: "https://tradehive-frontend.onrender.com/",
    github: "https://github.com/Priya-Mahato/TradeHive.git",
  },

  {
    title: "SKYCAST - Weather Application",
    description:
      "A sleek, real-time weather app delivering accurate current conditions and forecasts for any location, powered by live weather APIs.",
    image: "projects/project2.png",
    tags: ["Html", "Css", "JavaScript", "RESTful APIs"],
    link: "https://skycast-weather-application.onrender.com/",
    github:
      "https://github.com/PujaSingh8942/SKYCAST---Weather-Application.git",
  },

  {
    title: "MeetSphere",
    description:
      "A real-time video conferencing app built with WebRTC and Socket.io, supporting live video calls, screen sharing, in-meeting chat, and user authentication.",
    image: "projects/project3.png",
    tags: [
      "Html",
      "Css",
      "JavaScript",
      "React",
      "WebRTC",
      "Socket.io",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    link: "https://meetsphere-frontend.onrender.com",
    github: "https://github.com/PujaSingh8942/MeetSphere.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass glow-border rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className=" w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs cursor-pointer font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton onClick={() => window.open("https://github.com/PujaSingh8942", "_blank")}>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

import { Code2, Eye, Zap, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description:
      "Focusing on the smallest details to ensure quality and polish in every aspect of my work.",
  },
  {
    icon: Zap,
    title: "Adaptability",
    description:
      "Quickly picking up new technologies and adjusting to evolving project requirements.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Creating creative solutions to complex problems.",
  },
];
export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a software engineer specializing in full-stack
                development passionate about creating experiences that captivate
                users. I dive into problems headfirst and obsess over every
                detail until it's perfect. What drives me is thinking like a
                user first — understanding their journey and removing friction
                at every step.
              </p>
              <p>
                On the frontend, I craft responsive, visually stunning
                applications specializing in <span className="text-primary glow-text"> React, Tailwind CSS </span> and other modern
                technologies, focusing on smooth animations and meticulous
                micro-interactions. On the backend, I build scalable systems
                specializing in <span className="text-primary glow-text">Node.js, REST APIs,</span> and databases like <span className="text-primary glow-text">Node.js, REST APIs,</span><span className="text-primary glow-text"> MongoDB </span>
                and <span className="text-primary glow-text">Node.js, REST APIs,</span> <span className="text-primary glow-text"> SQL </span>. With strong knowledge of <span className="text-primary glow-text">Java and Data Structures &
                Algorithms</span>, I solve complex problems systematically and write
                clean, maintainable code.
              </p>
              <p>
                I'm detail-oriented and committed to delivering outstanding
                work. I believe those thoughtful design choices that most might
                overlook are what truly elevate an experience and make a
                difference.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                    My mission is to build experiences that make users stop and wonder — interfaces so smooth, so intuitive, that the technology behind them becomes invisible.
                </p>
            </div>
          </div>
          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                    style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                        <item.icon  className="w-6 h-6 text-primary"/>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

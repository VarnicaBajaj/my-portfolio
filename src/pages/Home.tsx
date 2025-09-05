import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button, LinkButton } from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';
import MyProfilePic from '../assets/images/ProfilePic.png';
import toolImage from "../assets/images/Tools.jpg";
import PMImage from '../assets/images/PMImage.png';
import SkillsCarousel from '../components/SkillsCarousel';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Varnica - Product & Project Manager';
  }, []);

  const skillCategories = [
    {
      title: "Product Strategy & Thinking",
      skills: [
        "User Journey Mapping",
        "Feature Prioritization",
        "MVP Development",
        "Customer Empathy",
        "Problem Solving",
        "Market Research",
        "Requirement Gathering",
        "SDLC Understanding"
      ]
    },
    {
      title: "Project & Program Management",
      skills: [
        "Agile Methodology",
        "Sprint Execution",
        "Scope Documentation",
        "Defect Management",
        "Cross-Team Collaboration",
        "Stakeholder Engagement",
        "Project Roadmapping",
        "Delivery Ownership"
      ]
    },
    {
      title: "User Experience & Design",
      skills: [
        "Visual Communication",
        "Dashboard Designing",
        "Presentation Design",
        "UX Designing",
        "Customer Interviews",
        "Interactive Prototyping"
      ]
    },
    {
      title: "Leadership & Soft Skills",
      skills: [
        "Team Leadership",
        "Conflict Resolution",
        "Public Speaking",
        "Time Management",
        "Communication Skills",
        "Meticulous Organization",
        "Collaboration & Empathy",
        "Talent Retention"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-20 sm:py-32">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-3">
                  Hi, I'm <span className="text-accent">Varnica</span>
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground whitespace-nowrap">
                  Tech-Driven Thinker | PM in Progress | Bridging Engineering & Product
                </h2>
              </div>
              <p className="text-lg mb-8 max-w-2xl" style={{ lineHeight: 1.4 }}>
                <b style={{ fontSize: "1.2em", whiteSpace: "nowrap" }}>
                  From systems to stories, from sprints to strategy, I build with intention
                </b>
                <br />

                <div style={{ marginTop: '0.3em', marginBottom: '0.3em' }}></div>

                <span style={{ fontSize: "1.3em", fontWeight: "600" }}>
                  Hi, I'm Varnica,
                </span>{" "}
                I started my journey writing backend code at Infosys, but quickly found myself steering timelines, gathering requirements, and syncing cross-functional teams. That curiosity led me beyond the "how\" into the "why", and I haven't looked back since.
                <br />

                <div style={{ marginTop: '0.3em', marginBottom: '0.3em' }}></div>

                <b style={{ fontSize: "1.25em" }}>Over the past 3+ years, I've:</b>
                <br />

                <div style={{ marginTop: '0.3em', marginBottom: '0.3em' }}></div>

                🔧 Engineered scalable systems for global brands
                <br />
                🚀 Managed 0→1 product builds in high-velocity startups
                <br />
                🎯 Taken full ownership across product, tech, and delivery
                <br />

                Whether it's building a job portal from scratch, managing ed-tech MVPs, or shipping features at scale, I bring clarity to chaos, turn ambiguity into action, and always lead with a user-first lens.
                <br />

                <div style={{ marginTop: '0.3em', marginBottom: '0.3em' }}></div>

                <b style={{ fontSize: "1.25em" }}>Why me?</b>
                <br />

                <div style={{ marginTop: '0.3em', marginBottom: '0.3em' }}></div>

                I speak code, think product, and breathe execution. I thrive where there's no roadmap, just a vision waiting to be built.
                <br />
                Now, I'm channeling it all into product & project roles, where strategy meets empathy, and ideas become impact.
                <br />

                <div style={{ marginTop: '0.3em', marginBottom: '0.3em' }}></div>

                <b style={{ lineHeight: 1.5, display: 'block' }}>
                  Let's build bold, Let's build better, Together.
                </b>
              </p>

              <div className="flex flex-wrap gap-4">
                <LinkButton to="/projects" size="lg">
                  View My Work <ArrowRight className="ml-2" size={18} />
                </LinkButton>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('/VarnicaBajaj-Resume.pdf', '_blank')}
                >
                  Resume <Download className="ml-2" size={18} />
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="flex-1 flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full max-w-[28rem]">
                <div className="absolute inset-0 bg-accent/20 rounded-lg transform rotate-3"></div>
                <img
                  src={MyProfilePic}
                  alt="Varnica - Product Manager"
                  className="relative rounded-lg shadow-lg w-full object-cover z-10"
                  onContextMenu={(e) => e.preventDefault()} 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              My Superpowers at Work
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              A dynamic blend of tech, strategy & leadership—engineered to build products that matter.
            </p>
          </div>

          <SkillsCarousel categories={skillCategories} />

          <div className="mt-8">
            <img
              src={toolImage}
              alt="Tools and Skills"
              className="mx-auto max-w-[600px] sm:max-w-[800px] lg:max-w-[1000px]"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            title="Impactful Projects"
            subtitle="A curated showcase of high-impact products I've led, blending strategic thinking, user empathy, and execution excellence."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onClick={() => {}} 
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <LinkButton to="/projects" variant="outline">
              View All Projects <ArrowRight className="ml-2" size={18} />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Experience Preview Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            title="Professional Experience"
            subtitle="A glimpse of my journey and the companies I've worked with."
          />
          
          <div className="space-y-6">
            {experiences.slice(0, 2).map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <LinkButton to="/experience" variant="outline">
              Explore Roles I've Owned<ArrowRight className="ml-2" size={18} />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <div className="w-full overflow-hidden" style={{ maxHeight: '600px' }}>
        <img
          src={PMImage}
          alt="Project Management Illustration"
          className="w-[75%] h-auto mx-auto block"
          style={{ maxHeight: '600px' }}
        />
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create Something Amazing Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, and opportunities.
            </p>
            <LinkButton to="/contact" size="lg">
              Let's Get in Touch <ArrowRight className="ml-2" size={18} />
            </LinkButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

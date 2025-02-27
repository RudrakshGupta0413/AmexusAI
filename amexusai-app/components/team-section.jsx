"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TeamMemberCard from "./team-card";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Amit Gurawa",
      position: "Founder",
      image: "/Amit_Profile.png",
      alumni: "IIT-BHU, Varanasi Alumni",
      experience: ["Microsoft", "Qualcomm", "Samsung"],
      gradient: "bg-gradient-to-l from-[#364011] to-[#2b4835]",
      socials: {
        linkedin: "https://linkedin.com/in/amit-gurawa-910905186",
        twitter: "https://twitter.com/amitgurawa",
      },
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="team"
      className="min-h-[90vh] sm:min-h-[80vh] bg-[#0A0F1D] py-20 px-4 pt-20 z-10"
      ref={ref}
    >
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-4">
            Meet the Minds
          </h2>
          <p className="max-w-5xl mx-auto text-lg md:text-xl sm:text-xl text-[#9A9A9A] font-mono mb-8 sm:mb-12 tracking-[0.1em] sm:tracking-[0.1em]">
            Our team of experts brings a wealth of knowledge and experience to
            delivering innovative AI solutions.
          </p>
        </motion.div>

        <div className="mx-auto grid gap-6 md:grid-cols-[1fr_1.5fr] md:gap-1 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="flex justify-center"
          >
            <TeamMemberCard
              name={teamMembers[0].name}
              position={teamMembers[0].position}
              image={teamMembers[0].image}
              alumni={teamMembers[0].alumni}
              experience={teamMembers[0].experience}
              gradient={teamMembers[0].gradient}
              socials={teamMembers[0].socials}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="text-white text-left space-y-6"
          >
            <p className="text-lg md:text-xl text-[#FFFFFF] text-justify">
              At Amexus AI, we are a team of highly qualified professionals from
              IITs, IIMs, and BITS, bringing together expertise in AI, data
              science, and business strategy. Our team is driven by a shared
              passion for leveraging AI to empower businesses and drive
              innovation.
            </p>
            <p className="text-lg md:text-xl text-[#FFFFFF] text-justify">
              We strive for bringing in customer delight, ownership, and
              relentless innovation—core values that enable us to develop
              cutting-edge solutions that not only address today's challenges
              but also anticipate the opportunities of tomorrow.
            </p>
            <p className="text-lg md:text-xl text-[#FFFFFF] text-justify">
              Amexus AI is founded by a seasoned AI expert Amit Gurawa who
              previously worked as a Senior Machine Learning Engineer at
              Microsoft, Qualcomm, and Samsung before embarking on this journey
              to revolutionize AI-driven solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
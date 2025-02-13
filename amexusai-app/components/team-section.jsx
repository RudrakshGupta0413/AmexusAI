import TeamMemberCard from "./team-card"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Amit Gurawa",
      position: "Founder",
      image:
        "/Amit_Gurawa.png",
      gradient: "bg-gradient-to-l from-[#364011] to-[#2b4835]",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Amit Gurawa",
      position: "Founder",
      image:
        "/Amit_Gurawa.png",
      gradient: "bg-gradient-to-r from-[#5a2b27] to-[#644b22]",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Amit Gurawa",
      position: "Founder",
      image:
        "/Amit_Gurawa.png",
      gradient: "bg-gradient-to-l from-[#113340] to-[#336c70]",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
  ]

  return (
    <section id="team" className="min-h-[90vh] sm:min-h-[80vh] bg-[#0A0F1D] py-20 px-4">
      <div className="max-w-[1550px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Minds</h2>
          <p className="max-w-4xl mx-auto text-base sm:text-xl text-[#9A9A9A] mb-8 sm:mb-12 tracking-[0.1em] sm:tracking-[0.1em]">
            Our team of experts brings a wealth of knowledge and experience in delivering innovative AI solutions.
          </p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px] md:gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              gradient={member.gradient}
              socials={member.socials}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


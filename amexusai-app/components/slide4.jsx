"use client"
import { motion } from "framer-motion"

const slide4 = () => {
  const gradientStyle = {
    background: "linear-gradient(180deg, #F0E68C 0%, #9ACD32 30%, #2E8B57 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    filter: "brightness(1.1) contrast(1.05)",
  }

  const steps = [
    {
      number: "1",
      title: "Share Your Requirements",
      description: "Simply share your requirements & preferences.",
    },
    {
      number: "2",
      title: "Amexus AI Learn Your Needs",
      description: "Amexus AI processes your input and organizes the data.",
    },
    {
      number: "3",
      title: "Get Customized Actions",
      description: "Amexus AI suggests tailored actions that meet your needs.",
    },
    {
      number: "4",
      title: "AI Executes Actions for You",
      description: "Amexus AI executes those actions, saving you time & effort.",
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="min-h-screen bg-[#171B26] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How Amexus AI Transforms Your Business</h2>
          <p className="text-lg md:text-xl text-gray-400 font-mono">
            Effortlessly integrate AI into your workflow with just a few easy steps.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-[#0D111D] rounded-2xl p-8 flex flex-col">
              <div className="text-[4rem] font-bold mb-6 leading-none" style={gradientStyle}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default slide4


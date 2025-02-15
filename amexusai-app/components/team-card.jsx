"use client";

import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function TeamMemberCard({ name, position, image, gradient, socials }) {
  return (
    <div className={`relative rounded-3xl py-14 sm:py-20 text-center ${gradient} min-h-[280px] sm:min-h-[350px]`}>
      {/* Mobile Gradient Overlay */}
      <div className="absolute rounded-3xl inset-0 bg-gradient-to-b from-transparent to-black opacity-50 md:hidden"></div>

      {/* Profile Image */}
      <div className="flex justify-center mb-3 relative z-10">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Name & Position */}
      <h3 className="text-white text-lg sm:text-xl font-semibold mb-1 relative z-10">{name}</h3>
      <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 relative z-10 font-mono">{position}</p>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center gap-3 sm:gap-4 relative z-10">
        {socials?.twitter && (
          <Link href={socials.twitter} className="text-gray-300 hover:text-white transition-colors">
            <Twitter size={18} />
          </Link>
        )}
        {socials?.linkedin && (
          <Link href={socials.linkedin} className="text-gray-300 hover:text-white transition-colors">
            <Linkedin size={18} />
          </Link>
        )}
        {socials?.github && (
          <Link href={socials.github} className="text-gray-300 hover:text-white transition-colors">
            <Github size={18} />
          </Link>
        )}
      </div>
    </div>
  );
}

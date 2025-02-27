"use client";

import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function TeamMemberCard({ name, position, image, alumni, experience, socials, gradient }) {
  return (
    <div className={`relative rounded-3xl py-10 sm:py-14 text-center ${gradient} min-h-[320px] sm:min-h-[380px] w-[380px] sm:max-w-[340px] mx-auto shadow-lg`}>
      
      {/* Profile Image */}
      <div className="flex justify-center mb-4 relative z-10">
        <div className="relative w-52 h-52 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Name & Position */}
      <h3 className="text-white text-lg sm:text-xl font-bold mb-1">{name}</h3>
      <p className="text-gray-300 text-sm sm:text-base mb-2">{position}</p>

      {/* Alumni Info */}
      <p className="text-gray-300 text-xs sm:text-sm">{alumni}</p>

      {/* Experience Logos */}
      <div className="flex justify-center items-center gap-2 mt-2 text-white">
        Ex - 
        {experience.includes("Microsoft") && (
          <Image src="/Image.png" alt="Microsoft" width={90} height={18} />
        )}
        {experience.includes("Qualcomm") && (
          <Image src="/Qualcomm-Logo.svg.png" alt="Qualcomm" width={80} height={18} />
        )}
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center gap-4 mt-4">
        {socials?.linkedin && (
          <Link href={socials.linkedin} className="text-gray-300 hover:text-white transition-colors">
            <Linkedin size={20} />
          </Link>
        )}
        {socials?.twitter && (
          <Link href={socials.twitter} className="text-gray-300 hover:text-white transition-colors">
            <Twitter size={20} />
          </Link>
        )}
      </div>
    </div>
  );
}
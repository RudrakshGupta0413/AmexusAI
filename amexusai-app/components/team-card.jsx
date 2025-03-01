"use client";

import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function TeamMemberCard({ name, position, image, alumni, experience, socials, gradient }) {
  return (
    <div className={`relative rounded-3xl py-4 sm:py-14 text-center ${gradient} min-h-[280px] sm:min-h-[380px] w-[300px] lg:w-[320px] md:w-[300px] sm:w-[280px] xs:w-full mx-auto shadow-lg`}>
      
      {/* Profile Image */}
      <div className="flex justify-center mb-4 relative z-10">
        <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white bg-white">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Name & Position */}
      <h3 className="text-white text-base sm:text-xl font-bold mb-1">{name}</h3>
      <p className="text-gray-300 text-xs sm:text-base mb-2">{position}</p>

      {/* Alumni Info */}
      <p className="text-gray-300 text-xs sm:text-sm">{alumni}</p>

      {/* Experience Logos */}
      <div className="flex justify-center items-center gap-2 mt-2 text-white text-md sm:text-sm xs:flex-col">
        Ex - 
        {experience.includes("Microsoft") && (
          <Image src="/Microsoft-Logo.png" alt="Microsoft" width={70} height={14} />
        )}
        {experience.includes("Qualcomm") && (
          <Image src="/Qualcomm-Logo.png" alt="Qualcomm" width={60} height={14} />
        )}
        {experience.includes("Samsung") && (
          <Image src="/Samsung-Logo.png" alt="Samsung" width={60} height={14} />
        )}
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center gap-4 mt-4">
        {socials?.linkedin && (
          <Link href={socials.linkedin} className="text-gray-300 hover:text-white transition-colors">
            <Linkedin size={18} />
          </Link>
        )}
        {socials?.twitter && (
          <Link href={socials.twitter} className="text-gray-300 hover:text-white transition-colors">
            <Twitter size={18} />
          </Link>
        )}
      </div>
    </div>
  );
}

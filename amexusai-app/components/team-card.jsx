"use client";

import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function TeamMemberCard({ name, position, image, bgColor, socials }) {
  return (
    <div className={`${bgColor} rounded-2xl py-20 text-center`}>
      <div className="flex justify-center mb-4">
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
      </div>
      <h3 className="text-white text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-300 mb-4">{position}</p>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center gap-4">
        {socials?.twitter && (
          <Link
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
        )}
        {socials?.linkedin && (
          <Link
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
        )}
        {socials?.github && (
          <Link
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
        )}
      </div>
    </div>
  );
}

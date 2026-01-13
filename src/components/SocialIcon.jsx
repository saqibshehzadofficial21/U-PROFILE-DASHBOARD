import React from "react";

export default function SocialIcon({ Icon, url, bgColor }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`${bgColor} text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg
                 transform transition-transform duration-300 ease-in-out
                 hover:scale-110 hover:rotate-12 hover:shadow-2xl`}
    >
      <Icon size={22} />
    </a>
  );
}

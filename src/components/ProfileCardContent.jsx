import React, { useState, useEffect, useContext } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

import ProfileStatus from "./ProfileStatus";
import SocialIcon from "./SocialIcon";
import { ThemeContext } from "../context/ThemeContext";

export default function ProfileCardContent() {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

  // Load followers and follow state from localStorage
  const [followers, setFollowers] = useState(
    parseInt(localStorage.getItem("followers")) || 1598
  );
  const [isFollowing, setIsFollowing] = useState(
    localStorage.getItem("isFollowing") === "true" || false
  );

  // Load status from localStorage
  const [status, setStatus] = useState(
    localStorage.getItem("status") || "Online"
  );

  const [open, setOpen] = useState(false);
  const isOnline = status === "Online";

  // Persist followers & follow state
  useEffect(() => {
    localStorage.setItem("followers", followers);
    localStorage.setItem("isFollowing", isFollowing);
  }, [followers, isFollowing]);

  // Persist status
  useEffect(() => {
    localStorage.setItem("status", status);
  }, [status]);

  // Persist theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const socials = [
    { Icon: Facebook, url: "https://facebook.com", bgColor: "bg-blue-600" },
    { Icon: Twitter, url: "https://twitter.com", bgColor: "bg-sky-400" },
    { Icon: Instagram, url: "https://instagram.com", bgColor: "bg-pink-500" },
    { Icon: Linkedin, url: "https://linkedin.com", bgColor: "bg-blue-700" },
    { Icon: Github, url: "https://github.com", bgColor: "bg-gray-800" },
    { Icon: Youtube, url: "https://youtube.com", bgColor: "bg-red-600" },
  ];

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-10 transition-all ${
        theme === "light"
          ? "bg-gradient-to-tr from-pink-500 to-indigo-600"
          : "bg-gray-900"
      }`}
    >
      <div
        className={`relative w-full max-w-md sm:max-w-xl rounded-xl shadow-2xl transition-all ${
          theme === "light" ? "bg-white" : "bg-gray-800 text-white"
        }`}
      >
        {/* Avatar */}
        <div className="flex justify-center -mt-14 sm:-mt-16">
          <img
            src="profile.jpg" // <- replace with your image path
            alt="profile"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 sm:border-8 border-white shadow-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-center px-4 sm:px-6 pb-8 sm:pb-10 mt-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <h2 className="text-xl sm:text-2xl font-bold text-indigo-500">
              Saqib Shehzad
            </h2>
            <ProfileStatus status={status} />
          </div>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Front-end Developer
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[
              { label: "Followers", value: followers },
              { label: "Following", value: 65 },
              { label: "Articles", value: 123 },
              { label: "Works", value: 85 },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-lg sm:text-xl font-bold">{item.value}</p>
                <p className="text-xs sm:text-sm opacity-70">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
            {socials.map((s, i) => (
              <SocialIcon key={i} Icon={s.Icon} url={s.url} bgColor={s.bgColor} />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8">
            <button
              onClick={() => setOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold shadow hover:scale-105 transition-transform"
            >
              <MessageCircle size={18} /> Message
            </button>

            <button
              onClick={() => {
                setIsFollowing((prev) => !prev);
                setFollowers((prev) => (isFollowing ? prev - 1 : prev + 1));
              }}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold shadow transition-transform hover:scale-105 ${
                isFollowing
                  ? "bg-gray-400 text-gray-800"
                  : "bg-gradient-to-r from-pink-500 to-orange-400 text-white"
              }`}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </button>
          </div>

          {/* Status + Theme Toggle */}
          <div className="flex flex-col sm:flex-row justify-center mt-6 gap-3 sm:gap-4">
            <button
              onClick={() => setStatus(isOnline ? "Offline" : "Online")}
              className="w-full sm:w-auto px-5 py-2 rounded-full border font-semibold transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Set {isOnline ? "Offline" : "Online"}
            </button>

            <button
              onClick={toggleTheme}
              className="w-full sm:w-auto px-5 py-2 rounded-full border font-semibold transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === "light" ? "Dark Theme" : "Light Theme"}
            </button>
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white w-full max-w-md rounded-xl p-4 sm:p-6 shadow-xl">
            <textarea
              className="w-full h-32 sm:h-40 border rounded-lg p-3 focus:outline-none"
              placeholder="Say something..."
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2 rounded-full bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2 rounded-full bg-blue-600 text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

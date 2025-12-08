"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";

interface MusicSettings {
  enabled: boolean;
  music_url: string;
  volume: number;
  loop: boolean;
}

export default function WelcomeScreen() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [musicSettings, setMusicSettings] = useState<MusicSettings | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Check if user has already entered the website
    const hasEntered = localStorage.getItem("website_entered");

    if (hasEntered) {
      // User has entered before, check if music should play
      loadMusicSettings(true);
      return;
    }

    // First time visitor - show welcome screen
    setShowWelcome(true);
    loadMusicSettings(false);
  }, []);

  const loadMusicSettings = async (autoPlay: boolean) => {
    try {
      const response = await fetch("/api/music");
      const data = await response.json();

      if (data.enabled && data.music_url) {
        setMusicSettings(data);

        if (autoPlay) {
          // Auto-play for returning visitors (they've already interacted)
          initializeAudio(data, true);
        }
        // For first-time visitors, music will start after they click "Enter Website"
      }
    } catch (error) {
      console.error("Error loading music settings:", error);
    }
  };

  const initializeAudio = (settings: MusicSettings, play: boolean = false) => {
    if (!settings.music_url) return;

    const audioElement = new Audio(settings.music_url);
    audioElement.volume = settings.volume;
    audioElement.loop = settings.loop;

    audioElement.addEventListener("ended", () => {
      if (settings.loop) {
        audioElement.currentTime = 0;
        audioElement.play();
      }
    });

    setAudio(audioElement);

    if (play) {
      audioElement.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsPlaying(true);
    }
  };

  const handleEnterWebsite = () => {
    localStorage.setItem("website_entered", "true");
    setShowWelcome(false);

    if (musicSettings) {
      initializeAudio(musicSettings, true);
    }
  };

  const togglePlayPause = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Welcome Screen */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl"
              />
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ delay: 0.2, type: "spring", damping: 20 }}
              className="text-center px-6 max-w-3xl relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-yellow-400 text-sm font-semibold mb-6 border border-yellow-400/30"
              >
                Welcome
              </motion.div>
              
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
              >
                Welcome to{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  Nissing Public School
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 font-light"
              >
                Empowering the Next Generation
              </motion.p>
              
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEnterWebsite}
                className="group bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <Play size={24} className="group-hover:scale-110 transition-transform" />
                Enter Website
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Player Controls (floating) */}
      {audio && !showWelcome && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="fixed bottom-6 right-6 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-3 flex items-center gap-2 border border-gray-200"
        >
          <button
            onClick={togglePlayPause}
            className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 text-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
            title={isPlaying ? "Pause" : "Play"}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <div className="w-4 h-4 flex items-center justify-center gap-0.5">
                <div className="w-1 h-4 bg-white rounded-full"></div>
                <div className="w-1 h-4 bg-white rounded-full"></div>
              </div>
            ) : (
              <Play size={18} fill="white" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </motion.div>
      )}
    </>
  );
}


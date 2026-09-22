import React, { useState, useRef } from 'react';
import { Play, Pause, Heart, Share2, Volume2, VolumeX, Eye, Sparkles, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { playPopSound, playBoingSound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';
import { schoolData } from '../data/schoolData';

export const VideoReels = ({ activeReelModal, setActiveReelModal }) => {
  const [selectedReel, setSelectedReel] = useState(schoolData.videoReels[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [likes, setLikes] = useState(
    schoolData.videoReels.reduce((acc, reel) => ({ ...acc, [reel.id]: reel.likes }), {})
  );
  const [hasLiked, setHasLiked] = useState({});
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const handleLike = (reelId) => {
    playBoingSound();
    setLikes((prev) => ({
      ...prev,
      [reelId]: (prev[reelId] || 0) + (hasLiked[reelId] ? -1 : 1),
    }));
    setHasLiked((prev) => ({
      ...prev,
      [reelId]: !prev[reelId],
    }));
    if (!hasLiked[reelId]) {
      triggerConfetti();
    }
  };

  const handleSelectReel = (reel) => {
    playPopSound();
    setSelectedReel(reel);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <section id="reels" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Glow Backdrops */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-300 text-xs font-bold px-3.5 py-1 rounded-full border border-pink-500/30 mb-2.5">
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
              <span>Campus Reels & Video Moments</span>
            </div>
            <h2 className="font-comic text-3xl sm:text-4xl md:text-5xl font-bold">
              Watch Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-amber-300 to-yellow-300">Little Stars</span> in Action! 🎬
            </h2>
          </div>

          <a
            href={schoolData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playPopSound()}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-pink-500/20 hover:scale-105 transition-all self-start md:self-auto"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow {schoolData.instagramHandle} on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>

        {/* Video Player + Reels List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Reel Player Box */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-3xl p-3 sm:p-4 border border-slate-700 shadow-2xl relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[9/16] sm:aspect-[16/10] bg-black group">
              <video
                ref={videoRef}
                src={selectedReel.videoUrl}
                poster={selectedReel.fallbackImage}
                loop
                playsInline
                muted={isMuted}
                className="w-full h-full object-cover"
                onClick={handlePlayPause}
              />

              {/* Top Controls Overlay */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  <span>{selectedReel.category}</span>
                </div>

                <div className="flex items-center gap-2 pointer-events-auto">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Center Play/Pause Overlay */}
              <button
                onClick={handlePlayPause}
                className={`absolute inset-0 m-auto w-16 h-16 rounded-full bg-pink-600/90 text-white flex items-center justify-center shadow-2xl transition-all z-20 ${
                  isPlaying ? 'opacity-0 group-hover:opacity-100 scale-90' : 'opacity-100 scale-100'
                }`}
              >
                {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
              </button>

              {/* Bottom Reel Description Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/70 to-transparent z-20">
                <h3 className="font-comic font-bold text-lg sm:text-xl text-white mb-1">
                  {selectedReel.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                  {selectedReel.caption}
                </p>

                {/* Engagement Bar */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLike(selectedReel.id)}
                      className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-pink-400 hover:text-pink-300"
                    >
                      <Heart className={`w-4 h-4 ${hasLiked[selectedReel.id] ? 'fill-pink-500 text-pink-500 scale-125' : ''} transition-transform`} />
                      <span>{likes[selectedReel.id] || selectedReel.likes} Likes</span>
                    </button>

                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{selectedReel.views} views</span>
                    </span>
                  </div>

                  <a
                    href={schoolData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-amber-300 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>View on Instagram</span>
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Playlist of Other Reels */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-bold text-base text-slate-300 flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>More Campus Reels ({schoolData.videoReels.length})</span>
            </h3>

            <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1">
              {schoolData.videoReels.map((reel) => {
                const isCurrent = selectedReel.id === reel.id;
                return (
                  <div
                    key={reel.id}
                    onClick={() => handleSelectReel(reel)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                      isCurrent
                        ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-pink-500/50 shadow-lg'
                        : 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-black">
                      <img
                        src={reel.fallbackImage}
                        alt={reel.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-white/90 text-slate-900 flex items-center justify-center">
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 rounded text-[9px] font-bold text-white">
                        {reel.duration}
                      </div>
                    </div>

                    {/* Reel Metadata */}
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-pink-400">
                        {reel.category}
                      </span>
                      <h4 className="font-comic font-bold text-xs sm:text-sm text-white truncate mt-0.5">
                        {reel.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {reel.caption}
                      </p>
                      <div className="flex items-center gap-3 text-[10px] text-slate-400 mt-1.5">
                        <span>❤️ {likes[reel.id] || reel.likes}</span>
                        <span>👁️ {reel.views}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

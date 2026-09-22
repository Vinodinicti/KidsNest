import React, { useState } from 'react';
import { Sparkles, Trophy, RotateCcw, Volume2, Star, CheckCircle, Heart, Gamepad2 } from 'lucide-react';
import { playBoingSound, playFanfareSound, playPopSound } from '../utils/audio';
import { triggerConfetti, triggerGrandCelebration } from '../utils/confetti';
import { schoolData } from '../data/schoolData';

export const MiniGame = () => {
  const [activeTab, setActiveTab] = useState('animals'); // 'animals' | 'colors'
  const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null); // { correct: bool, text: string }
  const [selectedColor, setSelectedColor] = useState(schoolData.miniGames?.colors?.[0] || {
    name: "Sunshine Yellow",
    hex: "#FBBF24",
    items: ["🍌 Sweet Banana", "🌻 Golden Sunflower", "🍋 Sour Lemon", "🐥 Chirpy Chick"]
  });

  const animalList = schoolData.miniGames?.animals || [
    { id: "chick", name: "Chirpy Chick", emoji: "🐥", sound: "Cheep Cheep!", clue: "I am the Kids Nest baby chick, love to learn, and say Cheep Cheep!", color: "bg-amber-50 border-amber-300 hover:bg-amber-100" },
    { id: "dog", name: "Playful Puppy", emoji: "🐶", sound: "Woof Woof!", clue: "I wag my tail when I am happy and say Woof Woof!", color: "bg-blue-50 border-blue-300 hover:bg-blue-100" },
    { id: "cat", name: "Curious Kitty", emoji: "🐱", sound: "Meow Meow!", clue: "I love soft milk, purr gently, and say Meow Meow!", color: "bg-pink-50 border-pink-300 hover:bg-pink-100" },
    { id: "tiger", name: "Brave Tiger", emoji: "🐯", sound: "Roaaar!", clue: "I have bold orange stripes, run super fast, and say Roaaar!", color: "bg-orange-50 border-orange-300 hover:bg-orange-100" }
  ];

  const currentAnimal = animalList[currentAnimalIndex] || animalList[0];

  const handleAnimalGuess = (guessedId) => {
    if (feedback) return;

    if (guessedId === currentAnimal.id) {
      playFanfareSound();
      triggerConfetti();
      setScore((s) => s + 10);
      setFeedback({
        correct: true,
        text: `Yay! That's right! The ${currentAnimal.name} says ${currentAnimal.sound} 🎉`,
      });

      setTimeout(() => {
        setFeedback(null);
        if (currentAnimalIndex < animalList.length - 1) {
          setCurrentAnimalIndex((prev) => prev + 1);
        } else {
          triggerGrandCelebration();
          setFeedback({
            correct: true,
            completed: true,
            text: `🏆 Fantastic Job! You scored ${score + 10} Stars! You are an Official Kids Nest Junior Genius!`,
          });
        }
      }, 1500);
    } else {
      playBoingSound();
      setFeedback({
        correct: false,
        text: "Oopsie! Try another cute animal! 🐣",
      });
      setTimeout(() => {
        setFeedback(null);
      }, 1300);
    }
  };

  const handleResetGame = () => {
    playPopSound();
    setCurrentAnimalIndex(0);
    setScore(0);
    setFeedback(null);
  };

  return (
    <section id="game" className="py-6 sm:py-10 bg-gradient-to-r from-sky-50/60 via-amber-50/60 to-rose-50/60 relative overflow-hidden">
      
      {/* Container - Full wide length and compact height */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Streamlined Top Control Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 bg-white/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border-2 border-amber-200 shadow-sm">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-400 text-white flex items-center justify-center text-xl sm:text-2xl shadow-sm flex-shrink-0">
              🎮
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-comic font-bold text-xl sm:text-2xl text-slate-950">
                  Play & Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-pink-500 to-sky-500">Mini Game!</span>
                </h2>
                <span className="bg-yellow-100 text-yellow-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-yellow-300 hidden sm:inline">
                  Montessori Sensory Game
                </span>
              </div>
              <p className="text-xs text-slate-900 font-semibold">
                Tap and match sounds, riddles, and vibrant colors with your child.
              </p>
            </div>
          </div>

          {/* Mode Switcher + Score Pills */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 gap-1">
              <button
                onClick={() => {
                  playPopSound();
                  setActiveTab('animals');
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'animals'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'text-slate-800 hover:bg-slate-200'
                }`}
              >
                🦁 Animal Sound Match
              </button>
              <button
                onClick={() => {
                  playPopSound();
                  setActiveTab('colors');
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'colors'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-800 hover:bg-slate-200'
                }`}
              >
                🎨 Rainbow Color Explorer
              </button>
            </div>

            <div className="flex items-center gap-2 bg-amber-100 px-3 py-1.5 rounded-xl border border-amber-300">
              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span className="font-comic font-bold text-xs text-amber-950">
                {score} ⭐
              </span>
            </div>

            <button
              onClick={handleResetGame}
              className="flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-slate-950 bg-white hover:bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-300 shadow-sm transition-colors"
              title="Reset Game"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Restart</span>
            </button>
          </div>

        </div>

        {/* Wide Content Box */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border-3 border-amber-300 shadow-xl relative">
          
          {/* Animal Sounds Matcher Tab */}
          {activeTab === 'animals' && (
            <div className="space-y-4">
              
              {!feedback?.completed ? (
                <>
                  {/* Question Banner - Compact Height, Wide Length */}
                  <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 rounded-2xl px-5 py-3 border-2 border-dashed border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-bold text-amber-950 uppercase tracking-wider">
                        Question {currentAnimalIndex + 1} of {animalList.length}
                      </div>
                      <div className="font-comic font-bold text-base sm:text-lg md:text-xl text-slate-950">
                        "{currentAnimal.clue}"
                      </div>
                    </div>
                    <div className="text-xs font-bold text-amber-800 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300 flex-shrink-0">
                      Tap correct friend below 👇
                    </div>
                  </div>

                  {/* Feedback Message */}
                  {feedback && (
                    <div className={`p-2.5 rounded-xl font-bold text-xs sm:text-sm text-center animate-bounce ${
                      feedback.correct ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-rose-100 text-rose-900 border border-rose-300'
                    }`}>
                      {feedback.text}
                    </div>
                  )}

                  {/* 4 Animal Cards in a FULL 4-COLUMN SINGLE HORIZONTAL ROW */}
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-3.5">
                    {animalList.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleAnimalGuess(item.id)}
                        className={`p-2 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1 sm:gap-1.5 hover:scale-[1.03] active:scale-95 shadow-sm hover:shadow-md cursor-pointer ${
                          item.color
                        }`}
                      >
                        <span className="text-2xl sm:text-4xl animate-wiggle">{item.emoji}</span>
                        <span className="font-comic font-bold text-[10px] sm:text-sm text-slate-950 text-center leading-tight">
                          {item.name}
                        </span>
                        <span className="text-[8px] sm:text-[10px] bg-white px-1 sm:px-2 py-0.5 rounded-full font-bold text-amber-950 border border-amber-300 shadow-2xs text-center whitespace-nowrap">
                          {item.sound}
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                /* Victory Banner */
                <div className="p-6 text-center space-y-3 animate-in zoom-in-95 duration-300">
                  <div className="text-5xl animate-bounce">🏆</div>
                  <h3 className="font-comic font-bold text-2xl text-slate-950">
                    You're a Star Champion! 🌟
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-900 max-w-md mx-auto font-semibold">
                    You answered all sound riddles with a score of <strong>{score + 10} Stars</strong>!
                  </p>
                  <button
                    onClick={handleResetGame}
                    className="px-6 py-2.5 rounded-xl font-comic font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 shadow-md hover:scale-105 transition-all"
                  >
                    Play Again! 🔄
                  </button>
                </div>
              )}

            </div>
          )}

          {/* Rainbow Colors Tab */}
          {activeTab === 'colors' && (
            <div className="space-y-4">
              
              {/* Color Selector Pills - Single 4-column row */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5">
                {(schoolData.miniGames?.colors || []).map((c) => (
                  <button
                    key={c.name}
                    onClick={() => {
                      playPopSound();
                      setSelectedColor(c);
                    }}
                    style={{ borderColor: c.hex }}
                    className={`p-1.5 sm:p-2.5 rounded-xl border-2 font-comic font-bold text-[10px] sm:text-sm transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 ${
                      selectedColor.name === c.name
                        ? 'bg-amber-100 scale-102 shadow-sm text-slate-950 font-bold'
                        : 'bg-white hover:bg-slate-50 text-slate-900'
                    }`}
                  >
                    <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full shadow-inner flex-shrink-0" style={{ backgroundColor: c.hex }}></span>
                    <span className="text-center truncate max-w-full">{c.name}</span>
                  </button>
                ))}
              </div>

              {/* Items for selected color in a single 4-column horizontal row */}
              <div className="bg-slate-50/80 rounded-2xl p-3 sm:p-4 border border-slate-200 text-center space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="font-comic font-bold text-xs sm:text-base text-slate-950">
                    Things that are naturally <span style={{ color: selectedColor.hex }}>{selectedColor.name}</span>!
                  </h4>
                  <span className="text-[10px] sm:text-[11px] text-slate-800 font-bold italic">
                    Tap any card for confetti! 🎉
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5">
                  {selectedColor.items.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        playBoingSound();
                        triggerConfetti();
                      }}
                      className="bg-white p-2 sm:p-3 rounded-xl border-2 border-slate-200 hover:border-amber-400 hover:scale-105 transition-all cursor-pointer shadow-2xs text-[10px] sm:text-sm font-bold text-slate-950 flex items-center justify-center text-center"
                    >
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

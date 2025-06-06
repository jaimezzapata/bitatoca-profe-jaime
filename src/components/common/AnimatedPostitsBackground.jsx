import React from "react";

// Fondo animado de post-its reutilizable
const AnimatedPostitsBackground = () => (
  <div
    aria-hidden
    className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    style={{ background: "none" }}
  >
    {/* Post-it amarillo */}
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-yellow-200 bg-yellow-100 animate-postit-move"
      style={{
        top: "10%",
        left: "-15%",
        width: 140,
        height: 140,
        transform: "rotate(-7deg)",
        animationDuration: "18s",
        animationDelay: "0s",
      }}
    />
    {/* Post-it rosa */}
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-pink-200 bg-pink-100 animate-postit-move"
      style={{
        top: "30%",
        left: "-20%",
        width: 180,
        height: 180,
        transform: "rotate(8deg)",
        animationDuration: "22s",
        animationDelay: "2s",
      }}
    />
    {/* Post-it azul */}
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-blue-200 bg-blue-100 animate-postit-move"
      style={{
        top: "60%",
        left: "-18%",
        width: 120,
        height: 120,
        transform: "rotate(4deg)",
        animationDuration: "16s",
        animationDelay: "4s",
      }}
    />
    {/* Post-it verde */}
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-green-200 bg-green-100 animate-postit-move"
      style={{
        top: "75%",
        left: "-12%",
        width: 160,
        height: 160,
        transform: "rotate(-10deg)",
        animationDuration: "20s",
        animationDelay: "1s",
      }}
    />
    {/* Post-it morado */}
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-purple-200 bg-purple-100 animate-postit-move"
      style={{
        top: "45%",
        left: "-10%",
        width: 110,
        height: 110,
        transform: "rotate(12deg)",
        animationDuration: "19s",
        animationDelay: "3s",
      }}
    />
    {/* Post-it naranja */}
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-orange-200 bg-orange-100 animate-postit-move"
      style={{
        top: "15%",
        left: "-18%",
        width: 100,
        height: 100,
        transform: "rotate(-5deg)",
        animationDuration: "21s",
        animationDelay: "5s",
      }}
    />
    {/* Más post-its para mayor densidad visual */}
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-yellow-100 bg-yellow-50 animate-postit-move"
      style={{
        top: "5%",
        left: "-10%",
        width: 90,
        height: 90,
        transform: "rotate(3deg)",
        animationDuration: "17s",
        animationDelay: "7s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-pink-100 bg-pink-50 animate-postit-move"
      style={{
        top: "80%",
        left: "-22%",
        width: 80,
        height: 80,
        transform: "rotate(-8deg)",
        animationDuration: "15s",
        animationDelay: "6s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-blue-100 bg-blue-50 animate-postit-move"
      style={{
        top: "55%",
        left: "-25%",
        width: 70,
        height: 70,
        transform: "rotate(6deg)",
        animationDuration: "13s",
        animationDelay: "8s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-green-100 bg-green-50 animate-postit-move"
      style={{
        top: "35%",
        left: "-17%",
        width: 60,
        height: 60,
        transform: "rotate(-12deg)",
        animationDuration: "14s",
        animationDelay: "9s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-purple-100 bg-purple-50 animate-postit-move"
      style={{
        top: "65%",
        left: "-13%",
        width: 100,
        height: 100,
        transform: "rotate(15deg)",
        animationDuration: "18s",
        animationDelay: "10s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-orange-100 bg-orange-50 animate-postit-move"
      style={{
        top: "25%",
        left: "-19%",
        width: 85,
        height: 85,
        transform: "rotate(-2deg)",
        animationDuration: "16s",
        animationDelay: "11s",
      }}
    />
    {/* Duplicados para el doble de post-its, con variaciones */}
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-yellow-300 bg-yellow-200 animate-postit-move"
      style={{
        top: "20%",
        left: "-12%",
        width: 100,
        height: 100,
        transform: "rotate(5deg)",
        animationDuration: "19s",
        animationDelay: "12s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-pink-300 bg-pink-200 animate-postit-move"
      style={{
        top: "50%",
        left: "-18%",
        width: 120,
        height: 120,
        transform: "rotate(-6deg)",
        animationDuration: "21s",
        animationDelay: "13s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-blue-300 bg-blue-200 animate-postit-move"
      style={{
        top: "70%",
        left: "-16%",
        width: 90,
        height: 90,
        transform: "rotate(10deg)",
        animationDuration: "15s",
        animationDelay: "14s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-green-300 bg-green-200 animate-postit-move"
      style={{
        top: "40%",
        left: "-14%",
        width: 110,
        height: 110,
        transform: "rotate(-9deg)",
        animationDuration: "18s",
        animationDelay: "15s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-purple-300 bg-purple-200 animate-postit-move"
      style={{
        top: "60%",
        left: "-20%",
        width: 80,
        height: 80,
        transform: "rotate(7deg)",
        animationDuration: "17s",
        animationDelay: "16s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-orange-300 bg-orange-200 animate-postit-move"
      style={{
        top: "35%",
        left: "-21%",
        width: 95,
        height: 95,
        transform: "rotate(-3deg)",
        animationDuration: "20s",
        animationDelay: "17s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-yellow-50 bg-yellow-100 animate-postit-move"
      style={{
        top: "85%",
        left: "-23%",
        width: 75,
        height: 75,
        transform: "rotate(2deg)",
        animationDuration: "14s",
        animationDelay: "18s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-pink-50 bg-pink-100 animate-postit-move"
      style={{
        top: "12%",
        left: "-17%",
        width: 65,
        height: 65,
        transform: "rotate(-11deg)",
        animationDuration: "13s",
        animationDelay: "19s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-blue-50 bg-blue-100 animate-postit-move"
      style={{
        top: "77%",
        left: "-11%",
        width: 105,
        height: 105,
        transform: "rotate(8deg)",
        animationDuration: "16s",
        animationDelay: "20s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-green-50 bg-green-100 animate-postit-move"
      style={{
        top: "28%",
        left: "-24%",
        width: 115,
        height: 115,
        transform: "rotate(-13deg)",
        animationDuration: "22s",
        animationDelay: "21s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-purple-50 bg-purple-100 animate-postit-move"
      style={{
        top: "58%",
        left: "-15%",
        width: 95,
        height: 95,
        transform: "rotate(14deg)",
        animationDuration: "15s",
        animationDelay: "22s",
      }}
    />
    <div
      className="absolute rounded-xl shadow-2xl border-4 border-orange-50 bg-orange-100 animate-postit-move"
      style={{
        top: "42%",
        left: "-13%",
        width: 70,
        height: 70,
        transform: "rotate(-4deg)",
        animationDuration: "18s",
        animationDelay: "23s",
      }}
    />
    <style>{`
      @keyframes postit-move {
        0% { left: -20%; opacity: 0.7; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { left: 110vw; opacity: 0.7; }
      }
      .animate-postit-move {
        animation-name: postit-move;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
    `}</style>
  </div>
);

export default AnimatedPostitsBackground;

import React, { useState } from "react";
import { loginProfe } from "../services/authService";
import AnimatedPostitsBackground from "../components/common/AnimatedPostitsBackground";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // Solo permite el usuario y contraseña definidos
      if (usuario !== "admin" || password !== "Developer2304") {
        throw new Error("Usuario o contraseña incorrectos");
      }
      // Login con Firebase (puedes omitir si solo validas localmente)
      await loginProfe("zapataval2304@gmail.com", password);
      // Redirigir a dashboard (puedes usar useNavigate)
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <AnimatedPostitsBackground />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-sm border border-blue-100 animate-fade-in backdrop-blur-md bg-opacity-90"
      >
        <div className="flex flex-col items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 text-blue-600 mb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <h1 className="text-2xl font-bold text-blue-700 tracking-tight">
            Bitácora: El profe Jaime
          </h1>
        </div>
        <div className="mb-4 relative">
          <label className="block text-sm font-semibold mb-1 text-blue-700">
            Usuario
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="admin"
              autoFocus
              required
            />
          </div>
        </div>
        <div className="mb-4 relative">
          <label className="block text-sm font-semibold mb-1 text-blue-700">
            Contraseña
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m0 0a2 2 0 100-4 2 2 0 000 4zm6-2a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Developer2304"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-2.5 text-blue-400 focus:outline-none"
              tabIndex={-1}
              onClick={() => setShowPassword((v) => !v)}
              aria-label={
                showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.336-3.234.938-4.675M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {error && (
          <div className="mb-3 text-red-600 text-xs text-center animate-pulse">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 shadow mt-2"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              Ingresando...
            </span>
          ) : (
            "Ingresar"
          )}
        </button>
      </form>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 py-12">
      <AnimatedPostitsBackground />
      <main className="relative z-10 w-full max-w-4xl mx-auto">
        <section
          className="bg-white/40 backdrop-blur-2xl rounded-3xl shadow-2xl border border-blue-200 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 flex flex-col items-center animate-fade-in max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl mx-auto"
          style={{
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 w-full mb-10">
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4 text-center md:text-left drop-shadow-xl leading-tight">
                Bitácora <span className="text-yellow-400">El profe Jaime</span>
              </h1>
            </div>
            <div className="flex-1 flex justify-center items-center relative">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <div className="absolute left-8 top-8 w-32 h-32 md:w-44 md:h-44 bg-yellow-200 border-4 border-yellow-300 rounded-xl shadow-xl rotate-[-8deg] z-10 animate-wiggle" />
                <div className="absolute left-0 top-16 w-32 h-32 md:w-44 md:h-44 bg-pink-200 border-4 border-pink-300 rounded-xl shadow-xl rotate-[7deg] z-0 animate-wiggle2" />
                <div className="absolute left-12 top-20 w-32 h-32 md:w-44 md:h-44 bg-blue-200 border-4 border-blue-300 rounded-xl shadow-xl rotate-[3deg] z-20 animate-wiggle3" />
                <div className="absolute left-6 top-32 w-24 h-24 md:w-32 md:h-32 bg-green-200 border-4 border-green-300 rounded-xl shadow-xl rotate-[-4deg] z-30 animate-wiggle4" />
                <div className="absolute left-20 top-10 w-20 h-20 md:w-28 md:h-28 bg-purple-200 border-4 border-purple-300 rounded-xl shadow-xl rotate-[12deg] z-40 animate-wiggle5" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center mb-6">
            <span className="text-2xl md:text-3xl font-bold text-blue-800 text-center drop-shadow-lg animate-fade-in-up">
              ¡Bienvenido! Organiza, estudia y explora tus ideas.
            </span>
          </div>
          <div className="w-full flex flex-col items-center mb-8">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/login";
              }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full px-10 py-4 shadow-xl hover:scale-105 hover:from-green-500 hover:to-blue-600 transition-all duration-200 text-xl animate-bounce-slow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              Descubre cómo funciona
            </a>
          </div>
        </section>
        <style>{`
          @keyframes wiggle { 0%,100%{transform:rotate(-8deg);} 50%{transform:rotate(-12deg);} }
          @keyframes wiggle2 { 0%,100%{transform:rotate(7deg);} 50%{transform:rotate(12deg);} }
          @keyframes wiggle3 { 0%,100%{transform:rotate(3deg);} 50%{transform:rotate(-2deg);} }
          @keyframes wiggle4 { 0%,100%{transform:rotate(-4deg);} 50%{transform:rotate(-8deg);} }
          @keyframes wiggle5 { 0%,100%{transform:rotate(12deg);} 50%{transform:rotate(18deg);} }
          .animate-wiggle { animation: wiggle 2.5s infinite ease-in-out; }
          .animate-wiggle2 { animation: wiggle2 2.8s infinite ease-in-out; }
          .animate-wiggle3 { animation: wiggle3 2.2s infinite ease-in-out; }
          .animate-wiggle4 { animation: wiggle4 2.7s infinite ease-in-out; }
          .animate-wiggle5 { animation: wiggle5 2.9s infinite ease-in-out; }
          .animate-bounce-slow { animation: bounce 2.5s infinite; }
        `}</style>
      </main>
    </div>
  );
};

export default Home;

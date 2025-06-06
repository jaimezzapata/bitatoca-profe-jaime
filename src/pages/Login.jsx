import React, { useState } from 'react';
import { loginProfe } from '../services/authService';

const PostitPattern = () => (
  <div
    aria-hidden
    className="fixed inset-0 -z-10 pointer-events-none"
    style={{ background: "none" }}
  >
    <div
      style={{
        position: "absolute",
        top: "6%",
        left: "8%",
        transform: "rotate(-7deg)",
        width: 180,
        height: 180,
      }}
      className="bg-yellow-100 border-4 border-yellow-200 rounded-xl shadow-2xl"
    />
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "60%",
        transform: "rotate(8deg)",
        width: 220,
        height: 220,
      }}
      className="bg-pink-100 border-4 border-pink-200 rounded-xl shadow-2xl"
    />
    <div
      style={{
        position: "absolute",
        top: "60%",
        left: "15%",
        transform: "rotate(4deg)",
        width: 140,
        height: 140,
      }}
      className="bg-blue-100 border-4 border-blue-200 rounded-xl shadow-2xl"
    />
    <div
      style={{
        position: "absolute",
        top: "70%",
        left: "70%",
        transform: "rotate(-10deg)",
        width: 260,
        height: 260,
      }}
      className="bg-green-100 border-4 border-green-200 rounded-xl shadow-2xl"
    />
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "35%",
        transform: "rotate(12deg)",
        width: 200,
        height: 200,
      }}
      className="bg-purple-100 border-4 border-purple-200 rounded-xl shadow-2xl"
    />
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "80%",
        transform: "rotate(-5deg)",
        width: 120,
        height: 120,
      }}
      className="bg-orange-100 border-4 border-orange-200 rounded-xl shadow-2xl"
    />
  </div>
);

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      let redirectUrl = "/";
      if (usuario === "admin" && password === "Developer2304") {
        // Login admin
        await loginProfe("zapataval2304@gmail.com", password);
        localStorage.setItem("role", "admin"); // <-- Guarda el rol
        redirectUrl = "/panel";
      } else if (usuario === "estudiante" && password === "Estudiante2025") {
        localStorage.setItem("role", "student"); // <-- Guarda el rol estudiante
        redirectUrl = "/vista-estudiante";
      } else {
        throw new Error("Usuario o contraseña incorrectos");
      }
      window.location.href = redirectUrl;
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <PostitPattern />
      <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-sm border border-blue-100 animate-fade-in backdrop-blur-md bg-opacity-90">
        <div className="flex flex-col items-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-blue-600 mb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
          <h1 className="text-2xl font-bold text-blue-700 tracking-tight">Bitácora: El profe Jaime</h1>
        </div>
        <div className="mb-4 relative">
          <label className="block text-sm font-semibold mb-1 text-blue-700">Usuario</label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </span>
            <input
              type="text"
              className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50"
              value={usuario}
              onChange={e => setUsuario(e.target.value)}
              placeholder="admin"
              autoFocus
              required
            />
          </div>
        </div>
        <div className="mb-4 relative">
          <label className="block text-sm font-semibold mb-1 text-blue-700">Contraseña</label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0a2 2 0 100-4 2 2 0 000 4zm6-2a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Developer2304"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-2.5 text-blue-400 focus:outline-none"
              tabIndex={-1}
              onClick={() => setShowPassword(v => !v)}
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.336-3.234.938-4.675M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              )}
            </button>
          </div>
        </div>
        {error && <div className="mb-3 text-red-600 text-xs text-center animate-pulse">{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 shadow mt-2"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
              Ingresando...
            </span>
          ) : 'Ingresar'}
        </button>
      </form>
    </div>
  );
};

export default Login;

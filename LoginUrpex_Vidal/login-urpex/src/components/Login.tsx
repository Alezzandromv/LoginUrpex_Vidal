import React, { useState } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex h-screen bg-[#282A37] text-white">
      {/* IZQUIERDA */}
      <div
        className="w-1/2 relative flex flex-col justify-center pl-24 bg-cover bg-center"
        style={{ backgroundImage: `url('/fondoLogin.png')` }}
      >
        <div className="absolute top-0 right-0 h-full w-16 sm:w-24 md:w-36 bg-gradient-to-l from-[#282A37] to-transparent z-10 pointer-events-none" />
        <img src="/Logo.png" className="w-36 mb-8" alt="Logo" />
        <h3 className="uppercase text-sm font-semibold text-gray-300 mb-2 z-20">
          Únete gratis
        </h3>
        <h1 className="text-4xl font-bold leading-tight mb-4 z-20">
          Egresado Urp accede a <br />
          <span className="text-green-400">beneficios exclusivos</span>
          <br /> que tenemos para ti
        </h1>
        <div className="flex gap-4 z-20 text-md font-semibold">
          <button className="border px-6 py-2 rounded-full hover:bg-white/10 cursor-pointer">
            Beneficios
          </button>
          <button className="bg-green-400 text-[#282A37] px-6 py-2 rounded-full cursor-pointer hover:bg-green-300 transition">
            Membresía
          </button>
        </div>
      </div>

      {/* DERECHA */}
      <div className="w-1/2 bg-[#282A37] flex flex-col justify-center px-24">
        <p className="uppercase text-xl font-medium text-white/40 mb-2">
          Empieza gratis
        </p>
        <h1 className="md:text-6xl font-bold mb-10">
          Ingresa <br /> a tu cuenta<span className="text-green-400">.</span>
        </h1>

        <InputField
          label="Correo"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="tu@correo.com"
          name="email" // Asegúrate de poner un name para distinguir los campos
          icon={FaUser}
        />

        <InputField
          label="Contraseña"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="******************"
          name="password"
          icon={showPass ? FaEyeSlash : FaEye}
          showToggle
          onToggle={() => setShowPass((prev) => !prev)}
          isPasswordShown={showPass}
        />

        <div className="text-sm flex justify-end mb-6">
          <span className="text-gray-400 mr-1">¿Aun no eres miembro?</span>
          <Link to="/register" href="#" className="text-green-400 hover:underline">
            Registrate
          </Link>
        </div>

        <Button
          text="Ingresar"
          onClick={() => console.log("crear cuenta")}
        />
      </div>
    </div>
  );
};

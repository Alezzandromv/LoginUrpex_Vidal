import React, { useState } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { SelectField } from "./SelectedField"; // Puedes crear un SelectField como InputField pero con <select>
import { Link } from "react-router-dom";

export const Register = () => {
    
    const [form, setForm] = useState({
        nombre: "",
        correo: "",
        egreso: "",
        facultad: "",
        carrera: "",
        password: "",
        confirmPassword: "",
      });
    
      const [showPass, setShowPass] = useState(false);
      const [showPass2, setShowPass2] = useState(false);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
      };

  return (
    <div className="flex h-screen bg-[#282A37] text-white">
      {/* IZQUIERDA */}
      <div className="w-2/3 bg-[#282A37] flex flex-col justify-center px-24">
        <p className="uppercase text-xl font-medium text-white/40 mb-2">
          Empieza gratis
        </p>
        <h1 className="md:text-6xl font-bold mb-10">
          Registrate<span className="text-green-400">.</span>
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <InputField
        label="Nombre"
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Alessandro Vidal Chumacero"
      />

      <InputField
        label="Correo"
        type="email"
        name="correo"
        value={form.correo}
        onChange={handleChange}
        placeholder="tu@correo.com"
      />

      <InputField
        label="Año de egreso"
        type="text"
        name="egreso"
        value={form.egreso}
        onChange={handleChange}
        placeholder="2025"
      />

      <SelectField
        label="Facultad"
        name="facultad"
        value={form.facultad}
        onChange={handleChange}
        options={["Ingeniería", "Administración", "Derecho"]}
      />

      <SelectField
        label="Carrera"
        name="carrera"
        value={form.carrera}
        onChange={handleChange}
        options={["Ingeniería Informática", "Ingeniería Industrial", "Derecho"]}
      />

      <InputField
        label="Contraseña"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="********"
        icon={showPass ? FaEyeSlash : FaEye}
        showToggle
        onToggle={() => setShowPass(!showPass)}
        isPasswordShown={showPass}
      />

      <InputField
        label="Confirmar contraseña"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        placeholder="********"
        icon={showPass2 ? FaEyeSlash : FaEye}
        showToggle
        onToggle={() => setShowPass2(!showPass2)}
        isPasswordShown={showPass2}
      />
    </form>

        <div className="text-sm flex justify-end mb-6">
          <span className="text-gray-400 mr-1">¿Ya eres miembro?</span>
          <Link to="/" className="text-green-400 hover:underline">
            Ingresar
          </Link>
        </div>

        <Button
          text="Crear Cuenta"
          onClick={() => console.log("crear cuenta")}
        />
      </div>

      {/* DERECHA */}
      <div
        className="w-1/2 px-20 py-10 relative flex flex-col justify-end items-end pl-24 bg-cover bg-center"
        style={{ backgroundImage: `url('/fondoRegister.png')` }}
      >
        <div className="absolute top-0 left-0 h-full w-16  bg-gradient-to-l from-[#282A37] to-transparent z-10 pointer-events-none" />
        <img src="/Logo.png" className="w-36 mb-8 z-20" alt="Logo" />
      </div>
    </div>
  );
};

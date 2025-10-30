import React from 'react';
import BoliviaFlag from './BoliviaFlag';

const Header: React.FC = () => {
  return (
    <header className="container mx-auto px-4 py-8 md:py-12 text-center text-white">
      <div className="flex justify-center items-center gap-4 mb-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider text-slate-100">
          Seminario e Instituto
          <br />
          Capacitación{' '}
          <span className="text-amber-400">Noviembre</span>
        </h1>
        <div className="w-16 h-auto hidden sm:block">
          <BoliviaFlag />
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-violet-400 font-bold text-lg md:text-xl uppercase">Tema:</h2>
        <p className="text-3xl md:text-4xl text-slate-300 mt-1">
          "El Recogimiento de Israel,{' '}
          <span className="font-semibold text-slate-100">Russell M. Nelson</span>"
        </p>
      </div>
    </header>
  );
};

export default Header;
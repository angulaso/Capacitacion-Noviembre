import React from 'react';
import { ZOOM_REGISTRATION_LINK } from '../constants';
import { ClockIcon, CheckCircleIcon, PaperPlaneIcon } from './icons';

const InfoFooter: React.FC = () => {
  return (
    <footer className="mt-16 md:mt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          
          <div className="bg-amber-300 text-slate-900 p-6 rounded-2xl max-w-md w-full shadow-lg">
            <h2 className="text-2xl font-black text-center mb-4">¿CÓMO PARTICIPAS?</h2>
            <ul className="space-y-3 font-semibold">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-6 h-6 text-slate-800 mt-0.5 flex-shrink-0" />
                <span>ELIGE EL MEJOR HORARIO PARA TÍ.</span>
              </li>
              <li className="flex items-start gap-2">
                <PaperPlaneIcon className="w-6 h-6 text-slate-800 mt-0.5 flex-shrink-0" />
                <span>INGRESA A LA CAPACITACIÓN HACIENDO CLIC EN "INGRESAR" Y REGÍSTRATE.</span>
              </li>
              <li className="flex items-start gap-2">
                <ClockIcon className="w-6 h-6 text-slate-800 mt-0.5 flex-shrink-0" />
                <span>LA CAPACITACIÓN DURA SOLO 30 MINUTOS.</span>
              </li>
            </ul>
          </div>

          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full bg-slate-900 border-4 border-slate-700 flex flex-col items-center justify-center text-center p-4 relative shadow-2xl">
              <span className="text-xs uppercase tracking-widest text-slate-400 absolute top-6">
                Liderar como el Salvador
              </span>
              <div className="text-amber-400 font-black text-6xl">
                Región 1
              </div>
              <div className="font-semibold text-slate-200">
                BOLIVIA - PERÚ 1
              </div>
              <span className="text-xs uppercase tracking-widest text-slate-400 absolute bottom-6">
                3 Nefi 11:15
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default InfoFooter;
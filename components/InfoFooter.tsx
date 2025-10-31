import React from 'react';
import { ZOOM_REGISTRATION_LINK } from '../constants';
import { ClockIcon, CheckCircleIcon, PaperPlaneIcon } from './icons';

const InfoFooter: React.FC = () => {
  return (
    <footer className="mt-16 md:mt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/50 text-slate-200 p-6 rounded-2xl max-w-md w-full shadow-lg">
            <h2 className="text-2xl font-black text-center mb-4 text-white">¿CÓMO PARTICIPAS?</h2>
            <ul className="space-y-3 font-semibold">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>ELIGE EL MEJOR HORARIO PARA TÍ.</span>
              </li>
              <li className="flex items-start gap-3">
                <PaperPlaneIcon className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>INGRESA A LA CAPACITACIÓN HACIENDO CLIC EN "INGRESAR" Y REGÍSTRATE.</span>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>LA CAPACITACIÓN DURA SOLO 30 MINUTOS.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default InfoFooter;
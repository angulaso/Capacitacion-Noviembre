import React from 'react';
import { Speaker } from '../types';
import { ClockIcon, PaperPlaneIcon } from './icons';
import { ZOOM_REGISTRATION_LINK } from '../constants';

interface SpeakerCardProps {
  speaker: Speaker;
}

const BoliviaFlagIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-6 h-auto rounded-sm absolute top-2 right-2 border border-white/20">
        <rect width="900" height="600" fill="#d52b1e"/>
        <rect width="900" height="400" fill="#f8c300"/>
        <rect width="900" height="200" fill="#007934"/>
    </svg>
);

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <div className="bg-slate-900 rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20 hover:scale-105 border border-slate-800">
      <div className="relative">
        <img src={speaker.imageUrl} alt={speaker.name} className="w-full h-auto object-cover aspect-square" />
        {speaker.country === 'bo' && <BoliviaFlagIcon />}
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-slate-100 text-xl">{speaker.name}</h3>
        <div className="flex items-center justify-center text-slate-300 mt-2 text-base font-medium">
          <ClockIcon className="w-4 h-4 mr-1.5" />
          <span>{speaker.time}</span>
        </div>
        <a
          href={ZOOM_REGISTRATION_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 w-full"
        >
          <PaperPlaneIcon className="w-5 h-5" />
          <span>INGRESAR</span>
        </a>
      </div>
    </div>
  );
};

export default SpeakerCard;
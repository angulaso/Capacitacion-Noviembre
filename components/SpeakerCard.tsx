import React from 'react';
import { Speaker } from '../types';
import { ClockIcon, PaperPlaneIcon } from './icons';
import { ZOOM_REGISTRATION_LINK } from '../constants';

interface SpeakerCardProps {
  speaker: Speaker;
}

const PeruFlagIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-6 h-auto rounded-sm absolute top-2 right-2 border border-white/20">
        <rect width="3" height="2" fill="#D91023"/>
        <rect x="1" width="1" height="2" fill="#FFFFFF"/>
    </svg>
);

const BoliviaFlagIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-6 h-auto rounded-sm absolute top-2 right-2 border border-white/20">
        <rect width="900" height="600" fill="#d52b1e"/>
        <rect width="900" height="400" fill="#f8c300"/>
        <rect width="900" height="200" fill="#007934"/>
    </svg>
);

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <div className="bg-slate-900 rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 hover:scale-105">
      <div className="relative">
        <img src={speaker.imageUrl} alt={speaker.name} className="w-full h-auto object-cover aspect-square" />
        {speaker.country === 'bo' ? <BoliviaFlagIcon /> : <PeruFlagIcon />}
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-slate-100 text-xl">{speaker.name}</h3>
        <div className="flex items-center justify-center text-slate-400 mt-1 text-sm">
          <ClockIcon className="w-4 h-4 mr-1.5" />
          <span>{speaker.time}</span>
        </div>
        <a
          href={ZOOM_REGISTRATION_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 w-full"
        >
          <PaperPlaneIcon className="w-5 h-5" />
          <span>INGRESAR</span>
        </a>
      </div>
    </div>
  );
};

export default SpeakerCard;
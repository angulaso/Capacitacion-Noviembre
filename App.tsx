import React from 'react';
import Header from './components/Header';
import InfoFooter from './components/InfoFooter';
import SpeakerCard from './components/SpeakerCard';
import { scheduleData } from './data/scheduleData';
import type { DaySchedule } from './types';

const dayColors = [
  '#3b82f6', // Lunes (blue-500)
  '#8b5cf6', // Martes (violet-500)
  '#a855f7', // Miércoles (purple-500)
  '#d946ef', // Jueves (fuchsia-500)
  '#ec4899', // Viernes (pink-500)
  '#14b8a6', // Sábado (teal-500)
]

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {scheduleData.map((day: DaySchedule, index) => (
            <div key={day.day} className="flex flex-col gap-y-6">
              <div
                className="text-center text-white font-bold py-3 px-4 rounded-xl shadow-lg"
                style={{ backgroundColor: dayColors[index % dayColors.length] }}
              >
                <h3 className="text-xl">{day.day}</h3>
                <p className="text-lg font-normal">{day.date}</p>
              </div>
              <div className="flex flex-col gap-y-6">
                {day.speakers.length > 0 ? (
                  day.speakers.map((speaker) => (
                    <SpeakerCard key={speaker.name} speaker={speaker} />
                  ))
                ) : (
                  <div className="bg-slate-900 rounded-2xl p-4 text-center text-slate-500 h-full flex items-center justify-center">
                    <p className="italic">Sin capacitaciones programadas.</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <InfoFooter />
    </div>
  );
};

export default App;
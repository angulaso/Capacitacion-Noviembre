import type { DaySchedule } from '../types';

const speakerImages: { [key: string]: string } = {
  'Gonzalo Suarez': 'https://i.imgur.com/QOfaG8j.jpeg',
  'Felipe Paredes': 'https://i.imgur.com/KIXt6CH.jpeg',
  'Luis Gonzales': 'https://i.imgur.com/k2m7fym.jpeg',
  'Franz Moya': 'https://i.imgur.com/lJApkS6.jpeg',
  'Angel Laredo': 'https://i.imgur.com/sU16Eu2.jpeg',
  'Abad Bautista': 'https://i.imgur.com/wVbX2b0.jpeg',
  'Hector Quintanilla': 'https://i.imgur.com/Uf74og2.jpeg',
  'Marco Quezada': 'https://i.imgur.com/T0bSg1S.jpeg',
  'Daniel Díaz': 'https://i.imgur.com/pB12J43.jpeg',
  'Jimmy Vasquez': 'https://i.imgur.com/dKXIa5P.jpeg',
  'Moroni Franco': 'https://i.imgur.com/2P6j1gN.jpeg',
  'Alberto G. Lorenzo': 'https://i.imgur.com/tH40KEA.jpeg',
  'Armando Miranda': 'https://i.imgur.com/PVEtL1H.jpeg',
  'Juan Carlos Mendoza': 'https://i.imgur.com/xT7TQT5.jpeg',
  'Edgar Luis García': 'https://i.imgur.com/N4qGf4V.jpeg',
  'Norberto Cuadros': 'https://i.imgur.com/k2A4aYx.jpeg',
  'Ricardo Olortegui': 'https://i.imgur.com/fQ8r1gG.jpeg',
};


export const scheduleData: DaySchedule[] = [
    { 
        day: 'Lunes', 
        date: '3 de Nov', 
        speakers: []
    },
    { 
        day: 'Martes', 
        date: '4 de Nov', 
        speakers: [
            { name: 'Hno. Gonzalo Suarez', time: '17:00 - 17:30', imageUrl: speakerImages['Gonzalo Suarez'], country: 'pe' },
            { name: 'Hno. Felipe Paredes', time: '19:30 - 20:00', imageUrl: speakerImages['Felipe Paredes'], country: 'pe' },
            { name: 'Hno. Edgar Luis García', time: '20:30 - 21:00', imageUrl: speakerImages['Edgar Luis García'], country: 'bo' }
        ]
    },
    { 
        day: 'Miércoles', 
        date: '5 de Nov', 
        speakers: [
            { name: 'Hno. Armando Miranda', time: '16:00 - 16:30', imageUrl: speakerImages['Armando Miranda'], country: 'bo' },
            { name: 'Hno. Daniel Díaz', time: '18:00 - 18:30', imageUrl: speakerImages['Daniel Díaz'], country: 'pe' },
            { name: 'Hno. Juan Carlos Mendoza', time: '18:30 - 19:00', imageUrl: speakerImages['Juan Carlos Mendoza'], country: 'bo' },
            { name: 'Hno. Ricardo Olortegui', time: '21:00 - 21:30', imageUrl: speakerImages['Ricardo Olortegui'], country: 'pe' }
        ]
    },
    { 
        day: 'Jueves', 
        date: '6 de Nov', 
        speakers: [
            { name: 'Hno. Alberto G. Lorenzo', time: '18:00 - 18:30', imageUrl: speakerImages['Alberto G. Lorenzo'], country: 'pe' },
            { name: 'Hno. Angel Laredo', time: '20:00 - 20:30', imageUrl: speakerImages['Angel Laredo'], country: 'bo' },
            { name: 'Hno. Hector Quintanilla', time: '21:00 - 21:30', imageUrl: speakerImages['Hector Quintanilla'], country: 'bo' }
        ]
    },
    { 
        day: 'Viernes', 
        date: '7 de Nov', 
        speakers: [
            { name: 'Hno. Marco Quezada', time: '17:00 - 17:30', imageUrl: speakerImages['Marco Quezada'], country: 'bo' },
            { name: 'Hno. Norberto Cuadros', time: '20:00 - 20:30', imageUrl: speakerImages['Norberto Cuadros'], country: 'pe' },
            { name: 'Hno. Jimmy Vasquez', time: '21:00 - 21:30', imageUrl: speakerImages['Jimmy Vasquez'], country: 'bo' }
        ]
    },
    { 
        day: 'Sábado', 
        date: '8 de Nov', 
        speakers: [
            { name: 'Hno. Luis Gonzales', time: '07:00 - 07:30', imageUrl: speakerImages['Luis Gonzales'], country: 'pe' },
            { name: 'Hno. Abad Bautista', time: '08:00 - 08:30', imageUrl: speakerImages['Abad Bautista'], country: 'bo' },
            { name: 'Hno. Moroni Franco', time: '09:30 - 10:00', imageUrl: speakerImages['Moroni Franco'], country: 'bo' },
            { name: 'Hno. Franz Moya', time: '18:00 - 18:30', imageUrl: speakerImages['Franz Moya'], country: 'bo' }
        ]
    }
];
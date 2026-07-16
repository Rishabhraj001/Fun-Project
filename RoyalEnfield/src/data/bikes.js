// src/data/bikes.js
// Single source of truth for every bike shown across the site.
// Replace the `image` / `gallery` paths with real assets in src/assets/images.
// Nothing else needs to change — every section renders from this array.

const bikes = [
  {
    id: 'hunter-350',
    name: 'Hunter 350',
    tagline: 'Born for the city. Built to escape it.',
    price: '₹1,49,900',
    image: '/src/assets/images/hunter.png',
    gallery: [
      '/src/assets/images/hunter-350-1.png',
      '/src/assets/images/hunter-350-2.png',
      '/src/assets/images/hunter-350-3.png',
    ],
    variants: ['Retro', 'Metro', 'Metro Rebel'],
    features: ['LED Tail Lamp', 'Disc Brake', 'USB Charger', 'Trip Meter'],
    specs: {
      engine: '349cc, Single Cylinder',
      power: '20.2 BHP @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      mileage: '36 kmpl',
      topSpeed: '114 km/h',
      fuelTank: '13 Litres',
      brakes: 'Disc / Drum, Dual Channel ABS',
      suspension: 'Telescopic Front, Twin Tube Emulsion Rear',
      gearbox: '5 Speed',
      cooling: 'Air-Oil Cooled',
    },
    colors: ['#C48B3A', '#1E1E1E', '#7A1F1F', '#3A4A5A'],
    overview:
      'The Hunter 350 is Royal Enfield reimagined for the urban chase — short wheelbase, quick reflexes, and a stance built for tight streets and long nights.',
    performance:
      'The J-series 349cc engine delivers smooth low-end torque, tuned for stop-start city riding without losing highway composure.',
    technology:
      'A round analogue cluster keeps things honest, with an optional Tripper navigation pod for turn-by-turn directions without a phone mount.',
  },
  {
    id: 'classic-350',
    name: 'Classic 350',
    tagline: 'The silhouette that never left.',
    price: '₹1,93,000',
    image: '/src/assets/images/classic.png',
    gallery: [
      '/src/assets/images/classic-350-1.png',
      '/src/assets/images/classic-350-2.png',
      '/src/assets/images/classic-350-3.png',
    ],
    variants: ['Halcyon', 'Signals', 'Dark', 'Chrome'],
    features: ['Tripper Navigation', 'Dual Channel ABS', 'Spoke Wheels', 'Retro Console'],
    specs: {
      engine: '349cc, Single Cylinder',
      power: '20.2 BHP @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      mileage: '35 kmpl',
      topSpeed: '110 km/h',
      fuelTank: '13 Litres',
      brakes: 'Disc / Drum, Dual Channel ABS',
      suspension: 'Telescopic Front, Gas Charged Twin Rear',
      gearbox: '5 Speed',
      cooling: 'Air-Oil Cooled',
    },
    colors: ['#2A2A2A', '#C48B3A', '#425F4A', '#1E1E1E'],
    overview:
      'Unchanged in spirit since 1948, the Classic 350 carries the teardrop tank and thumping exhaust note that defined a century of motorcycling.',
    performance:
      'A relaxed power delivery favours cruising torque over top-end rush — this is a bike for the ride, not the race.',
    technology:
      'Modern switchgear and Tripper-ready console sit quietly inside a body that refuses to look modern.',
  },
  {
    id: 'meteor-350',
    name: 'Meteor 350',
    tagline: 'Effortless miles, easy mind.',
    price: '₹2,19,000',
    image: '/src/assets/images/meteor.png',
    gallery: [
      '/src/assets/images/meteor.png',
      '/src/assets/images/meteor1.png',
      '/src/assets/images/meteor-350-3.png',
    ],
    variants: ['Fireball', 'Stellar', 'Supernova'],
    features: ['Tripper Navigation', 'Semi-Digital Console', 'USB Charger', 'LED Headlamp'],
    specs: {
      engine: '349cc, Single Cylinder',
      power: '20.2 BHP @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      mileage: '35 kmpl',
      topSpeed: '114 km/h',
      fuelTank: '15 Litres',
      brakes: 'Disc / Disc, Dual Channel ABS',
      suspension: 'Telescopic Front, Twin Shock Rear',
      gearbox: '5 Speed',
      cooling: 'Air-Oil Cooled',
    },
    colors: ['#C48B3A', '#425F8A', '#1E1E1E'],
    overview:
      'Royal Enfield\u2019s first true cruiser — a relaxed riding triangle designed for effortless highway stretches.',
    performance:
      'Refined engine mounting and a longer wheelbase smooth out vibrations that used to define the marque.',
    technology:
      'A first-in-segment semi-digital instrument cluster pairs with Tripper for the brand\u2019s most connected ride yet.',
  },
  {
    id: 'bullet-350',
    name: 'Bullet 350',
    tagline: 'The original. Still running.',
    price: '₹1,73,000',
    image: '/src/assets/images/bullet.png',
    gallery: [
      '/src/assets/images/bullet-350-1.png',
      '/src/assets/images/bullet-350-2.png',
      '/src/assets/images/bullet-350-3.png',
    ],
    variants: ['Standard', 'Military'],
    features: ['Case Type Gearbox', 'Twinburst Headlamp', 'Chrome Detailing', 'Wide Tyres'],
    specs: {
      engine: '346cc, Single Cylinder',
      power: '19.1 BHP @ 5250 rpm',
      torque: '28 Nm @ 4000 rpm',
      mileage: '40 kmpl',
      topSpeed: '106 km/h',
      fuelTank: '13 Litres',
      brakes: 'Disc / Drum, Dual Channel ABS',
      suspension: 'Telescopic Front, Twin Coil Rear',
      gearbox: '5 Speed',
      cooling: 'Air Cooled',
    },
    colors: ['#1E1E1E', '#425F4A', '#C48B3A'],
    overview:
      'The longest continuously produced motorcycle in the world, the Bullet still carries the thump that started it all in 1931.',
    performance:
      'A long-stroke engine trades speed for character — unmistakable low-rev torque and an exhaust note copied but never matched.',
    technology:
      'Deliberately analogue: no navigation pod, no digital readout, just a speedometer and an ammeter.',
  },
  {
    id: 'himalayan',
    name: 'Himalayan 450',
    tagline: 'The road ends. You don\u2019t.',
    price: '₹2,85,000',
    image: '/src/assets/images/himalayan.png',
    gallery: [
      '/src/assets/images/himalayan-1.png',
      '/src/assets/images/himalayan-2.png',
      '/src/assets/images/himalayan-3.png',
    ],
    variants: ['Kaza Brown', 'Slate Himalayan Salt', 'Hanle Black'],
    features: ['Showa Suspension', 'TFT Display', 'Turn-by-Turn Nav', 'Switchable ABS'],
    specs: {
      engine: '452cc, Liquid Cooled',
      power: '40 BHP @ 8000 rpm',
      torque: '40 Nm @ 5500 rpm',
      mileage: '30 kmpl',
      topSpeed: '150 km/h',
      fuelTank: '17 Litres',
      brakes: 'Disc / Disc, Switchable ABS',
      suspension: 'Showa 43mm USD Front, Linkage Type Rear',
      gearbox: '6 Speed',
      cooling: 'Liquid Cooled',
    },
    colors: ['#8A6A4A', '#E8E3D8', '#1E1E1E'],
    overview:
      'A ground-up new platform built around one brief: cross a continent without complaint.',
    performance:
      'The Sherpa 450 engine is Royal Enfield\u2019s most powerful production motor, tuned for low-end pull over rocks and sand alike.',
    technology:
      'A round TFT display keeps the retro face but adds turn-by-turn navigation, ride modes, and switchable ABS beneath it.',
  },
  {
    id: 'interceptor-650',
    name: 'Interceptor 650',
    tagline: 'Two cylinders. Zero pretense.',
    price: '₹3,25,000',
    image: '/src/assets/images/interceptor.png',
    gallery: [
      '/src/assets/images/interceptor-650-1.png',
      '/src/assets/images/interceptor-650-2.png',
      '/src/assets/images/interceptor-650-3.png',
    ],
    variants: ['Baker Express', 'Orange Crush', 'Ravishing Red'],
    features: ['Parallel Twin', 'Slip Assist Clutch', 'Dual Discs', 'Pea-Shooter Exhaust'],
    specs: {
      engine: '648cc, Parallel Twin',
      power: '47 BHP @ 7150 rpm',
      torque: '52.3 Nm @ 5150 rpm',
      mileage: '25 kmpl',
      topSpeed: '170 km/h',
      fuelTank: '13.7 Litres',
      brakes: 'Disc / Disc, Dual Channel ABS',
      suspension: 'Telescopic Front, Twin Shock Rear',
      gearbox: '6 Speed',
      cooling: 'Air-Oil Cooled',
    },
    colors: ['#C48B3A', '#7A2F1F', '#1E1E1E'],
    overview:
      'The bike that reintroduced the world to Royal Enfield\u2019s parallel twin heritage, tuned for flat, friendly power.',
    performance:
      'A 270-degree crank gives the twin its distinctive off-beat exhaust note, with linear power all the way to redline.',
    technology:
      'Kept deliberately simple — no ride modes, no traction control, just twin clocks and a slip-assist clutch.',
  },
  
];

export default bikes;

export const getBikeById = (id) => bikes.find((bike) => bike.id === id);

import shoe1 from "../images/bluesh.png";
import shoe2 from "../images/redsh.png";
import shoe3 from "../images/greensh.png";

const shoes = [
  {
    id: 'volt',
    name: 'Nika Volt Strike',
    tag: 'Built for the break-away',
    price: 149,
    sole: '#0d0d0d',
    primary: '#0062ff',
    secondary: '#101010',
    bg: `
      radial-gradient(circle at 85% 85%, rgba(0, 98, 255, 0.25) 0%, transparent 60%),
      linear-gradient(135deg, #050505 0%, #0d0d0d 40%, #1a2205 100%)
    `,
    bgSoft: `
      radial-gradient(circle at 85% 85%, rgba(0, 98, 255, 0.18) 0%, transparent 65%),
      linear-gradient(135deg, #0f1403 0%, #1a2205 100%)
    `,
    text: '#f4f2ea',
    img: shoe1
  },

  {
    id: 'ember',
    name: 'Nike Ember Pulse',
    tag: 'Heat that holds the road',
    price: 169,
    sole: '#1a0d08',
    primary: '#ff2323',
    secondary: '#1a0d08',
    bg: `
      radial-gradient(circle at 85% 85%, rgba(255, 35, 35, 0.25) 0%, transparent 60%),
      linear-gradient(135deg, #120403 0%, #1c0904 40%, #3a1209 100%)
    `,
    bgSoft: `
      radial-gradient(circle at 85% 85%, rgba(255, 35, 35, 0.18) 0%, transparent 65%),
      linear-gradient(135deg, #2a0f06 0%, #3a1209 100%)
    `,
    text: '#fdf1ea',
    img: shoe2
  },

  {
    id: 'glacier',
    name: 'Nike Glacier Drift',
    tag: 'Cold focus, clean lines',
    price: 159,
    sole: '#06141c',
    primary: '#3fff49',
    secondary: '#06141c',
    bg: `
      radial-gradient(circle at 85% 85%, rgba(63, 255, 73, 0.20) 0%, transparent 60%),
      linear-gradient(135deg, #030b10 0%, #05131a 45%, #0a2a3a 100%)
    `,
    bgSoft: `
      radial-gradient(circle at 85% 85%, rgba(63, 255, 73, 0.15) 0%, transparent 65%),
      linear-gradient(135deg, #0a2230 0%, #0e3a52 100%)
    `,
    text: '#eef9fd',
    img: shoe3
  },

  {
    id: 'mono',
    name: 'Nike Mono Form',
    tag: 'Quiet, until it isn’t',
    price: 139,
    sole: '#dae3e9',
    primary: '#025d8f',
    secondary: '#2b2b2b',
    bg: `
      radial-gradient(circle at 85% 85%, rgba(2, 93, 143, 0.20) 0%, transparent 60%),
      linear-gradient(135deg, #0a0a0a 0%, #161616 50%, #2a2a2a 100%)
    `,
    bgSoft: `
      radial-gradient(circle at 85% 85%, rgba(2, 93, 143, 0.15) 0%, transparent 65%),
      linear-gradient(135deg, #161616 0%, #2a2a2a 100%)
    `,
    text: '#f4f2ea',
    img: shoe1
  },
]

export default shoes;
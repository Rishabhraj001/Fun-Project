// src/data/reviews.js
import firstAvatar from '../assets/images/first.png';
import secondAvatar from '../assets/images/second.png';
import thirdAvatar from '../assets/images/third.jpeg';
const reviews = [
  {
    id: 1,
    name: 'Arjun Malhotra',
    bike: 'Himalayan 450',
    rating: 5,
    avatar: firstAvatar,
    review:
      'Rode it from Manali to Leh with zero complaints. The engine pulls at altitude like it was made for it — because it was.',
  },
  {
    id: 2,
    name: 'Meera Iyer',
    bike: 'Classic 350',
    rating: 5,
    avatar: secondAvatar,
    review:
      'It doesn\u2019t try to be modern and that\u2019s exactly why I bought it. Every commute feels like an occasion.',
  },
  {
    id: 3,
    name: 'Rohit Sharma',
    bike: 'Interceptor 650',
    rating: 4,
    avatar: thirdAvatar,
    review:
      'The twin-cylinder note is worth the price alone. Comfortable enough for a six-hour ride without a single ache.',
  },
  {
    id: 4,
    name: 'Ayesha Khan',
    bike: 'Hunter 350',
    rating: 5,
    avatar: firstAvatar,
    review:
      'Perfect city bike — light, quick through traffic, and it still turns heads at every signal.',
  },
  {
    id: 5,
    name: 'Vikram Rathore',
    bike: 'Super Meteor 650',
    rating: 5,
    avatar: thirdAvatar,
    review:
      'Long, low, and unbothered. This is the most relaxed 400km I\u2019ve ever put behind a set of handlebars.',
  },
];

export default reviews;

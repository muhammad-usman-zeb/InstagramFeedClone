export const USERS = [
  {
    name: 'Bill Gates',
    url: require('../assets/people/bill.png'),
  },
  {
    name: 'Elon Musk',
    url: require('../assets/people/elon.jpg'),
  },
  {
    name: 'Big Shaq',
    url: require('../assets/people/shaq.png'),
  },
  {
    name: 'Beatrice Silva',
    url: require('../assets/people/BeatriceSilva.jpeg'),
  },
  {
    name: 'Lonnie Peters',
    url: require('../assets/people/LonniePeters.jpeg'),
  },
  {
    name: 'Wallace Flores',
    url: require('../assets/people/WallaceFlores.jpeg'),
  },
  {
    name: 'Becky Fletchers',
    url: require('../assets/people/BeckyFletchers.jpeg'),
  },
  {
    name: 'Brandon Dunn',
    url: require('../assets/people/BrandonDunn.jpeg'),
  },
];

export const POSTS = [
  {
    postID: 1,
    postedOn: new Date('2022-10-31 10:34:2'),
    imageUrl: require('../assets/postImages/nyc.jpg'),
    likes: 10045,
    caption: 'Hello to the city that never sleeps! 🏙️',
    user: USERS[0],
    comments: [
      {
        user: 'usmanzeb',
        comment: 'Wow! Looks awesome, hope to make there some day 😄',
      },
      {
        user: 'hanzla',
        comment: 'Looks beautiful!',
      },
    ],
    showAllComments: false,
  },
  {
    postID: 2,
    postedOn: new Date('2022-10-28 18:34:2'),
    imageUrl: require('../assets/postImages/paris.jpg'),
    likes: 50430,
    caption: 'The city of love!',
    user: USERS[1],
    comments: [
      {
        user: 'javaid.draws',
        comment: 'The ambience is unreal!',
      },
      {
        user: 'trueGeordie',
        comment: 'Wow! Looks so pretty!',
      },
    ],
    showAllComments: false,
  },
  {
    postID: 3,
    postedOn: new Date('2022-10-28 13:10:27'),
    imageUrl: require('../assets/postImages/rig.jpg'),
    likes: 3743,
    caption: 'Just built my gaming rig! 🎮',
    user: USERS[2],
    comments: [
      {
        user: 'lebron.james',
        comment: 'Shaq! Holy Ma man, this setup is firrree! 🔥 🔥 🔥 🔥',
      },
      {
        user: 'tiger.woods',
        comment: 'What are the specs? Love the rig!',
      },
    ],
    showAllComments: false,
  },
  {
    postID: 4,
    postedOn: new Date('2022-10-27 5:10:22'),
    imageUrl: require('../assets/postImages/montreal.jpg'),
    likes: 2345,
    caption: 'Staying at Montreal today!',
    user: USERS[2],
    comments: [
      {
        user: 'max.millian',
        comment: 'Looks like you are enjoying your stay, Shaq! 😃',
      },
      {
        user: 'lara',
        comment: 'Wow, montreal is so pretty! ❤️',
      },
    ],
    showAllComments: false,
  },
];

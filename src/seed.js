// NOTE: replace 'bmjpkU8bBWRse2JwKgzOGTv5tUI3' with your Firebase auth user id (can be taken from Firebase at the auth section! Look for User UID)
export function seedDatabase(firebase) {
    const users = [
      {
        userId: '65hpT5d3OEYxBdQmnpXTCW0Nqyq1',
        username: 'nh257',
        fullName: 'Nick Himmel',
        emailAddress: 'himmel.nick@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'blue',
        fullName: 'Blue Sky',
        emailAddress: 'blue@sky.com',
        following: [],
        followers: ['65hpT5d3OEYxBdQmnpXTCW0Nqyq1'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'yoshi',
        fullName: 'Kira Yoshi',
        emailAddress: 'kirayoshi@cockatiel.com',
        following: [],
        followers: ['65hpT5d3OEYxBdQmnpXTCW0Nqyq1'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'john',
        fullName: 'John Wayne',
        emailAddress: 'john@wayne.com',
        following: [],
        followers: ['65hpT5d3OEYxBdQmnpXTCW0Nqyq1'],
        dateCreated: Date.now()
      }
    ];
  
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/blue/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'yoshi',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'john',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }
  
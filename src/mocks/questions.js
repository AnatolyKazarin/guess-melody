const questions = [
  {
    type: `genre`,
    genre: `country`,
    answers: [
      {
        src: `https://es31-server.appspot.com/guess-melody/static/music/Dirty_Mac.mp3`,
        genre: `country`
      },
      {
        src: `https://es31-server.appspot.com/guess-melody/static/music/Acoustic_Circles.mp3`,
        genre: `country`
      },
      {
        src: `https://es31-server.appspot.com/guess-melody/static/music/Dub_Spirit.mp3`,
        genre: `reggae`
      },
      {
        src: `https://es31-server.appspot.com/guess-melody/static/music/Weak_Knight.mp3`,
        genre: `electronic`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Devon Church`,
      src: `https://es31-server.appspot.com/guess-melody/static/music/Weak_Knight.mp3`
    },
    answers: [
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/Silent_Partner.jpg`,
        artist: `Silent Partner`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/Devon_Church.jpg`,
        artist: `Devon Church`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/Dan_Lebowitz.jpg`,
        artist: `Dan Lebowitz`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Jesse Gallagher`,
      src: `https://es31-server.appspot.com/guess-melody/static/music/Memories_Station_of_Tomorrow.mp3`
    },
    answers: [
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/sextile.jpg`,
        artist: `Sextiler`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/Text_Me_Records.jpg`,
        artist: `Text Me Records`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/Jesse_Gallagher.jpg`,
        artist: `Jesse Gallagher`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `The Whole Other`,
      src: `https://es31-server.appspot.com/guess-melody/static/music/Renegade_Jubilee.mp3`
    },
    answers: [
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/Quincas_Moreira.jpg`,
        artist: `Quincas Moreira`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/John_Deley_and_the_41_Players.jpg`,
        artist: `John Deley and the 41 Players`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/The_Whole_Other.jpg`,
        artist: `The Whole Other`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Silent Partner`,
      src: `https://es31-server.appspot.com/guess-melody/static/music/Mob_Battle.mp3`
    },
    answers: [
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/John_Deley_and_the_41_Players.jpg`,
        artist: `John Deley and the 41 Players`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/Silent_Partner.jpg`,
        artist: `Silent Partner`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/Devon_Church.jpg`,
        artist: `Devon Church`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Sextiler`,
      src: `https://es31-server.appspot.com/guess-melody/static/music/Azure.mp3`
    },
    answers: [
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/John_Deley_and_the_41_Players.jpg`,
        artist: `John Deley and the 41 Players`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/Endless_Love.jpg`,
        artist: `Endless Love`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/sextile.jpg`,
        artist: `Sextiler`
      }
    ]
  },
  {
    type: `genre`,
    genre: `country`,
    answers: [
      {
        src: `https://es31-server.appspot.com/guess-melody/static/music/Renegade_Jubilee.mp3`,
        genre: `electronic`
      },
      {
        src: `https://es31-server.appspot.com/guess-melody/static/music/Dirty_Mac.mp3`,
        genre: `country`
      },
      {
        src: `https://es31-server.appspot.com/guess-melody/static/music/Memories_Station_of_Tomorrow.mp3`,
        genre: `alternative`
      },
      {
        src: `https://es31-server.appspot.com/guess-melody/static/music/Mob_Battle.mp3`,
        genre: `alternative`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Silent Partner`,
      src: `https://es31-server.appspot.com/guess-melody/static/music/Mob_Battle.mp3`
    },
    answers: [
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/The_Mini_Vandals.jpg`,
        artist: `The Mini Vandals`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/Silent_Partner.jpg`,
        artist: `Silent Partner`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/Freedom_Trail_Studio.jpg`,
        artist: `Freedom Trail Studio`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `The Whole Other`,
      src: `https://es31-server.appspot.com/guess-melody/static/music/Renegade_Jubilee.mp3`
    },
    answers: [
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/Spazz_Cardigan.jpg`,
        artist: `Spazz Cardigan`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/Devon_Church.jpg`,
        artist: `Devon Church`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/The_Whole_Other.jpg`,
        artist: `The Whole Other`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Sextiler`,
      src: `https://es31-server.appspot.com/guess-melody/static/music/Azure.mp3`
    },
    answers: [
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/John_Deley_and_the_41_Players.jpg`,
        artist: `John Deley and the 41 Players`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/sextile.jpg`,
        artist: `Sextiler`
      },
      {
        picture: `https://es31-server.appspot.com/guess-melody/static/artist/Spazz_Cardigan.jpg`,
        artist: `Spazz Cardigan`
      }
    ]
  }
];

const settings = {
  gameTime: 5,
  errorsCount: 3,
};


export {questions, settings};

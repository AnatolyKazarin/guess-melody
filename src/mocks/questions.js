const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://cdn6.sefon.pro/files/prev/83/Zivert%20-%20Life%20%28128%29.mp3`,
        genre: `rock`,
      },
      {
        src: `https://cdn6.sefon.pro/files/prev/83/Zivert%20-%20Life%20%28128%29.mp3`,
        genre: `pop`,
      },
      {
        src: `https://cdn6.sefon.pro/files/prev/83/Zivert%20-%20Life%20%28128%29.mp3`,
        genre: `jazz`,
      },
      {
        src: `https://cdn6.sefon.pro/files/prev/83/Zivert%20-%20Life%20%28128%29.mp3`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://cdn6.sefon.pro/files/prev/83/Zivert%20-%20Life%20%28128%29.mp3`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  },
];

const settings = {
  gameTime: 5,
  errorsCount: 3,
};


export {questions, settings};

let library = {
  songs: {
    s01: {
      id: "s01",
      name: "Money",
      artist: "Pink Floyd",
      album: "Dark Side of the Moon"
    },
    s02: {
      id: "s02",
      name: "Blessings",
      artist: "Chance, The Rapper",
      album: "Colouring Book"
    },
    s03: {
      id: "s03",
      name: "Purple Haze",
      artist: "Jimi Hendrix",
      album: "Are You Experienced"
    }
  },

  playlists: {
    p01: { id: "p01", name: "Coding Jamz", tracks: ["s01", "s03"] },
    p02: { id: "p02", name: "Music to cry to", tracks: ["s02"] }
  },

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  },
  //'Math.floor(x)'is syntax. x represents number you want to round. 'toString(r)' is syntax. r represents numeric value.(2 = binary, 8= octal, 16=hexadecimal) '任意の文字列.substring(x,y)' is syntax, 文字列を分割したり任意の箇所を抽出したりする。xが任意の文字列の開始、yが終了位置。

  printAllSongNames: function() {
    const songIDs = Object.keys(library.songs);  //songIDs = [s01], s02, s03
    console.log(songIDs);
    // for (let i = 0; i < songIDs.length; i++){
    //   console.log(library.songs[songID]["name"]);
    // };
  },


  printSongName: function(songID) {
    // print the name of a song when given its ID
    let songIDs = Object.keys(library.songs);
    if (SongIDs.hasOwnProperty('name'))
  },


  printPlaylistName: function(playlistID) {
    // Print the name of a playlist when given its ID
  },

  printAllPlaylistNames: function() {
    // Print the nmaes of all the playlists
  },

  printPlaylistSongs: function(playlistID) {
    // Print the names of all the songs in whatever playlist id was given
  },

  addSong: function(name, artist, album) {
    // add a new song to the songs object. The song should be its own object,
    // containing a randomly generated id, a name, an artist, and an album
    // console.log to confirm that the song has been added.
  },

  addSongToPlaylist: function(songID, playlistID) {
    // given a songID, add that song to the playlist for the given playlistID
    //console.log the playlist to make sure the song was added.
  },

  addPlaylist: function(name, arrOfSongs) {
    // add a new playlist to the playlist object. it will be
    // containing a randomly generated id, a name, and an array of songs to be added to the playlist
    // console.log to confirm that the playlist has been added.
  }
};

// console.log(Object.keys(library.songs))

// library.addSongToPlaylist('s02', 'p02');

// console.log(library.songs);

//------For check:
console.log(library.printAllSongNames());
// console.log(printSongName(s01));

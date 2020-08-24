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

  printSongName: function(songID) {
    // print the name of a song when given its ID

    console.log(library.songs[songID].name);
    //use brackets for variable here (. for object)
  },

  printAllSongNames: function() {
    //print the names of all the songs to the console

    let songIDs = Object.keys(library.songs); //songIDs = [ 's01', 's02', 's03' ]

    //use for loop
    for (i = 0; i < songIDs.length; i++) {
      console.log(library.songs[songIDs[i]].name);
    } // print [i]th array of songIDs name
  },

  printPlaylistName: function(playlistID) {
    // Print the name of a playlist when given its ID

    console.log(library.playlists[playlistID].name);
  }, //use [] for variable

  printAllPlaylistNames: function() {
    // Print the nmaes of all the playlists

    let playlistIDs = Object.keys(library.playlists);
    //print p01, p02 as array

    for (i = 0; i < playlistIDs.length; i++) {
      console.log(library.playlists[playlistIDs[i]].name);
    }
  },

  printPlaylistSongs: function(playlistID) {
    // Print the names of all the songs in whatever playlist id was given

    let playlistSongs = library.playlists[playlistID].tracks; //returns an array of tracks
    console.log(playlistSongs);

    for (i = 0; i < playlistSongs.length; i++) {
      library.printSongName(playlistSongs[i]);
    } // looping through the array of track
  },

  addSong: function(songName, songArtist, songAlbum) {
    //create a New song object info
    //answer
    let newSong = {
      id: library.generateUid(), //generate newSongID
      name: songName,
      artist: songArtist,
      album: songAlbums
    };

    library.songs[newSong.id] = newSong; //set the location of newSong

    // console.log to confirm that the song has been added.
    console.log(library.songs);
  },

  addSongToPlaylist: function(songID, playlistID) {
    //answer
    this.printPlaylistSongs(playlistID); //print an array of tracks
    library.playlists[playlistID].tracks.push[songID]; //add an songID at the end of the array
    this.printPlaylistSongs(playlistID);

    //console.log the playlist to make sure the song was added.
    console.log(library.playlists);
  },

  addPlaylist: function(playlistName, arrOfSongs) {
    //answer
    //create a new playlist object
    let newPlaylist = {
      id: library.generateUid(), //generate random id
      name: playlistName,
      tracks: arrOfSongs
    };
    library.playlists[newPlaylist.id] = newPlaylist; //set the location of newPlaylist, declare of where I want to put newPlaylist
    this.printAllPlaylistNames();
  }
};

// console.log(Object.keys(library.songs))

// library.addSongToPlaylist('s02', 'p02');

// console.log(library.songs);

// //------For check:
// console.log(library.printAllSongNames());
// console.log(library.printSongName("s01"));
// // console.log(library.printPlaylistName("p01"));
// console.log(library.printAllPlaylistNames());
// console.log(library.printPlaylistSongs("p01"));
// console.log(library.addSong());
console.log(library.addSongToPlaylist("s03", "p03"));

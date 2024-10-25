// main.js
import Song from './Song.js';
import SongPlayer from './SongPlayer.js';

// Khởi tạo danh sách bài hát
const songs = [
    new Song(1, "Song 1", "Artist 1", "3:45", "/mp3/song1.mp3", "img/pic1.jpg"),
    new Song(2, "Song 2", "Artist 2", "4:10", "/mp3/song2.mp3", "img/pic2.jpg"),
    new Song(3, "Song 3", "Artist 3", "2:50", "/mp3/song3.mp3", "img/pic3.jpg"),
    new Song(4, "Song 4", "Artist 4", "3:30", "/mp3/song4.mp3", "img/pic4.jpg")
];

// Lưu danh sách bài hát vào localStorage
localStorage.setItem('songList', JSON.stringify(songs));

// Khởi tạo SongPlayer và tải bài hát
const songPlayer = new SongPlayer();
songPlayer.loadSongs();

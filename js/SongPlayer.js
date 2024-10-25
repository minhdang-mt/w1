// SongPlayer.js
import Song from './Song.js'; // Import lớp Song từ file Song.js

class SongPlayer {
    constructor() {
        this.songs = [];
        this.audioPlayer = document.getElementById('audio-player');
        this.audioSource = document.getElementById('audio-source');
        this.trailerContent = document.getElementById('new-trailer-content');
        this.continueWatchingContent = document.getElementById('continue-watching-content');
        this.stopButton = document.getElementById('stop-button');
        this.stopSymbol = document.querySelector('#stop-button i'); // Nút dừng nhạc
        this.audioPlayerContainer = document.getElementById('audio-player-container'); // Container cho audio player

        // Thêm sự kiện cho nút dừng
        this.stopButton.addEventListener('click', () => {
            if (this.audioPlayer.paused) {
                this.resumeSong(); 
            } else {
                this.stopSong(); 
            }
            if (this.stopSymbol.classList.contains("fa-play")) {
                this.stopSymbol.classList.remove('fa-play'); 
                this.stopSymbol.classList.add('fa-pause');
            } else {
                this.stopSymbol.classList.remove('fa-pause'); 
                this.stopSymbol.classList.add('fa-play');
            }
        });
    }

    addSong(song) {
        this.songs.push(song);
        this.renderSong(song);
        this.renderContinueWatchingItem(song); // Render mục tiếp tục xem
    }

    renderSong(song) {
        const trailerItem = document.createElement('div');
        trailerItem.classList.add('new-trailer__item');
        trailerItem.innerHTML = `
            <img src="${song.image}" alt="Trailer ${song.id}" class="new-trailer__image">
            <div class="new-trailer__overlay">
                <span class="new-trailer__title">${song.title}</span>
                <i class="fa-solid fa-circle-play new-trailer__play" data-url="${song.url}"></i>
            </div>
        `;
        this.trailerContent.appendChild(trailerItem);

        trailerItem.querySelector('.new-trailer__play').addEventListener('click', () => {
            this.playSong(song.url);
        });
    }

    renderContinueWatchingItem(song) {
        const watchingItem = document.createElement('div');
        watchingItem.classList.add('continue-watching__item');
        watchingItem.innerHTML = `
            <img src="${song.image}" alt="${song.title}" class="continue-watching__image">
            <div class="continue-watching__info">
                <h3 class="continue-watching__movie-title">${song.title}</h3>
                <p class="continue-watching__description">${song.artist}.</p>
            </div>
            <i class="fa-solid fa-circle-play continue-watching__play-icon" data-url="${song.url}"></i>
        `;
        this.continueWatchingContent.appendChild(watchingItem);

        watchingItem.querySelector('.continue-watching__play-icon').addEventListener('click', () => {
            this.playSong(song.url);
        });
    }

    playSong(url) {
        this.audioSource.src = url;
        this.audioPlayerContainer.style.display = 'block'; // Hiện thẻ audio
        this.audioPlayer.load(); // Tải lại thẻ audio
        this.audioPlayer.play(); // Phát nhạc
    }

    resumeSong() {
        this.audioPlayer.play();
    }

    stopSong() {
        this.audioPlayer.pause(); 
    }

    loadSongs() {
        const storedSongs = JSON.parse(localStorage.getItem('songList'));
        if (storedSongs) {
            storedSongs.forEach(songData => {
                const song = new Song(songData.id, songData.title, songData.artist, songData.duration, songData.url, songData.image);
                this.addSong(song);
            });
        }
    }
}

// Xuất lớp SongPlayer để sử dụng ở nơi khác
export default SongPlayer;

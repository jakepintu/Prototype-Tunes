// Song
function Song(title, artist, duration) {
	this.title = title;
	this.artist = artist;
	this.duration = duration;
	this.isPlaying = false;
}

Song.prototype.play = function () {
	this.isPlaying = true;
};

Song.prototype.stop = function () {
	this.isPlaying = false;
};

Song.prototype.toHTML = function () {
	let htmlString = `<li`
	if (this.isPlaying) {
		htmlString += ` class="current"`
	}
	htmlString += `>${this.title} - ${this.artist}<span class="duration">${this.duration}</span></li>`;
	return htmlString;
};

// Playlist
function Playlist() {
	this.songs = [];
	this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function (song) {
	this.songs.push(song)
};

Playlist.prototype.play = function () {
	const currentSong = this.songs[this.nowPlayingIndex];
	currentSong.play();
};

Playlist.prototype.stop = function () {
	const currentSong = this.songs[this.nowPlayingIndex];
	currentSong.stop();
};

Playlist.prototype.next = function () {
	this.stop();
	this.nowPlayingIndex++;
	if (this.nowPlayingIndex === this.songs.length) {
		this.nowPlayingIndex = 0;
	}
	this.play();
};

Playlist.prototype.renderInElement = function (list) {
	list.innerHTML = "";
	for (let i = 0; i < this.songs.length; i++) {
		list.innerHTML += this.songs[i].toHTML();
	}
};


const playlist = new Playlist();

const hereComesTheSun = new Song("Here come the sun", "The Beatles", "2:54");
const walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

const playlistElement = document.querySelector('#playlist');

playlist.renderInElement(playlistElement);

const playButton = document.querySelector('#play');
playButton.onclick = function () {
	playlist.play();
	playlist.renderInElement(playlistElement);
}
const nextButton = document.querySelector('#next');
nextButton.onclick = function () {
	playlist.next();
	playlist.renderInElement(playlistElement);
}
const stopButton = document.querySelector('#stop');
stopButton.onclick = function () {
	playlist.stop();
	playlist.renderInElement(playlistElement);
}
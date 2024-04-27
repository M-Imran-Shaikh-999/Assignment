type Album = {
    artist: string;
    title: string;
    tracks?: number;
};

function makeAlbum(artist: string,title: string, tracks?: number): Album {
const album: Album = {
    artist: artist,
    title: title,
};
if (tracks !== undefined) {
    album.tracks = tracks;
}
return album;
}
// Example usage:
const album1: Album =makeAlbum('Atif Aslam', 'Album 1'); 
console.log(album1);
const album2: Album =makeAlbum('Ali zafar', 'Album 2',12); 
console.log(album2);
const album3: Album =makeAlbum('Rahat Fateh Ali khan', 'Album 3',8); 
console.log(album3);


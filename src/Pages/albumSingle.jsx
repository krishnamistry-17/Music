// albumSingle.js

const albumSingle = {
  _id: "6864de81b5cb32f97e53b1b4",
  title: "Adele 21",
  releaseDate: "2023-09-05T00:00:00.000Z",
  albumImages: [
    "https://res.cloudinary.com/dfciwmday/image/upload/v1751441025/music-app/albums/Album%201.png",
  ],
  createdBy: {
    _id: "68636e65f4ca3db21770289a",
    name: "Admin A.",
    email: "admin123@example.com",
  },
  createdAt: "2025-07-02T07:23:45.520Z",
  updatedAt: "2025-07-16T07:17:47.711Z",
  songs: [
    {
      _id: "686f4033b900a11cc49291cc",
      title: "Acoustic Breeze",
      duration: "2:37",
      cloudinaryUrl:
        "https://res.cloudinary.com/dfciwmday/video/upload/v1752121394/music-app/songs/vsbqt6uy7lid1udgwbxc.mp3",
      artistId: "6864cf9a6c6f84ec2f487ebc",
      albumId: "6864de81b5cb32f97e53b1b4",
      uploadedBy: "68636e65f4ca3db21770289a",
      genreId: "686ce04f9effdfc0a9615b5e",
      songImage: [
        "https://res.cloudinary.com/dfciwmday/image/upload/v1752467161/music-app/songs/images/Song%201.jpg",
      ],
    },
    {
      _id: "686f4375b900a11cc4929211",
      title: "Better Days",
      duration: "2:33",
      cloudinaryUrl:
        "https://res.cloudinary.com/dfciwmday/video/upload/v1752122228/music-app/songs/jmvh9wfwknbvgauamplj.mp3",
      artistId: "6864cf9a6c6f84ec2f487ebc",
      albumId: "6864de81b5cb32f97e53b1b4",
      uploadedBy: "68636e65f4ca3db21770289a",
      genreId: "686ce04f9effdfc0a9615b5e",
      songImage: [
        "https://res.cloudinary.com/dfciwmday/image/upload/v1752467434/music-app/songs/images/Song%208.jpg",
      ],
    },
  ],
  artistId: {
    _id: "6864cf9a6c6f84ec2f487ebc",
    name: "Adele",
    bio: "British singer with a powerful, soulful voice.",
    artistImage: [
      "https://res.cloudinary.com/dfciwmday/image/upload/v1751437210/music-app/artists/Artist%202.png",
    ],
  },
};

export default albumSingle;

// {albums.map((album) => (
//   <div key={album._id} style={{ marginBottom: '30px' }}>
//     <div><strong>_id:</strong> {album._id}</div>
//     <div><strong>title:</strong> {album.title}</div>
//     <div><strong>releaseDate:</strong> {album.releaseDate}</div>
//     <div><strong>albumImages:</strong> {album.albumImages.join(', ')}</div>

//     <div><strong>createdBy:</strong></div>
//     <div>— _id: {album.createdBy._id}</div>
//     <div>— name: {album.createdBy.name}</div>
//     <div>— email: {album.createdBy.email}</div>

//     <div><strong>createdAt:</strong> {album.createdAt}</div>
//     <div><strong>updatedAt:</strong> {album.updatedAt}</div>
//     <div><strong>__v:</strong> {album.__v}</div>

//     <div><strong>artistId:</strong></div>
//     <div>— _id: {album.artistId._id}</div>
//     <div>— name: {album.artistId.name}</div>
//     <div>— bio: {album.artistId.bio}</div>
//     <div>— artistImage: {album.artistId.artistImage.join(', ')}</div>

//     <div><strong>songs:</strong></div>
//     {album.songs.map((song) => (
//       <div key={song._id} style={{ paddingLeft: '20px', marginTop: '10px' }}>
//         <div>• _id: {song._id}</div>
//         <div>• title: {song.title}</div>
//         <div>• duration: {song.duration}</div>
//         <div>• cloudinaryUrl: {song.cloudinaryUrl}</div>
//         <div>• artistId: {song.artistId}</div>
//         <div>• albumId: {song.albumId}</div>
//         <div>• uploadedBy: {song.uploadedBy}</div>
//         <div>• createdAt: {song.createdAt}</div>
//         <div>• updatedAt: {song.updatedAt}</div>
//         <div>• genreId: {song.genreId}</div>
//         <div>• songImage: {song.songImage.join(', ')}</div>
//       </div>
//     ))}
//     <hr />
//   </div>
// ))}

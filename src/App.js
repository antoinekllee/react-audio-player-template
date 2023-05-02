import React from 'react';
import './App.css';
import AudioPlayer from './components/AudioPlayer'; // Import AudioPlayer component

// const data = [
//   {
//     title: "Illusions",
//     audioPath: "/assets/music/Illusions.mp3",
//     imagePath: "/assets/music/IllusionsCover.jpg"
//   },
//   {
//     title: "Never Surrender",
//     audioPath: "/assets/music/NeverSurrender.mp3",
//     imagePath: "/assets/music/NeverSurrenderCover.png"
//   },
//   {
//     title: "Soulicious",
//     audioPath: "/assets/music/Soulicious.mp3",
//     imagePath: "/assets/music/SouliciousCover.jpg"
//   }
// ]

function App() {
  return (
    <div className="App">
      <AudioPlayer title="Illusions" audioPath="/assets/music/Illusions.wav" imagePath="/assets/music/IllusionsCover.jpg" />
    </div>
  );
}

export default App;

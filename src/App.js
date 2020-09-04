import React from 'react';
import './App.css';
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video 
        url=""
        channel="valentinmuller"
        description="Yalla Yolo"
        song="99 problems but REACT Aint ONE"
        likes={110}
        messages={465}
        shares={789}
        />
      </div>

      {/*app container */}
      {/*videos */}
      {/*<Video /> */}
      {/*<Video /> */}
      {/*<Video /> */}
      {/*<Video /> */}
    </div>
  );
}

export default App;

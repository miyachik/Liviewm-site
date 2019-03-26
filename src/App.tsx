import React, { Component } from 'react';
import LivePhotoItem from "./components/LivePhotoItem";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LivePhotoItem
          imageURL="https://s3-ap-northeast-1.amazonaws.com/liviewm-dev/articles/images/2nd_SIDE.mov-00m26s02-D51EFD82-103C-4238-ADA8-969747710F9B.JPG"
          videoURL="https://s3-ap-northeast-1.amazonaws.com/liviewm-dev/articles/images/2nd_SIDE.mov-00m26s02-D51EFD82-103C-4238-ADA8-969747710F9B.MOV"
        />
      </div>
    );
  }
}

export default App;

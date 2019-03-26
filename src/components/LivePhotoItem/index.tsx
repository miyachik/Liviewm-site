import * as React from "react";
import * as LivePhotosKit from "livephotoskit";
import { disconnect } from "cluster";
// import styles from "./styles.css";

class LivePhotoItem extends React.Component<
  {
    videoURL: string;
    imageURL: string;
  },
  {}
> {
  componentWillMount() {
    // componentが返すdivが見つからないのでeventを貼る
    document.addEventListener('DOMContentLoaded', () => {
      if(this.props.imageURL){
        const player = LivePhotosKit.createPlayer();
        player.photoSrc = this.props.imageURL;
        player.videoSrc = this.props.videoURL;
        player.style.height = `${1334/2}px`;
        player.style.width = `${750/2}px`;
        const div = document.querySelector('.extralivephotos') as HTMLElement;
        if (div)
          div.appendChild(player);
      }
    })
  }

  render() {
    const { videoURL, imageURL } = this.props;

    return <div className="extralivephotos"></div>;
  }
}

export default LivePhotoItem;

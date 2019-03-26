import * as React from "react";
import LivePhotosKit from "livephotoskit";
// import styles from "./styles.css";

class LivePhotoList extends React.Component<
  {
    videoURL: string;
    imageURL: string;
  },
  {}
> {
  render() {
    const { videoURL, imageURL } = this.props;
    const player = LivePhotosKit.Player(document.querySelector(".extralivephotos") as HTMLElement);
    player.photoSrc = imageURL;
    player.videoSrc = videoURL;

    return <div className="extralivephotos"></div>;
  }
}

export default LivePhotoList;

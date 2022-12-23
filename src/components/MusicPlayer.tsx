import React, { useState } from "react";
import "./css/MusicPlayer.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import MenuIcon from "@material-ui/icons/Menu";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import RepeatIcon from "@material-ui/icons/Repeat";

interface SState{
  song: {
    songTitle: string
    songPlays: string
    songDuration: string
    songAvatar: string
    publishedIn: number
    type: string
    artist?: string
  }[]
}

function MusicPlayer() {
  const [song, setSong] = useState<SState["song"]>([{
    songTitle: "When the lights are down",
    songPlays: "3,415,489",
    songDuration: "4:21",
    songAvatar:
      "https://lastfm.freetls.fastly.net/i/u/ar0/70cef178824a4e9bb0bd8b9cb41a7b39.jpg",
    publishedIn: 1995,
    type: "Album",
    artist: "Kamelot",
  }]);

  const [like, setLike] = useState(false);

  const [play, setPlay] = useState(true);

  const [mute, setMute] = useState(true);

  const isLiked = () => {
    return like ? (
      <FavoriteIcon fontSize="small" style={{ color: "#ff8920" }} />
    ) : (
      <FavoriteBorderIcon fontSize="small" />
    );
  };

  const isPlaying = () => {
    return play ? <PauseIcon /> : <PlayArrowIcon />;
  };

  return (
    <div className="musicPlayer">
      <div className="playerProgress">&nbsp;</div>
      <div className="playerContent">
        <div className="playingSongDetails">
          <span className="songAvt">
            <img src={song[0].songAvatar} />
          </span>
          <span className="detail">
            <span>{song[0].songTitle}</span>
            <span style={{ opacity: 0.4 }}>{song[0].artist}</span>
          </span>
        </div>

        <span className="likeBtn" onClick={() => setLike(!like)}>
          {isLiked()}
        </span>

        <div className="playPauseBtn">
          <span className="shuffle">
            <ShuffleIcon fontSize="small" />
          </span>
          <span className="skipBtn">
            <SkipPreviousIcon fontSize="small" />
          </span>
          <span className="play" onClick={() => setPlay(!play)}>
            {isPlaying()}
          </span>
          <span className="skipBtn">
            <SkipNextIcon fontSize="small" />
          </span>
          <span className="shuffle">
            <RepeatIcon fontSize="small" />
          </span>
        </div>

        <div className="timer">
          <span className="op-4 timeRunning">2:01</span>
          <span className="op-4"> / </span>
          <span className="totalDuration">{song[0].songDuration}</span>
        </div>

        <div className="menuBtns">
          <span className="edit mt--10">...</span>
          <span className="menu">
            <MenuIcon fontSize="small" style={{ padding: "0 20px" }} />
          </span>
          <span onClick={() => setMute(!mute)}>
            {mute ? (
              <VolumeOffIcon fontSize="small" />
            ) : (
              <VolumeUpIcon fontSize="small" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;

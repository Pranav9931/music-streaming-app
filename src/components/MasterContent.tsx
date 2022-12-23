import React, { useState } from "react";
import "./css/MasterContent.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import ShareIcon from "@material-ui/icons/Share";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useTranslation } from "react-i18next";
import TimerIcon from "@material-ui/icons/Timer";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

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

function MasterContent() {
  const { t } = useTranslation();
  let count = 1;


  const [songs, setSongs] = useState<SState["song"]>([
    {
      songTitle: "When the lights are down",
      songPlays: "3,415,489",
      songDuration: "4:21",
      songAvatar:
        "https://lastfm.freetls.fastly.net/i/u/ar0/70cef178824a4e9bb0bd8b9cb41a7b39.jpg",
      publishedIn: 1995,
      type: "Album",
      artist: "kamelot"
    },
    {
      songTitle: "The Hunting",
      songPlays: "3,415,489",
      songDuration: "4:21",
      songAvatar:
        "https://lastfm.freetls.fastly.net/i/u/ar0/70cef178824a4e9bb0bd8b9cb41a7b39.jpg",
      publishedIn: 1995,
      type: "Album",
      artist: "kamelot"
    },
    {
      songTitle: "March of Mephisto",
      songPlays: "3,415,489",
      songDuration: "4:21",
      songAvatar:
        "https://i.scdn.co/image/ab67616d0000b273fce4f69ac6649d8bfb408228",
      publishedIn: 1995,
      type: "Album",
      artist: "kamelot"
    },
    {
      songTitle: "Forever",
      songPlays: "3,415,489",
      songDuration: "4:21",
      songAvatar:
        "https://i.scdn.co/image/ab67616d0000b273fce4f69ac6649d8bfb408228",
      publishedIn: 1995,
      type: "Album",
      artist: "kamelot"
    },
    {
      songTitle: "When the lights are down",
      songPlays: "3,415,489",
      songDuration: "4:21",
      songAvatar:
        "https://lastfm.freetls.fastly.net/i/u/ar0/70cef178824a4e9bb0bd8b9cb41a7b39.jpg",
      publishedIn: 1995,
      type: "Album",
      artist: "kamelot"
    },
  ]);

  /* 
    To interact with the backend...
    const Details = async () => {
      const response = await fetch("ServerAddress | api address along with : ArtistId");
      const results = awiat response.json();
      if (results) setSongs((prevSongs) => [...prevSongs, results]);
      else return;
    }
    
  */

    const [album, setAlbums] = useState([
      {
        albumTitle: "Karma",
        albuPlays: "3,415,489",
        albumDuration: "4:21",
        albumAvatar:
          "https://lastfm.freetls.fastly.net/i/u/ar0/70cef178824a4e9bb0bd8b9cb41a7b39.jpg",
        publishedIn: 1995,
        type: "Album",
        artist: "kamelot"
      },
      {
        albumTitle: "Karma",
        albuPlays: "3,415,489",
        albumDuration: "4:21",
        albumAvatar:
          "https://lastfm.freetls.fastly.net/i/u/ar0/70cef178824a4e9bb0bd8b9cb41a7b39.jpg",
        publishedIn: 1995,
        type: "Album",
        artist: "kamelot"
      },
      {
        albumTitle: "Karma",
        albuPlays: "3,415,489",
        albumDuration: "4:21",
        albumAvatar:
          "https://lastfm.freetls.fastly.net/i/u/ar0/70cef178824a4e9bb0bd8b9cb41a7b39.jpg",
        publishedIn: 1995,
        type: "Album",
        artist: "kamelot"
      },
      {
        albumTitle: "Karma",
        albuPlays: "3,415,489",
        albumDuration: "4:21",
        albumAvatar:
          "https://lastfm.freetls.fastly.net/i/u/ar0/70cef178824a4e9bb0bd8b9cb41a7b39.jpg",
        publishedIn: 1995,
        type: "Album",
        artist: "kamelot"
      },
      {
        albumTitle: "Karma",
        albuPlays: "3,415,489",
        albumDuration: "4:21",
        albumAvatar:
          "https://lastfm.freetls.fastly.net/i/u/ar0/70cef178824a4e9bb0bd8b9cb41a7b39.jpg",
        publishedIn: 1995,
        type: "Album",
        artist: "kamelot"
      },
    ])

    function getAlbums(){
      return album.map((album) => {
        return (
           <div className="albums">
             <img src={album.albumAvatar} />
             <div className="albumDetails">
               <span className="alb-title">
                 {album.albumTitle}
               </span>

               <span className="alb-detail">
                 {album.artist}
                 <span className="bulletPoint">&nbsp;</span>
                 {album.type}
               </span>

               <span className="albPlayBtn">
                 <PlayArrowIcon />
               </span>
             </div>
             
           </div>
          
        )
       })
    }


  return (
    <div className="MasterContent">
      <div className="bannerImg">
        <div className="gradientLayer">
          <span className="bandName">Kamelot</span>
          <div>
            <span className="bandDetails">28k+ Followers</span>
            <button></button>
            <span className="bandDetails">284,336 monthly listeners</span>
          </div>
        </div>
      </div>

      {/* After Banner */}

      <div className="songsPanel">
        <div className="usefulBtn">
          <span className="playBtn">
            <PlayArrowIcon />
          </span>
          <div className="btnRt">
            <ShuffleIcon className="rtBtn" fontSize="small" />
            <ShareIcon className="rtBtn" fontSize="small" />
            <FavoriteIcon className="rtBtn" fontSize="small" />
            <div className="rtBtn">
              <PersonOutlineIcon fontSize="small" /> &nbsp; Follow
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="songSection">
          <span className="popularSong">{t("Popular Songs")}</span>
          <span className="seeMore">See More</span>
        </div>
        <div className="songs">
          <div className="wrap">
            <span>#TITLE</span>
            <span>PLAYS</span>
            <span>
              <TimerIcon />
            </span>
          </div>

          <div className="songWrapper">
            {songs.map((song) => {
              return (
                <div className="song" key = {count}>
                  <div className="wrapElements">
                    {count++}
                    <img src={song.songAvatar} />
                    <div className="songTitle_Date_Type">
                      <span className="songTitle">{song.songTitle}</span>
                      <span className="publishDate">
                        <span>{song.publishedIn}</span>
                        <span className="bulletPoint"></span>
                        <span>{song.type}</span>
                      </span>
                    </div>
                  </div>
                  <span className="NoofPlays">{song.songPlays}</span>
                  <div className="songDuration">{song.songDuration}</div>
                  <div className="editOptions">
                    <FavoriteBorderIcon fontSize="small" />
                    <div className="edit">...</div>
                  </div>


                </div>
              );
            })}
          </div>
        </div>

        
        <div className="albumSection">
          <div className="songSection" style={{marginTop: "-20px"}}>
            <span className="popularSong">{t("Popular Albums")}</span>
            <span className="seeMore">Explore Discography</span>
          </div>
          <div className="albumContent">
            {getAlbums()}
          </div>
            
        </div>


      </div>
    </div>
  );
}

export default MasterContent;

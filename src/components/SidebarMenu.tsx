import React, {useState} from "react";
import "./css/SidebarMenu.css";
import playStore from "../images/Google_Play_Arrow_logo.png";
import appStore from "../images/App-Store-Logo.png";

import { useTranslation } from "react-i18next";

import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AlbumIcon from "@material-ui/icons/Album";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import GetAppIcon from "@material-ui/icons/GetApp";
import FlagIcon from "@material-ui/icons/Flag";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

function SidebarMenu() {
  const { t } = useTranslation();

  return (
    <div className="sidebarMenu">
      <div className="wrapSidebar">
        <ul className="sideMenus">
          <li>
            <MusicNoteIcon fontSize="small" /> &nbsp;{t("Bands")}
          </li>
          <li>
            <AlbumIcon fontSize="small" /> &nbsp;{t("Albums")}
          </li>
          <li>
            <QueueMusicIcon fontSize="small" /> &nbsp;{t("Playlists")}
          </li>
          <li>
            <FavoriteBorderIcon fontSize="small" /> &nbsp;{t("Liked")}
          </li>
          <li>
            <PersonOutlineIcon fontSize="small" /> &nbsp;{t("Following")}
          </li>
        </ul>

        <ul className="sideOptions">
          <li>{t("Popular")}</li>
          <li>{t("About")}</li>
          <li>{t("Discography")}</li>
          <li>{t("Videos")}</li>
          <li>{t("Reviews")}</li>
        </ul>
        <div className="sidebarBtn">
          <button>
            <div>
              <GetAppIcon
                fontSize="small"
                style={{ marginRight: 6, color: "#ff8320" }}
              />{" "}
              {t("Download App")}
            </div>
            <div>
              <img id="btnImg" src={playStore} />
              <img id="btnImg" src={appStore} />
            </div>
          </button>
          <button>
            <div>
              <FlagIcon fontSize="small" style={{ marginRight: 6 }} />{" "}
              {t("English")}
            </div>
            <div>
              <KeyboardArrowDown fontSize="small" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}


export default SidebarMenu;

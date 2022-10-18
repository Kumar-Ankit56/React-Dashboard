import React from "react";
import "./Inbox.css";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import RefreshIcon from '@mui/icons-material/Refresh';

export default function Inboxmain() {
  return (
    <div>
      <div className="inboxmainright">
        <div className="searchmain">
          <div className="searchmaininteranl">
            <div className="searchiconinbox">
              <YoutubeSearchedForIcon />
            </div>
            <input
              type="search"
              className="searchboxinboox"
              placeholder="search mail"
            />
          </div>
        </div>
        <hr />
        <div className="refercheck">
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="referbtn">
            <button className="btn-ref"><RefreshIcon/>
            </button>
            <button className="vertical-col">
              <MoreVertOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

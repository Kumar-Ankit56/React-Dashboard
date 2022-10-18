import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";
import ModeIcon from "@mui/icons-material/Mode";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import CircleIcon from "@mui/icons-material/Circle";
import "./Inbox.css";

export default function Sidecontent() {
  return (
    <div>
      <div className="topside">
        <button className="compose">Compose</button>
      </div>
      <div className="topnextside">
        <div className="topextcontent">
          <div className="inboxcontent">
            <a href="" className="inbox">
              <div className="mui targ">
                <MailIcon />
              </div>
              <div className="con">
                <span className="conspan">Inbox</span>
              </div>
              <span className="conspan">
                <span>3</span>
              </span>
            </a>
            <a href="" className="">
              <div className="mui targ">
                <SendIcon />
              </div>
              <div className="con">
                <span className="conspan">Sent</span>
              </div>
            </a>
            <a href="" className="">
              <div className="mui targ">
                <ModeIcon />
              </div>
              <div className="con">
                <span className="conspan">Draft</span>
              </div>
              <span className="conspan">
                <span>4</span>
              </span>
            </a>

            <a href="" className="">
              <div className="mui targ">
                <StarBorderIcon />
              </div>
              <div className="con">
                <span className="conspan">Starred</span>
              </div>
            </a>
            <a href="" className="">
              <div className="mui targ">
                <ReportGmailerrorredIcon />
              </div>
              <div className="con">
                <span className="conspan">Spam</span>
              </div>
              <span className="conspan">
                <span>4</span>
              </span>
            </a>

            <a href="" className="">
              <div className="mui targ">
                <DeleteIcon />
              </div>
              <div className="con">
                <span className="conspan">Trash</span>
              </div>
            </a>
          </div>
          <h6>Label</h6>
          <div className="lastnextSide">
            <a href="" className="lastIndex">
              <div className="con">
                <CircleIcon />
              </div>
              <div className="brie">
                <span>Persoanl</span>
              </div>
            </a>
            <a href="" className="lastIndex">
              <div className="con">
                <CircleIcon />
              </div>
              <div className="brie">
                <span>Private</span>
              </div>
            </a>
            <a href="" className="lastIndex">
              <div className="con">
                <CircleIcon />
              </div>
              <div className="brie">
                <span>Company</span>
              </div>
            </a>
            <a href="" className="lastIndex">
              <div className="con">
                <CircleIcon />
              </div>
              <div className="brie">
                <span>Important</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

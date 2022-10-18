import React from "react";
import "./Inbox.css";
import Inboxmain from "./Inboxmain";

import Sidecontent from "./Sidecontent";

export default function Inbox() {
  return (
    <div>
      <main>
        <div className="inboxmain">
          <div className="sideinbox">
            <Sidecontent />
          </div>
          <div className="sidemain">
            <Inboxmain />
          </div>
        </div>
      </main>
    </div>
  );
}

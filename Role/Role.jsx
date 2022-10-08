import React from "react";
import "./Role.css";
import Topdetails from "../PermissionList/Topdetails";
import TableList from "./TableList";

import Gridcard from "./Gridcard";
import Card from "./Card";

export default function Role() {
  const topdetailsdata = {
    heading: "Role List",
    para: "A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need",
  };
  const totaluserwithrole = {
    heading: "Total users with their roles",
    para: "Find all of your company’s administrator accounts and their associate roles.",
  };

  const carddetails1 = {
    diff: "Admistration",
    img1: "/1.png",
    img2: "/6.png",
    img3: "/5.png",
    img4: "/8.png",
  };
  const carddetails2 = {
    diff: "User",
    img1: "/1.png",
    img2: "/6.png",
    img3: "/5.png",
    img4: "./8.png",
  };
  const carddetails3 = {
    diff: "Manger",
    img1: "/1.png",
    img2: "/6.png",
    img3: "/5.png",
    img4: "./8.png",
  };
  const carddetails4 = {
    diff: "Support",
    img1: "/1.png",
    img2: "/6.png",
    img3: "/5.png",
    img4: "./8.png",
  };
  const carddetails5 = {
    diff: "Restricted User",
    img1: "/1.png",
    img3: "/3.png",
    img2: "/6.png",
    img4: "./8.png",
  };
  const carddetails6={

  }
  return (
    <div>
      <main className="mainWidth">
        <div className="mainclasscontainer">
          <Topdetails {...topdetailsdata} />
          <div className="GridLayout-Structre">
            <Gridcard {...carddetails1} />
            <Gridcard {...carddetails2} />
            <Gridcard {...carddetails3} />
            <Gridcard {...carddetails4} />
            <Gridcard {...carddetails5} />
            <Card/>
          </div>
          <div>
            {" "}
            <Topdetails {...totaluserwithrole} />
          </div>
        </div>
        <div className="mainclasscontainer">
          <TableList />
        </div>
      </main>
    </div>
  );
}

// <Gridcard {...carddetails6} />
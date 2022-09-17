import React from "react";
import "./Homecontent.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import TimelineIcon from "@mui/icons-material/Timeline";

export default function Homecontent() {
  return (
    <div>
      <div className="homecontent">
        <div className="wrraper">
          <div className="toppartwrraper">
            <div className="salesinfo">
              <h4>Sales Overview</h4>
              <p>
                Total 42.5k Sales <span>+18% <KeyboardArrowUpOutlinedIcon className="im"/></span>
                
              </p>
            </div>
            <div className="verticalrate">
                <MoreVertOutlinedIcon />
              </div>
          </div>
          <div className="buttonwrraper">
            <div className="content1">
              <div className="righticon">
                <Person2OutlinedIcon />
              </div>
              <div className="salesinfo1">
              <h3>8,458</h3>
              <p>Customers</p>
              </div>
            </div>
            <div className="content1">
              <div className="righticony">
                <BarChartIcon />
              </div>
              <div className="salesinfo1">
              <h3>$28.5k</h3>
              <p>Tota Profit</p>
              </div>
            </div>
            <div className="content1">
              <div className="righticonb">
                <TimelineIcon />
              </div>
              <div className="salesinfo1">
              <h3>2,450k</h3>
              <p>Transaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

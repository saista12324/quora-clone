import { Avatar } from "@material-ui/core";
import React from "react";


import "./css/QuoraBox.css";

function QuoraBox (){
    return (
    <div className="quoraBox">
    <div className="quoraBox__info">
       <Avatar scr="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDZeXOmCNfce1qqVCyrMpiTGGsFbOvOek9g&usqp=CAU"/>
    </div>
    <div className="quoraBox__quora">
       <h5>what is your questions or link</h5>
    </div>
    </div>
  );
}

export default QuoraBox;

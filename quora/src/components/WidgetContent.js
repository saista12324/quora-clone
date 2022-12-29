import React from 'react';
import "./css/WidgetContent.css";

function  WidgetContent (){
    return(
        <div className=" widget__contents">
        <div className="widget__content">
          <img
            src="https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg.jpg"
            alt=""
          />
   
          <div className="widget__contentTitle">
            <h5>Mobile App Programmer</h5>
            <p>The best Mobile App Development Company</p>
          </div>
        </div>
      </div>


    );

}

export default WidgetContent;
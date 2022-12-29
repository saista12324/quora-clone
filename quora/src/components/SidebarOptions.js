
import { Add } from '@material-ui/icons';
import React from 'react';
import './css/SidebarOptions.css';
function SidebarOptions () {
    return(
        <div className="sidebarOptions">
        <div className="sidebarOption">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZZ3l_smbRoh70yx-IzQmfgs9pKheLzGiXw&usqp=CAU"
            alt=""
          />
          <p>History</p>
        </div>
  
        <div className="sidebarOption">
          <img
            src="https://sabpaisa.in/wp-content/uploads/2022/01/zero-investment-business-banner-image.jpeg"
            alt=""
          />
  
          <p>Business</p>
        </div>
        <div className="sidebarOption">
          <img
            src="https://www.yale-nus.edu.sg/psychology/wp-content/uploads/sites/24/2021/11/Physical-sciences-banner-standard-mobile.jpeg"
            alt=""
          />
          <p>Psychology</p>
        </div>
  
        <div className="sidebarOption">
          <img
            src="https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FDwnImaevnRnK9Iu8b94uXGe8uao%3D%2F864x648%2Fimages.kitchenstories.io%2FwagtailOriginalImages%2FA1094-photo-final-badge.jpg&w=1440&q=90"
            alt=""
          />
          <p>Cooking</p>
        </div>
  
        <div className="sidebarOption">
          <img
            src="https://www.91-cdn.com/hub/wp-content/uploads/2022/11/Music-streaming-1200x675.jpeg"
            alt=""
          />
          <p>Music</p>
        </div>
  
        <div className="sidebarOption">
          <img
            src="https://newsonair.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-10-at-3.55.44-PM1.jpeg"
            alt=""
          />
          <p>Science</p>
        </div>
  
        <div className="sidebarOption">
          <img
            src="https://www.shutterstock.com/image-vector/people-connecting-jigsaw-pieces-head-260nw-1184139997.jpg"
            alt=""
          />
          <p>Health</p>
        </div>
  
        <div className="sidebarOption">
          <img
            src="https://images.pexels.com/photos/918281/pexels-photo-918281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <p>Movies</p>
        </div>
  
        <div className="sidebarOption">
        <img
        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388"
        alt=""
      />
          <p>Technology</p>
        </div>
  
        <div className="sidebarOption">
          <img
            src="https://thumbs.dreamstime.com/b/back-to-school-supplies-books-red-apple-green-background-still-life-alarm-clock-copy-space-137386326.jpg"
            alt=""
          />
          <p>Education</p>
        </div>
        <div className="sidebarOption">
          <Add />
          <p className="text">Discover Spaces</p>
        </div>
      </div>
    )
}
export default SidebarOptions;
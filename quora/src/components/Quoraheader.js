import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import "./css/Quoraheader.css";
import "./API/Data.json";
import {
  AssignmentTurnedInOutlined,
  ExpandMore,
  // Close,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,

} from "@material-ui/icons";
import { Avatar, Button ,Input} from  "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Link } from "react-router-dom";
function Quoraheader() {
    const [isModalOpen, setIsModalOpen ] = useState(false);
    const [inputUrl, setInputUrl] = useState("");

    const Close = <CloseIcon />;
 
  return (
      <div className="quora">
        <div className="quora-container">
          <div className="quoralogo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png "
              alt="logo"
            />
          </div>
          <div className="qHeader__icons">
            <div className="qHeader__icon">
            <Link to="/"><HomeIcon  /></Link>
            </div>
           <div className="qHeader__icon">
              <Link  to="/Follower"><FeaturedPlayListOutlinedIcon /></Link>
            </div>
            <div className="qHeader__icon">
              <Link to ="Answer"><AssignmentTurnedInOutlined /></Link>
            </div>
            <div className="qHeader__icon">
              <Link to="Public"><PeopleAltOutlined /></Link>
            </div>
            <div className="qHeader__icon">
             <Link to="Notification"><NotificationsOutlined /></Link>
            </div>
          </div>
          <div className="qHeader__input">
            <Search />
            <input type="text" placeholder="Search questions" />
          </div>
          <div className="qHeader_Rem">
             <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDZeXOmCNfce1qqVCyrMpiTGGsFbOvOek9g&usqp=CAU"/>
             <Button className="qbutton" onClick={() => setIsModalOpen (true)}> ADD QUESTIONS</Button>
        <Modal
        open={isModalOpen}
        closeIcon={Close}
        onClose={() => setIsModalOpen(false)}
        closeOnEsc
        center
        closeOnOverlayClick={false}
        styles={{
            overlay:{
                height: "auto",
            },
        }}
        >
         <div className="modal__title">
          <h5>Add Question</h5>
          <h5>Share Link</h5>
         </div>

         <div className="modal__info">
         <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDZeXOmCNfce1qqVCyrMpiTGGsFbOvOek9g&usqp=CAU" className="avatar"/>
         <div className="modal__scop">
          <PeopleAltOutlined/>
          <p>Public</p>
          <ExpandMore/>
         </div>
         </div>
         <div className="modal__Field">
          
          <Input
          type="text" placeholder="start your question with  'what', 'how', 'why', ect"/>
          <div style={{
            display:"flex",
            flexDirection:"column",
            }}>
            <Input type = "test"
              value = {inputUrl}
              onChange = {(e)=> setInputUrl(e.target.value)}
             style={{
                margin: "5px 0px",
                border: "1px solid lightgray",
                padding: "10px",
                outline:"2px solid #000",
             }}
            placeholder="Optional: include a link that gives context" />
            
            {inputUrl !== "" && <img 
            style={{
                height:"40vh",
                objectFit:"contain",
            }}
            src={inputUrl}  alt= 'displayimage'/>

            }
            
            </div>
          </div>
     <div className="modal__buttons">
      <Button className="cancel" onClick={() => setIsModalOpen (false)}>
       cancel
      </Button>

      <Button  type="Submit" className="add" onClick={() => setIsModalOpen (false)}>
       Add Question
      </Button>

     </div>
        
         
       </Modal>
          </div>
        </div>
      </div>
    );
  }
  
  export default Quoraheader;
  
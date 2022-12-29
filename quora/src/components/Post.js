import { Avatar, Button } from '@material-ui/core';
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOutlined, ShareOutlined,   } from '@material-ui/icons';
import React, { useState } from 'react';
import './css/Post.css';
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "@material-ui/icons/Close";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import  Data  from  './API/Data.json';
function Post () {
  
  const [isModalOpen, setIsModalOpen ] = useState (false);
  const Close = <CloseIcon />;
  
  return(
     <div className="post">
     <div className="post__info">
         <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDZeXOmCNfce1qqVCyrMpiTGGsFbOvOek9g&usqp=CAU"/>
         <h4>Saista</h4>
         <small>Timestamp</small>
  </div>
  <div className="post__body">
  <div className="post__question" >
      {
         Data.question.map((result)=>(<p title={"question Id :"+result.id}>{result.question}</p>))
     }
     
     <button className="post__btnAnswer" onClick={()=> setIsModalOpen (true)}>Answers</button>
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
      <div className='modal__question'>
       <h1>THIS IS TEST QUESTION</h1>
       <p>ASKED BY{""}<span className='name'>username</span>on{""}
       <span  className='name' >Timestamp</span></p>
       
      </div>
      <div className='modal__answer'>
        <ReactQuill placeholder='Enter your answer'/>
      </div>
      <div className="modal__buttons">
      
      <Button className="cancel" onClick={() => setIsModalOpen (false)}>
       cancel
      </Button>

      <Button  type="Submit" className="add" onClick={() => setIsModalOpen (false)}>
       Add Answers
      </Button>
      
      </div>
     </Modal>
     </div>
     </div>
  <div className="post__footer">
        <div className="post__footerActions">
       <ArrowUpwardOutlined/>
       <ArrowDownwardOutlined/>
  </div>
         <RepeatOutlined/>
        <ChatBubbleOutlineOutlined/>
      <div className="post__footerLeft">
             <ShareOutlined/>
             <MoreHorizOutlined/>
      </div>
  </div>
      <p style={{
        color:"rgba(0,0,0,0.5)",
        fontSize:"12px",
        fontWeight:"bold",
        margin:"10px,0",
      }}>1 Answer</p>
    <div 
      style={{
        margin: "5px 0px 0px 0px",
        padding:"5px 0px 0px 20px",
        borderTop:"1px solid lightgray",

      }}
     className="post__answer"></div>
<div style={{
        display:"flex",
        flexDirection:"column",
        width:"100%",
        padding:"10px 5px",
        borderTop:"1px solid lightgray",

}} className="post-answer-container">
    <div style={{
        display:"flex",
        alignItems:"center",
             marginBottom:"10px",
            fontSize:"12px",
         fontWeight:"600",
         color:"#888",   
       
        padding:"10px 5px",
        

}} className ="post-answered">
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Zjza79x9UE0J92hTTEH8u_RFjZ7wE7NraAbt4ICD&s"/>
      <div style={{
          margin:"0px 10px",
      }} className="post-info">
           <p> Harry </p>
         <span>Timestamp</span>
      </div>
    </div>

       <div className="post-answer">{
        Data.question.map((result)=>(<p title={"question Id :"+result.id}>{result.answer}</p>))
    }
    
    
    
    </div>
   </div>
</div>

    );
}
 export default Post;
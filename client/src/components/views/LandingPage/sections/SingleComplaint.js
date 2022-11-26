import React from 'react'
import { Comment, Avatar} from 'antd';
function SingleComplaint(props) {
    //console.log("single",props.complaint.dept)
    return (
        <div>
            <Comment style={{fontSize:"20px"}}
                avatar={
                    <Avatar
                        src={props.complaint.writer.image}
                        alt="image"
                    />
                }
                content={
                    <div>
                     <div style={{fontSize:"20px", fontWeight: 'bold'}}>{props.complaint.writer.name}</div>
                      <div style={{display:"flex", fontSize:"15px", marginTop:"2px", marginBottom:"2px", color:"red"}}>
                         RollNo :
                         <div style={{marginLeft:"2px"}}>{props.complaint.rollno}</div>
                      </div>
                     <div style={{marginTop:"2px", color:"orange",marginBottom:"2px",fontSize:"15px"}}>Complaint Content:</div>
                     <p style={{width:"65%", color:"blue"}}>
                        {props.complaint.content}
                     </p>
                     <div>
                      <a href={`complaintassign/${props.complaint._id}/${props.complaint.dept}`}>
                       <button style={{backgroundColor:"blue", color:"white", marginRight:"5px", borderRadius:"5px", borderColor:"blue", cursor:'pointer'}}>assignto</button>
                      </a>
                      <a href={`send_reply_to/${props.complaint.writer._id}/${props.complaint.dept}`}>
                       <button style={{backgroundColor:"blue", color:"white", marginRight:"5px", borderRadius:"5px", borderColor:"blue", cursor:'pointer'}}>sendReply</button>
                      </a>
                     </div>
                    </div>
                }
            ></Comment>

        </div>
    )
}

export default SingleComplaint
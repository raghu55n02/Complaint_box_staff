import React from 'react'
import Complaints2 from './Complaint'
function NotAdmin(props) {
    const ComplaintLists=props.ComplaintLists
    const userId=props.user.userData?._id;
    const dept=props.dept
    //console.log("props.user",props.user.userData?._id)
    //console.log(ComplaintLists,dept)
    return (
        <>
            {ComplaintLists.length===0?<div style={{textAlign:"center", fontSize:"100px", marginLeft:"10px", marginRight:"10px", marginTop:"150px", color:"red"}}>No complaints posted yet!</div>:<div>
                <Complaints2 ComplaintLists={ComplaintLists} userId={userId} dept={dept}/>
            </div>} 
        </>
    )
}

export default NotAdmin

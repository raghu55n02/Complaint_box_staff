import React from 'react'
import { compose } from 'redux'
import SingleComplaint from "./SingleComplaint"
function Complaints2(props) {
    //console.log("sections2",props)
    //console.log("props.userid",props.userId)
    let str=""
    str=props.userId
    return (
        <div>
            {props.ComplaintLists && <div style={{color:"blue", marginLeft:"325px", marginRight:"20px", fontSize:"40px", marginBottom:"3px"}}>My Assigned Complaints!</div>}
            {props.ComplaintLists && props.ComplaintLists.map((complaint, index) => (
                (<React.Fragment key={index}>
                     {/*console.log(complaint.assignedto,props.userId,str)*/}
                      {/*complaint.asignedto===str*/JSON.stringify(complaint.assignedto)===JSON.stringify(str) && complaint.dept===props.dept && <SingleComplaint  complaint={complaint} />   }       
                    </React.Fragment>
                )
            ))}

            {props.ComplaintsLists && props.ComplaintsLists.length === 0 &&
                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'200px',color:'blue'}} >
                    There are no complaints posted yet!
                </div>
            }


        </div>
    )
}

export default Complaints2
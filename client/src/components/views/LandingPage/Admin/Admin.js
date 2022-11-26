import React,{useState,useEffect} from 'react'
//import Notassigned from './Notassigned'
import Complaints from '../sections/Complaints'
import Complaints1 from '../section/Complaints'
import Complaints2 from '../section2/Complaint'
function Admin(props) {
    const [pos, setpos] = useState("mycomplaints")
    //console.log(props)
    //const [ComplaintLists, setComplaintLists] = useState([])
    const ComplaintLists=props.ComplaintLists
    const dept=props.dept
    //console.log(ComplaintLists,dept)
    //const [dept,setdept]=useState("")
    //let cmp=[]
    const userId=props.user.userData._id;
    const myfunc= () =>{
      setpos("mycomplaints")
    }
    const notassigned=()=>{
        setpos("notassignedcomplaints")
    }
    const assigned=()=>{
         setpos("assignedcomplaints")
    }
          if(pos==="mycomplaints")
          {
            return(
            <div>
              <div style={{display:"flex", marginTop:"20px", marginLeft:"10px", marginBottom:"20px"}}>
                <button onClick={notassigned} style={{backgroundColor:"blue", color:"white", marginRight:"5px", borderRadius:"5px", borderColor:"blue", cursor:'pointer'}}>not assigned</button>
                <button onClick={assigned} style={{backgroundColor:"blue", color:"white", borderRadius:"5px", borderColor:"blue",cursor:'pointer'}}>assigned</button>
              </div>
            {ComplaintLists.length===0?<div style={{textAlign:"center", fontSize:"100px", marginLeft:"10px", marginRight:"10px", marginTop:"150px", color:"red"}}>No complaints posted yet!</div>:<div>
                <Complaints2 ComplaintLists={ComplaintLists} userId={userId} dept={dept} />
            </div>}              
            </div>
            )

          }else if(pos==="notassignedcomplaints")
          {
            return (
             <div>
              <div style={{display:"flex",marginTop:"20px", marginLeft:"10px", marginBottom:"20px"}}>
               <button onClick={myfunc} style={{backgroundColor:"blue", color:"white", marginRight:"5px", borderRadius:"5px", borderColor:"blue",cursor:'pointer'}}>my Complaints</button>
               <button onClick={assigned} style={{backgroundColor:"blue", color:"white", borderRadius:"5px", borderColor:"blue",cursor:'pointer'}}>assigned</button>
              </div>
              {/*<Notassigned/>*/}
            {ComplaintLists.length===0?<div style={{textAlign:"center", fontSize:"100px", marginLeft:"10px", marginRight:"10px", marginTop:"150px", color:"red"}}>No complaints posted yet!</div>:<div>
                <Complaints ComplaintLists={ComplaintLists} dept={dept} />
            </div>}
             </div>
            )
            
          }else{
            return(
            <div>
             <div style={{display:"flex",marginTop:"20px", marginLeft:"10px", marginBottom:"20px"}}>
               <button onClick={myfunc} style={{backgroundColor:"blue", color:"white", marginRight:"5px", borderRadius:"5px", borderColor:"blue",cursor:'pointer'}}>my Complaints</button>
               <button onClick={notassigned} style={{backgroundColor:"blue", color:"white", borderRadius:"5px", borderColor:"blue",cursor:'pointer'}}>not assigned</button>             
              </div> 
                 {ComplaintLists.length===0?<div style={{textAlign:"center", fontSize:"100px", marginLeft:"10px", marginRight:"10px", marginTop:"150px", color:"red"}}>No complaints posted yet!</div>:<div>
                    <Complaints1 ComplaintLists={ComplaintLists} dept={dept}  />
                </div>}  
             </div>
            )
 
          }
}

export default Admin

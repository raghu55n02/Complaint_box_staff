import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import Admin from './Admin/Admin';
import NotAdmin from './NotAdmin/NotAdmin';
import axios from 'axios'
function LandingPage() {
    const user = useSelector(state => state.user)
    const [ComplaintLists, setComplaintLists] = useState([])
    const [dept,setdept]=useState("")
    let userId=""
    userId=user.userData?._id;
    const userVariable = {
        userId
    }
     useEffect(()=>{
         axios.post('/api/complaint/getComplaints')
            .then(response => {
                //console.log(response)
                if (response.data.success) {
                    //console.log('response.data.complaints', response.data.complaints)
                    setComplaintLists(response.data.complaints)
                    //console.log(ComplaintLists)
                } else {
                    //alert('Failed to get complaints Info')
                    console.log("failed to get complaints info")
                }
            })        
     },[dept])
   useEffect(()=>{
            axios.post('/api/users/getuser',userVariable)
            .then(response => {
                if (response.data.success) {
                    //console.log("dept_val", response.data.user[0]?.department)
                    setdept(response.data.user[0]?.department)
                    //console.log("dept",dept)
                } else {
                    console.log("failed to get user info")
                }
            })
    },[user,dept])
    //console.log("user",user)
    return (
        <>
          {user.userData?._id===null?<div style={{textAlign:"center", fontSize:"100px", marginLeft:"10px", marginRight:"10px", marginTop:"150px", color:"red"}}>Loading...</div>:user.userData?.role===1?<Admin user={user} ComplaintLists={ComplaintLists} dept={dept} />:<NotAdmin user={user} ComplaintLists={ComplaintLists} dept={dept}/>}
        </>
    )
}

export default LandingPage

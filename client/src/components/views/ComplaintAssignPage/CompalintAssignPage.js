import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

function ComplaintAssignPage(props) {
   const complaintId=props.match.params.complaintId
   const user = useSelector(state => state.user)
   const dep=props.match.params.dept
   const [UsersList, setUsersList] = useState([])
   useEffect(() => {
        fetchUsersList()
    }, [user])
 const userVariable={
   dep
 }
    const fetchUsersList = () => {
            axios.post('/api/users/get/deptusers',userVariable)
            .then(response => {
                if (response.data.success) {
                    //console.log("res_users_list", response.data.user)
                    setUsersList(response.data.user)
                    //console.log("userslist",UsersList)
                } else {
                    console.log("failed to get user info")
                }
            })
    }
    const onClickAssign = (userfrom) => {
          //console.log("userfrom",userfrom);
          const userVariable1={
                userfrom,
                complaintId
          }
        axios.post('/api/complaint/update_assign', userVariable1)
            .then(response => {
                if (response.data.success) {
                    console.log("updated successfully")
                    props.history.push("/");
                } else {
                    console.log('Failed to update')
                }
            })
    }
    const renderCards = UsersList.map((user1, index) => {
       
        return <tr key={index}>

            <td><button style={{backgroundColor:"blue", color:"white", marginRight:"5px", borderRadius:"5px", borderColor:"blue", cursor:'pointer',marginBottom:"5px", marginLeft:"425px"}} onClick={() => onClickAssign(user1._id)}> assign_to:  {user1._id!==user.userData?._id?user1.name:"yourself"} </button></td>
        </tr>
    })
    return (
      <>
        <div style={{alignContent:"center", marginTop:"20px", marginLeft:"100px"}}>
           <p style={{fontWeight:"bold", fontSize:"25px", marginLeft:"300px", color:"red"}}>Assign Complaint to below Staff</p>
           <table>
            <tbody>
              {renderCards}
           </tbody>
          </table>
        </div>
      </>
    )
}

export default ComplaintAssignPage

import React, {useEffect,useState} from 'react';

function SingleUser(props){
    const [assignUserId,setassignUserId]=useState("")
   const assignto=(cmp)=>{
     console.log("cmp_complaint",cmp);
     //setassignUserId(cmp)
     //console.log("assignUsrId",assignUserId)
   }
 useEffect(()=>{
   console.log(assignUserId);
 },[assignUserId])
    //console.log("singleuser",props.user1)
       return(
        <>
           <button onClick={assignto(props.user1._id)}>assign_to:{props.user1.name}</button>
           <br></br>
        </>
       )
}

export default SingleUser
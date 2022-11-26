import React, {useState } from 'react'
import { Button, Input, Typography } from 'antd';
import axios from 'axios';
const { TextArea } = Input;
const { Title } = Typography;
function Replyi(props) {
   const userId=props.match.params.userId
   const dept1=props.match.params.dept
   //console.log(userId,"dept",dept)
   const [Reply, setReply] = useState("")
   const handleChangeReply = (e) => {
        setReply(e.currentTarget.value)
        //console.log(Reply);
    }
   const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            send_to: userId,
            dept: dept1,
            content: Reply
        }
        //console.log("variables",variables)

        axios.post('/api/reply/save_reply', variables)
            .then(response => {
                if (response.data.success) {
                    setReply("")
                } else {
                    alert('Failed to save Complaint')
                }
            })
    }
    return (
      <>
        <div>
            <br />
            <Title level={3}style={{color:"blue", marginLeft:"575px", marginTop:"20px"}} > Send a reply  </Title>

            <form onSubmit={onSubmit} style={{marginLeft:"300px", marginRight:"10px", marginTop:"25px"}}>

               <label style={{display:"flex", width:"75%", marginTop:"10px", marginBottom:"10px", color:"blue"}}>Reply:
                <TextArea
                    style={{ width: '100%', borderRadius: '5px',marginLeft:"20px",color:"red" }}
                    onChange={handleChangeReply}
                    value={Reply}
                    placeholder="write your reply"
                    rows="8"
                />
               </label>
                <br />
                <Button style={{ width: '20%', height: '52px', marginLeft:"275px", backgroundColor:"blue", color:"white" }} onClick={onSubmit}>Submit</Button>
            </form>
        </div>
      </>
    )
}

export default Replyi

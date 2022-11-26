import React, {useState,useEffect } from 'react'
import { Button, Input, Typography } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
const { TextArea } = Input;
const { Title } = Typography;
function CreateNotice() {
    const user = useSelector(state => state.user)
    const [Notice, setNotice] = useState("")
    const [Department, setDepartment]=useState("")
    let userId=""
    userId=user.userData?._id;
    const userVariable = {
        userId
    }
   useEffect(()=>{
            axios.post('/api/users/getuser',userVariable)
            .then(response => {
                if (response.data.success) {
                    //console.log("dept_val", response.data.user[0]?.department)
                    setDepartment(response.data.user[0]?.department)
                    //console.log("dept",Department)
                } else {
                    console.log("failed to get user info")
                }
            })
    },[user,Department])
    //console.log("Notice",Department)
    const handleChangeNotice = (e) => {
        setNotice(e.currentTarget.value)
        //console.log(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            content: Notice,
            dept: Department,
        }
        //console.log("variables",variables)

        axios.post('/api/notice/save_notice', variables)
            .then(response => {
                if (response.data.success) {
                    setNotice("")
                } else {
                    alert('Failed to save Complaint')
                }
            })
    }

    return (
        <div>
            <br />
            <Title level={3}style={{color:"blue", marginLeft:"575px", marginTop:"20px"}} > Post a Notice  </Title>

            <form onSubmit={onSubmit} style={{marginLeft:"300px", marginRight:"10px", marginTop:"25px"}}>
               <label style={{display:"flex", width:"75%", marginTop:"10px", marginBottom:"10px", color:"blue"}}>Notice:
                <TextArea
                    style={{ width: '100%', borderRadius: '5px',marginLeft:"20px",color:"red" }}
                    onChange={handleChangeNotice}
                    value={Notice}
                    placeholder="write your complaint"
                    rows="8"
                />
               </label>
                <br />
                <Button style={{ width: '20%', height: '52px', marginLeft:"275px", backgroundColor:"blue", color:"white" }} onClick={onSubmit}>Submit</Button>
            </form>

        </div>
    )
}

export default CreateNotice

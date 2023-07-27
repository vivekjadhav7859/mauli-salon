import React from 'react'
import AdminMenu from './AdminMenu'
import { useAuth } from './context/auth'
import profileIcon from "./images/profile_icon.jpg"

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <div style={{paddingTop:"100px"}}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
            <div className="d-flex flex-wrap justify-content-center mt-4 mb-3" style={{padding:"20px",border:"1px solid black",borderRadius:"10px",margin:"5px",boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}}>
                <img src={profileIcon} style={{height:"200px",width:"200px"}} alt="" />
                <div className="d-flex flex-column p-2" style={{margin:"20px"}}>
                <h5><span style={{fontWeight:"bold"}}>Name : </span>{auth?.user?.name}</h5>
                <h5><span style={{fontWeight:"bold"}}>Email : </span>{auth?.user?.email}</h5>
                <h5><span style={{fontWeight:"bold"}}>Address : </span>{auth?.user?.address}</h5>
                <h5><span style={{fontWeight:"bold"}}>Contact No : </span>{auth?.user?.phone}</h5>
                </div>
            </div>
        </div>
        <div className="col-md-4">
          <div style={{padding:"20px",borderRadius:"10px",margin:"5px",boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
            <AdminMenu/>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdminDashboard

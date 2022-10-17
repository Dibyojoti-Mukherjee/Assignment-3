import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import Button from "./UI/Button";
import Card from "./UI/Card";

const UserDetails = (props) => {
  const Navigate = useNavigate();
  return (
    <div>
      <h2>User Details</h2>
      <div style={{ display: "flex", flexWrap: "wrap" , justifyContent:"center"}}>
        {props.userData.map((user) => {
          return props.selectedId.map((id) => {
            return (
              Number(user.id) === Number(id) && (
                <Card
                  style={{
                    width: "auto",
                    height: "auto",
                    padding: "10px",
                  }}
                >
                  <img src={user.imageUrl} alt="pic" style={{ textAlign: "center" }} />
                  <div style={{ textAlign: "left", padding: "10px" }}>
                    <div>ID:{user.id}</div>
                    <div>
                      Name:{user.firstName} {user.lastName}
                    </div>
                    <div>Email: {user.email}</div>
                    <div>contactNumber:{user.contactNumber}</div>
                    <div>Age: {user.age}</div>
                    <div>DOB: {user.dob}</div>
                    <div>Salary:₹{user.salary}</div>
                    <div>Address:{user.address}</div>
                  </div>
                </Card>
              )
            );
          });
        })}
      </div>
      <Button onClick={() => Navigate(-1)}>Back</Button>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    userData: state.data,
    selectedId: state.selectedId,
  };
}

export default connect(mapStateToProps)(UserDetails);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import Button from "./UI/Button";
import Card from "./UI/Card";

import { fetchUsers, fetchSelectedId } from "./User/UserActionCreator";

function UserContainer({ userData, fetchUsers, fetchSelectedId }) {
  let selectedIDs = [];
  useEffect(() => fetchUsers(), []);
  const Navigate = useNavigate();
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <Card style={{flexDirection:"column"}}>
      <h2>USER LIST</h2>
      <form
        onSubmit={(e) => {
          selectedIDs = [];
          e.preventDefault();
          Object.values(e.target).map((userId) =>
            userId.checked ? selectedIDs.push(userId.value) : null
          );
          if (selectedIDs.length === 0) {
            alert("Please Select Atleast One");
          } else {
            fetchSelectedId(selectedIDs);
            return Navigate("/userdetails");
          }
        }}
      >
        {userData &&
          userData.data.map((user) => {
            return (
              <div style={{textAlign:"left"}}>
                <h4 style={{ display: "block", margin: "10px" }}>
                  <input type="checkbox" value={user.id} />
                  {user.firstName} {user.lastName}
                </h4>
              </div>
            );
          })}
        <Button type="submit">Sumbit</Button>
      </form>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    userData: state,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchSelectedId: (ids) => dispatch(fetchSelectedId(ids)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

import React, { Component } from "react";
import { SideNav, SideNavItem, Button } from "react-materialize";

class Profile extends Component  {
  render() {
    return (
      <div>
        <SideNav trigger={<i className="material-icons">account_circle</i> } options={{ closeOnClick: true }}>
          <SideNavItem
            userView
            user={{
              background: "https://s3.envato.com/files/218429202/Preview_Image_.jpg",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1hm6RmFq5rHHvsqhAgJphR0oraHldYRf8XVF1xbqT00HTfGSY",
              name: "Daenerys Targaryen"
            }}
          />
          <SideNavItem waves href="#!icon" icon="cloud">
            Account Information
          </SideNavItem>
          <SideNavItem waves href="#!second" icon="history">Order History</SideNavItem>
          <SideNavItem waves href="#!third"icon="room">Shipping Address</SideNavItem>
          <SideNavItem waves href="#!forth" icon="https">
            Change Password
          </SideNavItem>
          <SideNavItem waves href="#!fifth" icon="person">
            Log Out
          </SideNavItem>
        </SideNav>
      </div>
    );
  }
};

export default Profile;

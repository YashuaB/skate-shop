import React, { Component } from "react";
import { SideNav, SideNavItem, Button } from "react-materialize";
import axios from "axios";

class Profile extends Component {

  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {

    event.preventDefault()
    console.log('logging out')

    axios.post('/user/logout').then(response => {
      console.log(response.data)

      if (response.status === 200) {

        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error', error)
    })
  }


render() {
  return (
    <div>
      <SideNav trigger={<i className="material-icons">account_circle</i>} options={{ closeOnClick: true }}>
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
        <SideNavItem waves href="#!third" icon="room">Shipping Address</SideNavItem>
        <SideNavItem waves href="#!forth" icon="https">
          Change Password
        </SideNavItem>
        <SideNavItem waves href="#!fifth" icon="person">
         
        </SideNavItem>
        <button onClick={this.logout}> Log Out</button>
      </SideNav>
    </div>
  );
}
}

export default Profile;

import React from "react";
import { SideNav, SideNavItem, Button } from "react-materialize";

const sideNav = {
  render() {
    return (
      <div>
        <SideNav trigger={<Button />} options={{ closeOnClick: true }}>
          <SideNavItem
            userView
            user={{
              background: "https://placeimg.com/640/480/tech",
              image: "static/media/react-materialize-logo.824c6ea3.svg",
              name: "John Doe"
            }}
          />
          <SideNavItem href="#!icon" icon="cloud">
            First Link With Icon
          </SideNavItem>
          <SideNavItem href="#!second">Second Link</SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Subheader</SideNavItem>
          <SideNavItem waves href="#!third">
            Third Link With Waves
          </SideNavItem>
        </SideNav>
      </div>
    );
  }
};
import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="container">
      <nav> Your Profile </nav>
      <ul id="slide-out" className="sidenav">
        <li><div className="user-view">
          <div className="background">
            <img src="images/office.jpg" />
          </div>
          <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
          <a href="#name"><span className="white-text name">John Doe</span></a>
          <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
        </div></li>
        <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
        <li><a href="#!">Second Link</a></li>
        <li><div className="divider"></div></li>
        <li><a className="subheader">Subheader</a></li>
        <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
      </ul>
      <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    </div>

  );
};

// import React, { Component } from "react";
// import M from "materialize-css";

// // ref can only be used on class components
// class SideNav extends Component {
//   // get a reference to the element after the component has mounted
//   componentDidMount() {
//     M.Sidenav.init(this.sidenav);
//   }

//   render() {
//     return (
//       <ul
//         className={this.props.classes}
//         ref={sidenav => {
//           this.sidenav = sidenav;
//         }}
//         id={this.props.id}
//       >
//         <nav> Your Profile </nav>
//         <ul id="slide-out" className="sidenav">
//           <li>
//             <div className="user-view">
//               <div className="background">
//                 <img src="images/office.jpg" />
//               </div>
//               <a href="#user">
//                 <img className="circle" src="images/yuna.jpg" />
//               </a>
//               <a href="#name">
//                 <span className="white-text name">John Doe</span>
//               </a>
//               <a href="#email">
//                 <span className="white-text email">jdandturk@gmail.com</span>
//               </a>
//             </div>
//           </li>
//           <li>
//             <a href="#!">
//               <i className="material-icons">cloud</i>First Link With Icon
//             </a>
//           </li>
//           <li>
//             <a href="#!">Second Link</a>
//           </li>
//           <li>
//             <div className="divider" />
//           </li>
//           <li>
//             <a className="subheader">Subheader</a>
//           </li>
//           <li>
//             <a className="waves-effect" href="#!">
//               Third Link With Waves
//             </a>
//           </li>
//         </ul>
//         <a href="#" data-target="slide-out" className="sidenav-trigger">
//           <i className="material-icons">menu</i>
//         </a>
//       </ul>
//     );
//   }
// }

export default sideNav;

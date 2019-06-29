import React, { Component } from "react";
import { SideNav, SideNavItem, Button } from "react-materialize";

// class Profile extends Component  {
//   render() {
//     return (
//       <div>
//         <SideNav trigger={<i className="material-icons">account_circle</i> } options={{ closeOnClick: true }}>
//           <SideNavItem
//             userView
//             user={{
//               background: "https://s3.envato.com/files/218429202/Preview_Image_.jpg",
//               image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1hm6RmFq5rHHvsqhAgJphR0oraHldYRf8XVF1xbqT00HTfGSY",
//               name: "Daenerys Targaryen"
//             }}
//           />
//           <SideNavItem waves href="#!icon" icon="cloud">
//             Account Information
//           </SideNavItem>
//           <SideNavItem waves href="#!second" icon="history">Order History</SideNavItem>
//           <SideNavItem waves href="#!third"icon="room">Shipping Address</SideNavItem>
//           <SideNavItem waves href="#!forth" icon="https">
//             Change Password
//           </SideNavItem>
//           <SideNavItem waves href="#!fifth" icon="person">
//             Log Out
//           </SideNavItem>
//         </SideNav>
//       </div>
//     );
//   }
// };

// import { Link } from 'react-router-dom';

// const SideNav = () => {
//   return (
//     <div className="container">
//       <nav> Your Profile </nav>
//       <ul id="slide-out" className="sidenav">
//         <li><div className="user-view">
//           <div className="background">
//             <img src="images/office.jpg" />
//           </div>
//           <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
//           <a href="#name"><span className="white-text name">John Doe</span></a>
//           <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
//         </div></li>
//         <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
//         <li><a href="#!">Second Link</a></li>
//         <li><div className="divider"></div></li>
//         <li><a className="subheader">Subheader</a></li>
//         <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
//       </ul>
//       <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
//     </div>

//   );
// };

/////////////////////////////////////////////////////////////////////////
///Monika commented out
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

// export default Profile;

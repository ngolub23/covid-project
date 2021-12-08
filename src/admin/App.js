import * as React from "react";
import { Admin, Resource, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {Dashboard} from "../src/Components/DashBoard"
//import { UserList } from "./Components/Post.jsx";
import { UserList } from "./Components/User.jsx";
import { PostList } from "./Components/Post.jsx";
import {PostCreate} from "../src/Components/CreatePost"

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* <Resource name="users" list={ListGuesser} /> */}
    {/* <PostCreate/> */}
    <Resource name="users" list={UserList} />
    <Resource name="posts" list={PostList} />
    {/* <UserList/> */}
  </Admin>
);

export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

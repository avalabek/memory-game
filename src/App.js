import React from "react";
// import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import List from "./components/List";
import friends from "./friends.json";
import Newcard from "./components/Newcard";
// class App extends React.Component{
//   render(){
//     return(
//       <Navbar />
//       <Card />
//     )
//   }
// }

const App = () =>(
  <div>
    <Navbar  />
    <Wrapper friends={friends}/>
    <List friends={friends} />
    <Newcard friends={friends} />
    {/* groceries (as an attribute name matches prop.groceriers in List.js the groceries in {} comes from the import groceries at the top of the page. change names to test  */}
  </div>
);
export default App;
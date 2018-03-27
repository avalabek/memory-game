import React from "react";
// import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import List from "./components/List";
import groceries from "./components/Groceries";
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
    <Wrapper />
    <List groceries={groceries} />
    {/* groceries (as an attribute name matches prop.groceriers in List.js the groceries in {} comes from the import groceries at the top of the page. change names to test  */}
  </div>
);
export default App;
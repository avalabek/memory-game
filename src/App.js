import React from "react";
// import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Newwrapper from "./components/Newwrapper";
import List from "./components/List";
import friends from "./friends.json";
import Newcard from "./components/Newcard";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
// class App extends React.Component{
//   render(){
//     return(
//       <Navbar />
//       <Card />
//     )
//   }
// }
class App extends React.Component {
state = {
  message: "Click an image to begin",
  bestScore: 0,
  currentScore: 0,
  friends: friends,
  notSelected: friends
}
componentDidMount(){

}
shuffleCards = array => {
 for (let i = array.length - 1; i >0; i--)
 {
  let j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
}
}

selectPlace = name => {
  const findPlace = 
  this.state.notSelected.find(item => item.name === name);

if(findPlace === undefined) {
  this.setState({
    message: "Wrong!",
    bestScore: (this.state.currentScore > this.state.bestScore) ? this.state.currentScore : this.state.bestScore,
    currentScore: 0,
    friends: friends,
    notSelected: friends
  });
}
else {
  const newFriends =
  this.state.notSelected.filter(item => item.name !== name);

  this.setState({
    message: "Correct!",
    currentScore: this.state.currentScore + 1,
    friends: friends,
    notSelected: newFriends
  });
}

this.shuffleCards(friends);
};

render(){
  return(
      <Newwrapper>
      
    
        <Navbar 
            message={this.state.message}
            currentScore={this.state.currentScore}
            bestScore={this.state.bestScore}
            />
             <Jumbotron />
    {/* <Wrapper friends={friends}/> */}
    {/* <List friends={friends} /> */}
          {/* <Newcard friends={friends} /> */}
    {/* groceries (as an attribute name matches prop.groceriers in List.js the groceries in {} comes from the import groceries at the top of the page. change names to test  */}
           {
             this.state.friends.map(friend => (
               <Newcard
                  name={friend.name}
                  image={friend.image}
                  selectPlace={this.selectPlace}
                  currentScore={this.state.currentScore}
                  />
             ))
           }
           
           <Footer />
          </Newwrapper>
    )
}
    }
export default App;
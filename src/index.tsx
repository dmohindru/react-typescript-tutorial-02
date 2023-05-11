// 1) Import ReactDOM library
import ReactDOM from "react-dom/client";
import UserSearch from "./classes/UserSearch";
 
// 2) Get a reference to the div with ID root
const el = document.getElementById("root");
 
// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);
 
// 4) Create a component
const App = () => {
  const myusers = [
    {name: 'dhruv', age: 40},
    {name: 'poonam', age: 30},
    {name: 'daksh', age: 13},
    {name: 'parth', age: 11}
  ]
  return (
    <div>
      <UserSearch users={myusers} />
    </div>
  );
};
 
// 5) Show the component on the screen
root.render(<App />);
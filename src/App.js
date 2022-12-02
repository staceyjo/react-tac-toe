// All your imports should be at the top
// import logo from './logo.svg';
// components 
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';

// css
import './App.css';

export default function App() {
  // What is JSX? JSX is a hybrid of JavaScript and HTML
  // In JSX- we can only return one parent element. If we want to return more than one element, we have to wrap it in a parent element( like a div or use a React.fragment/open and close carats)
  // PROPS: we add props by adding key value pairs inside rendered componenets. They look like attributes. We can call props anything that we want
  return (
    <>
      <Header />
      <div className="container">
        <Player whichPlayer="X" />
        <Player whichPlayer="O" />
      </div>
      <Board />
    </>
  );
}



// Original: 
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <h1>React Tac Toe</h1>
//   );
// }

// export default App;



// Another way to write this:
// import logo from './logo.svg';
// import './App.css';

// export default function App() {
//   return (
//     <h1>React Tac Toe</h1>
//   );
// }



// Another way to write this:
// import logo from './logo.svg';
// import './App.css';
// const App = () => {
//   return (
//     <h1>
//       React Tac Toe
//     </h1>
//   )
// }

// export default App
// Vanilla JS
// function declarations using the function
// function expressions
// arrow functions
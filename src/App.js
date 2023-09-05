// import { useState } from 'react';
// import './App.css';
// import Dialog from './components/dialog';

// function App() {

//   const [openDialog , setOpenDialog] = useState(false);
//   return (
//     <div className="App">
//         <button className='sugg_open' onClick={() => {setOpenDialog(true)}}>Products</button>
//         {openDialog && <Dialog closeModal = {setOpenDialog}/>}
//     </div>
//   );
// }

// export default App;

import './App.css';
// import { useState } from 'react';
import Dialog from './components/dialog';
import Navbar from './components/navbar';
import Home from './components/home';
import Help from './components/help';
// import ReactDOM from "react-dom";
// import Frame from 'react-frame-component';



function App() {

//   const [openDialog , setOpenDialog] = useState(false);
// return (
//   <div className='App'>
  
//       <Navbar />
      
//       <h1>Suggestion</h1>
//       <Frame >
//       {openDialog && <Dialog closeModal = {setOpenDialog}/>}
//       </Frame>
//       <button className='sugg_open' onClick={() => {setOpenDialog(true)}}>Suggestion</button>
//   </div>
// );

let components;
switch (window.location.pathname) {
  case '/':
    components = (
      <div>
        <Navbar />
        <Home />
      </div>
    );
    break;
  case '/menu':
    components = (
      <div>
        <Navbar />
      </div>
    ); 
    break;
  case '/about':
    components = (
      <div>
        <Navbar />
      </div>
    );
    break;
    case '/help':
      components = (
        <div>
          <Navbar />
          <Help />
        </div>
      );
      break;
    case '/dialog':
      components = (
        <div>
          <Navbar />
          <Dialog />
        </div>
      );
      break;
  default:
    components = <Navbar /> ;
}
return <>{components}
</>;
}

export default App;
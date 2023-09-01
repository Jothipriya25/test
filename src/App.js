import { useState } from 'react';
import './App.css';
import Dialog from './components/dialog';

function App() {

  const [openDialog , setOpenDialog] = useState(false);
  return (
    <div className="App">
        <button className='sugg_open' onClick={() => {setOpenDialog(true)}}>Products</button>
        {openDialog && <Dialog closeModal = {setOpenDialog}/>}
    </div>
  );
}

export default App;

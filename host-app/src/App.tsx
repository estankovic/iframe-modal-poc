import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [isModalOpened, setIsModalOpened] = useState();


  useEffect(() => {

    const listener = (e: any) => {
      if (e.origin !== "http://localhost:3001")
        return;

      setIsModalOpened(e.data.openModal);
    };

    window.addEventListener("message", listener, false);

    return () => {
      window.removeEventListener('message', listener);
    }
  }, [])


  return (
    <div className="App">
      <div className="sidebar">Sidebar</div>
      <div className="content">
        <iframe id='iframe' src="http://localhost:3001" allowTransparency={true}></iframe>
        <iframe className={isModalOpened ? 'opened' : ''} id='modal-iframe' src="http://localhost:3001?bac" allowTransparency={true}></iframe>
      </div>
      <div className="rightbar">Rightbar</div>
    </div>
  );
}

export default App;

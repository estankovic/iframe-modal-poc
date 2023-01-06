import React, {useEffect, useState} from 'react';
import './App.css';

function App() {


  const isFullscreen = !! window.location.search;

  function notifyThatModalShouldOpen(shouldOpen: boolean) {
    window.parent.postMessage({openModal: shouldOpen}, '*');
  }

  return (<div className="App">

      {isFullscreen ? (<div className="overlay">
          <div className="modal">
            <h1>Modal</h1>
            <p>I am pretending to be another route, with transparent background and some modal on it</p>
            <p>My parent (shell app) received message from iframe that is should open this modal. It used another iframe, on the top of the one that send the message, so I can overlay it without loosing
            the context of where the user was before modal opening</p>
            <p>Parent app also made this new iframe to be position fixed and overlay whole screen with it from corner to corner, so no one can interact with anything below me.</p>
            <p>If you will hit <strong>Close Modal</strong> I will notify my parent, that I am done with whatever I was doing, and it will hide the modal and let user continue, wherever it started.</p>
            <button onClick={e => notifyThatModalShouldOpen(false)}>
              Close Modal
            </button>
          </div>
        </div>) : (<header className="App-header">
          <h1>This is iframe page</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur deserunt dicta, earum eius impedit libero molestiae natus optio, pariatur quam quisquam quod soluta veritatis vero voluptas voluptate voluptates voluptatibus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur deserunt dicta, earum eius impedit libero molestiae natus optio, pariatur quam quisquam quod soluta veritatis vero voluptas voluptate voluptates voluptatibus.</p>
          <p><em>When you press <strong>Open Modal</strong>, I send message to my parent and my parent does its magic</em></p>
          <button onClick={e => notifyThatModalShouldOpen(true)}>
            Open Modal
          </button>
        </header>)}
    </div>);
}

export default App;

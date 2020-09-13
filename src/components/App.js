import React from 'react';
import './App.css';

const App = () => {
  var date = new Date();
  var time = date.toLocaleTimeString('en-GB');
  // enter time to redirect
  var startTime = '19:49:10';
  // enter Meeting Title
  var meetingTitle = 'Meeting Title';

  const redirect = () => {
    setInterval(() => {
      date = new Date();
      time = date.toLocaleTimeString('en-GB');
      if (time === startTime) {
        // enter url to redirect
        window.location = "https://www.youtube.com";
      }
    }, 1000);
  };

  return (
    <div className="ui container">
      <h1 className="wait">Please wait for the meeting to start.</h1>
      <div className="box">
        <div className="group">
          <div className="start">Meeting scheduled at {startTime} hours</div>
          <h2 className="title">{meetingTitle}</h2>
        </div>
      </div>
      {redirect()}
    </div>
  );
};

export default App;

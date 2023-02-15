import React from 'react';
import ReactDOM from 'react-dom';

const Main = () => {
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {/* your components here */}
      </div>
    </div>
  );
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);

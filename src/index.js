import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Sample from './sample';
const userName="Suman Roy";

const ReactApp=React.createElement(
  'a',
  {href:"https://google.com", target:'_blank'},
  'Click Me !',
  userName,
  
  
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     ReactApp
);



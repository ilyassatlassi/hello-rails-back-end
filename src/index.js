import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// function App() {
//   return (<h1>Hello World!</h1>);
// }

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root'),
// );

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <App />,
);

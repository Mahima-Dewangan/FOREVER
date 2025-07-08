// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './App';
// import App from './App.jsx'

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );
// // ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from  './context/ShopContext.jsx'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

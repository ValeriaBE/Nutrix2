import {
    Home
  } from './view/customers/home.js';
 
 
  
  
  export const initRouter = () => {
    window.addEventListener('load', changeTmp(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
  }
  
  const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return viewTmp('#/home');
    } else {
      return viewTmp(hash)
    }
  }
  
  const viewTmp = (routers) => {
    const router = routers.substr(2, routers.length - 2)
    const root = document.getElementById('root');
    root.innerHTML = '';
    switch (router) {
      case 'home':
        root.innerHTML = '';
        root.appendChild(Home());
        break;
    //   case 'register':
    //     root.appendChild(registerScreen());
    //     break;
      // default:
      //   root.appendChild(Login());
      //   break;
    }
  }
import {
    createUser
  } from '../controller/firebase.js'
  import {
    loginInOnSubmit,
    getName,
    changeRoute
  } from '../view-controller.js'
  
  export const screen1 = () => {
    const divElemt = document.createElement('div');
    const loginPage = `  
        <div>
        
        </div>`;
    divElemt.innerHTML = homePage;
    divElemt.classList.add('container');
  
    const buttonLogInEmail = divElemt.querySelector("#login-btn");
    buttonLogInEmail.addEventListener('click', () => {
      getName()
      .then(changeRoute(''))
    });

    return divElemt;
  }
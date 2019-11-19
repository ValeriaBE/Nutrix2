import{
  changeRoute
}from '../../view-controller.js'
export const Home = () => {
  const divElemt = document.createElement('div');
  const homePage = `
      <img src="img/1.png" alt="">
      <button id="enter"></button>`;
  divElemt.innerHTML = homePage;
  divElemt.classList.add('home');
  const enter = divElemt.querySelector("#enter");
  enter.addEventListener('click', () => {
      changeRoute("#/order");
  })
  return divElemt;
}
export const Home = () => {
  const divElemt = document.createElement('div');
  const homePage = `
      <img src="img/1.png" alt="">
      <button></button>`;
  divElemt.innerHTML = homePage;
  divElemt.classList.add('home');
  return divElemt;
}
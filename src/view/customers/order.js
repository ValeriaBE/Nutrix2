import {
    Products
}from './products.js'

export const Order = (objProducts) => {
    let type = 'frutas'
const divElemt = document.createElement('div');
  const orderPage = `
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" href="#/order" onclick=${type=="frutas"}>Frutas</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#/order" onclick=${type=="vegetales"}>Vegetales</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#/order" onclick=${type=="snacks"}>Snacks</a>
        </li>
    </ul>
    <div class="card-columns">
              ${type === 'frutas' && (
                Products(objProducts)   
              )}
              
    </div>
  `;
  divElemt.innerHTML = orderPage;
  divElemt.classList.add('order');
//   const div = divContainer.querySelector('#productslist');
//   objProducts.forEach(prod => {
//     if (prod.name === 'publico') {
//       div.appendChild(viewPostScreen(post))
//     }
//   });
  return divElemt;
}
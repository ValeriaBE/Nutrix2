import {
    Products
}from './products.js'
import{Total} from '../collection.js'
export const Order = (objProducts) => {
    let type = 'frutas'

const divElemt = document.createElement('div');
  const orderPage = `
  <div>
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a id="tab" class="nav-link active" role="tablist" data-toggle="tab" href="#/order" onclick=${type="Frutas"} value="Frutas">Frutas</a>
        </li>
        <li class="nav-item">
            <a id="tab" class="nav-link" role="tablist" data-toggle="tab" href="#/order" onclick=${type=="Vegetales"} value="Vegetales">Vegetales</a>
        </li>
        <li class="nav-item">
            <a id="tab" class="nav-link" role="tablist" data-toggle="tab" href="#/order" onclick=${type=="Snacks"} value="Snacks">Snacks</a>
        </li>
    </ul>
    <div id="productslist" class="card-columns">
              
    </div>
    </div>
    <div id="total"></div>
  `;
  divElemt.innerHTML = orderPage;
  divElemt.classList.add('order');
  const div = divElemt.querySelector('#productslist');
  const total = divElemt.querySelector('#total');
  total.innerHTML=Total();
  const tab = divElemt.querySelector('#tab');
  console.log(tab.value)
  objProducts.forEach(prod => {
        div.appendChild(Products(prod))
  });
  return divElemt;
}
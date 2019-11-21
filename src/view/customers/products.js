import {ARRAY} from '../../controller/products.js'
import {Add} from '../../view-controller.js'
export const Products = (prod, add) => { 
    const divElemt = document.createElement('div');
    const productsPage = 
       `<div class="card" key=${prod._id}>
          <img class="card-img-top" src=${prod.img} alt=${prod.name} />
          <div class="card-body">
            <h5 class="card-title"  onClick=${Add(add, prod.name)}>${prod.name}</h5>
          </div>
          <div class="card-footer justify-content-center">
            S/. ${prod.price}
          </div>
        </div>`
    ;
    divElemt.innerHTML = productsPage;
    divElemt.classList.add('products');
    return divElemt;
}


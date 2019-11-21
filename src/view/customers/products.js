
import{shoppingCart, displayCart} from '../../view-controller.js'
export const Products = (prod, add) => { 
    const divElemt = document.createElement('div');
    const productsPage = 
       `<div class="add-to-cart card" key=${prod._id} data-name=${prod.name} data-price=${prod.price}>
          <img class="card-img-top" src=${prod.img} alt=${prod.name} />
          <div class="card-body">
            <h5 class="card-title">${prod.name}</h5>
          </div>
          <div class="card-footer justify-content-center">
            S/. ${prod.price}
          </div>
        </div>`
    ;
    divElemt.innerHTML = productsPage;
    divElemt.classList.add('products');
    $('.add-to-cart').click(function(event) {
      event.preventDefault();
      var name = $(this).data('name');
      var price = Number($(this).data('price'));
      shoppingCart.addItemToCart(name, price, 1);
       displayCart()
      });
    return divElemt;
}


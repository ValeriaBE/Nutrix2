export const Products = (prod) => { 
    const divElemt = document.createElement('div');
    const productsPage = 
       `<div data-testid=${prod._id} className="card my-3" key=${prod._id}>
          <img className="card-img-top" src=${prod.img} alt=${prod.name} />
          <div className="card-body">
            <h5 data-testid=${prod.name} className="card-title">${prod.name}</h5>
          </div>
          <div className="card-footer justify-content-center">
            S/. ${prod.price}
          </div>
        </div>`
    ;
    divElemt.innerHTML = productsPage;
    divElemt.classList.add('products');
    return divElemt;
}
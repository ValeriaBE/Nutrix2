var ShoppingCart = (function($) {
    "use strict";
    
    // Cahce necesarry DOM Elements
    var productsEl = document.querySelector(".products"),
    frutas = document.querySelector(".frutas"),
    vegetales = document.querySelector(".vegetales"),
    snacks = document.querySelector(".snacks"),
    mascotas = document.querySelector(".mascotas"),
    limpieza = document.querySelector(".limpieza"),
    reposteria = document.querySelector(".reposteria"),
    cereales = document.querySelector(".cereales"),
        cartEl =     document.querySelector(".shopping-cart-list"),
        productQuantityEl = document.querySelector(".product-quantity"),
        billete = document.querySelector(".billete"),
        vuelto = document.querySelector(".vuelto"),
        emptyCartEl = document.querySelector(".empty-cart-btn"),
        cartCheckoutEl = document.querySelector(".cart-checkout"),
        totalPriceEl = document.querySelector(".total-price"),
        totalPriceEl2 = document.querySelector(".total-price2");
    
    // Fake JSON data array here should be API call
    var products = [
        {
            "id":0,
            "name": "Chirimoya",
            "type": "frutas",
            "imageUrl": "https://i.ibb.co/d2b2mN4/AC58-BD8-A-3-FC5-4-B55-AE4-C-D9-C3-EB5-BEA65.jpg",
            "price": 17
        },
        {
            "id":1,
            "name": "Durazno",
            "type": "frutas",
            "imageUrl": "https://i.ibb.co/Pj65LxB/15075245-116-D-4-AA6-A234-0430-EBE942-A8.jpg",
            "price": 15
        },
        {
            "id":2,
            "name": "Granadilla",
            "type": "frutas",
            "imageUrl": "https://i.ibb.co/YyVN3nY/3-BAC9284-09-A2-4-D1-A-AB02-27712-D93-CBB9.jpg",
            "price": 13
        },
        {
            "id":3,
            "name": "Limón",
            "type": "frutas",
            "imageUrl": "https://i.ibb.co/cynsJSg/F52-ECF51-C6-C5-4487-A7-FA-2-DE578-CF8-D92.jpg",
            "price": 15
        },
        {
            "id":4,
            "name": "Mandarina",
            "type": "frutas",
            "imageUrl": "https://i.ibb.co/QcJVjPJ/3-F8-E2-AC3-E50-C-4-CE0-AEF1-308818-EDF85-B.jpg",
            "price": 10
        },
        {
            "id":5,
            "name": "Palta",
            "type": "frutas",
            "imageUrl": "https://i.ibb.co/GdyjqmB/1-ACB78-FA-955-D-4756-B3-F0-BF605-AEC9-BE8.jpg",
            "price": 12
        },
        {
            "id":6,
            "name": "Papaya",
            "type": "frutas",
            "imageUrl": "https://i.ibb.co/193nc1W/AF006-AC5-A87-E-4-E06-97-BC-F0-A7-C25-E0506.jpg",
            "price": 17
        },
        {
            "id":7,
            "name": "Piña",
            "type": "frutas",
            "imageUrl": "https://i.ibb.co/bJXtgGn/83-EAE03-B-571-C-4-F3-B-A904-C79-EC0582-FE1.jpg",
            "price": 18
        },
       {
            "id":8,
            "name": "Plátano",
            "type": "frutas",
            "imageUrl": "https://i.ibb.co/C00CNjr/F2352-A93-55-D3-4-AE9-9190-7843-DB4605-E6.jpg",
            "price": 11
        },
        {
            "id":9,
            "name": "Ajo",
            "type": "vegetales",
            "imageUrl": "https://i.ibb.co/DpNV6dL/031-A6422-D883-47-D3-A012-2-AFFCD500-BFE.jpg",
            "price": 7
        },
        {
            "id":10,
            "name": "Beterraga",
            "type": "vegetales",
            "imageUrl": "https://i.ibb.co/YLYYNZH/61-B9-AEE9-6-F4-E-46-D4-8-E90-5-BC4-CFB348-B1.jpg",
            "price": 6
        },
        {
            "id":11,
            "name": "Cebolla Blanca",
            "type": "vegetales",
            "imageUrl": "https://i.ibb.co/c3g959p/0-A157-B24-4-FE0-4248-BA25-C246-EC680-C92.jpg",
            "price": 5
        },
        {
            "id":12,
            "name": "Cebolla Roja",
            "type": "vegetales",
            "imageUrl": "https://i.ibb.co/dcnWdFj/8-EC83-A4-D-8326-4-B98-9208-95-BF8-B33-D7-D4.jpg",
            "price": 5
        },
        {
            "id":13,
            "name": "Choclo",
            "type": "vegetales",
            "imageUrl": "https://i.ibb.co/KNRndWW/E3-ADA2-B0-1-B03-4-A14-82-D9-F2687759-E3-D5.jpg",
            "price": 6
        },
        {
            "id":14,
            "name": "Col",
            "type": "vegetales",
            "imageUrl": "https://i.ibb.co/K54SX2g/02-B04363-387-D-4-DC6-848-C-982-DE53-C269-E.jpg",
            "price": 6
        },
        {
            "id":15,
            "name": "Jengibre",
            "type": "vegetales",
            "imageUrl": "https://i.ibb.co/W0dgZdS/6-F481-AAF-6532-4-D56-8-AE0-64113-FF65227.jpg",
            "price": 7
        },
        {
            "id":16,
            "name": "Papa Cóctel",
            "type": "vegetales",
            "imageUrl": "https://i.ibb.co/r2ZHrxx/010-E8-F52-B022-46-BB-9022-3-E989-EF0-F50-D.jpg",
            "price": 10
        },
        {
            "id":17,
            "name": "Rabanito",
            "type": "vegetales",
            "imageUrl": "https://i.ibb.co/MhjZ5FT/F9-B8-C14-B-4209-4-F94-BD6-C-96-D29-BF975-A2.jpg",
            "price": 8
        },
        {
            "id":18,
            "name": "Tomate",
            "type": "vegetales",
            "imageUrl": "https://i.ibb.co/KVzywt4/BD4385-CE-A974-489-A-B1-C0-C3-BD81-D8-CC11.jpg",
            "price": 9
        },
        {
            "id":19,
            "name": "Zanahoria",
            "type": "vegetales",
            "imageUrl": "https://i.ibb.co/b7xznBt/A4558718-FFB4-4980-AF5-B-B7-BC5-A4-C7293.jpg",
            "price": 6
        },
        {
            "id":20,
            "name": "Zapallo",
            "type": "vegetales",
            "imageUrl": "https://i.ibb.co/NFnPVrS/29602406-EE7-D-4-BA5-AF41-50-E834-FE7046.jpg",
            "price": 11
        },
        {
            "id":21,
            "name": "Mama Lama de Aguaymanto y Linaza",
            "type": "snacks",
            "imageUrl": "https://i.ibb.co/hLPmHqy/D317-BC37-68-B6-4880-B752-FC80-E1118638.jpg",
            "price": 3
        },
        {
            "id":22,
            "name": "Mama Lama de Avena y Canela",
            "type": "snacks",
            "imageUrl": "https://i.ibb.co/2ybQ5hd/0-C7-C36-E6-5942-458-E-921-A-CD11-C49284-BB.jpg",
            "price": 3
        },
        {
            "id":23,
            "name": "Mama Lama de Chocolate y Quinoa",
            "type": "snacks",
            "imageUrl": "https://i.ibb.co/ydqPyVP/3164-AB8-B-563-E-485-D-993-C-27-C2-C4264543.jpg",
            "price": 3
        },
        {
            "id":24,
            "name": "Mama Lama de Cranberry y Chia",
            "type": "snacks",
            "imageUrl": "https://i.ibb.co/D9WVxy6/3-DD83-E30-4-BF6-46-E2-B376-95-F8-C93-DE20-E.jpg",
            "price": 3
        },
        {
            "id":25,
            "name": "Mama Lama de Miel de Yacón",
            "type": "snacks",
            "imageUrl": "https://i.ibb.co/6ZxJZ29/1593-CEAF-6-DFD-4591-830-C-AB5-FE3271-CC8.jpg",
            "price": 3
        },
        {
            "id":26,
            "name": "Mama Lama de Chocolate Bitter y Maca",
            "type": "snacks",
            "imageUrl": "https://i.ibb.co/s2TRwQb/051964-ED-5-B37-48-DC-A245-36-D6197301-A2.jpg",
            "price": 3
        },
        {
            "id":27,
            "name": "Mama Lama de Quinoa y Maní",
            "type": "snacks",
            "imageUrl": "https://i.ibb.co/vk8k89C/E89-ABC86-18-C8-4-ED7-B5-EB-20-DBEADB2-EAC.jpg",
            "price": 3
        },
        {
            "id":28,
            "name": "Mantequilla de Maní",
            "type": "snacks",
            "imageUrl": "https://i.ibb.co/HCN2ZXC/525618-A7-1-D5-A-422-C-AC51-3393-DA87-ACEF.jpg",
            "price": 12
        },
        {
            "id":29,
            "name": "Sticks de Ají Panca",
            "type": "snacks",
            "imageUrl": "https://i.ibb.co/Kzwdtgx/2933997-E-8-D7-F-4631-94-F9-124247893-C1-A.jpg",
            "price": 7
        },
        {
            "id":30,
            "name": "Sticks de Cebolla y Ajo",
            "type": "snacks",
            "imageUrl": "https://i.ibb.co/6yYY34D/4-BAD56-CD-CB33-4-C7-B-B438-81-E9-EEC88-D1-F.jpg",
            "price": 7
        },
        {
            "id":31,
            "name": "Sticks de Queso Cheddar",
            "type": "snacks",
            "imageUrl": "https://i.ibb.co/rcRtp7V/A6-AC00-D9-8-E89-4746-90-E5-F920-F19-FBD4-A.jpg",
            "price": 7
        },
        {
            "id":32,
            "name": "Sticks de Sal de Maras",
            "type": "snacks",
            "imageUrl": "https://i.ibb.co/VLYtKqw/4-A3171-D6-9-A1-E-4819-BE87-A649-B5-A3-E008.jpg",
            "price": 7
        },
        {
            "id":33,
            "name": "Cookie Dogster Hipo Alergénicas",
            "type": "mascotas",
            "imageUrl": "https://i.ibb.co/mqQd4Ff/CF6-DFE24-EEC1-46-AA-83-C0-4-D2-A9-F39573-E.jpg",
            "price": 10
        },
        {
            "id":34,
            "name": "Cookie Dogster Just Relax",
            "type": "mascotas",
            "imageUrl": "https://i.ibb.co/2ddRYzT/41939-FC6-9511-4-F77-961-F-7202-DF4-D3243.jpg",
            "price": 10
        },
        {
            "id":35,
            "name": "Don Fermín Las Especiales",
            "type": "mascotas",
            "imageUrl": "https://i.ibb.co/ZHCqtcf/0-EFE8-D42-A419-41-A3-B1-B9-EAE9420-F40-D7.jpg",
            "price": 10
        },
        {
            "id":36,
            "name": "Don Fermín Las Sabrositas",
            "type": "mascotas",
            "imageUrl": "https://i.ibb.co/5B3hnPq/AB5-CE8-AE-09-AC-4905-BB2-D-AF680075798-B.jpg",
            "price": 10
        },
        {
            "id":37,
            "name": "Don Fermín Puro Higado de Pollo",
            "type": "mascotas",
            "imageUrl": "https://i.ibb.co/6nrBHXj/28-CEAB40-484-C-432-E-AB98-A7293755615-D.jpg",
            "price": 10
        },
        {
            "id":38,
            "name": "VeganCan",
            "type": "mascotas",
            "imageUrl": "https://i.ibb.co/NF3FmCF/C4-D378-F1-6-F9-E-4-A4-C-9622-F3-C6-CC1-E4749.jpg",
            "price": 13
        },
        {
            "id":39,
            "name": "Biodet Blanco",
            "type": "limpieza",
            "imageUrl": "https://i.ibb.co/LSDsYzd/884-A208-E-E846-4-C59-8748-75309739-B645.jpg",
            "price": 10
        },
        {
            "id":40,
            "name": "Biodet Naranja",
            "type": "limpieza",
            "imageUrl": "https://i.ibb.co/QMv5kpd/12-F4-A20-A-2836-463-D-817-A-7-C6-B352-DBED4.jpg",
            "price": 10
        },
        {
            "id":41,
            "name": "Biodet-D3",
            "type": "limpieza",
            "imageUrl": "https://i.ibb.co/CHNfYXr/30959-F0-E-505-B-482-F-98-F9-82-D4-FEB1-AB3-C.jpg",
            "price": 11
        },
        {
            "id":42,
            "name": "Biosanit Blanco",
            "type": "limpieza",
            "imageUrl": "https://i.ibb.co/ZG34jn3/7-F6-E6-DB8-D748-466-E-A380-9-F26-B03-E4-A69.jpg",
            "price": 10
        },
        {
            "id":43,
            "name": "Deystol",
            "type": "limpieza",
            "imageUrl": "https://i.ibb.co/VMwjXhK/EEE063-F2-B4-E8-47-E3-9-AB2-0-BE4-C1-BE1189.jpg",
            "price": 10
        },
        {
            "id":44,
            "name": "La Oca",
            "type": "limpieza",
            "imageUrl": "https://i.ibb.co/swpGx9j/BCE5-DA9-F-7645-4910-8375-1-DF64-C43675-C.jpg",
            "price": 11
        },
        {
            "id":45,
            "name": "Ah!laska Syrup de Chocolate",
            "type": "reposteria",
            "imageUrl": "https://i.ibb.co/8D0hZvK/4081-B195-E1-AC-4652-AF87-4-C060-FA5-A6-A0.jpg",
            "price": 8
        },
        {
            "id":46,
            "name": "Chocolate Cake Mix",
            "type": "reposteria",
            "imageUrl": "https://i.ibb.co/5jbzFjf/B2402-E7-A-5-FBF-4-BDD-841-E-B8998721-D58-F.jpg",
            "price": 12
        },
        {
            "id":47,
            "name": "Keke sin Gluten",
            "type": "reposteria",
            "imageUrl": "https://i.ibb.co/4Jv2YZD/BF5-B4-A18-1913-4-DCE-968-A-A57-B97257228.jpg",
            "price": 9
        },
        {
            "id":48,
            "name": "Mezcla para Brownies",
            "type": "reposteria",
            "imageUrl": "https://i.ibb.co/h9hwRXB/165-C1-A2-F-11-BA-44-BC-B4-AA-F2-D3-A818-FB3-D.jpg",
            "price": 10
        },
        {
            "id":49,
            "name": "Mezcla para Chocochips",
            "type": "reposteria",
            "imageUrl": "https://i.ibb.co/frBfRYX/C8767-C3-E-F71-C-4733-B6-F5-BFC9522-A6-BAA.jpg",
            "price": 13
        },
        {
            "id":50,
            "name": "Mezcla para Panqueques",
            "type": "reposteria",
            "imageUrl": "https://i.ibb.co/hCWV4pK/6-B35-E1-AA-08-FA-43-A9-9-B78-261-E6-EE9308-F.jpg",
            "price": 15
        },
        {
            "id":51,
            "name": "Waffles and Pancake mix",
            "type": "reposteria",
            "imageUrl": "https://i.ibb.co/fH6Jpzb/6-B87-EF92-07-D0-4-EEA-A751-2-EC5-B4-E3-A01-E.jpg",
            "price": 10
        },
        {
            "id":52,
            "name": "ChocoShells",
            "type": "cereales",
            "imageUrl": "https://i.ibb.co/fpjr9gX/6-FC249-CF-2-D78-4-D64-8717-623-C495265-AB.jpg",
            "price": 7
        },
        {
            "id":53,
            "name": "HoneyGlobes",
            "type": "cereales",
            "imageUrl": "https://i.ibb.co/sF4gxTG/D875-B30-C-057-A-422-A-9-ABF-B04-C99-B569-F0.jpg",
            "price": 8
        },
        {
            "id":54,
            "name": "Kids Organics Arroz y Cacao",
            "type": "cereales",
            "imageUrl": "https://i.ibb.co/TBKVjnG/3618-B75-B-CE78-4876-9225-AA04-AB19-D144.jpg",
            "price": 8
        },
        {
            "id":55,
            "name": "Kids Organics Quinoa y Kiwicha",
            "type": "cereales",
            "imageUrl": "https://i.ibb.co/25f2Kzz/A381029-A-9-D4-E-4556-A334-B5-BDFA134312.jpg",
            "price": 8
        },
        {
            "id":56,
            "name": "Leche de Almendra",
            "type": "cereales",
            "imageUrl": "https://i.ibb.co/v4CrZR8/6-A86-D712-B141-4695-B99-B-86-CD1014-D376.jpg",
            "price": 9
        },
        {
            "id":57,
            "name": "Sunrise Corn Flakes",
            "type": "cereales",
            "imageUrl": "https://i.ibb.co/NmbqFWC/89114-F1-F-F7-E8-4-ECB-942-E-1-D75-C2654-FFE.jpg",
            "price": 7
        },
        {
            "id":58,
            "name": "Sunrise Crunchy Vanilla",
            "type": "cereales",
            "imageUrl": "https://i.ibb.co/JRZW3k7/F788462-A-C93-B-4-AD0-ACCF-FEBDDD1852-B6.jpg",
            "price": 7
        }
    ],
        productsInCart = [];
    
    // Pretty much self explanatory function. NOTE: Here I have used template strings (ES6 Feature)
    var generateProductList = function() {
      products.forEach(function(item) {
          if(item.type=="frutas"){
            var productEl = document.createElement("div");
            productEl.className = "product";
            productEl.innerHTML = `
                                    <div class="card">               
                                    <div class="card-img-top product-image ">
                                      <img src="${item.imageUrl}" alt="${item.name}">
                                   </div>
                                   <div class="card-body">
                                        <div class="product-name"><span>Producto:</span> ${item.name}</div>
                                        <div class="product-price"><span>Precio:</span> S/. ${item.price} </div>
                                   </div>
                                   <div class="product-add-to-cart card-footer">
                                     <a href="#0" class="button add-to-cart" data-id=${item.id}>Añadir</a>
                                   </div>
                                </div>
      `;
      frutas.appendChild(productEl);
          }
          if(item.type=="vegetales"){
            var productEl = document.createElement("div");
            productEl.className = "product";
            productEl.innerHTML = `
                                    <div class="card">               
                                    <div class="card-img-top product-image ">
                                      <img src="${item.imageUrl}" alt="${item.name}">
                                   </div>
                                   <div class="card-body">
                                        <div class="product-name"><span>Producto:</span> ${item.name}</div>
                                        <div class="product-price"><span>Precio:</span> S/. ${item.price} </div>
                                   </div>
                                   <div class="product-add-to-cart card-footer">
                                     <a href="#0" class="button add-to-cart" data-id=${item.id}>Añadir</a>
                                   </div>
                                </div>
      `;
      vegetales.appendChild(productEl);
          }
          if(item.type=="snacks"){
            var productEl = document.createElement("div");
            productEl.className = "product";
            productEl.innerHTML = `
                                    <div class="card">               
                                    <div class="card-img-top product-image ">
                                      <img src="${item.imageUrl}" alt="${item.name}">
                                   </div>
                                   <div class="card-body">
                                        <div class="product-name"><span>Producto:</span> ${item.name}</div>
                                        <div class="product-price"><span>Precio:</span> S/. ${item.price} </div>
                                   </div>
                                   <div class="product-add-to-cart card-footer">
                                     <a href="#0" class="button add-to-cart" data-id=${item.id}>Añadir</a>
                                   </div>
                                </div>
      `;
      snacks.appendChild(productEl);
          }
          if(item.type=="mascotas"){
            var productEl = document.createElement("div");
            productEl.className = "product";
            productEl.innerHTML = `
                                    <div class="card">               
                                    <div class="card-img-top product-image ">
                                      <img src="${item.imageUrl}" alt="${item.name}">
                                   </div>
                                   <div class="card-body">
                                        <div class="product-name"><span>Producto:</span> ${item.name}</div>
                                        <div class="product-price"><span>Precio:</span> S/. ${item.price} </div>
                                   </div>
                                   <div class="product-add-to-cart card-footer">
                                     <a href="#0" class="button add-to-cart" data-id=${item.id}>Añadir</a>
                                   </div>
                                </div>
      `;
      mascotas.appendChild(productEl);
          }
          if(item.type=="limpieza"){
            var productEl = document.createElement("div");
            productEl.className = "product";
            productEl.innerHTML = `
                                    <div class="card">               
                                    <div class="card-img-top product-image ">
                                      <img src="${item.imageUrl}" alt="${item.name}">
                                   </div>
                                   <div class="card-body">
                                        <div class="product-name"><span>Producto:</span> ${item.name}</div>
                                        <div class="product-price"><span>Precio:</span> S/. ${item.price} </div>
                                   </div>
                                   <div class="product-add-to-cart card-footer">
                                     <a href="#0" class="button add-to-cart" data-id=${item.id}>Añadir</a>
                                   </div>
                                </div>
      `;
      limpieza.appendChild(productEl);
          }
          if(item.type=="reposteria"){
            var productEl = document.createElement("div");
            productEl.className = "product";
            productEl.innerHTML = `
                                    <div class="card">               
                                    <div class="card-img-top product-image ">
                                      <img src="${item.imageUrl}" alt="${item.name}">
                                   </div>
                                   <div class="card-body">
                                        <div class="product-name"><span>Producto:</span> ${item.name}</div>
                                        <div class="product-price"><span>Precio:</span> S/. ${item.price} </div>
                                   </div>
                                   <div class="product-add-to-cart card-footer">
                                     <a href="#0" class="button add-to-cart" data-id=${item.id}>Añadir</a>
                                   </div>
                                </div>
      `;
      reposteria.appendChild(productEl);
          }
          if(item.type=="cereales"){
            var productEl = document.createElement("div");
            productEl.className = "product";
            productEl.innerHTML = `
                                    <div class="card">               
                                    <div class="card-img-top product-image ">
                                      <img src="${item.imageUrl}" alt="${item.name}">
                                   </div>
                                   <div class="card-body">
                                        <div class="product-name"><span>Producto:</span> ${item.name}</div>
                                        <div class="product-price"><span>Precio:</span> S/. ${item.price} </div>
                                   </div>
                                   <div class="product-add-to-cart card-footer">
                                     <a href="#0" class="button add-to-cart" data-id=${item.id}>Añadir</a>
                                   </div>
                                </div>
      `;
      cereales.appendChild(productEl);
          }
    })
}
    // Like one before and I have also used ES6 template strings
    var generateCartList = function() {
      
      cartEl.innerHTML = "";
      
      productsInCart.forEach(function(item) {
        var li = document.createElement("li");
        li.innerHTML = `${item.quantity} ${item.product.name} - $${item.product.price * item.quantity}`;
        cartEl.appendChild(li);
      });
      
      productQuantityEl.innerHTML = productsInCart.length;
      
      generateCartButtons()
    }
    
    
    // Function that generates Empty Cart and Checkout buttons based on condition that checks if productsInCart array is empty
    var generateCartButtons = function() {
      if(productsInCart.length > 0) {
        emptyCartEl.style.display = "block";
        cartCheckoutEl.style.display = "block"
        totalPriceEl.innerHTML = "$ " + calculateTotalPrice();
        totalPriceEl.value = calculateTotalPrice();
        totalPriceEl2.innerHTML = "$ " + calculateTotalPrice();
        totalPriceEl2.value = calculateTotalPrice();
      } else {
        emptyCartEl.style.display = "none";
        cartCheckoutEl.style.display = "none";
      }
    }
    
    // Setting up listeners for click event on all products and Empty Cart button as well
    var setupListeners = function() {
      productsEl.addEventListener("click", function(event) {
        var el = event.target;
        if(el.classList.contains("add-to-cart")) {
         var elId = el.dataset.id;
         addToCart(elId);
        }
      });
      
      emptyCartEl.addEventListener("click", function(event) {
        if(confirm("Estás segur@?")) {
          productsInCart = [];
          totalPriceEl.innerHTML="",
          totalPriceEl2.innerHTML=""
          vuelto.innerHTML=""
          billete.value=""
        }
        generateCartList();
      });
    }
    
    // Adds new items or updates existing one in productsInCart array
    var addToCart = function(id) {
      var obj = products[id];
      if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
        productsInCart.push({product: obj, quantity: 1});
      } else {
        productsInCart.forEach(function(item) {
          if(item.product.id === obj.id) {
            item.quantity++;
          }
        });
      }
      generateCartList();
    }
    
    
    // This function checks if project is already in productsInCart array
    var productFound = function(productId) {
      return productsInCart.find(function(item) {
        return item.product.id === productId;
      });
    }
  
    var calculateTotalPrice = function() {
      return productsInCart.reduce(function(total, item) {
        return total + (item.product.price *  item.quantity);
      }, 0);
    }
    
    // This functon starts the whole application
    var init = function() {
      generateProductList();
      setupListeners();
    }
    
    // Exposes just init function to public, everything else is private
    return {
      init: init
    };
    
    // I have included jQuery although I haven't used it
  })(jQuery);
  
  ShoppingCart.init();
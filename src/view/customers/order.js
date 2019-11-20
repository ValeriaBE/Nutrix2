import { Products } from './products.js';

export const Order = () => {
const divElemt = document.createElement('div');
  const orderPage = `
  <header ><img src='../../img/1.png' /></header>
  <div class="side">
  <div class="fifty">
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#frutas" role="tab" aria-controls="home" aria-selected="true">Frutas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#vegetales" role="tab" aria-controls="profile" aria-selected="false">Vegetales</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#snacks" role="tab" aria-controls="contact" aria-selected="false">Snacks</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" id="contact-tab" data-toggle="tab" href="#mascotas" role="tab" aria-controls="contact" aria-selected="false">Mascotas</a>
</li>
<li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#limpieza" role="tab" aria-controls="contact" aria-selected="false">Limpieza</a>
</li>
<li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#reposteria" role="tab" aria-controls="contact" aria-selected="false">Repostería</a>
</li>
<li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#cereales" role="tab" aria-controls="contact" aria-selected="false">Cereales</a>
</li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="frutas" role="tabpanel" aria-labelledby="home-tab">

  </div>
  <div class="tab-pane fade prod" id="vegetales" role="tabpanel" aria-labelledby="profile-tab"></div>
  <div class="tab-pane fade prod" id="snacks" role="tabpanel" aria-labelledby="contact-tab"></div>
  <div class="tab-pane fade prod prod" id="mascotas" role="tabpanel" aria-labelledby="contact-tab"></div>
  <div class="tab-pane fade prod" id="limpieza" role="tabpanel" aria-labelledby="contact-tab"></div>
  <div class="tab-pane fade prod" id="reposteria" role="tabpanel" aria-labelledby="contact-tab"></div>
  <div class="tab-pane fade prod" id="cereales" role="tabpanel" aria-labelledby="contact-tab"></div>
</div>
</div>
    <div id="total" class="total fifty"></div>
    </div>
  `;
  divElemt.innerHTML = orderPage;
  divElemt.classList.add('order'); 
const valueArray= ()=>{
    firebase.firestore().collection("Productos").doc('Frutas').collection('TodoFrutas')
    .get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
       
        const divFrutas=document.querySelector('#frutas')
        return divFrutas.appendChild(Products(doc.data()))
      });
    })
}
const vegArray= ()=>{
    firebase.firestore().collection("Productos").doc('Vegetales').collection('TodoVegetales')
    .get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
       
        const divVegetales=document.querySelector('#vegetales')
        return divVegetales.appendChild(Products(doc.data()))
      });
    })
}
const snacksArray= ()=>{
    firebase.firestore().collection("Productos").doc('Snacks').collection('TodoSnacks')
    .get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
       
        const divSnacks=document.querySelector('#snacks')
        return divSnacks.appendChild(Products(doc.data()))
      });
    })
}
const limpiezaArray= ()=>{
    firebase.firestore().collection("Productos").doc('Productos de Limpieza').collection('TodoLimpieza')
    .get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
       
        const divLimpieza=document.querySelector('#limpieza')
        return divLimpieza.appendChild(Products(doc.data()))
      });
    })
}
const mascotasArray= ()=>{
    firebase.firestore().collection("Productos").doc('Suplementos para Mascotas').collection('TodoMascotas')
    .get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
       
        const divMascotas=document.querySelector('#mascotas')
        return divMascotas.appendChild(Products(doc.data()))
      });
    })
}
const reposteriaArray= ()=>{
    firebase.firestore().collection("Productos").doc('Repostería').collection('TodoReposteria')
    .get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
       
        const divrepo=document.querySelector('#reposteria')
        return divrepo.appendChild(Products(doc.data()))
      });
    })
}
const cerealesarray= ()=>{
    firebase.firestore().collection("Productos").doc('Cereales y Leche').collection('TodoCereales')
    .get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
       
        const diveCereales=document.querySelector('#cereales')
        return diveCereales.appendChild(Products(doc.data()))
      });
    })
}
valueArray()
vegArray()
snacksArray()
limpiezaArray()
mascotasArray()
reposteriaArray()
cerealesarray()
const tot = divElemt.querySelector('#total')
tot.appendChild(Total())
  return divElemt;
}

export const Total = (items) => {
  const divElemt = document.createElement('div');
  const orderPage = `
  <table>
      <thead>
        <tr>
          <th><h3>Pedido</h3></th>
        </tr>
        <tr>
          <th >Nombre</th>
          <th >Cantidad</th>
          <th >Precio</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td >Total:</td>
          <td>S/. {total.total}</td>
          <td >
            <button onClick={postOrder}>Enviar a caja</button>
          </td>
        </tr>
      </tbody>
    </table>
  `;
  divElemt.innerHTML = orderPage;
  divElemt.classList.add('totalbox');
  return divElemt;
}
      //  ${items.map(i => (
      //      Lista( item={i}, remove={remove}, increase={increase}, decrease={decrease})
      //    ))}
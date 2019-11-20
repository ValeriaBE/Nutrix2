export const List = (item, remove, increase, decrease ) =>{
    const divElem = document.createElement('div');
    const listPage = `
    <tr >
    <td>
      <button onClick={() => {
        remove(item._id)
      }}></button>
      <p >{item.name}</p>
    </td>
    <td >
      <button  onClick={() => decrease(item._id)} ></button>
      <span>{item.qty}</span>
      <button onClick={() => increase(item._id)} ></button>
    </td>
    <td >
      <p >S/. {item.total}</p>
    </td>
  </tr>`
  divElemt.innerHTML = listPage;
  divElemt.classList.add('list'); 
  return divElem;
}
  
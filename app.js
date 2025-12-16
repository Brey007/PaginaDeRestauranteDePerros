const spanContadorLikes = document.querySelector('#contador-likes')
const botonAgregarLike = document.querySelector('#btn-like')

let cantidadLike = 598

botonAgregarLike.addEventListener('click', function () {
  cantidadLike++
  spanContadorLikes.textContent = cantidadLike

  console.log('👍', cantidadLike)
})

const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};

const allItems = document.querySelector(".store--item-list")
const cartItems = document.querySelector(".cart--item-list")

function renderCart() {
  cartItems.innerHTML = ''

  for(let i = 0; i < state.cart.length; i++){
    const item = state.cart[i]
    const itemLi = document.createElement('li')

    allItems.appendChild(itemLi)

  }

}

function renderItems() {
  allItems.innerHTML = ''

  for(let i = 0; i < state.items.length; i++){
    const item = state.items[i]
    const itemLi = document.createElement('li')

    itemLi.setAttribute('id', item.id)
    
    //Creating image
    let image = document.createElement('img')
    image.src = `assets/icons/${item.id}.svg`
    
    //Creating button
    let button = document.createElement('button')
    button.innerHTML = 'Add to cart'
    button.onclick = () => addToCart(item)

    //append image and button to itemLi
    itemLi.appendChild(image)
    itemLi.appendChild(button)

    //append item to allItems
    allItems.appendChild(itemLi)
  }
}

function addToCart(item) {
  const cartLi = document.createElement('li')

  cartLi.setAttribute('id', item.id)

  //Create image
  let image = document.createElement('img')
  image.src = `assets/icons/${item.id}.svg`

  //Create removeButton
  let removeButton = document.createElement('button')
  removeButton.className = 'quantity-btn remove-btn center'
  removeButton.onclick = () => removeFromCart(item.id)

  //Create quantitySpan
  let quantitySpan = document.createElement('span')
  quantitySpan.className = 'quantity-text center'
  quantitySpan.innerHTML = 1

  //Create addButton
  let addButton = document.createElement('button')
  addButton.className = 'quantity-btn add-btn center'
  addButton.onclick = () => quantitySpan.innerHTML++;

  cartLi.appendChild(image)
  cartLi.appendChild(removeButton)
  cartLi.appendChild(quantitySpan)
  cartLi.appendChild(addButton)


  cartItems.appendChild(cartLi)
}

function addToCart(id){
  const cartLi = document.getElementById(id)
  const quantitySpan = cartLi.querySelector('.quantity-text')

  //quantitySpan ++;


  
}

function removeFromCart(id){
  const cartLi = document.getElementById(id)
  const quantitySpan = cartLi.querySelector('.quantity-text')
  console.log(quantitySpan.innerHTML)

  //if quantityspan > 1 just --


  allItems.removeChild(cartLi)
  renderCart();
}

function main() {
    renderItems()
    renderCart()
}

main()
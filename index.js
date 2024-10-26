
const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35,
      type: "vegetable"
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35,
      type: "vegetable"
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35,
      type: "fruit"
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35,
      type: "fruit"
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35,
      type: "fruit"
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35,
      type: "fruit"
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35,
      type: "vegetable"
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35,
      type: "fruit"
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35,
      type: "fruit"
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35,
      type: "vegetable"
    }
  ],
  cart: []
};

const allItems = document.querySelector(".store--item-list")
const cartItems = document.querySelector(".cart--item-list")
let totalCost = document.querySelector(".total-number")

const showFruits = document.querySelector('#showFruits');
showFruits.addEventListener('change', function(e){
  if(showFruits.checked){
    filterItems('fruit', state.items);
  } 
  else {
    renderItems(state.items);
    }
});

const showVegetables = document.querySelector('#showVegetables');
showVegetables.addEventListener('change', function(e){
  if(showVegetables.checked){
    filterItems('vegetable', state.items);
  }
  else{
    renderItems(state.items);
  }
})


function filterItems(filterString, completeList){
  const filteredList = completeList.filter(item => item.type === filterString);
  renderItems(filteredList);
}

function renderCart() {
  cartItems.innerHTML = ''

  for(let i = 0; i < state.cart.length; i++){
    const item = state.cart[i]
    const itemLi = document.createElement('li')

    allItems.appendChild(itemLi)

  }
}

function renderItems(itemsList) {
  allItems.innerHTML = ''

  for(let i = 0; i < itemsList.length; i++){
    const item = itemsList[i]
    const itemLi = document.createElement('li')

    itemLi.setAttribute('id', item.id)
    
    let image = document.createElement('img')
    image.src = `assets/icons/${item.id}.svg`
    
    let button = document.createElement('button')
    button.innerHTML = 'Add to cart'
    button.onclick = () => addToCart(item)

    itemLi.appendChild(image)
    itemLi.appendChild(button)

    allItems.appendChild(itemLi)
  }
}

function addToCart(item) {

  const existingCartItem = document.getElementById('cart-' + item.id);
  
  if (existingCartItem) {
    increaseItem(item.id);
  }

  else{
    const cartLi = document.createElement('li')
    cartLi.setAttribute('id', 'cart-' + item.id)

  let image = document.createElement('img')
  image.src = `assets/icons/${item.id}.svg`

  let removeButton = document.createElement('button')
  removeButton.className = 'quantity-btn remove-btn center'
  removeButton.onclick = () => decreaseItem(item.id)

  let quantitySpan = document.createElement('span')
  quantitySpan.className = 'quantity-text center'
  quantitySpan.innerHTML = 1

  let addButton = document.createElement('button')
  addButton.className = 'quantity-btn add-btn center'
  addButton.onclick = () => increaseItem(item.id);

  
  cartLi.appendChild(image)
  cartLi.appendChild(removeButton)
  cartLi.appendChild(quantitySpan)
  cartLi.appendChild(addButton)

  increaseCost(item.id)

  cartItems.appendChild(cartLi)
  }
}


function increaseItem(id){
  const cartLi = document.getElementById('cart-' + id)
  const quantitySpan = cartLi.querySelector('.quantity-text')

  quantitySpan.innerHTML = parseInt(quantitySpan.innerHTML) + 1;
  console.log(id)
  increaseCost(id)
}

function decreaseItem(id){
  const cartLi = document.getElementById('cart-' + id)
  console.log(cartLi)
  const quantitySpan = cartLi.querySelector('.quantity-text')

  let currentQuantity = parseInt(quantitySpan.innerHTML);
  
  if(currentQuantity > 1){
    quantitySpan.innerHTML = currentQuantity - 1
    decreaseCost(id)
  }
  else {
    cartItems.removeChild(cartLi)
    decreaseCost(id)

    renderCart()
  }
}



//Id of product in state
function increaseCost(id){
  for(let i = 0; i < state.items.length; i++){
    const item = state.items[i]

    if(item.id === id){
      let currentCost = parseFloat(totalCost.innerHTML)
      let newCost = currentCost + item.price
      
      
      totalCost.innerText = newCost.toFixed(2)
      console.log(totalCost.innerHTML)
    }
  }
}

function decreaseCost(id){
  for(let i = 0; i < state.items.length; i++){
    const item = state.items[i]

    if(item.id === id){
      let currentCost = parseFloat(totalCost.innerHTML)
      let newCost = currentCost - item.price
      
      
      totalCost.innerText = newCost.toFixed(2)
      console.log(totalCost.innerHTML)
    }
  }
}







function main() {
    renderItems(state.items)
    totalCost.innerText = 0
    console.log(totalCost)
}

main()
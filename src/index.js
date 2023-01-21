
fetch('http://localhost:3000/toys')
.then(response => response.json())
.then(data => renderToys(data))

function renderToys(toys) {
  toys.forEach((toy) => {
    const toyCollection = document.querySelector('#toy-collection')
    const card = document.createElement('div')
    console.log(toyCollection)
    
    card.className = 'card'
    toyCollection.appendChild(card)
    
    const h2 = document.createElement('h2')
    h2.textContent = toy.name
    
    const img = document.createElement('img')
    img.src = toy.image
    img.className = 'toy-avatar'

    card.append(h2, img)
    toyCollection.appendChild(card)

    const p = document.createElement('p')
    p.textContent = toy.likes
    console.log(card)
    card.appendChild(p)

    const button = document.createElement('button')
    button.className = 'like-button'
    button.id = toy.id
    button.textContent = 'Like'
    card.appendChild(button)

    card.appendChild(h2)
    
  
  })
}



    



   
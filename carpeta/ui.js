export function createPag() {
  let buttons = ``;
  for (let i = 1; i <= 42; i++) {
    buttons += `
        <li class="page-item">
            <a class="page-link" href="#" data-id="${i}">${i}</a>
        </li>
        `;
  }
}

export function createCard(character) {
  const card = document.createElement("div");
  card.classList.add("card", "mt-3", "bg-secondary-subtle");
  card.style.width = "18rem";
  const htmlCard = `  
    <img src="${character.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${character.name}</h5>
        <p class="card-text">${character.status}</p>
        <p class="card-text">${character.origin.name}</p>
        <a href="#" 
            class="btn btn-success"
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal"
            data-id="${character.id}">Ver más</a>
    </div>`;
  card.innerHTML = htmlCard;
  return card;
}
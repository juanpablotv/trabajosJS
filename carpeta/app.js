import { createCard, createCardModal, createPag } from "../ui";
const URL = "https://rickandmortyapi.com/api";
const containerChar = document.querySelector(".characters");
const pagination = document.querySelector(".pagination");
const modalTitle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");


pagination.innerHTML = createPag();



const fetchApi = (url) => fetch(url).then((response) => response.json());

function getCharacters(page = 1) {
  fetchApi(`${URL}/character/?page=${page}`).then((data) => {
    const characters = data.results;
    showCharacters(characters);
  });
}
function getCharactersById(id) {
  fetchApi(`${URL}/character/${id}`).then((data) => {
    const character = data;
    modalTitle.innerHTML = character.name;
    modalBody.innerHTML = "";
    modalBody.appendChild(createCardModal(character));
  });
}

getCharacters();


function createCardModal(character) {
  const card = document.createElement("div");
  card.classList.add("card", "bg-secondary-subtle");
  card.style.width = "80%";
  card.style.margin = "0 auto";
  let statusColor = '';
  if(character.status === 'Alive'){
    statusColor = 'bg-success';
  } else if(character.status === 'Dead'){
    statusColor = 'bg-danger';
  } else {
    statusColor = 'bg-warning';
  }
  const htmlCard = `  
    <img src="${character.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text badge $ { statusColor }">${ character.status }</p>
        <p class="card-text">${ character.origin.name }</p>
        <p class="card-text">${ character.location.name }</p>
    </div>`;
  card.innerHTML = htmlCard;
  return card;
}

function showCharacters(characters) {
  containerChar.innerHTML = "";
  characters.forEach((character) => {
    containerChar.appendChild(createCrad(character));
  });
}

function getButton(e) {
  e.preventDefault();
  if (e.target.classList.contains("page-link")) {
    const page = e.target.getAttribute("data-id");
    getCharacters(page);
  }
}

function getButtonCard(e) {
  e.preventDefault();
  if (e.target.classList.contains("btn")) {
    const id = e.target.getAttribute("data-id");
    getCharactersById(id);
  }
}

pagination.addEventListener("click", getButton);
containerChar.addEventListener("click", getButtonCard);

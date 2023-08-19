const cardsContainer = document.getElementById('cards');
const refreshButton = document.getElementById('refreshButton');


async function fetchData() {
  const response = await fetch('/json/json/support.json');
  jsonData = await response.json();
}

function displayRandomCards() {
  cardsContainer.innerHTML = ''; 


  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * jsonData.length);
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img src="${jsonData[randomIndex].src}" alt="Card Image">

      <h3>${jsonData[randomIndex].title}</h3>
      <p>${jsonData[randomIndex].text}</p>
    `;
    cardsContainer.appendChild(card);
  }
  mouseove()
} 
function mouseove(){
  const cards = document.querySelectorAll('.card')
  cards.forEach(cardEl=>{
    cardEl.addEventListener('mousemove',()=>{
      cards.forEach(card=>{card.classList.remove('active')})

   cardEl.classList.add('active') })
  })
}

fetchData().then(() => displayRandomCards());

refreshButton.addEventListener('click', () => {
  displayRandomCards();
});


const cardsData = [
    { image: "Img/Bandit400k.jpg", text: "Bandit400" },
    { image: "Img/impuls.webp", text: "impuls" },
    { image: "Img/Inazuma.webp", text: "Inazuma" },
    { image: "Img/impuls1984.webp", text: "impuls1984" },
    { image: "Img/impuls1994.webp", text: "impuls1994" },
    { image: "Img/impuls1995.webp", text: "impuls1995" },
    { image: "Img/impuls1996.webp", text: "impuls1996" },
    { image: "Img/impuls1999.webp", text: "impuls1999" },
 
  ];
 

  
  const cardTemplate = document.getElementById('cardTemplate');
const cardSection = document.querySelector(".card-section");

let loadIndex = 0;

function loadCardImage(card, imageUrl) {
  const img = card.querySelector('.card-image');
  const spinner = card.querySelector('.loading-spinner');

  // Что-то типазадержки
  setTimeout(() => {
      img.src = imageUrl;
      img.onload = () => {
          spinner.style.display = 'none'; // Скрыть спиннер
          img.style.display = 'block'; // показать изображение
      };
  }, 1000 * loadIndex); // Задержска 1с
}

function createCard(imageData) {
  const card = cardTemplate.content.cloneNode(true);

  const img = card.querySelector('.card-image');
  const text = card.querySelector('.card-text');
  const heartIcon = card.querySelector('.heart-icon');
  const initialHeartSrc = heartIcon.src;
  const likedHeartSrc = 'img/cr1.png';

  text.textContent = imageData.text;

  let isLiked = false;

  heartIcon.addEventListener('click', () => {
      isLiked = !isLiked;
      heartIcon.src = isLiked ? likedHeartSrc : initialHeartSrc;
  });

  loadCardImage(card, imageData.image); // Запускаем изображения с задежской

  return card;
}

cardsData.forEach(cardData => {
  const card = createCard(cardData);
  cardSection.appendChild(card);
  loadIndex++; // переход по картинкам
});

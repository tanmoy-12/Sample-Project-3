let id,i=0;
let clickedCards = [];
const flashcardsData = [
  { word: 'Serendipity', meaning: 'The occurrence and development of events by chance in a happy or beneficial way',id:'1' },
  { word: 'Ephemeral', meaning: 'Lasting for a very short time',id:'2' },
  { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere', id:'3' },
  { word: 'Mellifluous', meaning: 'Sweet or musical; pleasant to hear',id:'4' },
  { word: 'Quixotic', meaning: 'Extremely idealistic; unrealistic and impractical',id:'5' },
  { word: 'Pernicious', meaning: 'Having a harmful effect, especially in a gradual or subtle way',id:'6' },
  { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing',id:'7' },
  { word: 'Resilience', meaning: 'The capacity to recover quickly from difficulties; toughness',id:'8' },
  { word: 'Ineffable', meaning: 'Too great or extreme to be expressed or described in words',id:'9' },
  { word: 'Sycophant', meaning: 'A person who acts obsequiously toward someone important in order to gain an advantage',id:'10' },
];

const json = fs.readFileSync("./json/data.json", "utf8");
const data = JSON.parse(json);
console.log(data);

const cardContainer = document.getElementById('card-container');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const doneButton = document.getElementById('done-button');
const scoreCard = document.getElementById('score-card');
let score=10;
const handleClick = (item, cardElement) => {
  if (!cardElement.classList.contains('border-red-500')) {
    console.log(item.word);
    console.log(item.id);
    i++;
    cardElement.classList.add('border-red-500');
    cardElement.innerText = item.meaning;
    clickedCards.push({ word: item.word, meaning: item.meaning });
    console.log(i);
    score=score-1;
  }
  populate();
  
};

const populate= ()=>{
    document.getElementById('score').innerText = score;
};

const handleStart = () => {
    score=10;
    populate();
    cardContainer.innerHTML = '';
    clickedCards = []; 
    fetch('https://https://github.com/tanmoy-12/Sample-Project-3/blob/master/data.json') //add json file here
    .then(response => {
    if (!response.ok) {
      throw new Error('Error in connection');
    }
    return response.json();
  })
  .then(flashcardsData => {
    flashcardsData.forEach((item) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'border-2 border-green-500 rounded-md p-5 h-full';
        cardElement.innerText = item.word;
        cardContainer.appendChild(cardElement);
        cardElement.addEventListener('click', () => {
          handleClick(item, cardElement);
        });
      });
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
  scoreCard.classList.remove('hidden');
  resetButton.classList.remove('hidden');
  startButton.classList.add('hidden');
  doneButton.classList.remove('hidden');
};

const handleReset = () => {
  cardContainer.innerHTML = '';
  clickedCards = [];
  startButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
  doneButton.classList.add('hidden');
  score=10;
  populate();
};

const handleDone = () => {
  cardContainer.innerHTML = '';
  clickedCards.forEach((item) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'border-2 border-red-500 rounded-md p-5 h-full';
    cardElement.innerHTML = `<strong>${item.word}</strong><br/>${item.meaning}`;
    cardContainer.appendChild(cardElement);
  });
  startButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
  doneButton.classList.add('hidden');
};
var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

var selectedCards = [];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  memoryGame.cards = MemoryGame.prototype.shuffleCard(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;


  // Score: 
  var $pairsClicked = $('#pairs_clicked').text();
  var $pairsGuessed = $('#pairs_guessed').text();

  

  // Bind the click event of each element to a function
  $('.card').on('click', function () {
    selectedCards.push(this);
    $(this).children(':first').hide();
    $(this).find('.front').addClass('back');
    console.log(selectedCards);
    // debugger;
    
    if (selectedCards.length === 2) {
      var firstCard = selectedCards[0];
      var secondCard = selectedCards[1];
      //MemoryGame.prototype.checkIfPair(firtsCard, secondCard);
      if (MemoryGame.prototype.checkIfPair(firstCard.id, secondCard.id)) {
        selectedCards = [];
      } else {
        setTimeout(function(){
          notTheSame(firstCard, secondCard);
        }, 700);
      }
      selectedCards = [];
    }   
    
  });



  function notTheSame(firstCard, secondCard){
    $(firstCard).children(':first').show();
    $(firstCard).find('.front').removeClass('back');
    $(secondCard).children(':first').show();
    $(secondCard).find('.front').removeClass('back');
  }

});


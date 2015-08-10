// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  $('body').append("<div class='form-group'> <form id='myForm' class= 'form-control'><b>TITLE:</b><input type='text' name='title' data= 'title' required><br><br><b>GENRE:</b><input type= 'text' name= 'genre' data= 'genre' required><br><br><input type='submit'><br><br><table class= 'table table-bordered'><tr><th><b>TITLE</b></th><th><b>GENRE</b></th></tr></table></div>")
    // .append(input.render())
    // .append(cribbage.render())




var Game = function (title, genre) {
  this.title = title || undefined;
  this.genre = genre || undefined;
};



var GameLibrary = function (title) {
  this.title = title;
  this.games = [];
}


// GameLibrary.prototype.addGame = funtion(game) {
//   this.games.push(game);
// };


Game.prototype.render = function(title, genre){
  this.$element = $("<table class='table table-bordered'>")
    .append('<tr><td>'+ this.title + '</td><td>' +this.genre + '</td></tr>')
    return this.$element;
}

var gameArray = [];

$('#myForm').on('submit', function(e) {
  e.preventDefault();
  console.log('test');
//Get all the forms elements and their values in one step
  // var values = $(this).serialize();
  var obj = {};
    $(':input:lt(2)').each(function() {
      obj.push($(this).name + $(this).val());
});
  gameArray.push(obj)
  console.log(gameArray);
});


// $('#myForm').bind('submit', function () {
//   var elements = this.elements;
// });

// new Game($', 'Board Game');
// console.log(chess);

var cribbage = new Game('Cribbage', 'Card Game')

});

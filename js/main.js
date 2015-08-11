// add scripts
$(document).on('ready', function() {
  console.log('sanity check!');
  $('body').append("<div class='form-group'> <form id='myForm' class= 'form-control'><b>TITLE:</b><input type='text' name='title' data= 'title' required><br><br><b>GENRE:</b><input type= 'text' name= 'genre' data= 'genre' required><br><br><input type='submit'><br><br><table class= 'table table-bordered'><tr><th><b>TITLE</b></th><th><b>GENRE</b></th></tr></table></div>")
    // .append(input.render())
    // .append(cribbage.render())


var Game = function (title, genre) {
  this.title = title;
  this.genre = genre;
};



var GameLibrary = function (title) {
  this.title = title;
  this.games = [];
}


GameLibrary.prototype.addGame = function(game) {
  this.games.push(game);
};


Game.prototype.render = function(){
  this.$element = $("tbody")
    .append('<tr><td>'+ this.title + '</td><td>' +this.genre + '</td></tr>')
    return this.$element;
}

var gameArray = [];

$('#myForm').on('submit', function(e) {
  e.preventDefault();

  //grab values
  var title = $('input:eq(0)').val();
  var genre = $('input:eq(1)').val();
  $('.table').append('<tr><td>'+title+'</td><td>'+genre+'</td></tr>')
  //iterate over table titles and genres
  for (var i = 0; i < $("tbody").length; i++) {
    // if (title.indexOf && genre.indexOf === -1) {
      gameArray.push({Title: title, Genre: genre});

    // }
  }

  console.log(gameArray);

});

});

// Game.prototype.addGame = function(title, genre) {
//   for (var i = 0; i < tbody.length; i++) {
//     if (title.indexOf && genre.indexOf === -1)
//   };
// }
// });


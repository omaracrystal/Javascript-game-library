// add scripts
$(document).on('ready', function() {
  console.log('sanity check!');

  //creating a form for game library and table header set up
  $('body').append("<div class='form-group'> <form id='myForm' class= 'form-control'><b>TITLE:</b><input type='text' name='title' data= 'title' id='title' required><br><br><b>GENRE:</b><input type= 'text' name= 'genre' data= 'genre' id='genre' required><br><br><input type='submit'><br><br><table class= 'table table-bordered'><tr><th><b>TITLE</b></th><th><b>GENRE</b></th></tr></table></div>")


  // //creating a Game class
  // var Game = function (title, genre) {
  //   this.title = title;
  //   this.genre = genre;
  // };


  // var GameLibrary = function (title) {
  //   this.title = title;
  //   this.games = [];
  // }

  // GameLibrary.prototype.addGame = function(game) {
  //   this.games.push(game);
  // };



  // Game.prototype.render = function(){
  //   this.$element = $("tbody")
  //     .append('<tr><td>'+ this.title + '</td><td>' +this.genre + '</td></tr>')
  //     return this.$element;
  // }



  var gameArray = [];
  var titleArray = [];


  $('#myForm').on('submit', function(e) {
    e.preventDefault();

    //grab values
    var title = $('input:eq(0)').val();
    var genre = $('input:eq(1)').val();
    // $('input').val('');

    if (titleArray.indexOf(title) === -1) {
      var game = {Title: title, Genre: genre};

      titleArray.push(title);

      //creating an object arr ay of games with titles and genres
      gameArray.push(game);

      //appending values to DOM
      $('.table').append('<tr><td>'+title+'</td><td>'+genre+'</td></tr>');

      console.log(gameArray);

    };

  //clear out input fields once submit button is clicked
    $('#title').val('');
    $('#genre').val('');

    });


  });


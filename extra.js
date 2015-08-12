// add scripts
$(document).on('ready', function() {
  console.log('sanity check!');

  //creating a form for game library and table header set up
  // $('body').append("<div class='form-horizontal'> <form id='myForm' class= 'form-horizontal'><b>TITLE:</b><input type='text' name='title' data= 'title' id='title' required><br><br><b>GENRE:</b><input type= 'text' name= 'genre' data= 'genre' id='genre' required><br><br><input type='submit'><br><br><table class= 'table table-bordered'><tr><th><b>TITLE</b></th><th><b>GENRE</b></th></tr></table></div>")


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
  var genreArray = [];


  $('#myForm').on('submit', function(e) {
    e.preventDefault();

    //grab values
    var title = $('input:eq(0)').val();
    var genre = $('input:eq(1)').val();
    //clear out input fields once submit button is clicked
    $('#title').val('');
    $('#genre').val('');

    //check to make sure title's are unique then adding them into titleArray and gameArray
    if (titleArray.indexOf(title) === -1) {
      var game = {title: title, genre: genre};
      titleArray.push(title);
      //creating an object array of games with titles and genres
      gameArray.push(game);
      //appending new games values to DOM
      $('tbody').append('<tr><td>'+title+'</td><td>'+genre+'</td></tr>');

      // console.log(gameArray);
    };

    //check for unique game genres then push to the genreArray
    if (genreArray.indexOf(genre) === -1) {
      genreArray.push(genre);
      console.log(genreArray);
      //create new instances of Game Library based on genres within drop down menu
      $('#dropDown').append('<option>'+genre+'</option>');
    }

    });

  //on selected genre within dropDown menu populate the library associated to that one genre
  $('select').change(function() {
    console.log('success!')
    var type = $(this).val();
    // switch(type) {
    $('tbody').empty();
    for (var i = 0; i < gameArray.length; i++) {
      if (type === gameArray[i].Genre) {
        console.log(gameArray);
        $('tbody').append('<tr><td>'+gameArray[i].title+'</td><td>'+gameArray[i].genre+'</td></tr>');
      }
    };


      // }
    });

});


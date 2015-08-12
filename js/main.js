// add scripts
$(document).on('ready', function() {
  console.log('sanity check!');

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
    };
    //check for unique game genres then push to the genreArray
    if (genreArray.indexOf(genre) === -1) {
      genreArray.push(genre);
      //create new instances of Game Library based on genres within drop down menu
      $('#dropDown').append('<option>'+genre+'</option>');
    }
  });

  //on selected genre within dropDown menu populate the library associated to that one genre
  $('select').change(function() {
    //assign type to the value of the genre selected
    var type = $(this).val();
    //clear out library for new library based on genre
    $('tbody').empty();
    //interate over gameArray
    for (var i = 0; i < gameArray.length; i++) {
      //check to make sure the type of genre selected matches all movies with that same genre
      if (type === gameArray[i].genre) {
        //append new library based on genre
        $('tbody').append('<tr><td>'+gameArray[i].title+'</td><td>'+gameArray[i].genre+'</td></tr>');
        }
      //show the full library of games
      if (type === "All Games") {
        $('tbody').append('<tr><td>'+gameArray[i].title+'</td><td>'+gameArray[i].genre+'</td></tr>');
      }
      };
    });

});


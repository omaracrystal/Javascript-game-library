// add scripts
$(document).on('ready', function() {
  console.log('sanity check!');

  var gameArray = [];
  var titleArray = [];
  var genreArray = [];
  var counter = 0;

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
      $('tbody').append('<tr id="game'+ counter +'""><td>'+title+'<button type="delete" button class= "btn btn-danger btn-xs pull-right" tableCounter="game'+counter+'"">X</button></td><td>'+genre+'</td></tr>');

      counter++
    };
    //check for unique game genres then push to the genreArray
    if (genreArray.indexOf(genre) === -1) {
      genreArray.push(genre);
      //create new instances of Game Library based on genres within drop down menu
      $('#dropDown').append('<option>'+genre+'</option>');
    }

    $('.btn[type=delete]').on('click', function () {
      var tableCounter = $(this).attr('tableCounter');
      alert("Are you sure you want to delete " + tableCounter + "?");
      //remove game from DOM
      $('#'+ tableCounter).remove();
      //remove game from gameArray


      console.log(tableCounter);
      });

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
        $('tbody').append('<tr id="game'+ counter +'""><td>'+gameArray[i].title+'<button type="delete" button class= "btn btn-danger btn-xs pull-right" tableCounter="game'+counter+'"">X</button></td><td>'+gameArray[i].genre+'</td></tr>');
        }
      //show the full library of games
      if (type === "All Games") {
        $('tbody').append('<tr id="game'+ counter +'""><td>'+gameArray[i].title+'<button type="delete" button class= "btn btn-danger btn-xs pull-right" tableCounter="game'+counter+'"">X</button></td><td>'+gameArray[i].genre+'</td></tr>');
      }
      };
    });

});


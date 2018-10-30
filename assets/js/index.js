$(function(){
  var number = Math.round((Math.random() * 100));
  var add = 0;
  $('#bouton').click(function() {
    add++;
    var value = $('#texte').val();
    if(isNaN(value)==false){
      if(value < number){
        alert('Le chiffre a trouver est plus grand');
      }
      else if (value > number) {
        alert('Le chiffre a trouver est plus petit');
      }
      else if (value == number) {
        alert('Bravo ! Vous avez fait ' + add + ' tentative(s).');
      }
    }
    else {
      alert('Saisissez un nombre !');
    }
  });
});

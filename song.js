SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
/* tamil songs*/

$(document).ready(function(){   
    SC.stream('/tracks/801174487',function(sound){ 

        $('.start1').click(function(e) {
          e.preventDefault();
          sound.start();
        });

        $('.stop1').click(function(e){
            e.preventDefault();
            sound.stop();
        });

    });

    SC.stream('/tracks/971575690',function(sound){ 

      $('.start2').click(function(e) {
        e.preventDefault();
        sound.start();
      });

      $('.stop2').click(function(e){
          e.preventDefault();
          sound.stop();
      });

  });

  SC.stream('/tracks/728664046',function(sound){ 

    $('.start3').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    $('.stop3').click(function(e){
        e.preventDefault();
        sound.stop();
    });

});

SC.stream('/tracks/772641595',function(sound){ 

  $('.start4').click(function(e) {
    e.preventDefault();
    sound.start();
  });

  $('.stop4').click(function(e){
      e.preventDefault();
      sound.stop();
  });

});

SC.stream('/tracks/802934764',function(sound){ 

  $('.start5').click(function(e) {
    e.preventDefault();
    sound.start();
  });

  $('.stop5').click(function(e){
      e.preventDefault();
      sound.stop();
  });

});

/*english songs */

SC.stream('/tracks/244690563',function(sound){ 

  $('.start6').click(function(e) {
    e.preventDefault();
    sound.start();
  });

  $('.stop6').click(function(e){
      e.preventDefault();
      sound.stop();
  });

});

SC.stream('/tracks/777072070',function(sound){ 

  $('.start7').click(function(e) {
    e.preventDefault();
    sound.start();
  });

  $('.stop7').click(function(e){
      e.preventDefault();
      sound.stop();
  });

});

SC.stream('/tracks/807244147',function(sound){ 

  $('.start8').click(function(e) {
    e.preventDefault();
    sound.start();
  });

  $('.stop8').click(function(e){
      e.preventDefault();
      sound.stop();
  });

});

SC.stream('/tracks/215525311',function(sound){ 

  $('.start9').click(function(e) {
    e.preventDefault();
    sound.start();
  });

  $('.stop9').click(function(e){
      e.preventDefault();
      sound.stop();
  });

});

SC.stream('/tracks/192032277',function(sound){ 

  $('.start10').click(function(e) {
    e.preventDefault();
    sound.start();
  });

  $('.stop10').click(function(e){
      e.preventDefault();
      sound.stop();
  });

});

/*hindi songs */

SC.stream('/tracks/85728261',function(sound){ 

  $('.start11').click(function(e) {
    e.preventDefault();
    sound.start();
  });

  $('.stop11').click(function(e){
      e.preventDefault();
      sound.stop();
  });

});

SC.stream('/tracks/199477840',function(sound){ 

  $('.start12').click(function(e) {
    e.preventDefault();
    sound.start();
  });

  $('.stop12').click(function(e){
      e.preventDefault();
      sound.stop();
  });

});

SC.stream('/tracks/237118392',function(sound){ 

  $('.start13').click(function(e) {
    e.preventDefault();
    sound.start();
  });

  $('.stop13').click(function(e){
      e.preventDefault();
      sound.stop();
  });

});

SC.stream('/tracks/166669642',function(sound){ 

  $('.start14').click(function(e) {
    e.preventDefault();
    sound.start();
  });

  $('.stop14').click(function(e){
      e.preventDefault();
      sound.stop();
  });

});

SC.stream('/tracks/123676319',function(sound){ 

  $('.start15').click(function(e) {
    e.preventDefault();
    sound.start();
  });

  $('.stop15').click(function(e){
      e.preventDefault();
      sound.stop();
  });

});

});   


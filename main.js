SC.initialize({

    client_id: '340f063c670272fac27cfa67bffcafc4'
  
  });
  
  
  
  $(document).ready(function() {
  
      SC.stream('/tracks/293',function(sound){
  
           $('#start1').click(function(e) {
  
             e.preventDefault();
  
             sound.start();
  
           });
  
  
  
           $('#stop1').click(function(e) {
  
             e.preventDefault();
  
             sound.stop();
  
           });
  
      });
  
  
  
      SC.stream('/tracks/294',function(sound){
  
           $('#start2').click(function(e) {
  
             e.preventDefault();
  
             sound.start();
  
           });
  
  
  
           $('#stop2').click(function(e) {
  
             e.preventDefault();
  
             sound.stop();
  
           });
  
      });
  
  
  
      SC.stream('/tracks/295',function(sound){
  
           $('#start3').click(function(e) {
  
             e.preventDefault();
  
             sound.start();
  
           });
  
  
  
           $('#stop3').click(function(e) {
  
             e.preventDefault();
  
             sound.stop();
  
           });
  
      });
  
  
  
      SC.stream('/tracks/296',function(sound){
  
           $('#start4').click(function(e) {
  
             e.preventDefault();
  
             sound.start();
  
           });
  
  
  
           $('#stop4').click(function(e) {
  
             e.preventDefault();
  
             sound.stop();
  
           });
  
      });
  
  
  
      SC.stream('/tracks/297',function(sound){
  
           $('#start5').click(function(e) {
  
             e.preventDefault();
  
             sound.start();
  
           });
  
  
  
           $('#stop5').click(function(e) {
  
             e.preventDefault();
  
             sound.stop();
  
           });
  
      });
  
  
  
      SC.stream('/tracks/298',function(sound){
  
           $('#start6').click(function(e) {
  
             e.preventDefault();
  
             sound.start();
  
           });
  
  
  
           $('#stop6').click(function(e) {
  
             e.preventDefault();
  
             sound.stop();
  
           });
  
      });
  
  
  
  });
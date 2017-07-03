SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
    SC.stream('/tracks/151844103',function(sound){
         $('#songs1').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#songe1').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/278237163',function(sound){
         $('#songs2').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#songe2').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/38516344',function(sound){
         $('#songs3').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#songe3').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/20585595',function(sound){
         $('#songs4').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#songe4').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/66357525',function(sound){
         $('#songs5').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#songe5').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/142018982',function(sound){
         $('#songs6').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#songe6').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/63506387',function(sound){
         $('#songs7').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#songe7').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/2944467',function(sound){
         $('#songs8').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#songe8').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

});

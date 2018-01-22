$(document).ready(function(){

  //Menu

  var KeyMenu = true;
  $( '#mobileMenu' ).on( 'click', function(){   
    if( KeyMenu == true ){
      $( '.top_mnu > ul' ).animate( { 'top': '94px' },600 );
      KeyMenu = false;
    } else{
      $( '.top_mnu > ul' ).animate( { 'top': '-1000px' },600 );
      KeyMenu = true;
    }
  } );  

  $( document ).click( function( e ){
    var blockMenu = $( '.top_mnu' );
    if( KeyMenu == false ){
      if( !blockMenu.is( e.target ) && blockMenu.has( e.target).length === 0 ){
        $( '.top_mnu > ul' ).animate( { 'top': '-1000px' },600 );
        KeyMenu = true;
      }     
    }
  } );

  // setTimeout(function(){
  //   $('.mx-some_text').animate({'font-size': '0px'},1000);
  // },3000);

  // setTimeout(function(){
  //   $('.mx-some_text').text('Ну все, поусіпусяли, а тепер працювати!');
  //   $('.mx-some_text').animate({'font-size': '50px'},1000);
  // },5000);

  // setTimeout(function(){
  //   $('.mx-some_text').text('Ну все, поусіпусяли, а тепер працювати! :)');
  // },8000);

  // setTimeout(function(){
  //   $('.mx-some_text').animate({'opacity': 0},1000);
  // },10000);
  
  // console.log('I love Olenka!');

  //Equalheight 
  getMaxHeight( '.text_wrap' );
  
});

// ______________________________________________________________________________

  //Equalheight
  function getMaxOfArray( numArray ) {
    return Math.max.apply( null, numArray );
  }

  function getMaxHeight( element ){

    var heightArray = [];

    $( element ).each( function(){      
      heightArray.push( $( this ).height() );
    } );    

    var maxHeight = getMaxOfArray( heightArray );
    $( element ).css( 'height', maxHeight + 40 + 'px' );

  }
 
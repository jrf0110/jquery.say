(function(factory){
  if ( typeof define === 'function' && define.amd ){
    // AMD. Register as an anonymous module.
    define( ['jquery'], factory );
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function( $ ){
  $.fn.say = function( options ){
    var $this = this;

    var defaults = {
      delay: 50
    , elementJumpDelay: 800
    , endOfSentenceDelay: 500
    , endOfSentenceChar: [ '.', '?', '!' ]
    };

    options = $.extend( {}, defaults, options );

    // Prep each character
    $this.each( function(){
      var $el = $(this);

      $el.html(
        $el.text().split('').map( function( c ){
          return '<span class="text-character hidden">' + c + '</span>';
        }).join('')
      );
    });

    $this.css('visibility', 'visible');

    var currEl = -1;
    var showEl = function(){
      if ( currEl++ === $this.length ) return;

      showChar( $this.eq( currEl ).find('.text-character.hidden'), function(){
        setTimeout( showEl, options.elementJumpDelay );
      });
    };

    var showChar = function( $chars, curr, callback ){
      if ( typeof curr === 'function' ){
        callback = curr;
        curr = -1;
      } else {
        curr = curr === null ? -1 : curr;
      }

      if ( curr++ === $chars.length ) return callback();

      var text = $chars.eq( curr ).text();
      $chars.eq( curr ).removeClass('hidden').css('visibility', 'visible');

      setTimeout(
        function(){ showChar( $chars, curr, callback );  }
      , options.endOfSentenceChar.indexOf( text ) > -1 ?
          options.endOfSentenceDelay : options.delay
      );
    };

    showEl();
  };
}));
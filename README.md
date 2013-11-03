# jquery.say

Animates text to display letter-by-letter kind of like the way speech text is displayed in video games.

## Install

Install with jam or bower

```
bower install jquery-say
jam install jquery-say
```

## Example

Ensure that whatever text you want to animate, that its ```visibility``` is set to ```hidden```. Otherwise, you'll see the text until the ```$.fn.say``` function is called.

Make all ```p``` tags animate their text:

```html
<!DOCTYPE HTML>
<html>
  <head>
    <script>
    $(function(){
      $('p').say({
        // default: 50;   Time between each character
        delay:              50 
        // default: 800;  Time between each element
      , elementJumpDelay:   800
        // default: 500;  Time between each sentence
      , endOfSentenceDelay: 500
        // default .?!;   Character denoting sentence end
      , endOfSentenceChar: [ '.', '?', '!' ]
        // Called when the entire sequence is complete
      , onComplete:       function(){}
        // Called when an element is complete
      , onEndOfElement:   function( $prev, $curr ){}
        // Called when a sentence is complete
      , onEndOfSentence:  function( $el ){}
        // Called for each character processed
      , onChar:           function( character, $el ){}
      });
    });
    </script>
  </head>
  <body>
    <p>I am going to animate. There's a short delay between each sentence, right?</p>
    <p>Yes, there is! And a longer one between element.</p>
  </body>
</html>
```

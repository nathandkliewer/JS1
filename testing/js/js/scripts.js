let rockBand = prompt('You are the perfect age for my survey!\n\nThe one and only question I for you is\n\nWhats the greatest rock band of all times?');

 console.log(rockBand.toLowerCase());
 if (rockBand.toLowerCase() == "led zeppelin") {
   alert(`HATS OFF TO YOU MY FRIEND!\n\nLED ZEPPELIN IS THE GREATEST BAND EVER!`);
   window.location.href = 'http://www.ledzeppelin.com';
 } else {
   alert(`YOU MUST BE EXTREMELY DELUSIONAL!\n\n${rockBand.toUpperCase()} IS A MUSICAL JOKE!\n\nLED ZEPPELIN IS THE GREATEST BAND EVER!`);
   window.location.href = 'http://www.ledzeppelin.com';
 }

// 1 Stampare i numeri da 1 a 100

for (var i=0; i <= 100; i++) {
  if ((i % 3 == 0 ) && (i % 5 == 0)) {
    console.log(i + 'FizzBuzz');

    // Per i multipli di 3 stampi Fizz al posto del numero

  }else if (i % 3 == 0 ) {
    console.log('Fizz')

    //  Per i multipli di 5 stampi Buzz.
  
  } else if(i % 5 == 0) {
    console.log(i + 'Buzz')
  
  }else {
    console.log(i);
  }
}
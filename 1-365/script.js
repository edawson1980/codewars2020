//**DISEMVOWEL TROLLS - write a function to return a string devoid of vowels

let str = "This website is for losers LOL!";

// function disemvowel(str){
//   var char = str.split('');
//   console.log(char);
// }

let disemvowel = function(str){
  let char = str.split('');
  let vowels = [];
  let consts = [];
  for(let i = 0; i < char.length; i++){
    if((i == 'a')||(i == 'i')||(i == 'e')||(i == 'o')||(i == 'u')){
      vowels.push(i);
    }else{
      consts.push(i);
    }
  }
}

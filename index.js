var checkBox = document.getElementById ('checkBox');

var picBulb = document.getElementById ('pic');

checkBox.addEventListener ("click", function (){
  if (checkBox.checked===true){
    picBulb.src = "images/pic2.png";
  } else if (checkBox.checked ===false){
    picBulb.src = "images/pic1.png";
  }
});


//  OR
//
// var checkBox = document.getElementById ('checkBox');
//
// var picBulb = document.getElementById ('pic');
//
//
// checkBox.addEventListener ("click", function (){
//   if (checkBox.checked===true){
//     picBulb.src = "images/pic2.png";
//   } else  {
//     picBulb.src = "images/pic1.png";
//   }
// });

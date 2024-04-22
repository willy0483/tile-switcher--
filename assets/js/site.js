// write cool JS hwere!!
let mainImage = document.getElementById('mainImage');
let smallImgOne = document.getElementById('smallImgOne');
let smallImgTwo = document.getElementById('smallImgTwo');
let smallImgThree = document.getElementById('smallImgThree');
let smallImgFour = document.getElementById('smallImgFour');

smallImgOne.addEventListener('click', function (envet){

   let bigImageUrl = mainImage.src
   let smallImgUrl = smallImgOne.src


   mainImage.src = smallImgUrl
   smallImgOne.src = bigImageUrl
    
})
smallImgTwo.addEventListener('click', function (envet){

    let bigImageUrl = mainImage.src
    let smallImgUrl = smallImgTwo.src
 
 
    mainImage.src = smallImgUrl
    smallImgTwo.src = bigImageUrl
     
 })
 smallImgThree.addEventListener('click', function (envet){

    let bigImageUrl = mainImage.src
    let smallImgUrl = smallImgThree.src
 
 
    mainImage.src = smallImgUrl
    smallImgThree.src = bigImageUrl
     
 })
 smallImgFour.addEventListener('click', function (envet){

    let bigImageUrl = mainImage.src
    let smallImgUrl = smallImgFour.src
 
 
    mainImage.src = smallImgUrl
    smallImgFour.src = bigImageUrl
     
 })
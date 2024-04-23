// write cool JS hwere!!
let mainImage = document.getElementById("mainImage");
let smallImgOne = document.getElementById("smallImgOne");
let smallImgTwo = document.getElementById("smallImgTwo");
let smallImgThree = document.getElementById("smallImgThree");
let smallImgFour = document.getElementById("smallImgFour");

smallImgOne.addEventListener("click", (e) => {
  ChangeImage(smallImgOne)
})
smallImgTwo.addEventListener("click", (e) => {
  ChangeImage(smallImgTwo)
})
smallImgThree.addEventListener("click", (e) => {
  ChangeImage(smallImgThree)
})
smallImgFour.addEventListener("click", (e) => {
  ChangeImage(smallImgFour)
})

function ChangeImage(smallImageRecived) {

  let bigImageUrl = mainImage.src;

  mainImage.src = smallImageRecived.src
  smallImageRecived.src = bigImageUrl
}

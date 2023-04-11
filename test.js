const imageArray1 = [
	"assets/images/outfits/top/top1.png",
  "assets/images/outfits/top/top2.png",
  "assets/images/outfits/top/top3.png",
  "assets/images/outfits/top/top4.png",
  "assets/images/outfits/top/top5.png",
  "assets/images/outfits/top/top6.png"
];

const topList = document.getElementById("topList");
addAll(topList, imageArray1) 

// Generate random picture takes a list_select pointer to the html elelemnt and list of picture
// It will output a random picture from the list of picture and add it to the list emlement list_selector point to 
function addAll(list_select, listPicture) {
  list_select.innerHTML = '';
  for (const element of listPicture) {
    let newListItem = document.createElement('li');
    let newImage = document.createElement('img');
    newImage.src = element; 
    newListItem.appendChild(newImage);
    list_select.appendChild(newListItem);
  }
}

function generateARandomPicture(list_select, listPicture) {
  let newImage = document.createElement('img');
  let newListItem = document.createElement('li');
  const randomIndex = Math.floor(Math.random() * listPicture.length);
  newImage.src = listPicture[randomIndex]; 
  newListItem.appendChild(newImage);
  // append the new list item to the existing list
  list_select.appendChild(newListItem);
}


function generateTop() {
  topList.innerHTML = '';
  generateARandomPicture(topList, imageArray1)
}
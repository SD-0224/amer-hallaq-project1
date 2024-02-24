let favourites=document.getElementById("favourites-hidden")
let showFavourites=document.getElementById('favourites-link')

showFavourites.addEventListener('click', () => {
  if(favourites.style.display==="block") {
    favourites.style.display="none"
  }
  else {
    favourites.style.display="block"
  }
  
})


let ratingFields= document.getElementsByClassName("stars")

const arrayOfRating=[4.1,3.5,3.3,4.5,2.5,4.4,3.9,4.4,3.9,4,3.6,4.3,4.5,4.1,3.2,3]

for(let i=0;i<ratingFields.length;i++) {

  ratingFields[i].innerHTML = getStars(arrayOfRating[i]);

}

function getStars(rating) {

  // Round to nearest half
  rating = Math.round(rating * 2) / 2;
  console.log(rating)
  let output = [];

  // Append all the filled whole stars
  for (var i = rating; i >= 1; i--) 

     output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');

    // If there is a half a star, append it
    if (i == .5) {output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');}
  
  

  // Fill the empty stars
  for (var i = (5 - rating); i >= 1; i--) 

    output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
    
  
    

  return output.join('');

}


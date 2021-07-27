
document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('generate-stuff').addEventListener('click', function(e){
        //e.preventDefault(); //Prevent page from refreshing on submit
        
    //PET API (axios GET Request)
        const requiredHeaders = {
            headers: {
                "x-rapidapi-key": "9fd45635aamshcd7ceb6aaf23b93p1d29e2jsn2bdeb85da4f1",
                "x-rapidapi-host": "mlemapi.p.rapidapi.com"
            }};
    
        axios.get("https://mlemapi.p.rapidapi.com/randommlem", requiredHeaders)
        .then(function(response){
            //console.log(response.data.url);
            let petImage = document.getElementById('petImage');
            petImage.innerHTML = `<img src="${response.data.url}" alt="Random pet image" height=400px width=550>`  
        })  
    
    
    /*ADVICE API (axios GET request)
    Note: Added the GET request inside of a delay response function bc the quote loads before the image. Trying to get them to load at the same time 
    */
        let delayInMilliseconds = 1200; //1.2 second
        setTimeout(function() {
            //Code you want to delay goes below
            axios.get('https://api.adviceslip.com/advice')
            .then(function(response){
                //console.log(response.data.slip.advice);
                let advice = document.getElementById('advice');
                advice.innerHTML = response.data.slip.advice; 
            })
        }, delayInMilliseconds);


    }) //End of click button event listener  

}) //End of DOM content loaded event listener



/*
HOW TO GET IMAGE TO LOAD BEFORE THE ADVICE 

1) Build function to get image to generate the image
  Use Async function to 'await' (slow down) the response.  
OR..

2) Use if/else conditional to have advice load after img

NOTE:
The initial code inside of axios.get for loading the image
Just so you don't forget...
    let petImage = document.getElementById('petImage');
    petImage.innerHTML = `<img src="${response.data.url}" alt="Random pet image" height=400px width=550>`

*/



//TRYING FETCH GET REQUEST - Working!
/* fetch('https://mlemapi.p.rapidapi.com/randommlem', {
  headers: {
    'x-rapidapi-key': '9fd45635aamshcd7ceb6aaf23b93p1d29e2jsn2bdeb85da4f1',
    'x-rapidapi-host': 'mlemapi.p.rapidapi.com'
  }, 
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
}); */



//TRYING OUT AMINE.JS

anime({
    targets: '.square',
    translateX: {
        value: '250px',
        duration: '1000'
    },
    width: {
        value: '-=20px',
        duration: '1000',
        //easing: 'easeInOutSine'
    },
    rotate: {
        value: '8turn',
        duration: '8000',
        //easing: 'easeInOutSine'
    },
    //direction: 'alternate'

});





	
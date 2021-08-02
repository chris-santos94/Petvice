
document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('advice').style.display = 'none';

    document.getElementById('generate-stuff').addEventListener('click', function(e){

        //Turn off display for the Petvice Title 
        document.getElementById('petvice').style.display = 'none';

        //Pet API required headers
        const requiredHeaders = {
            headers: {
                "x-rapidapi-key": "9fd45635aamshcd7ceb6aaf23b93p1d29e2jsn2bdeb85da4f1",
                "x-rapidapi-host": "mlemapi.p.rapidapi.com",
                "Content-Security-Policy": "script-src 'self' https://cdnjs.cloudflare.com"
            }};
    
        //Pet API GET Request using Axios 
        axios.get("https://mlemapi.p.rapidapi.com/randommlem", requiredHeaders)
            
        .then(function(response){
            console.log(this.loading);
            let petImage = document.getElementById('petImage');
            petImage.innerHTML = `<img src="${response.data.url}" alt="Random pet image">`  
        })  
    

        /*Advice API GET Request using Axios
        Delay response func slows down loading time for advice. Try async next time*/
        
        let delayInMilliseconds = 700; //0.7 second
            setTimeout(function() {
                //Code you want to delay goes below
                
                axios.get('https://api.adviceslip.com/advice')
                .then(function(response){
                  console.log(response);
                  let advice = document.getElementById('advice');
                  advice.innerHTML = response.data.slip.advice; 
                })
            }, delayInMilliseconds); 
        
    });
}) 


//AMINE.JS Make Speech/Though Bubble Spin

let spinSpeechBubble = anime({
    targets: '.thought',
    display: 'block',
    rotate: 360,
    duration: '3000'
});

function animation(){
    document.getElementById('advice').style.display = 'block';
    spinSpeechBubble.play(); 
}

//ANIME.JS Make Arrow Bounce
anime({
  targets: '.arrowIcon',
  keyframes: [
    {translateY: -10},
    {translateY: 10}, 
  ],
  easing: 'linear',
  loop: true
});





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








	
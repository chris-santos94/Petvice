
/* document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('form').addEventListener('submit', function(e){
        e.preventDefault();
        let foodContainer = document.getElementById('foodContainer');
        let userSearch = document.getElementById('userSearch').value;
        
        console.log(userSearch);
        
        document.getElementById('userSearch').value = '';
        
        //foodContainer.innerHTML = renderFood();

    })
    
}) */

//Test axios b4 copying inside event listener above
/* axios.get('https://api.yelp.com/v3/businesses/search?Authorization=Bearer CJLKPc0GIPMTvKez02rbHy0bxE5WOkWPTyW69hkHSxUgNpjzsJHfD-HCRl5JX6XJCJYj8ZSrJUe9Uf7j6PvoeYOqOnwYihmQCZrYp4Ge85hOV-PFWaT7urUdiVj3YHYx&location=Atlanta', {
    headers: {
       'Access-Control-Allow-Origin': '*'
    }
}).then(function(response){
   
}); */

axios.get('https://api.yelp.com/v3/businesses/search?Authorization=BearerCJLKPc0GIPMTvKez02rbHy0bxE5WOkWPTyW69hkHSxUgNpjzsJHfD-HCRl5JX6XJCJYj8ZSrJUe9Uf7j6PvoeYOqOnwYihmQCZrYp4Ge85hOV-PFWaT7urUdiVj3YHYx&location=Atlanta');



/* function renderFood(restaurantArray){
    
    let restaurantsHTML = restaurantArray.map(function(restaurant){
        
        return `
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        `
    })
    return restaurantsHTML.join('');

} */
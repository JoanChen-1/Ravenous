//Register in YELP and put your own api key here.
const apiKey = '<Your key>';
const Yelp = {
    //the method used to retrieve search results from the Yelp API.
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers:
            {Authorization: `Bearer ${apiKey}`}
        }).then(
            response=>{
                if(response.ok){
                    return response.json();
                }
            }
        ).then(
            jsonResponse =>{
                if(jsonResponse.businesses){
                    return jsonResponse.businesses.map(business =>{
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    });
                }

            }
        );
    }
}

export default Yelp;
 

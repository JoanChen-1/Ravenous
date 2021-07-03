const apiKey = 'mnc_4_ESdUQ6p5Z8m2Vt01VFzQ-4EQ70LXGLp8Pjg6_nEVkM1V1SeI44zFh-efGfUecVQxqCTxzfft9i4l22pGCwBjA62fomMoN2vEXeFeKVffnVOHHjoFQR38LaYHYx';
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
 
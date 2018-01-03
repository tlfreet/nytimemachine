//get the information from the nytime api
const STORE= {
    searchYear: '',
    searchMonth: '',
    searchDay: '',
    results: [],
}

function inputSearchTerms (){
    $('#submit-form').submit(function(event) {
        event.preventDefault();
        console.log('inputSearchTerms ran');

        //const year = $('#submit-button').val();
       // console.log(year);

    }

    )
}

function getDataFromApi(year, month, day, callback){
    var NYTIIMES_URL = `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json`;
    NYTIIMES_URL+= '?' + $.param({
        'api-key': "a2df3a93ff5541dd979083ae7243e85c"
    });
    $.ajax({
         url: NYTIIMES_URL,
         method: 'GET',
         success: handleApiResults
    }).done(function(results) {

    }).fail(function(err) {
        throw err;
    });
   STORE.searchYear = year;
   STORE.searchMonth = month;
  //  Store.searchDay = day;
}

 function handleApiResults (data){
     console.log('handleApiResults ran');
     const allPages = data.response.docs;
     const pageOne = allPages.map(function(page) 
        {if (page.type_of_material == 'Front Page' && page.pub_date == `1972-08-01T00:00:00Z`) {
            return ( `<div class="article">
            <a href=${page.web_url}> ${page.headline.main}</a>
            <img src=${page.multimedia.url}>
            <p>${page.snippet}</p>
            </div>`)
           
            //renderSearchResults();
            //console.log(page.headline)}});
      // multimedia.pub_date = `${year}-0${month}-${day}T00:00:00Z`
        };
     });
     console.log(allPages);
      $(".past-news").html(pageOne);
     //STORE.results = pageOne;
}

//function sortByDay (data){}

//render the data from api
/*will want
    for url: docs.web_url
    for title: docs.headline.main
    for image: docs.multimedia.url
    for blurb: docs.snippet
    for page: docs.multimedia.print_page
*/ 



//pull out only the headline, snippet, photo, and link



$(inputSearchTerms());
$(getDataFromApi (1972, 8, handleApiResults));
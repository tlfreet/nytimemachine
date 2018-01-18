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
        //let inputDate = $('#date').val();
        var date = new Date($('#date').val());
        day = date.getDate() + 1; 
        month = date.getMonth() + 1; 
        year = date.getFullYear(); 
       fullSearchDate = [year, month, day].join("");
       console.log(fullSearchDate);
        getDataFromApi(fullSearchDate, fullSearchDate, handleApiResults);

         })
}

function getDataFromApi(begin_date, end_date, callback){
    //inputSearchTerms();
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "a2df3a93ff5541dd979083ae7243e85c",
        'begin_date': begin_date,
        'end_date': end_date,
    });
    $.ajax({
         url: url,
         method: 'GET',
    }).done(function(result) {
        console.log(result);
    }).fail(function(err) {
        throw err;
        });
    }

 function handleApiResults (data){
     console.log('handleApiResults ran');
     /*const allPages = data.response.docs;
     console.log(`${year}-${month}-${day}T00:00:00Z`);
     const pageOne = allPages.map(function(page) 
        {if (page.pub_date == `${year}-${month}-${day}T00:00:00Z`) {
            return ( `<div class="article">
            <a href=${page.web_url}> ${page.headline.main}</a>
            <p>${page.snippet}</p>
            </div>`)
        }
         else {
             console.log(page.pub_date);
             
        };
     }); 
     console.log(allPages);
 */     
    
}





//pull out only the headline, snippet, photo, and link



$(inputSearchTerms());
//$(getDataFromApi ('19720801', '19720801', handleApiResults));
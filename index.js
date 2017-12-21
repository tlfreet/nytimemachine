//get the information from the nytime api
const NYTIIMES_URL = "https://api.nytimes.com/svc/archive/v1/1972/8.json";

function getDataFromApi(year, month, callback){
    const query ={
        year: year,
        month: month,
        apiKey: '?a2df3a93ff5541dd979083ae7243e85c',
    };
$.getJSON(NYTIIMES_URL,query, callback);
}

//render the data from api
 function handleApiResults (data){
  console.log(data);
}
//make the call to the 

getDataFromApi (1972, 8, handleApiResults);
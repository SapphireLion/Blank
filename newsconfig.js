var newsURL = "https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=31ac97faff7841a0beec5fcbeae608c9";

loadJSON(newsURL,gotData);


function gotNewsData(data)
{
    myNews=data;
    //loadJSON("./credentials.JSON",gotDataGoogle);


}
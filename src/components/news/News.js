import React, { useEffect, useState } from "react";
import "./News.css"

const News = () => {  
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f"
    );
    let data = await response.json();
    setMyNews(data.articles);
  };  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="strong-div mb-5">
    <h1 className="text-center my-3 ">Enjoy Daily Top-Headlines</h1>
          <div className="mainDiv">
      {mynews.map((ele) => {
        // console.log(ele)
        return (
          <>

        <div class="card" style={{  marginTop:"2rem" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}> 
        <img src={ele.urlToImage == null ? "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=" : ele.urlToImage} class="card-img-top" alt="Loading..." />
              <div class="card-body">
                <h5 class="card-title">{ele.author == "" ? "Janelle Ash" : ele.author}</h5>
                <p class="card-text"> {ele.title}  </p>
                <a href={ele.url} target="_blank" class="btn btn-primary"> Read More  </a>     
              </div>
            </div>

          </>
        );
    })}
    </div>
    </div>
  );
};

export default News;

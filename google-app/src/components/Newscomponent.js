import React , {useEffect , useState} from "react";

function Newscomponent() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        (async function f1(){
            const response = await fetch("https://gnews.io/api/v4/search?q=bollywood&lang=en&country=us&max=10&apikey=434570ac3c18b37fdc003197d2a1c3c9");
            const data = await response.json();

            setNews(data["articles"]);
        })();
    } , []);
    if(news.length === 0){  // this block of code is written for data because at intial it has empty array so it returns nothing if we run this loop it can render data
        return(
            <img src="https://i.pinimg.com/736x/61/ea/94/61ea94b38db7f292dcf6dda1513b8253.jpg" alt=""/>
        );
    }

    return(
        <div>
            <img style={{ width: "800px"}} src={news[0]["image"]} alt=" " />
            <h1>Title---{news[0]["title"]}</h1>
            <p>Description---{news[0]["description"]}</p>
            <p>Content---{news[0]["content"]}</p>
            <h2>Published at---{news[0]["publishedAt"]}</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <img style={{ width: "800px"}} src={news[1]["image"]} alt=" " />
            <h1>Title---{news[1]["title"]}</h1>
            <p>Description---{news[1]["description"]}</p>
            <p>Content---{news[1]["content"]}</p>
            <h2>Published at---{news[1]["publishedAt"]}</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <img style={{ width: "800px"}} src={news[2]["image"]} alt=" " />
            <h1>Title---{news[2]["title"]}</h1>
            <p>Description---{news[2]["description"]}</p>
            <p>Content---{news[2]["content"]}</p>
            <h2>Published at---{news[2]["publishedAt"]}</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <img style={{ width: "800px"}} src={news[3]["image"]} alt=" " />
            <h1>Title---{news[3]["title"]}</h1>
            <p>Description---{news[3]["description"]}</p>
            <p>Content---{news[3]["content"]}</p>
            <h2>Published at---{news[3]["publishedAt"]}</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <img style={{ width: "800px"}} src={news[4]["image"]} alt=" " />
            <h1>Title---{news[4]["title"]}</h1>
            <p>Description---{news[4]["description"]}</p>
            <p>Content---{news[4]["content"]}</p>
            <h2>Published at---{news[4]["publishedAt"]}</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <img style={{ width: "800px"}} src={news[5]["image"]} alt=" " />
            <h1>Title---{news[5]["title"]}</h1>
            <p>Description---{news[5]["description"]}</p>
            <p>Content---{news[5]["content"]}</p>
            <h2>Published at---{news[5]["publishedAt"]}</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <img style={{ width: "800px"}} src={news[6]["image"]} alt=" " />
            <h1>Title---{news[6]["title"]}</h1>
            <p>Description---{news[6]["description"]}</p>
            <p>Content---{news[6]["content"]}</p>
            <h2>Published at---{news[6]["publishedAt"]}</h2>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Newscomponent;
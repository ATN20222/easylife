import React from "react";
import './News.css'
import NewsFirstSection from "../../Components/News/NewsFirstSection";
import AllNewsSection from "../../Components/News/AllNewsSection";
const News = ()=>{
    return(
        <div className="News">
            <NewsFirstSection/>
            <AllNewsSection/>
        </div>
    );
}
export default News;
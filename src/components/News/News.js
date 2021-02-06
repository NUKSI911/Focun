import "./News.scss"

export const News =({data})=>{
    return (
        <div className="news">
        <div className="news__image-box">
            <img  className="news__image-main" src={data.urlToImage} alt="News" width="100%" />
        </div>
<div className="news__heading">
<h5 className="news__heading-text">
{data.title}
</h5>
</div> 
        <a className="news__source" href={data.url} target="_blank">Find Out More</a>
</div>
    )
    
}
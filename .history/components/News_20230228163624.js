
export default function News({article}) {
  return (
    <a href={article.url} target="_blank">
        <div className="flex items-center justify-between">
            <div className="">
                <h6>{article.title}</h6>
                <p>{article.source.name}</p>
            </div>
            <img className=" rounded-xl " width="70" src={article.urlToImage} alt="article-image" />
        </div>
    </a>
  )
}

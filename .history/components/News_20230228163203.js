
export default function News({article}) {
  return (
    <a href={article.url} target="_blank">
        <div className="">
            <div className="">
                <h6>{article.title}</h6>
                <p>{article.source.name}</p>
            </div>
            <div className="">

            </div>
        </div>
    </a>
  )
}

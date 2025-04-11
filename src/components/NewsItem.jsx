
const NewsItem=({title,url,Author})=>{
return(
    <>

<h1>{title}<a href={url}></a></h1>
<p>{Author}</p>
    </>
)
}
export default NewsItem
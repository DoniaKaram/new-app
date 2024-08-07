
import image from '../assets/image.jpg'
export const NewsItem = ({title,description,src,url}) => {
  return(
    <div className="card bg-dark text-light my-3 mx-3 px-3 py-3 d-inline-block" style={{maxWidth:'345px'}}>
  <img src={src?src:image} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}
export default NewsItem;
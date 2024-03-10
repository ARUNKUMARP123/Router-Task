

export const BlogCard = ({blog}) => {
  return (
   <div className="pulse">
 <div className="card blog-card"  >
            <div className="image p-3 bg-secondary">
            <img style={{width:"100%"}} src={blog.image} className="card-img-top" alt={blog.name}/>
            </div>
 
  <div className="card-body">
    <h5 className="card-title">{blog.name}</h5>
<p className="card-text details">{blog.details}</p>
    <button href="#" className="btn btn-primary">Read More</button>
  </div>
</div>
   </div>
       
    
  )
}

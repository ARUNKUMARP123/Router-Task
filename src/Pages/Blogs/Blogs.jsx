import { useParams } from "react-router-dom"
import { Billboard } from "../../component/Billboard/Billboard";
import { BlogCard } from "../../component/BlogCard/BlogCard";
import { useEffect,useState } from "react";

export const Blogs = () => {
  const {category}=useParams();
  const [Data,setData]=useState([]);
  

  useEffect(()=>{
    fetch("http://localhost:5173/Data.json")
    .then((response)=>response.json())
    .then((result)=>{
      const blogs=result.data
      if(category==='all'){
        setData(blogs);
      }else{
        setData(blogs.filter((blog)=>blog.tags.includes(category)))
      }
    }).catch((error)=>{
        console.log(error)
      });
      return ()=>{}
  },[category]);
  
  return (
<div className="container">
  <Billboard/>
  <div className="blogs-listing-container">
    <h3 className="my-3">Available Blogs</h3>
    <div className="blog-container">
      <div className="row g-4">
       { Data.map((blog,index)=>(
         <div key={`${blog.name}-${index}`} className="col-md-3">
         <BlogCard blog={blog}/>
         </div>
         
       ) 
       )}
          
      <div></div>
       
      </div>
    </div>
  </div>
  </div>
  )
}

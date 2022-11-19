import React , {useEffect, useState}from 'react'
import axios from 'axios'
import "./Post.css";
import {Link} from "react-router-dom";



const Post = () => {
    const [post, setPost]=useState([]);
    useEffect(()=>{

     axios.get("https://jsonplaceholder.typicode.com/posts").then((data)=>{
    //   console.log(data);
      setPost(data.data);
    //   console.log(post);
     })
    },[])
    const clickHandler = (id)=>{
        //  useEffect(()=>{
          
        //     axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then((data)=>{
        //      console.log(data);
        //      setPost(data.data);
        //      console.log(post);
        //     })
        //    },[id])
        console.log(id);
    }
  return (
    <div>
    <table>
    {post.map((item, i) =>  (
      <tr key={i}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
        <td style={{color:"blue"}}><button>Edit</button></td>
        <td style={{color:"red"}} onClick={()=>clickHandler(item.id)}><button >Delete</button></td>
      </tr>
    ))}
  </table>
    </div>
  )
}

export default Post;
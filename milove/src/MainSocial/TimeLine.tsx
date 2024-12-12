import './TimeLine.css'
import Post from "./Post.tsx";
import Suggestions from "./Suggestions.tsx";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.ts';

export default function TimeLine() {
  const [postdata,setPostdata]=useState(null);
  useEffect( () => {  
    async function docs() {
     await getDocs(collection(db, "posts"))
     .then((querySnapshot)=>{               
         const newData = querySnapshot.docs
             .map((doc) => ({...doc.data(), id:doc.id }));
                        
        setPostdata(newData);
        console.log(newData);
       
     });
    }
    docs();
    
   },[]);
    const [posts, setPosts] = useState([
        {
          user: "redian_",
          postImage:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          likes: 54,
          timestamp: "2d",
        },
        {
          user: "johndoe",
          postImage:
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
          likes: 432,
          timestamp: "2d",
        },
        {
          user: "mariussss",
          postImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
          likes: 140,
          timestamp: "2d",
        },
        {
          user: "kobee_18",
          postImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
          likes: 14,
          timestamp: "2d",
        },
      ]);
    
      return (
        <div className="timeline">
          <div className="timeline__left">
            <div className="timeline__posts">
              {postdata.map((post) => (
                <Post
                  user={post.user}
                  postImage={post.postImg}
                  likes={post.likes}
                  timestamp={post.timestamp}
                />
              ))}
            </div>
          </div>
          <div className="timeline__right">
            <Suggestions />
          </div>
        </div>
      );
}

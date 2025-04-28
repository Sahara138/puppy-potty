import { createContext, useContext, useState } from "react";

const PostContext = createContext({});

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  return (
    <PostContext.Provider value={{ posts, setPosts , comments, setComments }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () =>{ 
    return useContext(PostContext);
}
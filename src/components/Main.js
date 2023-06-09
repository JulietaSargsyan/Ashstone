import React, { useState, useRef, useEffect } from 'react';
import Post from './Post';

function Main({ inputValue }) {
  const [postsData, setPostsData]       = useState([]);
  const [isLoading, setIsLoading]       = useState(true);
  const [searchTerm, setSearchTerm]     = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
      fetch('https://cloud.codesupply.co/endpoint/react/data.json')
           .then(response => response.json())
           .then(json => {
              setPostsData(json);
              setIsLoading(false);
           })
           .catch(error => {
            console.log('Error:', error);
            setIsLoading(false);
          });
  }, [])

  const handleSearch = () => {
    setSearchTerm(searchTerm);
    console.log(searchTerm);
    if(searchTerm) {
      const newPostsList = postsData && postsData.filter((post) => {
        console.log(Object.values(post)); 
        setSearchResult(newPostsList)
      })
    }
  }

  useEffect(() => {
      handleSearch();
  })

  if (isLoading) {
    return <div>Loading...</div>;
  }

  

  return (
    <div className='main mainPadding'>
        <div className="posts-container">
            {postsData && postsData.map((post) => <Post post={post} />)}
        </div>
    </div>
  )
}

export default Main
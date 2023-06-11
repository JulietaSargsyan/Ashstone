import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Post from './components/Post';
import Popup from './components/Popup';

function App() {
  const [inputValue,    setInputValue]    = useState('');
  const [postsData,     setPostsData]     = useState([]);
  const [isLoading,     setIsLoading]     = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedPost,  setSelectedPost]  = useState(null);
  const [mobileMenu,    setMobileMenu]    = useState(false);

  const handleMobileMenu = (value) => {
    console.log(value);
    setMobileMenu(value);
  }

  const handleSearchValue = (value) => {
    setInputValue(value);
  }

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const closePopup = () => {
    setSelectedPost(null);
  };

  useEffect(() => {
      const filtered = postsData.filter((post) => {
        const lowerCaseValue = inputValue.toLowerCase();
        return (
          post.title.toLowerCase().includes(lowerCaseValue) ||
          post.text.toLowerCase().includes(lowerCaseValue)  ||
          post.tags.toLowerCase().includes(lowerCaseValue)  ||
          post.autor.toLowerCase().includes(lowerCaseValue) ||
          post.date.toLowerCase().includes(lowerCaseValue)  ||
          post.views.toLowerCase().includes(lowerCaseValue)
        );
      });
      setFilteredPosts(filtered);
  }, [inputValue, postsData])

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
}, []);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
        <Header 
          handleSearchValue={handleSearchValue} 
          handleMobileMenu={handleMobileMenu} 
          mobileMenu={mobileMenu}
        />
        <div className="main mainPadding" onClick={() => handleMobileMenu(false)} >
        {filteredPosts.length > 0 ? (
          <div className="posts-container">
            {filteredPosts.map((post) => (
              <Post handlePostClick={handlePostClick} post={post} key={post.id} />
            ))}
          </div>
        ) : (
          <div>Ups, we can't find what you're looking for.</div>
        )}
      </div>
      {selectedPost && <Popup selectedPost={selectedPost} closePopup={closePopup}/>}
    </div>
  );
}

export default App;

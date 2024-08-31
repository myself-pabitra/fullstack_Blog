import { useState, useEffect } from "react";
import "./App.scss";
import BlogCard from "./components/BlogCard";
import CategoryList from "./components/CategoryList";
import Loading from "./components/Loading";
function App() {
  const [showList, setShowList] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setLoading(true);
    const apiUrl = "http://localhost:8000/api/";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data); // Set the fetched posts data
        setLoading(false); // Update loading state
      })
      .catch((error) => {
        alert("Error fetching data:", error);
        setLoading(false); // Stop loading in case of an error
      });
  }, []);

  console.log(loading);

  return (
    <>
      {loading && <Loading type={"cylon"} color={"#e31597bf"} />}
      <main id="themain">
        <div className="header_div">
          <h1 className="heading">Featured </h1>
          <input
            className="search"
            placeholder="Search"
            onFocus={() => {
              setShowList(true);
            }}
            onBlur={() => {
              setShowList(false);
            }}
            type="text"
          />
          {showList && <CategoryList />}
        </div>

        {!loading && posts && posts.length > 0
          ? posts.map((post) => (
              <BlogCard
                key={post.id} // Use a unique key for each item
                category={post.category_name}
                categoryColor={"#3b82f6"} // Customize as needed
                title={`${post.title.slice(0, 60)}${
                  post.title.length > 60 && "..."
                }`}
                date={post.formatted_published}
                postUrl={post.url}
                imageUrl={post.post_Thumbnail}
              />
            ))
          : !loading && <p>No posts available</p>}
      </main>
    </>
  );
}

export default App;

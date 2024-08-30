import "./App.scss";
import BlogCard from "./components/BlogCard";

function App() {
  return (
    <>
      <main id="themain">
        <h1 className="heading">Featured </h1>
        <BlogCard
          category={"Design"}
          categoryColor={"#3b82f6"}
          title={"Designing with Figma with a Design System"}
          date={"June 3, 2020"}
          postUrl={"#"}
          imageUrl={
            "https://images.pexels.com/photos/802457/pexels-photo-802457.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
        <BlogCard
          category={"Design"}
          categoryColor={"#6ea11b"}
          title={"Designing with Figma with a Design System"}
          date={"June 3, 2020"}
          postUrl={"#"}
          imageUrl={
            "https://images.unsplash.com/photo-1583661676314-155d504c12ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
          }
        />
        <BlogCard
          category={"Design"}
          categoryColor={"#6ea11b"}
          title={"On this weeding season in Canada"}
          date={"June 3, 2020"}
          postUrl={"#"}
          imageUrl={
            "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
      </main>
    </>
  );
}

export default App;

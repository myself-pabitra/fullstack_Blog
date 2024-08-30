import { Link } from "react-router-dom";
export default function BlogCard({
  category,
  categoryColor,
  title,
  date,
  postUrl,
  imageUrl,
}) {
  return (
    <Link to={postUrl} className="card">
      <div className="card-image">
        <img src={imageUrl} alt="Card Image" />
      </div>
      <div className="card-content">
        <p className="category" style={{ color: categoryColor }}>
          {category.toUpperCase()}
        </p>
        <h2 className="title">{title}</h2>
        <p className="date">{date}</p>
      </div>
    </Link>
  );
}

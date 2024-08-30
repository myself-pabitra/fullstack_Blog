import { useParams } from "react-router-dom";

export default function Content() {
  const { id } = useParams();
  return (
    <div>
      <h1>Content {id}</h1>
    </div>
  );
}

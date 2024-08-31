export default function Register() {
  const apiUrl = "http://localhost:8000/api";
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

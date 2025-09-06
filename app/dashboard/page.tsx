"use client"
import { useEffect, useState } from "react";
export default function Page() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <>
      <div>Dashboard Page</div>
      <h1>Message for FastAPI: {message}</h1>
    </>
  );
}

import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");
  const API_URL = import.meta.env.VITE_API_URL || "http://backend:5000";

  useEffect(() => {
    fetch(`${API_URL}/api/message`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Failed to connect to backend ❌"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Frontend + Backend (Docker Compose)</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;

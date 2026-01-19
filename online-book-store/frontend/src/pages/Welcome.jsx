import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="overlay">
        <h1>📚 Welcome to BookVerse</h1>
        <p>Your one-stop destination for knowledge & stories</p>
        <button onClick={() => navigate("/home")}>
          Start Shopping
        </button>
      </div>
    </div>
  );
}

export default Welcome;

// Import React dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductEntry from "./products.js"; // Product entry page component
import "./products.css"; // Styles for the product entry page

function LandingPage() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Product Inventory System</h1>
      <Link to="/enter-product-details">
        <button className="btn">Enter Product Details</button>
      </Link>
    </div>
  );
}

// Main App with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/enter-product-details" element={<ProductEntry />} />
      </Routes>
    </Router>
  );
}

// Render the app
ReactDOM.render(<App />, document.getElementById("root"));

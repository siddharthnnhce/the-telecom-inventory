import React, { useState } from "react";
import "./products.css";

function Product_entry() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [formValues, setFormValues] = useState({
    productName: "",
    description: "",
    productImage: "",
    productCategoryName: "",
    modelNumber: "",
    serialNumber: "",
    stockLevel: "",
    reorderPoint: "",
    supplierName: "",
    supplierMail: "",
    supplierContact: "",
    orderDate: "",
    quantity: "",
    orderStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAddProduct = () => {
    const { productName, description, quantity } = formValues;
    const price = parseFloat(description); // Assuming 'description' is used for price.
    const qty = parseInt(quantity);

    // Validate the inputs
    if (
      !productName ||
      isNaN(price) ||
      isNaN(qty) ||
      price <= 0 ||
      qty <= 0
    ) {
      alert("Please enter valid product details.");
      return;
    }

    const amount = price * qty;
    setTotal((prevTotal) => prevTotal + amount);

    setProducts((prevProducts) => [
      ...prevProducts,
      { ...formValues, amount: amount.toFixed(2) },
    ]);

    // Reset form values after product is added
    setFormValues({
      productName: "",
      description: "",
      productImage: "",
      productCategoryName: "",
      modelNumber: "",
      serialNumber: "",
      stockLevel: "",
      reorderPoint: "",
      supplierName: "",
      supplierMail: "",
      supplierContact: "",
      orderDate: "",
      quantity: "",
      orderStatus: "",
    });
  };

  const handleCompleteOrder = () => {
    alert(`Order completed! Total Amount: $${total.toFixed(2)}`);
    setProducts([]);
    setTotal(0);
  };

  return (
    <div className="container">
      <h1>Product Entry Page</h1>
      <div>
        {Object.keys(formValues).map((key) => (
          <div className="form-group" key={key}>
            <label>
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
              :
            </label>
            <input
              type={
                key === "quantity" ||
                key === "stockLevel" ||
                key === "reorderPoint" ||
                key === "description"
                  ? "number"
                  : key === "orderDate"
                  ? "date"
                  : "text"
              }
              name={key}
              value={formValues[key]}
              onChange={handleChange}
              placeholder={`Enter ${key.replace(/([A-Z])/g, " $1").toUpperCase()}`}
            />
          </div>
        ))}
        <button className="add-button" onClick={handleAddProduct}>
          Add
        </button>
      </div>

      <table>
        <thead>
          <tr>
            {Object.keys(formValues).map((key) => (
              <th key={key}>
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </th>
            ))}
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              {Object.keys(formValues).map((key) => (
                <td key={key}>{product[key]}</td>
              ))}
              <td>{product.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">Total: ${total.toFixed(2)}</div>
      <button className="complete-btn" onClick={handleCompleteOrder}>
        Complete
      </button>
    </div>
  );
}

export default Product_entry;

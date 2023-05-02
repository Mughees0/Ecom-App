import Layout from "@/components/Layout";
import { useState } from "react";
import Axios from "axios";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  async function createProduct(e) {
    e.preventDefault();
    const data = { title, description, price };
    await Axios.post("/api/products", data);
  }

  return (
    <Layout>
      <form onSubmit={createProduct} className="flex flex-col w-full">
        <h1>New Product</h1>
        <label htmlFor="name">Product name</label>
        <input
          type="text"
          id="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Product name"
        />
        <label htmlFor="description">Description</label>
        <textarea
          value={description}
          id="description"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="price">Price ($US)</label>
        <input
          value={price}
          type="number"
          id="price"
          placeholder="Price "
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" className="btn-primary self-start">
          Save
        </button>
      </form>
    </Layout>
  );
};

export default NewProduct;

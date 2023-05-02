import Layout from "@/components/Layout";
import Link from "next/link";

const Products = () => {
  return (
    <Layout>
      <Link
        className="bg-blue-400 text-white py-1 px-3 rounded-xl h-8 hover:bg-blue-600"
        href={"/products/new"}
      >
        Add new product
      </Link>
    </Layout>
  );
};

export default Products;

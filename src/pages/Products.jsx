import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <h2 className="text-3xl text-center font-bold mb-6 mt-10">All products</h2>
            <div className=" gap-4 grid grid-cols-1 md:grid-cols-3 my-5">
                {products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))}
            </div>
        </div>
    );
};

export default Products;

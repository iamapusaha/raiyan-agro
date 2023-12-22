const Product = ({ product }) => {
    const { _id, image, price, description, title } = product;
    return (
      <div>
        <div className="card bg-base-100 shadow-xl">
          <figure className=" rounded">
            <img
              className=" h-64 w-64 p-3 rounded"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-2xl text-center">Dry jaggery</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="btn bg-red-600 text-white">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Product;
  
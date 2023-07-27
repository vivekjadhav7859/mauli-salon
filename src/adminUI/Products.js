import React, { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //fetch all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  
  return (
    <div style={{paddingTop:"100px"}}>
      <div className="row m-2">
        <div className="col-md-3" style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}}>
          <AdminMenu />
        </div>
        <div className="col-md-9">
        <h3 className="text-center" style={{color:"darkblue"}}>All Products List</h3>
          <div className="d-flex flex-wrap">
            {products.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2 p-2"  style={{width:"15rem"}}>
                  <img
                    src={`/api/v1/product/product-image/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    style={{height:"200px",width:"200px"}}
                  />
                  <div className="card-body">
                    <h6 className="card-title" style={{color:"blueviolet"}}>{p.name}</h6>
                    <p className="card-text">{p.description.substring(0,30)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

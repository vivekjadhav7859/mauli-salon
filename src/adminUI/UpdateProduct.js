import React, { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import { toast } from "react-toastify";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";

const { Option } = Select;
const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [img1, setImg1] = useState("");
  const [id, setId] = useState("");

  //get single category
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setId(data.product._id);
      setName(data.product.name);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setCategory(data.product.category._id);
    } catch (error) {}
  };

  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);

  //get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      toast.error("Error while fetching categories");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      img1 && productData.append("image", img1);
      productData.append("category", category);
      const { data } = await axios.put(
        `/api/v1/product/update-product/${id}`,
        productData
      );

      if (data?.success) {
        toast.success(data?.message);
        navigate("/dashboard/admin/products");
      }
      if (data?.success === false) {
        toast.success(data?.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  //delete product
  const handleDelete = async () => {
    try {
      if (!window.confirm("Are you sure you want to perform this operation?")) {
        return;
      }
      const { data } = await axios.delete(
        `/api/v1/product/delete-product/${id}`
      );
      if (data?.success) {
        toast.success(data?.message);
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Products</h1>
            <div className="m-1 w-75">
              <Select
                className="form-select mb-3"
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                onChange={(value) => {
                  setCategory(value);
                }}
                value={category}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-primary">
                  Change image
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => setImg1(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3 p-1" style={{ border: "1px solid grey" }}>
                {img1 ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(img1)}
                      alt="product_image"
                      height="200px"
                      className="img img-responsive"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <img
                      src={id ? `/api/v1/product/product-image/${id}` : ""}
                      alt="product_image"
                      height="200px"
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Enter product name"
                  className="form-control"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="Enter description of product"
                  className="form-control"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="Enter price of product"
                  className="form-control"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="Enter quantity of product"
                  className="form-control"
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 text-center">
                <button className="btn btn-success" onClick={handleUpdate}>
                  UPDATE PRODUCT
                </button>
              </div>
              <div className="mb-3 text-center">
                <button className="btn btn-danger" onClick={handleDelete}>
                  DELETE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;

import React, { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import { toast } from "react-toastify";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

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

  const handleCreate = async(e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name",name);
      productData.append("description",description);
      productData.append("price",price);
      productData.append("quantity",quantity);
      productData.append("image",image);
      productData.append("category",category);
      const {data} = await axios.post("/api/v1/product/create-product",productData);
      if(data?.success)
      {
        toast.success(data?.message);
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <div style={{paddingTop:"100px"}}>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3" style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}}>
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2>Create Products</h2>
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
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-primary">
                  {image ? image.name : "Upload image"}
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3 p-1" style={{ border: "1px solid grey" }}>
                {image ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="product_image"
                      height="200px"
                      className="img img-responsive"
                    />
                  </div>
                ) : (
                  <p className="text-center disabled p-2">No image selected</p>
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
                <button className="btn btn-success" onClick={handleCreate}>CREATE PRODUCT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;

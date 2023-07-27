const express = require('express');
const router = express.Router();
const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware.js");
const {createProductController, getProductController, getSingleProductController, productImageController, deleteProductController, updateProductController, productFiltersController, productCountController, productListController, categoryProductsController,} = require('../controllers/productController.js');
const formidable = require("express-formidable");

//create product route
router.post(
    "/create-product",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
  );

//get products
router.get("/get-product",getProductController);

//get single product
router.get('/get-product/:slug',getSingleProductController);

//get product image
router.get("/product-image/:pid",productImageController);

//delete product
router.delete("/delete-product/:pid",requireSignIn,isAdmin,deleteProductController);

//update product route
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//filter products
router.post("/product-filters",productFiltersController);

//product count
router.get("/product-count",productCountController);

//products per page
router.get("/product-list/:page",productListController);

//all products belonging to particular category
router.get("/category-products/:slug", categoryProductsController);

module.exports = router;
const express = require("express");
const router = express.Router();
const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware.js");
const {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} = require("../controllers/categoryController.js");


//route for category creation
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//route for category update
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//route for all categories
router.get("/get-category", categoryController);

//route for single category
router.get("/single-category/:slug", singleCategoryController);

//route for deleting category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

module.exports = router;

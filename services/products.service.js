const Product = require("../models/products.model");
const Provider = require("../models/providers.model");

const createProduct = async (data) => {
  const { id, title, price, description, image, company_name } = data;

  const provider = await Provider.findOne({ company_name });

  if (!provider) return null;

  const product = new Product({
    id,
    title,
    price,
    description,
    image,
    provider: provider._id,
  });

  const result = await product.save();

  return result;
};

const getProduct = async (id = "") => {
  const products = id
    ? await Product.find({ id }, "-_id -__v").populate("provider", "-_id -__v")
    : await Product.find({}, "-_id -__v").populate("provider", "-_id -__v");

  return products;
};

const editProduct = async (data) => {
  const { id, company_name, ...productData } = data;

  if (company_name) {
    const provider = await Provider.findOne({ company_name });

    if (!provider) return null;

    productData.provider = provider._id;
  }

  const result = await Product.findOneAndUpdate({ id }, productData, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteProduct = async (title) => {
  const result = await Product.findOneAndDelete({ title });

  return result;
};

module.exports = {
  createProduct,
  getProduct,
  editProduct,
  deleteProduct,
};

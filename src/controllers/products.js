const productsRepo = require("../repo/products");

const get = async (req, res) => {
  // pada subrouter tdk perlu didefinisikan pathnya, ckup "/", krn pd mainrouter sudah didefinisikan
  try {
    const response = await productsRepo.getProducts();
    res.status(200).json({
      result: response.rows,
    });
  } catch (err) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

const add = async (req, res) => {
  try {
    const response = await productsRepo.addProducts(req.body);
    res.status(201).json({
      msg : `Insert Succesfully`,
      result: response,
    });
  } catch (err) {
    res.status(500).json({ msg: `internal server error` });
  }
};

const edit = async (req, res) => {
  try {
    const response = await productsRepo.editProducts(req.body, req.params);
    res.status(200).json({ 
      msg : `Edit Succesfully`,
      result: response });
  } catch (err) {
    res.status(500).json({ msg: "internal server error" });
  }
};

const drop = async (req, res) => {
  try {
    const result = await productsRepo.dropProducts(req.params);
    res.status(200).json({ 
      msg : `Delete Succesfully`,
      result });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const search = async (req, res) => {
  // pada subrouter tdk perlu didefinisikan pathnya, ckup "/", krn pd mainrouter sudah didefinisikan
  try {
    const response = await productsRepo.searchProducts(req.query);
    res.status(200).json({
      "Search Result": response.rows,
    });
  } catch (err) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

const sortSold = async (req, res) => {
  // pada subrouter tdk perlu didefinisikan pathnya, ckup "/", krn pd mainrouter sudah didefinisikan
  try {
    const response = await productsRepo.sortProductsSold();
    res.status(200).json({
      "Sort Result": response.rows,
    });
  } catch (err) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

const sortPrice = async (req, res) => {
  // pada subrouter tdk perlu didefinisikan pathnya, ckup "/", krn pd mainrouter sudah didefinisikan
  try {
    const response = await productsRepo.sortProductsPrice();
    res.status(200).json({
      "Sort Result": response.rows,
    });
  } catch (err) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

const sortNewest = async (req, res) => {
  // pada subrouter tdk perlu didefinisikan pathnya, ckup "/", krn pd mainrouter sudah didefinisikan
  try {
    const response = await productsRepo.sortProductsNewest();
    res.status(200).json({
      "Sort Result": response.rows,
    });
  } catch (err) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

const filter = async (req, res) => {
    // pada subrouter tdk perlu didefinisikan pathnya, ckup "/", krn pd mainrouter sudah didefinisikan
    try {
      const response = await productsRepo.filterProducts();
      res.status(200).json({
        "Filter Result": response.rows,
      });
    } catch (err) {
      res.status(500).json({
        msg: "internal server error",
      });
    }
  };

const productsController = {
  get,
  add,
  edit,
  drop,
  search,
  sortSold,
  filter,
  sortPrice,
  sortNewest
};

module.exports = productsController;

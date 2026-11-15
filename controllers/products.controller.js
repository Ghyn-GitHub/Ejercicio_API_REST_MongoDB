const productService = require("../services/products.service");

// CREATE
const createProduct = async (req, res) => {
    try {
        const data = req.body;
        let answer = await productService.createProduct(data);

        if (!answer)
            return res.status(404).json({ msj: "ERROR: nombre de compañía no encontrado" });

        res.status(201).json({
            message: "producto creado",
            product: answer
        });

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.message}` });
    }
};

// READ
const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        let products = await productService.getProduct(id);

        res.status(200).json(products);

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.message}` });
    }
};

// UPDATE
const editProduct = async (req, res) => {
    try {
        const data = req.body;
        let answer = await productService.editProduct(data);

        if (!answer)
            return res.status(404).json({ msj: "ERROR: producto o proveedor no encontrado" });

        res.status(200).json({
            message: "producto actualizado",
            product: answer
        });

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.message}` });
    }
};

// DELETE
const deleteProduct = async (req, res) => {
    try {
        const title = req.body.title;
        let answer = await productService.deleteProduct(title);

        if (!answer)
            return res.status(404).json({ msj: "ERROR: producto no encontrado" });

        res.status(200).json({
            message: `Se ha borrado el producto: ${title}`
        });

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.message}` });
    }
};

module.exports = {
    createProduct,
    getProduct,
    editProduct,
    deleteProduct
};

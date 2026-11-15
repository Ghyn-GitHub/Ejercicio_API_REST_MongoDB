const providerService = require("../services/providers.service");

// CREATE
const createProvider = async (req, res) => {
    try {
        const data = req.body;
        let answer = await providerService.createProvider(data);

        res.status(201).json({
            message: "proveedor creado",
            provider: answer
        });

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.message}` });
    }
};

// READ
const getProvider = async (req, res) => {
    try {
        let providers = await providerService.getProvider();

        res.status(200).json(providers);

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.message}` });
    }
};

// UPDATE
const editProvider = async (req, res) => {
    try {
        const data = req.body;
        let answer = await providerService.editProvider(data);

        if (!answer)
            return res.status(404).json({ msj: "ERROR: proveedor no encontrado" });

        res.status(200).json({
            message: `proveedor actualizado: ${answer.company_name}`,
            provider: answer
        });

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.message}` });
    }
};

// DELETE
const deleteProvider = async (req, res) => {
    try {
        const CIF = req.body.CIF;
        let answer = await providerService.deleteProvider(CIF);

        if (answer === null)
            return res.status(404).json({ msj: "ERROR: proveedor no encontrado" });

        if (answer === false)
            return res.status(409).json({
                msj: "ERROR: no se puede eliminar el proveedor porque tiene productos asociados"
            });

        res.status(200).json({
            message: `Se ha borrado el proveedor: ${company_name}`
        });

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.message}` });
    }
};

module.exports = {
    createProvider,
    getProvider,
    editProvider,
    deleteProvider
};

const Provider = require('../models/providers.model');
const Product = require('../models/products.model');

const createProvider = async (data) => {
    const provider = new Provider(data);

    const result = await provider.save();

    return result;
};

const getProvider = async () => {
    const providers = await Provider.find({}, '-_id -__v');

    return providers;
};

const editProvider = async (data) => {
    const { CIF, ...providerData } = data;

    const result = await Provider.findOneAndUpdate(
        { CIF },
        providerData,
        { new: true, runValidators: true }
    );

    return result;
};

const deleteProvider = async (CIF) => {
    const provider = await Provider.findOne({ CIF });

    if (!provider)
        return null;

    const products = await Product.exists({
        provider: provider._id
    });

    if (products)
        return false;

    const result = await Provider.findOneAndDelete({ CIF });

    return result;
};

module.exports = {
    createProvider,
    getProvider,
    editProvider,
    deleteProvider
};


const connectDB = require('../../db/connect');
const { getAllProducts } = require('../../controllers/products'); 

const ProductsModel = require('../../models/product'); 

exports.handler = async (event, context) => {
    try {
        await connectDB();
        
        // Parse query parameters from event
        const query = event.queryStringParameters || {}; 
        const { _id, company, name, featured, sort, select, page, limit } = query;

        const reqObject = {};

        // Build query object
        if (company) {
            reqObject.company = { $regex: company, $options: "i" };
        }
        if (name) {
            reqObject.name = { $regex: name, $options: "i" };
        }
        if (featured) {
            reqObject.featured = featured === 'true';
        }

        let apiData = ProductsModel.find(reqObject);

        // Sort
        if (sort) {
            const sortBy = sort.replace(",", " ");
            apiData = apiData.sort(sortBy);
        }

        // Select fields
        if (select) {
            const selectFields = select.split(",").join(" ");
            apiData = apiData.select(selectFields);
        }

        // Pagination
        const pageNumber = Number(page) || 1;
        const limitNumber = Number(limit) || 10;
        const skip = (pageNumber - 1) * limitNumber;

        apiData = apiData.skip(skip).limit(limitNumber);

        // Fetch data
        let products;
        if (_id) {
            products = await ProductsModel.findById(_id);
        } else {
            products = await apiData;
        }

        return {
            statusCode: 200,
            body: JSON.stringify(products),
        };
    } catch (error) {
        console.error('Database connection error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to connect to database' }),
        };
    }
};

const monogoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await monogoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.error(`DB Error: ${error.message}`);
        process.exit(1);
    };
};

module.exports = connectDB;
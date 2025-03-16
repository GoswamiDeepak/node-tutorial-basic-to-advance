import mongoose from 'mongoose';
async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect('mongodb://localhost:27017/redis-testing');
        if (connectionInstance) {
            console.log(connectionInstance);
            console.log('Database Running SuccessFully');
        }
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;

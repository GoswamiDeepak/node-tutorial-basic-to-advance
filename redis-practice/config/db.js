import mongoose from 'mongoose';
async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect();
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;

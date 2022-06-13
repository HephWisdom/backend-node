import express, { response } from 'express';
import { productRoute } from './router/product.route.js';
import { userRoute } from './router/user.route.js';

const app = express();

app.use(express.json());

app.use("/products", productRoute);

app.use("/users", userRoute);




app.listen(3333, () => console.log("Server is running on port 3333"));
import express, { response } from 'express';
import { productRoute } from './router/product.route.js';
import { userRoute } from './router/user.route.js';
import {storeRoute} from './router/stores.route.js'

const app = express();

app.use(express.json());

//products routes
app.use("/products", productRoute);

//users routes
app.use("/users", userRoute);

//stores routes
app.use("/stores", storeRoute),





app.listen(2000, () => console.log("Server is running on port 3333"));
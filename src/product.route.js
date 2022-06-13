import Router, { request, response } from "express";
import { ProductsRepository } from "./repository/ProductsRepository.js";

const productRoute = Router();

const productsRepository = new ProductsRepository()


//create product route
productRoute.post("/", (request, response) => {
    const { name, description, quantity, price } = request.body;


    //check of product exists
    const productAlreadyExists = productsRepository.findByName({name});

    if(productAlreadyExists) {
        return response.status(404).json({error: "product already exists"});
    }

    productsRepository.create({ name, description, quantity, price });

    return response.status(201).json("created successfully").send();
});



//get all products
productRoute.get("/", (request, response) => {
    const getAllProducts = productsRepository.list()
    return response.status(201).json(getAllProducts);
})



//delete a products
productRoute.delete("/:id", (request, response) => {
    const { id } = request.params;

    const findProductId = productsRepository.findById({id});

    if(!findProductId) {
        return response.status(404).json({error: "product not found"});
    }

    productsRepository.delete({id})
    return response.status(201).send();
});


//update a quantity
productRoute.patch("/:id", (request, response) => {
    const {id} = request.params;
    const {quantity} = request.headers;

    const product = productsRepository.findById({id});

    if(!product) {
        return response.status(404).json({error: "product not found"});
    }

    const updatedProduct = productsRepository.updateQuantity({id,quantity});

    return response.status(201).json(updatedProduct);
})

export { productRoute };
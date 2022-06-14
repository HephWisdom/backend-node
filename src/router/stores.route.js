import Router, { response } from "express";
import { StoresRepository } from "../repository/storesRepository.js";


const storeRoute = Router();

const storesRepository = new StoresRepository();


//create 
storeRoute.post("/", (request, response) => {
    const {id, store_name, area} = request.body;

    const store_nameExists = storesRepository.findByName({store_name});
    const storeArea = storesRepository.findByArea({area});


    if(store_nameExists  && storeArea) {
        return response.status(404).json("store already exists");
    }

    storesRepository.create({store_name, area});

    return response.status(201).json("created").send();
})


//get all users in the array
storeRoute.get("/", (request, response) => {
    const list = storesRepository.list();

    return response.status(201).json(list)
})



//delete a user
storeRoute.delete("/:id", (request, response) => {
    const {id} = request.params;

    const findStoreId = storesRepository.findById({id});
    
    if(!findStoreId) {
        return response.status(404).json({error: "user not found"});
    }

    storesRepository.delete({id});

    return response.status(201).json(id + "eliminated!").send();
})



//update store name
storeRoute.patch("/:id", (request, response) => {
    const {id} = request.params;
    const {store_name} = request.headers;

    const storeId = storesRepository.findById({id});
    if(!storeId) {
        return response.status(404).json({error: "user not found sorry..:("});
    }

    const newStoreName = storesRepository.updateByName({id, store_name});

    return response.status(201).json(newStoreName);
})

export {storeRoute};

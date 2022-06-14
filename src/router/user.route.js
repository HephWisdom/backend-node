import { request, response, Router } from "express";
import {UsersRepository} from "../repository/usersRepository.js";

const userRoute = Router();

const usersRepository = new UsersRepository();

//create user
userRoute.post("/", (request, response) => {

    const {name, job, position, salary} = request.body;

    //check if user exists
    const userExists = usersRepository.findName({name});

    if(userExists) {
        return response.status(404).json({error: "user already exists"});
    }

    usersRepository.create({name, job, position, salary});

    return response.status(201).json("working successfully..:0").send();
})


//get all users
userRoute.get("/", (request, response) => {
    const getAllusers = usersRepository.list();
    return response.status(201).json(getAllusers);
})


//delete a user
userRoute.delete("/:id", (request, response) => {
    const {id} = request.params;

    const findUserId = usersRepository.findId({id});

    if(!findUserId) {
        return response.status(404).json({error: "user not found"})
    }

    usersRepository.delete({id});

    return response.status(201).json(id + "has been deleted").send();
})


//update a user
userRoute.patch("/:id", (request, response) => {
    const {id} = request.params;
    const {name} = request.headers;

    const userId = usersRepository.findId({id});

    if(!userId) {
        return response.status(404).json({error: "user not found:("});
    }

    const updateUser = usersRepository.updateName({id, name});

    return response.status(201).json(updateUser);
})

export {userRoute};
import {User} from "../model/User.js";

class UsersRepository {
    constructor() {
        this.users = [];
    }

    //create
    create({name, job, position, salary}) {
        const user = new User();

    Object.assign(user, {
        name,
        job,
        position,
        salary,
        created_at: new Date()
    })

        this.users.push(user);
    }

    
    //delete
    delete({id}) {
        const deluserIndex = this.users.findIndex(
            (user) => user.id == id
        );

        this.users.splice(deluserIndex, 1);
    }



    //updateName
    updateName({id, name}) {
        const updateName = this.users.find((user) => user.id === id);
        updateName.name = (name);
        updateName.updated_at = new Date();

        const userIndex = this.users.findIndex((userIndex) => userIndex.id ===id);

        Object.assign(this.users[userIndex], updateName);

        return updateName;
    }



    //findByName
    findName({name}) {
        const findUser = this.users.find((user) => user.name === name);
        return findUser;
    }

    //findById
    findId({id}) {
        const finduserId = this.users.find((user) => user.id === id);
        return finduserId;
    }

    //list
    list() {
        return this.users;
    }
}

export {UsersRepository};
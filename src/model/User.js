import { v4 as uuidv4 } from "uuid"

class User {
    id;
    name;
    job;
    position;
    salary;
    created_at;
    updated_at;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}

export {User};
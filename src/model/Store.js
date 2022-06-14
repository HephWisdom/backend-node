import { v4 as uuidv4 } from "uuid";

class Store {
    id;
    store_name;
    area;
    date_created;
    date_updated;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}


export { Store };
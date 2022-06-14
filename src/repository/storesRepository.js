import {Store} from "../model/Store.js"

class StoresRepository {
    constructor() {
        this.stores = []
    }

//create
create({store_name, area}) {
    const store = new Store();

    Object.assign(store, {
        store_name,
        area,
        date_created: new Date()
    })

    this.stores.push(store);
}

//delete
delete({id}) {
    const delStoreIndex = this.stores.findIndex(
        (store) => store.id === id
    );

    this.stores.splice(delStoreIndex, 1);
}


//update store
updateByName({ id, store_name}) {
    const newStore = this.stores.find((store) => store.id === id);
    newStore.store_name = (store_name);
    newStore.date_updated = new Date();

    const storeIndex = this.stores.findIndex((store) => store.id === id);

    Object.assign(this.stores[storeIndex], newStore);

    return newStore;
}

//findById
findById({id}) {
    const storeId = this.stores.find((store) => store.id === id);

    return storeId;
}

//findByName
findByName({store_name}) {
    const storeName = this.stores.find((store) => store.store_name === store_name);

    return storeName
}

//findByArea
findByArea({area}) {
    const storeArea = this.stores.find((store) => store.area === area);
    return storeArea;
}

//list
list() {
    return this.stores;
}

}

    
export {StoresRepository};
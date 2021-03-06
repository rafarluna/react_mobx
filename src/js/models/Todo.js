import { observable } from 'mobx'

export default class Todo{
    @observable
    value;
    
    @observable
    id;

    @observable
    complete;

    constructor(value){
        this.value = value;
        this.id = Date.now();
        this.complete = false;
    }
}
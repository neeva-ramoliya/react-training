import Reflux from 'reflux';
import TodoActions from '../actions/todoActions';

/*class TodoStore extends Stores {

    constructor() {
        listenables = [TodoActions];
    }

    onItemAdded() {
        console.log("item added");
    }
}

module.exports =  TodoStore;*/

var TodoStore = Reflux.createStore({
    listenables: [TodoActions],

    items: [],
     
     getInitialState() {
         return this.items;
     },

    onItemAdded(item) {
        this.items.push(item);
        this.update();
    },

    onItemChange(id, value) {
        this.items[id] = value;
        this.update();
    },

    onItemRemove(id) {
       var items = this.items.filter((item,index) => { return index != id });
        this.items = items;
        this.update();
    },

    update() {
        this.trigger(this.items);
    }
})

export default TodoStore;
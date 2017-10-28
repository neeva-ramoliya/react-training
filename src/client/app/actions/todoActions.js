import Reflux from 'reflux';

/*class TodoActions extends Actions {
     "itemAdded";
     "itemRemove";
     "itemChange";

}

module.exports =  TodoActions */

var TodoActions = Reflux.createActions(
    [ "itemAdded",
     "itemRemove",
     "itemChange"]
);

export default TodoActions;
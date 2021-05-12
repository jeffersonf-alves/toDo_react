import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import Item from './components/Item';
import './Todo.css'
import List from './components/List';

function Todo() {

    const [text, setText] = useState('');
    const [items, setItems] = useState([]);

    function onAddItems(item) {
        let it = new Item(item);

        setItems([...items, it]);
    }

    function onItemDeleted(item) {

        let filterItems = items.filter(it => it.id != item.id);

        setItems(filterItems);
    }
    function onDone(item) {
        
        let updatedItem = items.map(it => {
            if(it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })
        setItems(updatedItem);
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <TodoForm onAddItem={onAddItems}></TodoForm>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
        </div>
    )
}


export default Todo;
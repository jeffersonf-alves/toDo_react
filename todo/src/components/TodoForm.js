import React, { useState } from 'react';

function TodoForm(props) {
    const [text, setText] = useState('');
    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItem(event) {
        event.preventDefault();
        if(text) {
            props.onAddItem(text);
            setText("");
        }
    }
    return (
        <form>
            <input onChange={handleChange} value={text}></input>
            <input type="submit" value="Adicionar" onClick={addItem}></input>
        </form>
    )
}



export default TodoForm;
import React from 'react';

function List(props) {

    function deleteItem(item) {
        console.log(item);
    }
    function DoneImg(props) {

        if(props.done) {
            return <img alt="doneOn" src="./assets/check.svg"></img>
        } else {
            return <img alt="doneOff" src="./assets/checkoff.svg"></img>
        }
    }
    return (
        <ul>
            {props.items.map(item => <li className={item.done ? "item done":"item"} key={item.id}>{item.text}
            <div>
                <button onClick={()=>{ props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
                <button onClick={()=>{props.onItemDeleted(item)}}><img alt="delete" src="./assets/trash.svg"></img></button>
            </div>
            </li>)}
        </ul>
    )
}



export default List;
import React, { useState } from 'react';
import {  IconButton } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import InputField from './inputfield';

import "../assets/css/todo.css";



let count = 1;

const TodoList = () => {
    const [list, setList] = useState([{ id: 0, value: '' }]);

    const handleChange = (value, id) => {
        setList(prevState => prevState.map(item => item.id === id ? { ...item, value } : item));
    };


    const handleAdd = index => {
        const newItem = { id: count++, value: '' };
        setList(prev => [...prev.slice(0, index + 1), newItem, ...prev.slice(index + 1)]);
    };

    const handleDelete = id => {
        setList(prev => prev.filter(item => item.id !== id));
        count--;
    };


    return (
        <div>
            <div className="todolist__container ">
            {list.map((item, index) => (
                <div key={item.id} className="todolist__wrap">
                        
                    <div onClick={index === list.length - 1 ? () => handleAdd(index) : null}> 
                    <InputField
                        value={item.value}
                        onChange={e => handleChange(e.currentTarget.value, item.id)}
                        placeholder='+ New task'
                    />
                        </div>

                        {(count===1) ?  "":  <IconButton onClick={()=>handleDelete(item.id)}>
                            <FontAwesomeIcon icon= {faTrash}/>
                        </IconButton> 
    }
                
             


                </div>
            ))}
                </div>
                
        </div>
    );
};

export default TodoList;
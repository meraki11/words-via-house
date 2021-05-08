import React from 'react';
import { NewWordForm } from './NewWordForm';

export const Author = (props) => {
    const { house, updateAuthor } = props;

    const deleteWord = (roomId) => {
        console.log('we got inside deleteWord function');
        console.log(roomId);
        
        const updatedAuthor = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateAuthor(updatedAuthor);
    }

    const addNewWord = (room) => {
        console.log('we got inside addNewWord function');
        console.log(room);
        updateAuthor({...house, rooms: [...house.rooms, room]});
    }

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label> {`${room.name}`}</label>
                    <button onClick={(e) => deleteWord(room._id)}>Delete Word</button>
                </li>
            ))}
        </ul>
    );
 
    
    return (
        <div>
            <h1>{house.name}</h1>
            {
                rooms({ rooms, houseId: house._id, deleteWord})
            }
            <NewWordForm addNewWord={addNewWord} />
        </div>
    );
            
};
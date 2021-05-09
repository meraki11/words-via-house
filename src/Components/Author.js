import React from 'react';
import { NewWordForm } from './NewWordForm';

export const Author = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        console.log('we got inside deleteRoom function');
        console.log(roomId);
        
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => {
        console.log('we got inside addNewRoom function');
        console.log(room);
        updateHouse({...house, rooms: [...house.rooms, room]});
    }

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label> {`${room.name}`}</label>
                    <button onClick={(e) => deleteRoom(room._id)}>Delete Word</button>
                </li>
            ))}
        </ul>
    );
 
    return (
        <div>
            <h1>{house.name}</h1>
            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
            <NewWordForm addNewRoom={addNewRoom} />
        </div>
    );

};


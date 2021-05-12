import React, {useState} from 'react';
import {Link} from 'react-router-dom';
const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="header">Join</h1>
                <div><input className="joinInput" type="text" placeholder="Your Name" onChange={event => setName(event.target.value)}/></div>
                <div><input className="joinInput" type="text mt-20" placeholder="Room Id" onChange={event => setRoom(event.target.value)}/></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;
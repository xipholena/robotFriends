import React from 'react';
const Card = ({name, email, id}) => {
    return (
        <div className="tc bg-black light-green ma3 pa3 br3 ba dib b--purple shadow-5 grow">
            <img
                src={`https://robohash.org/${id}?200x250" alt="robots`}
                alt="robot"
            />
            <div>
                <h2>{name}</h2>
                <p className="ma0">{email}</p>
            </div>
        </div>
    )
}
export default Card;
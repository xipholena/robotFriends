import React from 'react';
import Card from "./Card";

const CardList = ({robots}) => {
    /*if(true) {
        throw new Error('Nooooo!');
    }*/
    return (
        <ul>
            <li>
                {robots.map(robot => {
                    return <Card
                        key={robot.id}
                        name={robot.name}
                        email={robot.email}
                        id={robot.id}
                    />
                })}
            </li>
        </ul>
    )
}


export default CardList;
import React from 'react';

function PlayerCard(props)
{
    const {name, country, searches} = props;

    return(
        <div className='player-card'>
            <h3>{name}</h3>
            <h3>{country}</h3>
            <p>{searches}</p>
        </div>
    );
}

export default PlayerCard;
import React from 'react';

const Cook = (props) => {
    const { cook } = props;
    return (
        <div>
            <ul>
                <li>
                    <h4>{props.cook.name}</h4>
                </li>
            </ul>
        </div>
    );
};

export default Cook;
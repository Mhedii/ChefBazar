import React, { useState } from 'react';

const Cook = (props) => {
    const { cook } = props;
    // console.log(cook);
    // const [list, setList] = useState([])
    // let newCook = [...list, ...cook]
    // setList(newCook)
    return (
        <div>
            <ul>
                {
                    cook?.map(lst => <li><h4>{lst}</h4></li>)
                }


            </ul>
        </div>
    );
};

export default Cook;
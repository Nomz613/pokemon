import React, {useState, useEffect} from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = 'you clicked {$count} times'
    });

    return(
        <div>
            <p>You clicked  {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click to increment counter</button>
        </div>
    );
};

export default Counter;
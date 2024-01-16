import { useState } from 'react';

export const ReactComponent = () => {
    const [name, setName] = useState('Alice');
    return (
        <div>Hello {name}</div>
    )
}
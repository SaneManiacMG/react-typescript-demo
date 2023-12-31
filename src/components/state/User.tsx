import React, { useState } from 'react';

type AuthUser = {
    name: string,
    email: string
}

const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'John Doe',
            email: 'johndoe@email.com'
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    );
};

export default User;
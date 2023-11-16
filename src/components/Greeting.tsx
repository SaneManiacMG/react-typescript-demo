import React from 'react';

type GreetingProps = {
    name: string;
}

export const Greeting = (props: GreetingProps) => {
    return (
        <div>
            <h2>Welcome {props.name}, you have 10 unread messages!</h2>
        </div>
    );
};

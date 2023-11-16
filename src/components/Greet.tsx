import React from 'react';

type GreetingProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
}

export const Greet = (props: GreetingProps) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Wecome ${props.name}, you have ${props.messageCount} unread messages!` :
                        `Welcome Guest, you have ${props.messageCount} unread messages!`
                }
            </h2>
        </div>
    );
};

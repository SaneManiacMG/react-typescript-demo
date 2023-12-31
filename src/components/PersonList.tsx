import { Name } from "./Person.types";

type PersonListProps = {
    names: Name[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            <h2>Person List</h2>
            {props.names.map((name) => {
                return (
                    <h3 key={name.first}>
                        {name.first} {name.last}
                    </h3>
                )
            })}
        </div>
    );
};
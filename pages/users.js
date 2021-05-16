import Link from 'next/link';

import MainContainer from '../components/MainContainer';

const Users = ({ users }) => {
    return (
        <MainContainer keywords={"users next js"}>
            <h1>List of users</h1>
            <ul>
                {users.map(({ id, name }) =>
                    <li key={id}>
                        <Link href={`/users/${id}`}>
                            <a>{name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export const getStaticProps = async (context) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return {
        props: { users },
    }
}

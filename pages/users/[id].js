import { useRouter } from 'next/router';

import MainContainer from '../../components/MainContainer';

import styles from '../../styles/user.module.scss';

const User = ({ user }) => {
    const { query } = useRouter()
    const { name } = user;

    return (
        <MainContainer keywords={name}>
            <div className={styles.user}>
                <h1>Пользователь c id {query.id}</h1>
                <div>Имя пользователя - {name}</div>
            </div>
        </MainContainer>
    )
}

export default User;

export const getServerSideProps = async ({ params }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
        props: { user }
    }
}

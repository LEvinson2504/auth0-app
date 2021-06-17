import {useFetchUser} from "../lib/user";
import Layout from "../components/layout";

function Hello(){
    const { user, loading } = useFetchUser();
    return <h1>
        { user && <Layout user={user}>Hello {user.name} </Layout> }

        {loading && <h1> Loading </h1> }
    </h1>
}

export default Hello;
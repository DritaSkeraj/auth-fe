import React from 'react';
import useAuth from "../../hooks/auth";

const Home = () => {

    const [user, loading] = useAuth();

    return (
        <div>
            {loading ? "loading": user.email}
        </div>
    );
};

export default Home;
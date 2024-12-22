import { useState } from "react";
import Register from "../Register";
import LoginPage from "../Login";

function Hisob() {
    const [isLogged, setIsLogged] = useState(false);
    return (
        <>
            {!isLogged && <Register />}
            {isLogged && <LoginPage />}
        </>
    );
}

export default Hisob;

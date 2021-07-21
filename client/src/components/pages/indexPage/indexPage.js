import { Link } from 'react-router-dom';


const IndexPage = () => {

    return (

        <>
            <Link to="/signup/n"> Signup ONLY USER </Link>
            <Link to="/signup/y" > Signup user & company </Link>
        </>
    )


}


export default IndexPage
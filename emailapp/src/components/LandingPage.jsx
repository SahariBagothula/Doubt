import { Link } from "react-router-dom";


const LandingPage = () => {
    return(
        <>
            <h2>LandingPage</h2>
            <Link to='inbox'>Inbox</Link>
            <Link to='spam'>Spam</Link>
            <Link to='trash'>Trash</Link>
        </>
    )
}

export default LandingPage;
import { Link } from "react-router-dom";

let Footer = () => {

    return <div className="footer">
        <div className="footer-logo">

            Social-Template

        </div>
        <div className="footer-sitemap">

            <div className="footer-header">
                Sitemap
            </div>

            <ul className="footer-list">
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/feed'>Feed</Link>
                </li>

                <li>
                    <Link to='/recommended'>Reccomendation</Link>
                </li>

                <li>
                    <Link to='/newpost'>Add Post</Link>
                </li>

                <li>
                    <Link to='/login'>Sign-up / Login</Link>
                </li>

            </ul>

        </div>
        <a
            className="footer-copyright"
            href="https://github.com/neerajsurjaye"
        > &#169; Neeraj Surjaye</a>
    </div>

}

export default Footer;
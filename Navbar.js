import { Link, useMatch, useResolvedPath } from 
"react-router-dom"


export default function Navbar() {

    return (
    <nav className="nav">
        <Link to="/" className="site-title">
            Goncharov Costruction Inc
            </Link>
        <ul>
            <CustomLink to="/Home">Home</CustomLink>"
            <CustomLink to="/About_us">About us</CustomLink>"
            <CustomLink to="/Portfolio">Portfolio</CustomLink>"
            <CustomLink to="/Models">Models</CustomLink>"
            <CustomLink to="/Contact_us">Contact us</CustomLink>"
          
        </ul>
    </nav>
 )
}



function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)  
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
        
            <Link to={to} {...props}>
                {children}
                </Link>
            </li>
                )
}

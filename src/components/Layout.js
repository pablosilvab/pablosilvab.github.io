import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (

        <div className="container">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/projects">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/blogs">Blogs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
};

export default Layout;
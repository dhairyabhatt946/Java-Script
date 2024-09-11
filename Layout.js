import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 border border-primary mx-1">Logo</div>
          <div className="col border border-success">
            <ul class="nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row my-1">
            <div className="col-3 border border-black p-5">
                Sidebar
            </div>
            <div className="col">
                <Outlet />
            </div>
        </div>

        <div className="row">
            <div className="col border border-danger">
                Footer
            </div>
        </div>
      </div>
    </>
  );
}

export default Layout;

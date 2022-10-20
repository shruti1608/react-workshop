//import 'bootstrap/dist/css/bootstrap.min.css';
export default function Footer() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactus">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">
                  Aout Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/contactus">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/aboutus">
                      About Us
                    </a>
                  </li>
                </ul>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

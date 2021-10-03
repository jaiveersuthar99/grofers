import logo from '../logo.webp';
import './styles.css';

export default function Footer() {
    return (
        <div className="bg-dark text-light p-4">
            <div className="d-flex px-3">
                <a href='http://codingeeks.in'> <img className="footer-logo rounded-3 img-fluid bg-light bg-opacity-10" alt="footer-logo" src={logo}></img>
                </a>
            </div>
            <div className="p-3 text-start text-light">
                <div>Don't be shy, get in touch with us and create the world again!</div>
            </div>
            <div className="py-3">
                <div className="container-fluid p-2">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="p-2">
                                <div className="card p-2 border-white   bg-transparent text-white">
                                    <h5>Custom Software development</h5>
                                    <p>Custom solutions for your problems.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-2">
                                <div className="card p-2 border-white   bg-transparent text-white">
                                    <h5>Web Development</h5>
                                    <p>A Powerful Tool For Business Growth.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-2">
                                <div className="card p-2 border-white bg-transparent text-white">
                                    <h5>Mobile App Development</h5>
                                    <p>App for business development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="text-center p-2">
                <small className="text-secondary">&copy; Designed with
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-heart text-danger mx-1"
                        viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>by <a className="text-decoration-none text-secondary" href="https://jaiveersuthar99.github.io/jsCodes/">Jaiveer</a>
                </small>
            </div>

        </div>
    );
}



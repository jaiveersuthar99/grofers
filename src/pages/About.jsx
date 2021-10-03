import Categories from "../components/Categories";
import Products from "../components/Products";
import Test from "../components/Test";

export default function About() {
    return(
        <div className="p-2">
        <div className="py-4 text-secondary container-fluid">
          <div className=" text-start ">
            <p className="display-1 border-bottom">
              Who we are
            </p>
          </div>
          <div className=" d-flex flex-column text-start">
            <p className="display-4 text-primary fw-light   ">
              A team with professionals
            </p>
            <h5>
              <p>
                what professionals do, to think your business model to Growth
              </p>
            </h5>
          </div>
          <div className=" d-flex flex-column text-start">
            <p className="display-4 text-danger fw-light ">
              A team with designers
            </p>
            <h5>
              <p>
                the skilled designers, to make an interactive design for your app
              </p>
            </h5>
          </div>
          <div className=" d-flex flex-column text-start">
            <p className="display-4 text-success fw-light ">
              A team with developers
            </p>
            <h5>
              <p>
                the skilled developers, to implement your ideas into code
              </p>
            </h5>
          </div>
        </div>
        <div className="py-4">
          <div className="py-2">
            <p className="display-1 text-secondary text-start border-bottom">
              What we do
            </p>
          </div>
  
  
          <div className="container-fluid  text-white">
  
            <div
              className="row  justify-content-between align-items-center border border-success border-3 border-end-0 rounded-start">
              <div className="col bg-success border-0 p-3 py-5 d-flex flex-column justify-content-evenly align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-window"
                  viewBox="0 0 16 16">
                  <path
                    d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                  <path
                    d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z" />
                </svg>
                <p className="display-4">
  
                  Custom Software <br/>development
                </p>
              </div>
              <div className="col p-3">
                <h2 className="text-dark p-3">Custom solutions for your problems</h2>
              </div>
            </div>
  
            <div
              className="row my-5 justify-content-between align-items-center border border-danger border-3 border-start-0 rounded-end">
              <div className="col p-3">
                <h2 className="text-dark p-3 ">A Powerful Tool For Business Growth.</h2>
              </div>
              <div className="col bg-danger border-0 p-3 py-5 d-flex flex-column justify-content-evenly align-items-center">
  
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-globe"
                  viewBox="0 0 16 16">
                  <path
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                </svg>
                <p className="display-4">
  
                  Web <br/>development
                </p>
              </div>
            </div>
  
            <div
              className="row my-5 justify-content-between align-items-center border border-info border-3 border-end-0 rounded-start">
              <div className="col bg-info border-0 p-3 py-5 d-flex flex-column justify-content-evenly align-items-center">
  
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-phone"
                  viewBox="0 0 16 16">
                  <path
                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <p className="display-4">
  
                  Mobile App <br/>Development
                </p>
  
              </div>
              <div className="col p-3">
                <h2 className="text-dark p-3 ">App for business development</h2>
  
              </div>
            </div>
  
  
          </div>
  
  
  
        </div>
        <div className="py-2">
          <div>
            <p className="display-1 text-secondary text-start border-bottom">
              Our mission
            </p>
          </div>
          <div className="container-fluid py-2">
            <div className="row">
              <div className="p-2 col-sm-4">
                <div className="card p-3 shadow border border-primary text-primary  display-4">
                  made with <br/><strong>love</strong>
                </div>
              </div>
              <div className="p-2 col-sm-4">
                <div className="card p-3 shadow border border-danger text-danger display-4">
                  Design by <br/> <strong>heart</strong>
                </div>
              </div>
              <div className="p-2 col-sm-4">
                <div className="card p-3 shadow  border border-success text-success   display-4">
                  coded by <br/><strong>engineers</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 bg-transparent text-primary">
          <p className="display-4">
            developers love <strong>Codingeeks</strong> too <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
              fill="currentColor" className="bi bi-heart text-danger" viewBox="0 0 16 16">
              <path 
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </p>
        </div>
      </div>
    );
}

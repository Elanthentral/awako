import React from "react";

function Tab() {
  return (
    <div>
      <div className="tabbable-panel">
        <div className="tabbable-line">
          <div className="tabbable-panel">
            <div className="tabbable-line">
              <ul
                className="nav nav-tabs justify-content-center fleet-navtabs"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item fleet-tab-item " role="presentation">
                  <button
                    className="nav-link active fleet-tab-link "
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#register"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    TMS
                  </button>
                </li>
                <li className="nav-item  fleet-tab-item" role="presentation">
                  <button
                    className="nav-link fleet-tab-link verticle-line"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#fleet"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    ELD
                  </button>
                </li>
                <li className="nav-item  fleet-tab-item" role="presentation">
                  <button
                    className="nav-link fleet-tab-link"
                    id="pro-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#fleet"
                    type="button"
                    role="tab"
                    aria-controls="pro"
                    aria-selected="false"
                  >
                    Dash Cam
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active fleet-tabpane mt-5 mb-3 mb-lg-5"
                  id="register"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="text-dark mb-3"></div>
                </div>
                <div
                  className="tab-pane fade show fleet-tabpane mt-5"
                  id="fleet"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  {" "}
                  <div className="text-dark mb-3">
                    <div className="text-dark mb-3"></div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show fleet-tabpane mt-5"
                  id="fleet"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  {" "}
                  <div className="text-dark mb-3">
                    <div className="text-dark mb-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active fleet-tabpane mt-5 mb-3 mb-lg-5"
              id="register"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="text-dark mb-3">{/* <h1>TMS</h1> */}</div>
            </div>
            <div
              className="tab-pane fade show fleet-tabpane mt-5"
              id="fleet"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              {" "}
              <div className="text-dark mb-3">
                <div className="text-dark mb-3">{/* <h1>ELD</h1> */}</div>
              </div>
            </div>
            <div
              className="tab-pane fade show fleet-tabpane mt-5"
              id="fleet"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              {" "}
              <div className="text-dark mb-3">
                <div className="text-dark mb-3">{/* <h1>Dash Cam</h1> */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab;

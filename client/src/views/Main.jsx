import ChatBot from "../components/ChatBot";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Chart from "../components/Chart";
import axios from "axios";

const Main = ({ userstate, setUserstate }) => {
  const [loaded, setLoaded] = useState(false);
  const [scoresArr, setScores] = useState();
  const [average, setAve] = useState();

  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUserstate(res.data);

        let result = [];
        const mooddata = res.data.moodScore;

        let index = mooddata.length - 1;
        let count = 0;
        while (mooddata[index] !== undefined) {
          result.push(mooddata[index]);
          index--;
          count++;

          if (count > 6) {
            break;
          }
        }

        let scores = [];
        let sum = 0;
        for (let i = 0; i < result.length; i++) {
          scores.push(result[i].dailyscore);
          sum += result[i].dailyscore;
        }
        setScores(scores.reverse());
        
        setAve((sum / 7).toFixed(2));
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const logouthandler = () => {
    axios
      .get("http://localhost:8000/api/user/logout", { withCredentials: true })
      .then((res) => history.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div id="wrapper">
        <ul
          class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a class="sidebar-brand d-flex align-items-center justify-content-center">
            <div class="sidebar-brand-icon rotate-n-15">
              <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">Mood Score Today</div>
          </a>

          <li class="nav-item active">
            <Link class="nav-link" to="/dashboard">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to={`/form/${userstate._id}`}>
              <i class="fas fa-fw fa-chart-area"></i>
              <span>Fill out a form</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/pastforms">
              <i class="fas fa-fw fa-chart-area"></i>
              <span>Past Forms</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/calendar">
              <i class="fas fa-fw fa-table"></i>
              <span>Calender</span>
            </Link>
          </li>
        </ul>

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                class="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i class="fa fa-bars"></i>
              </button>

              <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown no-arrow mx-1">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="alertsDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-bell fa-fw"></i>

                    <span class="badge badge-danger badge-indexer">3+</span>
                  </a>

                  <div
                    class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown"
                  >
                    <h6 class="dropdown-header">Alerts Center</h6>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="mr-3">
                        <div class="icon-circle bg-primary">
                          <i class="fas fa-file-alt text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div class="small text-gray-500">December 12, 2019</div>
                        <span class="font-weight-bold">
                          A new monthly report is ready to download!
                        </span>
                      </div>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="mr-3">
                        <div class="icon-circle bg-success">
                          <i class="fas fa-donate text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div class="small text-gray-500">December 7, 2019</div>
                        $290.29 has been deposited into your acindex!
                      </div>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="mr-3">
                        <div class="icon-circle bg-warning">
                          <i class="fas fa-exclamation-triangle text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div class="small text-gray-500">December 2, 2019</div>
                        Spending Alert: We've noticed unusually high spending
                        for your acindex.
                      </div>
                    </a>
                    <a
                      class="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Show All Alerts
                    </a>
                  </div>
                </li>

                <li class="nav-item dropdown no-arrow mx-1">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="messagesDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-envelope fa-fw"></i>

                    <span class="badge badge-danger badge-indexer">7</span>
                  </a>

                  <div
                    class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="messagesDropdown"
                  >
                    <h6 class="dropdown-header">Message Center</h6>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="dropdown-list-image mr-3">
                        <img
                          class="rounded-circle"
                          src="img/undraw_profile_1.svg"
                          alt="..."
                        ></img>
                        <div class="status-indicator bg-success"></div>
                      </div>
                      <div class="font-weight-bold">
                        <div class="text-truncate">
                          Hi there! I am wondering if you can help me with a
                          problem I've been having.
                        </div>
                        <div class="small text-gray-500">
                          Emily Fowler · 58m
                        </div>
                      </div>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="dropdown-list-image mr-3">
                        <img
                          class="rounded-circle"
                          src="img/undraw_profile_2.svg"
                          alt="..."
                        ></img>
                        <div class="status-indicator"></div>
                      </div>
                      <div>
                        <div class="text-truncate">
                          I have the photos that you ordered last month, how
                          would you like them sent to you?
                        </div>
                        <div class="small text-gray-500">Jae Chun · 1d</div>
                      </div>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="dropdown-list-image mr-3">
                        <img
                          class="rounded-circle"
                          src="img/undraw_profile_3.svg"
                          alt="..."
                        ></img>
                        <div class="status-indicator bg-warning"></div>
                      </div>
                      <div>
                        <div class="text-truncate">
                          Last month's report looks great, I am very happy with
                          the progress so far, keep up the good work!
                        </div>
                        <div class="small text-gray-500">
                          Morgan Alvarez · 2d
                        </div>
                      </div>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="dropdown-list-image mr-3">
                        <img
                          class="rounded-circle"
                          src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                          alt="..."
                        ></img>
                        <div class="status-indicator bg-success"></div>
                      </div>
                      <div>
                        <div class="text-truncate">
                          Am I a good boy? The reason I ask is because someone
                          told me that people say this to all dogs, even if they
                          aren't good...
                        </div>
                        <div class="small text-gray-500">
                          Chicken the Dog · 2w
                        </div>
                      </div>
                    </a>
                    <a
                      class="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Read More Messages
                    </a>
                  </div>
                </li>

                <div class="topbar-divider d-none d-sm-block"></div>

                <li class="nav-item dropdown no-arrow">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                      {userstate.firstName}
                    </span>
                    <img
                      class="img-profile rounded-circle"
                      src="img/undraw_profile.svg"
                    ></img>
                  </a>

                  <div
                    class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </a>

                    <div class="dropdown-divider"></div>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>

            <div class="container-fluid">
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">
                  Hi, welcome to your dashboard
                </h1>
                <br />
              </div>

              <div class="row">
                {loaded && <Chart moodresult={scoresArr} />}

                <div
                  style={{
                    marginTop: "60px",
                    padding: "20px",
                    border: "1px lightgrey solid",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{ width: "55px" }}
                    src="https://cdn-icons-png.flaticon.com/512/3068/3068233.png"
                    alt="emoji icon"
                  />
                  <h5>
                    Your weekly average mood score is:{" "}
                    <img
                      style={{ width: "55px" }}
                      src="https://img-premium.flaticon.com/png/512/3155/premium/3155234.png?token=exp=1632455323~hmac=a26dc003988e28121de680bb330ac72e"
                      alt="arrow icon"
                    />{" "}
                    {average ? (
                      <h5 style={{ display: "inline-block" }}>{average}</h5>
                    ) : null}
                  </h5>
                </div>
              </div>
              <br />
              <ChatBot />
            </div>
          </div>

          <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
          </a>

          <div
            class="modal fade"
            id="logoutModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Ready to Leave?
                  </h5>
                  <button
                    class="close"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  Select "Logout" below if you are ready to end your current
                  session.
                </div>
                <div class="modal-footer">
                  <button
                    class="btn btn-secondary"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a onClick={logouthandler}>Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

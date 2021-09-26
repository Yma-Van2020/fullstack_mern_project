import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { analyzeAnsSentiment } from "../sentiment";

const Form = ({ userstate }) => {
  const history = useHistory();
  const [errorState, setErrorState] = useState({});
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [formState, setFormState] = useState({
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    ans5: false,
    ans6: false,
    ans7: false,
    dailyscore: 0,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const newstate = { ...userstate };
    newstate.moodScore.push(formState);

    console.log(formState);
    axios
      .post("http://localhost:8000/api/moods", formState, {
        withCredentials: true,
      })
      .then((res) => {
        history.push("/result/" + formState.dailyscore);
      })
      .catch((err) => {
        const { errors } = err.response.data;
        const errObj = {};

        for (const [key, value] of Object.entries(errors)) {
          // console.log(errors[key])
          errObj[key] = value;
        }
        setErrorState(errObj);
        console.log(errors);
      });
  };

  const handleOnChange1 = (e) => {
    setIsChecked1(!isChecked1);
    const { name } = e.target;
    setFormState({
      ...formState,
      [name]: !isChecked1,
    });
  };
  const handleOnChange2 = (e) => {
    setIsChecked2(!isChecked2);
    const { name } = e.target;
    setFormState({
      ...formState,
      [name]: !isChecked2,
    });
  };
  const handleOnChange3 = (e) => {
    setIsChecked3(!isChecked3);
    const { name } = e.target;
    setFormState({
      ...formState,
      [name]: !isChecked3,
    });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
      dailyscore: analyzeAnsSentiment(
        formState.ans1,
        formState.ans2,
        formState.ans3,
        formState.ans4,
        formState.ans5,
        formState.ans6,
        formState.ans7
      ),
    });
  };

  return (
    <div>
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
              <Link class="nav-link" to="/form">
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
                    </a>
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
                    </a>
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
                    Please fill out the form below to analyze your daily mood score
                  </h1>
                </div>
                <div>
                  <form
                    onSubmit={submitHandler}
                    style={{ padding: "40px 100px 100px 100px" }}
                  >
                    <div class="form-group">
                      <label htmlFor="pl">
                        Have you had little interest or pleasure in doing
                        things?
                      </label>
                      <br />
                      <input
                        checked={isChecked1}
                        onChange={handleOnChange1}
                        className="form-check-input"
                        type="checkbox"
                        name="ans5"
                        value={isChecked1}
                      />
                      <br />
                      <label htmlFor="ep">
                        Have you had trouble falling asleep, staying asleep, or
                        have you been sleeping too much?
                      </label>
                      <br />
                      <input
                        checked={isChecked2}
                        onChange={handleOnChange2}
                        className="form-check-input"
                        type="checkbox"
                        name="ans6"
                        value={isChecked2}
                      />
                      <br />
                      <label htmlFor="hh">
                        Have you been feeling bad about yourself – or feeling
                        that you are a failure, or that you have let yourself or
                        your family down?
                      </label>
                      <br />
                      <input
                        checked={isChecked3}
                        onChange={handleOnChange3}
                        className="form-check-input"
                        type="checkbox"
                        name="ans7"
                        id="hh"
                        value={isChecked3}
                      />
                      <br />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlInput1">
                        Describe your current mood in one sentence
                      </label>
                      {errorState.ans1 ? (
                        <small className="ml-1 text-danger font-weight-bold">
                          {errorState.ans1.message}
                        </small>
                      ) : null}
                      <input
                        onChange={changeHandler}
                        type="text"
                        class="form-control"
                        name="ans1"
                        id="exampleFormControlInput1"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlInput1">
                        Are you feeling optimistic?
                      </label>
                      {errorState.ans2 ? (
                        <small className="ml-1 text-danger font-weight-bold">
                          {errorState.ans2.message}
                        </small>
                      ) : null}
                      <input
                        onChange={changeHandler}
                        type="text"
                        class="form-control"
                        name="ans2"
                        id="exampleFormControlInput1"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlInput1">
                        What is your biggest accomplishment of the day?
                      </label>
                      {errorState.ans3 ? (
                        <small className="ml-1 text-danger font-weight-bold">
                          {errorState.ans3.message}
                        </small>
                      ) : null}
                      <input
                        onChange={changeHandler}
                        type="text"
                        class="form-control"
                        name="ans3"
                        id="exampleFormControlInput1"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlInput1">
                        Have you been sociable?
                      </label>
                      {errorState.ans4 ? (
                        <small className="ml-1 text-danger font-weight-bold">
                          {errorState.ans4.message}
                        </small>
                      ) : null}
                      <input
                        onChange={changeHandler}
                        type="text"
                        class="form-control"
                        name="ans4"
                        id="exampleFormControlInput1"
                      />
                    </div>
                    <input
                      class="btn btn-secondary"
                      type="submit"
                      value="Submit"
                    />
                    &nbsp;&nbsp;
                    <Link to="/dashboard">
                      <button class="btn btn-secondary">Go Back</button>
                    </Link>
                  </form>
                </div>

                <div class="row"></div>
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
                    <a class="btn btn-primary" href="login.html">
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Form;

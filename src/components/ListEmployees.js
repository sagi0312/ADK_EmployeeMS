import React, { useState } from "react";
import axios from "axios";

const REST_URL = "http://localhost:8080/api/v1/employees";

function ListEmployees() {
  const [emps, setEmps] = useState([]);
  React.useEffect(() => {
    axios.get(REST_URL).then((response) => {
      console.log(response.data);
      setEmps(response.data);
    });
  }, []);
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ADK Inc
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* SHOWCASE */}
      <section className="bg-secondary text-light p-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <img
              src="images/Main-office-icon.svg"
              alt=""
              className="img-fluid d-none d-sm-block news-input"
            />
            <div>
              <h1>
                <span className="text-warning">Employee</span> Database
              </h1>
              <p className="lead my-4">
                Created using Spring boot + reactjs + bootstrap 5
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TABLE OF EMPLOYEES */}
      <div className="mx-4 my-4">
        <table className="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Employee First Name</th>
              <th scope="col">Employee Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          {emps.map((emp) => (
            <tbody key={emp.id}>
              <tr>
                <td scope="col">{emp.id}</td>
                <td scope="col">{emp.firstName}</td>
                <td scope="col">{emp.lastName}</td>
                <td scope="col">{emp.email}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      {/* FOOTER */}
      <footer class="footer mt-auto py-3 bg-dark">
        <div class="container">
          <span class="text-muted">Created by: anju karanji</span>
        </div>
      </footer>
    </>
  );
}

export default ListEmployees;

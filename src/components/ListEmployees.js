function ListEmployees() {
  const employeeArray = [
    {
      id: "1",
      fName: "Lotus",
      lName: "baba",
      email: "ggg@jjj",
    },
    {
      id: "2",
      fName: "Rose",
      lName: "cada",
      email: "uuu@ppp",
    },
  ];
  return (
    <>
      {/* NAVBAR */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            ADK Inc
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
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
          <div class="d-sm-flex align-items-center justify-content-between">
            <img
              src="images/Main-office-icon.svg"
              alt=""
              class="img-fluid d-none d-sm-block news-input"
            />
            <div>
              <h1>
                <span class="text-warning">Employee</span> Database
              </h1>
              <p class="lead my-4">
                Created using Spring boot + reactjs + bootstrap 5
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* TABLE OF EMPLOYEES */}
      <div class="mx-4 my-4">
        <table class="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Employee First Name</th>
              <th scope="col">Employee Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          {employeeArray.map((emp) => (
            <tbody>
              <th scope="col">{emp.id}</th>
              <th scope="col">{emp.fName}</th>
              <th scope="col">{emp.lName}</th>
              <th scope="col">{emp.email}</th>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export default ListEmployees;

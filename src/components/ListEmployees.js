const ListEmployees = () => {
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
      <h2 className="text-center">Employees</h2>
    </>
  );
};

export default ListEmployees;

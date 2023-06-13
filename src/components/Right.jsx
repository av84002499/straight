import React from "react";

export const Right = () => {
  return (
    <div>
      <div className="bg-white p-3 rounded" >
        <div className="d-flex">
          <h3>Job Filter</h3>
          <button className="ms-auto border-0 rounded-pill my-auto bg-info-subtle px-3">Clear all</button>
        </div>
      </div>

      <div className="bg-white p-3 rounded my-3" >
        <div className="d-flex">
          <h6 className="text-danger">Experience Level</h6>
          <button className="ms-auto border-0 rounded-pill my-auto bg-info-subtle px-3">Clear</button>
        </div>
        <div className="form-check d-flex align-items-center my-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label ms-2" for="flexCheckDefault">
            Entry Level
          </label>
          <span className="ms-auto text-body-tertiary">225 Jobs</span>
        </div>
        <div className="form-check d-flex align-items-center my-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label ms-2" for="flexCheckDefault">
            Intermediate
          </label>
          <span className="ms-auto text-body-tertiary">124 Jobs</span>
        </div>
        <div className="form-check d-flex align-items-center my-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label ms-2" for="flexCheckDefault">
            Expert
          </label>
          <span className="ms-auto text-body-tertiary">2404 Jobs</span>
        </div>
      </div>

      <div className="bg-white p-3 rounded my-3" >
        <div className="d-flex">
          <h6 className="text-danger">Job Location</h6>
          <button className="ms-auto border-0 rounded-pill my-auto bg-info-subtle px-3">Clear</button>
        </div>
        <div className="form-check d-flex align-items-center my-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label ms-2" for="flexCheckDefault">
            On site
          </label>
          <span className="ms-auto text-body-tertiary">225 Jobs</span>
        </div>
        <div class="input-group mb-3">
          <span className="input-group-text border-0" id="basic-addon1"><i class="bi bi-search"></i></span>
          <input type="text" className="form-control text-bg-light border-0" placeholder="Search by location" />
        </div>
        <div className="form-check d-flex align-items-center my-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label ms-2" for="flexCheckDefault">
            Remote
          </label>
          <span className="ms-auto text-body-tertiary">124 Jobs</span>
        </div>
      </div>
      <div className="bg-white p-3 rounded my-3" >
        <div className="d-flex">
          <h6 className="text-danger">Job Type</h6>
          <button className="ms-auto border-0 rounded-pill my-auto bg-info-subtle px-3">Clear</button>
        </div>
        <div className="form-check d-flex align-items-center my-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label ms-2" for="flexCheckDefault">
            Full Time
          </label>
          <span className="ms-auto text-body-tertiary">255 Jobs</span>
        </div>
        <div className="form-check d-flex align-items-center my-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label ms-2" for="flexCheckDefault">
            Freelance
          </label>
          <span className="ms-auto text-body-tertiary">124 Jobs</span>
        </div>
        <div className="form-check d-flex align-items-center my-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label ms-2" for="flexCheckDefault">
            Part Time
          </label>
          <span className="ms-auto text-body-tertiary">2024 Jobs</span>
        </div>
      </div>
      <div className="bg-white p-3 rounded my-3" >
        <div className="d-flex">
          <h6 className="text-danger">Applicants</h6>
          <button className="ms-auto border-0 rounded-pill my-auto bg-info-subtle px-3">Clear</button>
        </div>
        <div className="form-check d-flex align-items-center my-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label ms-2" for="flexCheckDefault">
            Less than 10
          </label>
          <span className="ms-auto text-body-tertiary">255 Jobs</span>
        </div>
        <div className="form-check d-flex align-items-center my-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label ms-2" for="flexCheckDefault">
            10 to 50
          </label>
          <span className="ms-auto text-body-tertiary">2404 Jobs</span>
        </div>
        <div className="form-check d-flex align-items-center my-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label ms-2" for="flexCheckDefault">
            50 to 100
          </label>
          <span className="ms-auto text-body-tertiary">2404 Jobs</span>
        </div>
      </div>



    </div>
  );
};
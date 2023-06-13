import React from "react";

export const Center = () => {
  return (
    <div>
      <div className="bg-white rounded p-3" >
        <div className="d-flex">
          <h4 className="fw-bold">Search Job</h4>
          <button className="ms-auto my-auto rounded-pill btn text-primary bg-info-subtle btn-sm" ><i className="bi bi-bookmark-dash-fill"></i> Save Search</button>
        </div>
        <form className="my-2">
          <div className="row m-auto">
          <div className="my-2 col-lg-8 text-bg-light rounded">
            <label className="border-0 rounded text-bg-light me-2 py-2" for="search"><i className="bi bi-search"></i></label>
            <input type="text" className="text-bg-light border-0 rounded" id="search" placeholder="UI Designer" />
            </div>
            <div className="my-2 col-lg-4">
            <select className="text-bg-light border-0 rounded w-100 p-2" id="select-1">
              <option value="newest" selected>Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
          </div>
        </form>
        <div className="bg-info-subtle text-primary rounded text-center">
          <p className="p-2">55 Jobs Found</p>
        </div>
      </div>
      <div className="bg-white rounded p-3 my-3">
        <div className="d-flex align-items-center">
          <img className="rounded m-1 h-100" src="/Ui1.PNG" alt="UI-1" />
          <h6 className="fw-bold my-auto mx-2">Junior UI/UX Designer <br />
          <span className="fw-lighter lh-base text-body-tertiary">Slack Technologies,LLC</span>
          </h6>
          <button className="ms-auto my-auto rounded btn text-primary bg-info-subtle btn-sm" >Save Job <i className="bi bi-bookmark-dash-fill"></i></button>
        </div>
        <p className="text-body-tertiary m-2">We are looking for a ralanted designer to help us create beautitul and functional
          Interfaces for our company. Your role requires you to understand users vary well.
        </p>
        <div className="m-2">
        <button className="btn rounded border-0 text-bg-light m-2">Fulltime</button>
        <button className="btn rounded border-0 text-bg-light m-2">Design</button>
        <button className="btn rounded border-0 text-bg-light m-2">Remote</button>
        </div>
        <hr />
        <div className="d-flex align-items-center">
          <h6 className="m-auto"><i className="bi bi-coin text-primary"></i><strong> $12K-14K</strong> <span className="text-body-tertiary"> /Month</span></h6>
          <h6 className="m-auto"><i className="bi bi-people text-primary"></i><strong> 55</strong> <span className="text-body-tertiary"> People applied</span></h6>
          <button className="btn btn-danger rounded m-auto">Apply Now</button>
        </div>
      </div>
      <div className="bg-white rounded p-3 my-3">
        <div className="d-flex align-items-center">
          <img className="rounded m-1 h-100" src="/UI2.PNG" alt="UI-1" />
          <h6 className="fw-bold my-auto mx-2">Mobile UI Designer <br />
          <span className="fw-lighter lh-base text-body-tertiary">LINE Corporation</span>
          </h6>
          <button className="ms-auto my-auto rounded btn text-primary bg-info-subtle btn-sm" >Save Job <i className="bi bi-bookmark-dash-fill"></i></button>
        </div>
        <p className="text-body-tertiary m-2">A UI Designer is a technical role that is responsible for presenting a product's development in a way that is attractive and convenient for users.
        </p>
        <div className="m-2">
        <button className="btn rounded border-0 text-bg-light m-2">Fulltime</button>
        <button className="btn rounded border-0 text-bg-light m-2">Design</button>
        <button className="btn rounded border-0 text-bg-light m-2">Remote</button>
        </div>
        <hr />
        <div className="d-flex align-items-center">
          <h6 className="m-auto"><i className="bi bi-coin text-primary"></i><strong> $20K-25K</strong> <span className="text-body-tertiary"> /Month</span></h6>
          <h6 className="m-auto"><i className="bi bi-people text-primary"></i><strong> 88.</strong> <span className="text-body-tertiary"> People applied</span></h6>
          <button className="btn btn-danger rounded m-auto">Apply Now</button>
        </div>
      </div>
    </div>
  );
};
import React from "react";
import { Center } from './Center';
import { Left } from "./Left";
import { Right } from "./Right";

export const Findwork = () => {
  return (
    <>
      <div className="container m-auto my-4 row">
        <div className="p-3">
            <button class="btn btn-primary d-lg-none col-12" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive"><i class="bi bi-funnel-fill"></i> Filters</button>
        </div>

        <div className="col-lg-3 d-none d-lg-block">
          <Left />
        </div>
        <div className="col-lg-6">
          <Center />
        </div>

        <div className="col-lg-3 offcanvas-body">
          <div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Apply Filters</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <Right />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
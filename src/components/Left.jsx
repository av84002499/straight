import React from "react";

export const Left = () => {
    return (
        <div>
            {/* Box-1 */}
            <div className="bg-white rounded text-center p-2">
                <img className="w-25 rounded-circle m-3" src="data:image/jpeg;base64,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" alt="pro" />
                <h5 className="fw-bold">Ankit verma</h5>
                <p className="text-body-tertiary">Junior UI Designer</p>
                <button className="btn text-primary text-bg-light rounded-pill w-75 m-3" href="!">Edit Profile</button>
            </div>

            {/* Box-2 */}
            <div className="bg-white rounded p-3 my-3">
                <div className="d-flex align-items-center">
                    <p className="text-danger fw-bold my-auto">Work Experience</p>
                    <button className="ms-auto my-auto rounded-circle btn text-primary text-bg-light btn-sm" ><i class="bi bi-arrow-up-right-square-fill"></i></button>
                </div>
                {/* item-1 */}
                <div className="d-flex align-items-center my-2">
                    <img className="w-20 rounded-circle" src="/Ui1.png" alt="work-item" />
                    <p className="fs-12 fw-bold my-auto">Junir UI Designre <br /> <span className="fs-10 fw-lighter text-body-tertiary">Akbnb Inc - Fulltime</span></p>
                    <span className="ms-auto fs-14 text-body-tertiary">2 Mon</span>
                </div>
                {/* item-2 */}
                <div className="d-flex align-items-center my-2">
                    <img className="w-20 rounded-circle" src="/UI2.png" alt="work-item" />
                    <p className="fs-12 fw-bold my-auto">Intern UI Designre <br /> <span className="fs-10 fw-lighter text-body-tertiary">Line Corporation - Intern</span></p>
                    <span className="ms-auto fs-14 text-body-tertiary">2 Mon</span>
                </div>
            </div>
            {/* Box-3 */}
            <div className="bg-white rounded p-3 my-3">
                <div className="d-flex align-items-center">
                    <p className="text-danger fw-bold my-auto">Top Skills</p>
                    <button className="ms-auto my-auto rounded-circle btn text-primary text-bg-light btn-sm" ><i class="bi bi-arrow-up-right-square-fill"></i></button>
                </div>
                {/* item-1 */}
                <div className="d-flex align-items-center my-2">
                <i class="fs-10 px-1 my-auto me-2 bg-info-subtle rounded-pill bi bi-circle-fill"></i>
                    <p className="fs-12 fw-bold my-auto">UI Design</p>
                    <span className="ms-auto fs-14 text-body-tertiary">1-2 Years</span>
                </div>
                {/* item-1 */}
                <div className="d-flex align-items-center my-2">
                <i class="fs-10 px-1 my-auto me-2 bg-info-subtle rounded-pill bi bi-circle-fill"></i>
                    <p className="fs-12 fw-bold my-auto">UX Design</p>
                    <span className="ms-auto fs-14 text-body-tertiary">1-2 Years</span>
                </div>
                {/* item-1 */}
                <div className="d-flex align-items-center my-2">
                <i class="fs-10 px-1 my-auto me-2 bg-info-subtle rounded-pill bi bi-circle-fill"></i>
                    <p className="fs-12 fw-bold my-auto">UX Research</p>
                    <span className="ms-auto fs-14 text-body-tertiary">1-2 Years</span>
                </div>
            </div>
            {/* Box-4 */}
            <div className="bg-white rounded p-3 my-3">
                <div className="d-flex align-items-center">
                    <p className="text-danger fw-bold my-auto">Latest Portfolio</p>
                    <button className="ms-auto my-auto rounded-circle btn text-primary text-bg-light btn-sm" ><i class="bi bi-arrow-up-right-square-fill"></i></button>
                </div>
            </div>

        </div>
    );
};
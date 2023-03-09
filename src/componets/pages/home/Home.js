import React from "react";
import "./home.css";
import pic2 from "../../../assets/images/pic-2.png";
import pic3 from "../../../assets/images/pic-3.png";
import pic14 from "../../../assets/images/pic-4.png";
import { BsArrowRightShort } from "react-icons/bs";
import { SiProbot } from "react-icons/si";
import Tab from "../../pages/tab-componet/Tab";

function Home() {
  return (
    <div>
      <div className="container">
        <section className="fleet-mgt mt-5">
          <div className="row g-lg-0 g-2 align-items-center">
            <div className="col-md-6 col-12">
              <p className="text-blue text-uppercase letter-spacing-2">
                Fleet Management Simplified
              </p>
              <h1 className=" ">
                Awako - The True{" "}
                <span className="text-blue fw-bold">All-in-One</span> Platform
                for Fleet Management{" "}
              </h1>
              <p className="line-height-2 mt-5">
                Awako provides an AI-powered TMS that is an all-in-one platform
                for dispatch, accounting, ELD, dash cam, telematics,
                professional back office support, safety & compliance audits.
              </p>
              <div>
                <button className=" btn-blue">
                  Get started now{" "}
                  <BsArrowRightShort size={25} className="ms-2" />
                </button>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <img src={pic2} className="img-fluid" />
            </div>
          </div>
        </section>
      </div>
      <section className="one-plateform bg-clrsilver">
        <div className="tab-componet ">
          <Tab />
        </div>
        <div className="one-plateform-content px-lg-5 px-3">
          <div className="row align-items-center g-3 ">
            <div className="col-12 col-lg-5 order-lg-0 order-1">
              <img src={pic3} className="img-fluid  " />
            </div>
            <div className="col-12 col-lg-7 order-lg-1 order-0">
              <p className="text-blue letter-spacing-2">TMS</p>
              <h1 className="">One Platform - All of Your Business</h1>
              <div className="p-lg-5">
                <div className="row gx-lg-5 mt-2">
                  <div className="col-lg-6 col-12">
                    <ul className="list ">
                      <li>
                        <span>
                          <SiProbot className="list-icon " size={15} />
                        </span>{" "}
                        AI powered work order entry
                      </li>
                      <li>
                        <span>
                          <SiProbot className="list-icon " size={15} />
                        </span>{" "}
                        Automated dispatching & accounting
                      </li>
                      <li>
                        <span>
                          <SiProbot className="list-icon " size={15} />
                        </span>{" "}
                        Safety & compliance seamlessly monitored
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-12">
                    <ul className="list ">
                      <li>
                        <span>
                          <SiProbot className="list-icon " size={15} />
                        </span>{" "}
                        Transparent fleet visibility
                      </li>
                      <li>
                        <span>
                          <SiProbot className="list-icon " size={15} />
                        </span>{" "}
                        Automated document management
                      </li>
                      <li>
                        <span>
                          <SiProbot className="list-icon " size={15} />
                        </span>{" "}
                        Easily manage account payables, receivables.
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <ul className="list ">
                      <li>
                        <span>
                          <SiProbot className="list-icon " size={15} />
                        </span>{" "}
                        Intuitive mobile application for drivers,
                        owner-operators, & carriers
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <button className=" btn-blue-outline">
                    Get started now{" "}
                    <BsArrowRightShort size={25} className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trans-mgt">
        <div className="container">
          <h1 className="text-center mb-4">
            Transportation Management
            <span className="text-blue"> Redefined</span>
          </h1>
          <div className="circle-content gap-3 gap-lg-0">
            <div className="left-circle">
              <p className="fs-500 text-center fw-bold">
                Challenges with the other trucking companies
              </p>
              <ul className="list-group border-0 ">
                <li className=" list-group-item d-flex gap-3 fs-400 align-items-center bg-transparent border-0 mb-3">
                  <span className="">
                    <SiProbot className="text-blue circle-icon  " />
                  </span>
                  Outdated technology
                </li>
                <li className=" list-group-item d-flex gap-3 fs-400 align-items-center bg-transparent border-0 mb-3">
                  <span className="">
                    <SiProbot className="text-blue circle-icon  " />
                  </span>
                  No tracking system
                </li>

                <li className=" list-group-item d-flex gap-3 fs-400 align-items-center bg-transparent border-0 mb-3">
                  <span className="">
                    <SiProbot className="text-blue circle-icon  " />
                  </span>
                  Shortage of drivers
                </li>
              </ul>
            </div>
            <div className="right-circle">
              <p className="fs-500 text-center fw-bold text-white ">
                Why Awako is the <span className="d-block">new way?</span>
              </p>
              <div className="mx-auto">
                <ul className="list-group border-0 ">
                  <li className=" list-group-item d-flex gap-3 fs-400 align-items-center bg-transparent border-0 mb-3 text-white ">
                    <span className="">
                      <SiProbot className="text-white circle-icon  " />
                    </span>
                    Easy to navigate
                  </li>
                  <li className=" list-group-item d-flex gap-3 fs-400 align-items-center bg-transparent border-0 mb-3 text-white">
                    <span className="">
                      <SiProbot className="text-white circle-icon  " />
                    </span>
                    Secured & Driver availability
                  </li>

                  <li className=" list-group-item d-flex gap-3 fs-400 align-items-center bg-transparent border-0 mb-3 text-white">
                    <span className="">
                      <SiProbot className="text-white circle-icon  " />
                    </span>
                    Advanced & Real-Time Tracking System
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="quote bg-clrsilver mb-0">
        <div className="container">
          <figure className="text-center">
            <blockquote className="blockquote">
              <p className="text fs-500">
                Awako exists to help empower trucking companies with the proper
                tools, technology, and support to allow them to not only better
                manage their current workload but also expand without having to
                hire or add costly hardware. Our team is dedicated to providing
                high-quality products and services on a consistent and
                trustworthy basis.
                <span className=" text-start fs-500 text-blue mt-5 d-block">
                  - Quote from the CEO
                </span>
              </p>
            </blockquote>
          </figure>
        </div>
      </section>
      <section className="fleet-show ">
        <div className="container-fluid px-lg-0">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="fleet-show-content">
                <h1>
                  Let us Show you the Future of{" "}
                  <span className="text-blue">Fleet Management</span>
                </h1>
                <p className="line-height-2 fs-500 mt-4">
                  Awako delivers an unparallelled fleet management solution with
                  the power of AI all under one umbrella.
                </p>
                <div className="d-flex align-items-center gap-3 ">
                  <div>
                    <button className=" btn-blue-outline px-3 mt-0">
                      {" "}
                      Learn-more
                    </button>
                  </div>
                  <div>
                    <button className=" btn-blue mb-0">
                      Get started now
                      <BsArrowRightShort size={25} className="ms-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <img src={pic14} className="img-fluid w-100 " />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;

import React from "react";
import "./footer.css";
import blogo from "../../assets/images/black-logo.png";

function Footer() {
  return (
    <footer className="bg-clrdark ">
      <div className="footer-content">
        <div className="foot-logo-content mb-3">
          <img src={blogo} className="img-fluid" />
          <p className=" text-start mt-3">
            Awako provides an AI-powered TMS that is an all-in-one plat form for
            dispatch, account ing, ELD, dash cams, safety & compliance audit
            support , and professional back office services. Empowering trucking
            companies with powerful tools to drive their business to the next
            level .
          </p>
        </div>
        <div className="product">
          <p className="text-white">Products</p>
          <div className="product-list d-flex flex-column gap-3 mt-4">
            <a href="#">TMS</a>
            <a href="#">ELD</a>
            <a href="#">Dash Cams</a>
          </div>
        </div>
        <div className="links">
          <p className="text-white">Links</p>
          <div className="product-list d-flex flex-column gap-3 mt-4">
            <a href="#">Services</a>
            <a href="#">Company</a>
            <a href="#">Contact</a>
            <a href="#">Blogs & Latest News</a>
          </div>
        </div>
        <div className="resource">
          <p className="text-white">Resources</p>
          <div className="product-list d-flex flex-column gap-3 mt-4">
            <a href="#">Customer Stories</a>
            <a href="#">Support Center</a>
            <a href="#">Guides</a>
            <a href="#">Brand Assets</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 ">
        <p className="copy-right">&copy; 2023 Awako | Allrights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;

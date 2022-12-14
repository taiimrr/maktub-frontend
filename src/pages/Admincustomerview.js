import React, { Component, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";

import Adminsidebar from "../components/Adminsidebar";
import AdminTopnav from "../components/AdminTopnav";
import Adminfooter from "../components/Adminfooter";

const productlList = [
  {
    id: "0901",
    name: "Complete Python Bootcamp From Zero to Hero in Python ",
    imageUrl: "course.png",
    price: "240",
    color: "warning",
    status: "alert-warning text-warning",
    tag: "Python",
    lesson: "32 ",
  },
  {
    id: "2323",
    name: "Complete Python Bootcamp From Zero to Hero in Python ",
    imageUrl: "course.png",
    price: "40",
    color: "warning",
    status: "alert-danger text-danger",
    tag: "Desinger",
    lesson: "24 ",
  },
  {
    id: "1233",
    name: "Java Programming Masterclass for Developers",
    imageUrl: "course.png",
    price: "60",
    color: "danger",
    status: "alert-success text-success",
    tag: "Bootstrap",
    lesson: "14 ",
  },
  {
    id: "1233",
    name: "The Data Science Course Complete Data Science ",
    imageUrl: "course.png",
    price: "370",
    color: "danger",
    status: "alert-danger text-danger",
    tag: "Develop",
    lesson: "23 ",
  },
  {
    id: "2323",
    name: "Complete Python Bootcamp From Zero to Hero in Python ",
    imageUrl: "course.png",
    price: "450",
    color: "success",
    status: "alert-danger text-danger",
    tag: "Desinger",
    lesson: "24 ",
  },
];
const paymentList = [
  {
    id: "0901",
    name: "Paypal",
    imageUrl: "user.png",
    number: "4321 4432 6565 ****",
    color: "success",
    status: "Active",
  },
  {
    id: "1233",
    name: "Master Card",
    imageUrl: "user.png",
    number: "***port@gmail.com",
    color: "success",
    status: "Active",
  },
  {
    id: "2323",
    name: "Payonner",
    imageUrl: "user.png",
    number: "**herry@payoner.com",
    color: "danger",
    status: "Deactive",
  },
  {
    id: "0901",
    name: "Visa",
    imageUrl: "user.png",
    number: "4321 4432 6565 ****",
    color: "success",
    status: "Active",
  },
];

class Admincustomerview extends Component {
  constructor() {
    super();
    this.state = {
      location: false,
    };
  }
  handleModel() {
    this.setState({ location: !this.state.location });
  }
  render() {
    return (
      <Fragment>
        <div id='wrapper'>
          <Adminsidebar />

          <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
              <AdminTopnav />

              <div className='container px-3 py-4'>
                <div className='row'>
                  <div className='col-xl-4 col-xxl-3 col-lg-4 pe-0'>
                    <div className='card w-100 shadow-xss rounded-lg overflow-hidden border-0 mb-3 mt-0 pb-3'>
                      <div className='card-body d-block pt-4 text-center'>
                        <figure className='avatar position-relative w110 z-index-1 w100 z-index-1 rounded-lg overflow-hidden ml-auto mr-auto'>
                          <img
                            src='assets/images/user.png'
                            alt='avater'
                            className='p-1 bg-white rounded-xl w-100 overflow-hidden'
                          />
                        </figure>
                        <h4 className='font-xs ls-1 fw-700 text-grey-900'>
                          Surfiya Zakir
                          <span className='d-block font-xssss fw-500 mt-1 lh-3 text-grey-500'>
                            @surfiyazakir22
                          </span>
                        </h4>
                      </div>

                      <div className='card-body d-flex pt-0'>
                        <i className='feather-map-pin text-grey-500 mr-3 font-lg'></i>
                        <h4 className='fw-700 text-grey-900 font-xssss mt-1'>
                          Flodia, Austia
                        </h4>
                      </div>
                      <div className='card-body d-flex pt-0'>
                        <i className='feather-users text-grey-500 mr-3 font-lg'></i>
                        <h4 className='fw-700 text-grey-900 font-xssss mt-1'>
                          3 Kids
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-8 col-xxl-9 col-lg-8'>
                    <div className='card border-0 mt-3 rounded-lg'>
                      <div className='card-body d-flex pt-4 px-4 pb-0'>
                        <h4 className='font-xss text-grey-800 mt-3 fw-700'>
                          Kids Info
                        </h4>
                      </div>
                      <div className='card-body m-4 mb-0 bg-lightblue p-4 rounded-lg'>
                        <h4 className='fw-700 mt-2 font-xss text-grey-900 d-flex mb-0'>
                          Hurin Seary
                          <span className='bg-primary text-white font-xsssss fw-600 ls-3 p-2 rounded-lg ml-auto'>
                            Grade KG-1
                          </span>
                        </h4>
                      </div>

                      <div className='card-body m-4 bg-lightgreen p-4 rounded-lg'>
                        <h4 className='fw-700 mt-2 font-xss text-grey-900 d-flex mb-0'>
                          Surfiya Zakir
                          <span className='bg-success text-white font-xsssss fw-600 ls-3 p-2 rounded-lg ml-auto'>
                            Grade Pre-School
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className='card border-0 mt-3 rounded-lg'>
                      <div className='card-body d-flex pt-4 px-4 pb-0'>
                        <h4 className='font-xss text-grey-800 mt-3 fw-700'>
                          Payment List
                        </h4>
                        <select
                          className='form-select ml-auto float-right border-0 font-xssss fw-600 text-grey-700 bg-transparent'
                          aria-label='Default select example'>
                          <option>Sort by latest</option>
                          <option defaultValue='1'>Sort by popularity</option>
                          <option defaultValue='2'>
                            Sort by price : low to high
                          </option>
                          <option defaultValue='3'>
                            Sort by price : high to low
                          </option>
                        </select>
                      </div>
                      <div className='card-body p-4'>
                        <div className='table-responsive'>
                          <table className='table table-admin mb-0'>
                            <thead className='bg-greylight rounded-lg ovh'>
                              <tr>
                                <th className='border-0'></th>
                                <th className='border-0'></th>
                                <th className='border-0' scope='col'>
                                  Name
                                </th>
                                <th className='border-0' scope='col'>
                                  Status
                                </th>
                                <th className='border-0' scope='col'>
                                  Number
                                </th>
                                <th scope='col' className='text-end border-0'>
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {paymentList.map((value, index) => (
                                <tr key={index}>
                                  <td>
                                    <div className='form-check mt-1'>
                                      <input
                                        className='form-check-input'
                                        type='checkbox'
                                        defaultValue='option1'
                                      />
                                      <label className='text-grey-500 font-xssss'></label>
                                    </div>
                                  </td>
                                  <td className='product-thumbnail text-start ps-0'>
                                    <img
                                      src={`assets/images/${value.imageUrl}`}
                                      alt='card'
                                      className='w-60 d-inline-block p-2 bg-greylight rounded-lg'
                                    />
                                  </td>

                                  <td>
                                    <b>{value.name}</b>
                                  </td>
                                  <td>
                                    <span
                                      className={`badge rounded-pill font-xsssss fw-700 pl-3 pr-3 lh-24 text-uppercase rounded-lg ls-2 alert-${value.color}`}>
                                      {value.status}
                                    </span>
                                  </td>
                                  <td>{value.number}</td>
                                  <td className='product-remove text-end'>
                                    <a href='/admin-customerview'>
                                      <i className='feather-edit me-1 font-xs text-grey-500'></i>
                                    </a>
                                    <Button
                                      className='bg-transparent border-0'
                                      onClick={() => {
                                        this.handleModel();
                                      }}>
                                      <i className='ti-trash  font-xs text-danger'></i>
                                    </Button>
                                    <Modal
                                      {...this.props}
                                      size='sm'
                                      aria-labelledby='contained-modal-title-vcenter'
                                      centered
                                      show={this.state.location}>
                                      <Button
                                        onClick={() => {
                                          this.handleModel();
                                        }}
                                        className='btn-close z-index-5 posa right-0 top-0 mt-3 mr-3 font-xss'></Button>
                                      <Modal.Body className='text-center p-4'>
                                        <i className='ti-info-alt text-warning display4-size'></i>
                                        <p className='text-grey-500 font-xsss mt-3 mb-4'>
                                          Are you sure you want to delete
                                          product?
                                        </p>

                                        <Button
                                          onClick={() => {
                                            this.handleModel();
                                          }}
                                          className='border-0 btn rounded-lg lh-2 p-3 mt-0 mb-2 text-white bg-danger font-xssss text-uppercase fw-600 ls-3'>
                                          Yes, delete!
                                        </Button>
                                        <Button
                                          onClick={() => {
                                            this.handleModel();
                                          }}
                                          className='border-0 btn rounded-lg lh-2 p-3 mt-0 mb-2 text-grey-600 bg-greylight font-xssss text-uppercase fw-600 ls-3 ms-1'>
                                          No, cancle!
                                        </Button>
                                      </Modal.Body>
                                    </Modal>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Adminfooter />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Admincustomerview;

import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Appheader = () => {
  const [isOpen, setOpen] = useState(false)
  const [isActive, setActive] = useState(false)

  const toggleOpen = () => setOpen(!isOpen)
  const toggleActive = () => setActive(!isActive)
  let history = useHistory()

  const navClass = `${isOpen ? " nav-active" : ""}`;
  const searchClass = `${isActive ? " show" : ""}`;

  return (
    <div className='middle-sidebar-header bg-white'>
      <div className={`app-header-search ${searchClass}`}>
        <form className='search-form'>
          <div className='form-group searchbox mb-0 border-0 p-1'>
            <input
              type='text'
              className='form-control border-0'
              placeholder='Search...'
            />
            <i className='input-icon'>
              <ion-icon
                name='search-outline'
                role='img'
                className='md hydrated'
                aria-label='search outline'></ion-icon>
            </i>
            <span className='ms-1 mt-1 d-inline-block close searchbox-close'>
              <i className='ti-close font-xs' onClick={toggleActive}></i>
            </span>
          </div>
        </form>
      </div>

      <button onClick={toggleOpen} className='header-menu'></button>
      <form action='#' className='float-left header-search'>
        <div className='form-group mb-0 icon-input'>
          <i className='feather-search font-lg text-grey-400'></i>
          <input
            type='text'
            placeholder='Start typing to search..'
            className='bg-transparent border-0 lh-32 pt-2 pb-2 pl-5 pr-3 font-xsss fw-500 rounded-xl w350'
          />
        </div>
      </form>
      <ul className='d-flex ml-auto right-menu-icon'>
        <li>
          <Link to='#'>
            <span className='dot-count bg-warning'></span>
            <i className='feather-bell font-xl text-current'></i>
            <div className='menu-dropdown'>
              <h4 className='fw-700 font-xs mb-4'>Notification</h4>
              <div className='card bg-transparent-card w-100 border-0 pl-5 mb-3'>
                <img
                  src='assets/images/user-8.png'
                  alt='user'
                  className='w40 position-absolute left-0'
                />
                <h5 className='font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block'>
                  Hendrix Stamp
                  <span className='text-grey-400 font-xsssss fw-600 float-right mt-1'>
                    3 min
                  </span>
                </h5>
                <h6 className='text-grey-500 fw-500 font-xssss lh-4'>
                  There are many variations of pass..
                </h6>
              </div>
              <div className='card bg-transparent-card w-100 border-0 pl-5 mb-3'>
                <img
                  src='assets/images/user-4.png'
                  alt='user'
                  className='w40 position-absolute left-0'
                />
                <h5 className='font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block'>
                  Goria Coast
                  <span className='text-grey-400 font-xsssss fw-600 float-right mt-1'>
                    2 min
                  </span>
                </h5>
                <h6 className='text-grey-500 fw-500 font-xssss lh-4'>
                  Mobile Apps UI Designer is require..
                </h6>
              </div>

              <div className='card bg-transparent-card w-100 border-0 pl-5 mb-3'>
                <img
                  src='assets/images/user-7.png'
                  alt='user'
                  className='w40 position-absolute left-0'
                />
                <h5 className='font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block'>
                  Surfiya Zakir
                  <span className='text-grey-400 font-xsssss fw-600 float-right mt-1'>
                    1 min
                  </span>
                </h5>
                <h6 className='text-grey-500 fw-500 font-xssss lh-4'>
                  Mobile Apps UI Designer is require..
                </h6>
              </div>
              <div className='card bg-transparent-card w-100 border-0 pl-5'>
                <img
                  src='assets/images/user-6.png'
                  alt='user'
                  className='w40 position-absolute left-0'
                />
                <h5 className='font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block'>
                  Victor Exrixon
                  <span className='text-grey-400 font-xsssss fw-600 float-right mt-1'>
                    30 sec
                  </span>
                </h5>
                <h6 className='text-grey-500 fw-500 font-xssss lh-4'>
                  Mobile Apps UI Designer is require..
                </h6>
              </div>
            </div>
          </Link>
        </li>

        <li>
          <Link to='/popup-chat'>
            <i className='feather-message-square font-xl text-current'></i>
          </Link>
        </li>
        <li>
          <Link to='/default-settings'>
            <img
              src='assets/images/user.png'
              alt='user'
              className='w40 mt--1 rounded-circle'
            />
          </Link>
        </li>
        <li>
          <span onClick={toggleActive} className='menu-search-icon'>
            <i className='feather-search text-grey-900 font-lg'></i>
          </span>
        </li>
      </ul>

      <nav className={`navigation scroll-bar ${navClass}`}>
        <div className='container pl-0 pr-0'>
          <div className='nav-content'>
            <div className='nav-top'>
              <Link to='/'>
                <i className='feather-slack text-success display1-size mr-3 ml-3'></i>
                <span className='d-inline-block fredoka-font ls-3 fw-600 text-current font-xl logo-text mb-0'>
                  Maktub.
                </span>
              </Link>
              <span
                onClick={toggleOpen}
                className='close-nav d-inline-block d-lg-none'>
                <i className='ti-close bg-grey mb-4 btn-round-sm font-xssss fw-700 text-dark ml-auto mr-2 '></i>
              </span>
            </div>
            <div className='nav-caption fw-600 font-xssss text-grey-500'>
              <span>Children </span>Dashboard
            </div>
            <ul className='mb-3'>
              <li className='logo d-none d-xl-block d-lg-block'></li>
              <li>
                <NavLink
                  activeClassName='active'
                  to='/maths'
                  className='nav-content-bttn open-font'
                  data-tab='chats'>
                  <i className='feather-tv mr-3'></i>
                  <span>Maths</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName='active'
                  to='/english'
                  className='nav-content-bttn open-font'
                  data-tab='chats'>
                  <i className='feather-tv mr-3'></i>
                  <span>English</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName='active'
                  to='/urdu'
                  className='nav-content-bttn open-font'
                  data-tab='chats'>
                  <i className='feather-tv mr-3'></i>
                  <span>Urdu</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName='active'
                  to='/poems'
                  className='nav-content-bttn open-font'
                  data-tab='favorites'>
                  <i className='feather-volume-2 mr-3'></i>
                  <span>Poems</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Appheader;

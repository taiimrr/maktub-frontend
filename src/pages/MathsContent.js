import React, { useState, useEffect, useContext } from "react";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import Appheader from "../components/Appheader";
import { Link } from "react-router-dom";
import { getCourseQuiz } from "../helpers/quiz";
import { ClipLoader } from "react-spinners";
import AuthContext from "../context/Auth";


const productList = [
  {
    id: "0900",
    name: "Letter Drawing For One (0)",
    imageUrl: "1.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "0901",
    name: "Letter Drawing For One (1)",
    imageUrl: "1.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "Letter Drawing For Two (2) ",
    imageUrl: "2.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2324",
    name: "Letter Drawing For Three (3) ",
    imageUrl: "3.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2325",
    name: "Letter Drawing For Four (4) ",
    imageUrl: "4.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2326",
    name: "Letter Drawing For Five (5) ",
    imageUrl: "5.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2327",
    name: "Letter Drawing For Six (6) ",
    imageUrl: "6.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2328",
    name: "Letter Drawing For Seven (7) ",
    imageUrl: "7.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2329",
    name: "Letter Drawing For Eight (8) ",
    imageUrl: "8.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "23210",
    name: "Letter Drawing For Nine (9) ",
    imageUrl: "9.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  }
];

const MathsContent = () => {
  const [location, setLocation] = useState(false)
  const [loading, setLoading] = useState(false)
  let { currentChild } = useContext(AuthContext)

  const [quizes, setQuizes] = useState([])
  const handleModel = () => {
    setLocation(!location)
  }

  useEffect(async () => {
    await getCourseQuiz({ childId: currentChild, setQuizes, title: 'Math', setLoading })
  }, [])


  const popularSlider = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    centerMode: false,
    variableWidth: true,
  };
  var h = 'Letter Drawing For One (1)'

  return (
    <>
      <div className='main-wrapper'>
        <Navheader />

        <div className='main-content'>
          <Appheader />

          <div className='container px-3 py-4'>
            <div className='row'>
              <div className='col-lg-12 mt-4'>
                <div className='card border-0 mt-2 rounded-10'>
                  <div className='card-body d-flex px-4 pb-0 pt-4'>
                    <h4 className='font-xss text-grey-800 mt-3 fw-700'>
                      Maths Lessons
                    </h4>
                  </div>

                  <div className='card-body p-4'>

                    <div className='table-responsive'>
                      <table className='table table-admin mb-0'>
                        <thead className='bg-greylight rounded-10 ovh'>
                          <tr>
                            <th className='border-0'></th>
                            <th className='border-0' scope='col'>
                              Name
                            </th>
                            <th className='border-0' scope='col'></th>
                            <th className='border-0' scope='col'>
                              Status
                            </th>
                            <th className='border-0' scope='col'></th>
                            <th scope='col' className='text-right border-0'>
                              Action
                            </th>
                          </tr>

                        </thead>
                        <tbody>
                          {!loading ? quizes.length !== 0 &&
                            quizes.status.map((value, index) => (
                              <tr key={productList[index].id}>

                                <td className='product-thumbnail text-start ps-0'>
                                  <Link to='/#' className=' small-icon'>
                                    <img
                                      src={`assets/images/${productList[index].imageUrl}`}
                                      alt='product'
                                      className='w125 d-inline-block p-0 bg-greylight rounded-lg overflow-hidden'
                                    />
                                  </Link>
                                </td>

                                <td>
                                  <b>{productList[index].name}</b>
                                </td>

                                <td></td>
                                <td>
                                  <span
                                    className={`font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block mr-1 ${quizes.status[index] === 'unattemped' ? "alert-warning text-warning" : "alert-success text-success"}`}>
                                    {quizes.status[index]}
                                  </span>
                                </td>
                                <td></td>
                                <td className='product-remove text-right'>
                                  {quizes.status[index] === 'unattemped' &&
                                    <Link to={{ pathname: '/video-player', state: { course: 'Math', content: 'digit', number: productList[index].name[productList[index].name.indexOf('(') + 1], qid: quizes._id, index } }} >
                                      <i className='feather-play mr-1 font-xs text-grey-500'></i>
                                      Start
                                    </Link>
                                    // :
                                    // <Link to={{ pathname: '/video-player', state: { qid: quizes._id, course: 'Math', content: 'digit', number: value.name[value.name.indexOf('(') + 1], index } }} >
                                    //   <i className='feather-play mr-1 font-xs text-grey-500'></i>
                                    //   View
                                    // </Link>
                                  }
                                </td>
                              </tr>
                            )) :
                            <ClipLoader size={20} />
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Appfooter />
      </div>
    </>
  );
}

export default MathsContent;

import React from "react";
import TourCard from "../../shared/TourCard";

import { Col } from "reactstrap";

import useFetch from "./../../hooks/useFetch.js";
import { BASE_URL } from "./../../utils/config.js";
import imgloading from "../../assets/images/loading.gif";
import errorloading from "../../assets/images/error.gif";

const FeaturedTourList = () => {
  // get tours data from DB
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  return (
    <>
      {loading && <img src={imgloading} />}
      {error && <img src={errorloading}/>}
      {!loading &&
        !error &&
        featuredTours.map((tour) => (
          <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedTourList;

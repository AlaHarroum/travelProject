import React from "react";
import Slider from "react-slick";
import amine from "../../assets/images/amine.jpg";
import youssef from "../../assets/images/youssef.jpg";
import ala from "../../assets/images/ala.jpg";
import abir from "../../assets/images/abir.jpg";
import aymen from "../../assets/images/aymen.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          "I can't imagine traveling without this app anymore. It's like having
          a personal tour guide in my pocket. The recommendations, insider tips,
          and authentic experiences shared by fellow travelers have made my
          journeys truly exceptional."
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={amine} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Amine Ben Salah</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          "I've been using this travel platform for years, and it never fails to
          impress. It's my go-to resource for planning and organizing my trips.
          The seamless experience and outstanding customer support keep me
          coming back for more."
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={youssef} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Youssef Najjar</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          "I've always been hesitant about booking travel online, but this
          platform changed my perspective completely. The ease of use, extensive
          options, and transparent pricing gave me peace of mind. I'm now a
          loyal customer and recommend it to all my friends."
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={aymen} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Aymen Allani</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          "This travel platform is a game-changer for solo travelers like me.
          The safety features, and solo-friendly destinations helped me gain
          confidence and explore the world fearlessly. I've made lifelong
          friends and unforgettable memories along the way."
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ala} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Alaa Harroum</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          "I used to spend hours researching and planning my trips, but this app
          saved me so much time and effort. The intuitive interface and
          comprehensive information made it a breeze to create my dream
          itinerary. I'm forever grateful for this incredible travel companion."
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={abir} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;

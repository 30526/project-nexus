import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import slider1 from "../../assets/pexels.jpg";
import slider2 from "../../assets/pexels2.jpg";
import slider3 from "../../assets/pexels3.jpg";
import ImageGradient from "../imageGradient/ImageGradient";
import { Link } from "react-router";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper md:max-h-130"
      >
        <SwiperSlide>
          <div>
            <img className="object-cover" src={slider1} alt="" />
            <ImageGradient>
              <div className="text-center px-5 md:px-0">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 animate__animated animate__pulse">
                  Learn Anytime, Anywhere with Nexus
                </h2>
                <p className="text-lg hidden  md:block">
                  Join our global community of students and teachers today.
                </p>
                <Link to={"/allCourses"}>
                  <button className="mt-5 btn bg-linear-to-br from-[#1770ff] to-[#07c2f1fa] text-white  border-none shadow-none rounded-lg">
                    Visit Courses
                  </button>
                </Link>
              </div>
            </ImageGradient>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider2} alt="" />
          <ImageGradient>
            <div className="text-center px-5 md:px-0">
              <h2 className="text-2xl md:text-4xl font-bold mb-2 animate__animated animate__pulse">
                Learn Anytime, Anywhere with Nexus
              </h2>
              <p className="text-lg hidden  md:block">
                Join our global community of students and teachers today.
              </p>
              <Link to={"/allCourses"}>
                <button className="mt-5 btn bg-linear-to-br from-[#1770ff] to-[#07c2f1fa] text-white  border-none shadow-none rounded-lg">
                  Visit Courses
                </button>
              </Link>
            </div>
          </ImageGradient>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider3} alt="" />
          <ImageGradient>
            <div className="text-center px-5 md:px-0">
              <h2 className="text-2xl md:text-4xl font-bold mb-2 animate__animated animate__pulse">
                Learn Anytime, Anywhere with Nexus
              </h2>
              <p className="text-lg hidden  md:block">
                Join our global community of students and teachers today.
              </p>
              <Link to={"/allCourses"}>
                <button className="mt-5 btn bg-linear-to-br from-[#1770ff] to-[#07c2f1fa] text-white  border-none shadow-none rounded-lg">
                  Visit Courses
                </button>
              </Link>
            </div>
          </ImageGradient>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

import React from "react";
import "../Common/index.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

export default function CompCarousel() {
  return (
    <>
      <br />
      <center>
        <Splide
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 6,
            autoplay: true,
            speed: 2000,
            arrows: false,
            pagination: false,
            wheel: true,
          }}
        >
          <SplideSlide>
            <img
              src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png"
              alt="Apple"
              height={150} width={150}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png"
              alt="Google" height={150} width={150}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png"
              alt="Microsoft" height={150} width={150}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/amazon-logo.png"
              alt="Amazon" height={150} width={150}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/samsung-logo.png"
              alt="Samsung" height={150} width={150}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/facebook-logo.png"
              alt="Facebook" height={150} width={150}
            />
          </SplideSlide>
        </Splide>
      </center>
      <br />
    </>
  );
}

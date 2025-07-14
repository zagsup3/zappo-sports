import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import Image1 from "@/../public/images/1.jpg";
import Image2 from "@/../public/images/2.jpg";
import Image3 from "@/../public/images/3.jpg";
import Image4 from "@/../public/images/4.jpg";
import Image from "next/image";
const Slider = () => {
    return (
        <Swiper slidesPerView={1} autoplay navigation modules={[Navigation]} loop>
            <SwiperSlide>
                <Image src={Image1} alt="banner" style={{ height: "70vh", objectFit: "cover" }} />
                <p className="text-white absolute left-[200px] bottom-[50px] text-6xl font-bold">
                    Go for every adventure.
                </p>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Image2} alt="banner" style={{ height: "70vh", objectFit: "cover" }} />
                <p className="text-white absolute left-[200px] bottom-[50px] text-6xl font-bold">
                    Unleash your performance.
                </p>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Image3} alt="banner" style={{ height: "70vh", objectFit: "cover" }} />
                <p className="text-white absolute left-[200px] bottom-[50px] text-6xl font-bold">Elevate every game.</p>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Image4} alt="banner" style={{ height: "70vh", objectFit: "cover" }} />
                <p className="text-white absolute left-[200px] bottom-[50px] text-6xl font-bold">Power your passion.</p>
            </SwiperSlide>
        </Swiper>
    );
};
export default Slider;

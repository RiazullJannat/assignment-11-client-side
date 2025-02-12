import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { styles } from '../Styles';

const imgUrls = [
    'https://i.ibb.co/p0z5KyZ/10251756.jpg',
    'https://i.ibb.co.com/qY5pQxhW/1305.jpg',
    'https://i.ibb.co.com/9Hxtbvcz/372723-PBRMCY-256.jpg',
];

const Banner = () => {
    return (
        <div className={`card shadow-xl transform hover:scale-105 transition-transform my-10 ${styles.sectionBG} mt-24`}>
            <div className="md:flex gap-5">
                {/* Swiper Section */}
                <figure className="md:w-1/2">
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {imgUrls.map((img, ind) => (
                            <SwiperSlide key={ind}>
                                <img
                                    src={img}
                                    className="w-full  object-cover rounded-lg"
                                    alt={`Slide ${ind + 1}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </figure>

                {/* Text Section */}
                <div className="flex flex-col justify-center items-center my-5 text-center mx-auto md:w-1/2">
                    <h1 className={`${styles.heroHeadText}`}>Learn, Laugh, and Speak with <span className=''>Confidence!</span>
                    </h1>
                    <p className={`${styles.heroSubText}`}>A place where language learning meets friendship and fun.</p>
                    <div className="card-actions mt-4">
                        <a className={`${styles.button}`}>
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

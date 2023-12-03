import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';
import {BACKDROP_URL, IMAGE_URL} from "../../config/config";
import {Link} from "react-router-dom";

function Carousel({movies}) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

                // navigation={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    movies.filter(el => el.backdrop_path).map(movie => (
                        <SwiperSlide>
                            <div className={'carousel-img'}
                                 style={{
                                     background: `url(${BACKDROP_URL + movie.backdrop_path})`,
                                     backgroundSize: 'cover',
                                     backgroundPosition: 'center',
                                     backgroundRepeat: 'no-repeat',
                                     display: 'flex',
                                     flexDirection: 'column',
                                     justifyContent: 'flex-end',
                                     alignItems: 'flex-start',
                                     // padding: '0 90px 0 0'
                                 }}>

                                <div className={'carousel-card'}>
                                    <div>
                                        <img className={'carousel-poster'} src={IMAGE_URL + movie.poster_path}/>
                                    </div>

                                    <div>
                                        <h3>{movie.title}</h3>
                                        <p>{movie.vote_average}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

export default Carousel;
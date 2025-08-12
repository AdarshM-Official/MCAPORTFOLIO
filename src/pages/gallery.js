import "../styles/gallery.css";
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Controller, Autoplay } from 'swiper/modules';

Swiper.use([Navigation, Controller, Autoplay]);

const Gallery = () => {

  useEffect(() => {
    let interleaveOffset = 0.5;

    let mainSlider = new Swiper('.main-slider', {
      loop: true,
      speed: 1000,
      autoplay: { delay: 3000 },
      loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function () {
          this.autoplay.stop();
        },
        imagesReady: function () {
          this.el.classList.remove('loading');
          this.autoplay.start();
        },
        slideChangeTransitionEnd: function () {
          let captions = this.el.querySelectorAll('.caption');
          captions.forEach(c => c.classList.remove('show'));
          this.slides[this.activeIndex]
            .querySelector('.caption')
            .classList.add('show');
        },
        progress: function () {
          for (let i = 0; i < this.slides.length; i++) {
            let slideProgress = this.slides[i].progress,
              innerOffset = this.width * interleaveOffset,
              innerTranslate = slideProgress * innerOffset;

            this.slides[i].querySelector(".slide-bgimg").style.transform =
              "translateX(" + innerTranslate + "px)";
          }
        },
        touchStart: function () {
          this.slides.forEach(slide => slide.style.transition = "");
        },
        setTransition: function (speed) {
          this.slides.forEach(slide => {
            slide.style.transition = speed + "ms";
            slide.querySelector(".slide-bgimg").style.transition = speed + "ms";
          });
        }
      }
    });

    let navSlider = new Swiper('.nav-slider', {
      loop: true,
      loopAdditionalSlides: 10,
      speed: 1000,
      spaceBetween: 5,
      slidesPerView: 5,
      centeredSlides: true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      direction: 'vertical',
      on: {
        imagesReady: function () {
          this.el.classList.remove('loading');
        },
        click: function () {
          mainSlider.autoplay.stop();
        }
      }
    });

    mainSlider.controller.control = navSlider;
    navSlider.controller.control = mainSlider;
  }, []);

  return (
    <div>
      <div className="swiper-container main-slider loading">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?...)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?..."
                className="entity-img"
                alt=""
              />
            </figure>
            <div className="content">
              <p className="title">Shaun Matthews</p>
              <span className="caption">
                Lorem Ipsum has been the industry's standard dummy text...
              </span>
            </div>
          </div>
          {/* Repeat swiper-slide for all your items */}
        </div>
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
      </div>

      <div className="swiper-container nav-slider loading">
        <div className="swiper-wrapper" role="navigation">
          {/* Repeat swiper-slide for nav thumbnails */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

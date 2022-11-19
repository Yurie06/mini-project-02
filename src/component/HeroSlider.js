import React from 'react'
import {Carousel} from 'react-bootstrap'

const HeroSlider = () => {
  return (
    <>
        <Carousel class="carousel mt-5 pt-1">
            <Carousel.Item>
                <div class="row col-lg-12 bg-dark">
                <h3 class="text-center pt-2">Floor Plan Redraws - 2D Full Color</h3>
                </div>
                <img
                className="d-block w-100"
                src="imgs/carcel_colour.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <div class="row col-lg-12 bg-dark">
                <h3 class="text-center pt-2">Floor Plan Redraws - 2D Textured</h3>
                </div>
                <img
                className="d-block w-100"
                src="imgs/carcel_textr.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <div class="row col-lg-12 bg-dark">
                <h3 class="text-center pt-2">Working Drawings</h3>
                </div>
                <img
                className="d-block w-100"
                src="imgs/carcel_wd.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div class="row col-lg-12 bg-dark">
                <h3 class="col-lg-4 text-start pt-2">3D Visualization</h3>
                <h3 class="col-lg-4 text-center pt-2">Perspective</h3>
                <h3 class="col-lg-4 text-end pt-2">3D Modeling</h3>
                </div>
                <img
                className="d-block w-100"
                src="imgs/carcel_3dviz.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <div class="row col-lg-12 bg-dark">
                <h3 class="text-center pt-2">Construction Estimation</h3>
                </div>
                <img
                className="d-block w-100"
                src="imgs/carcel_estim8.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default HeroSlider

import React from "react";


class Gallery extends React.Component {
    render() {
        return (
    <div className="container-fluid p-0 bg-subberlight">
        <section className="section row g-0 p-0 gallery">
            <div className="col-12 col-lg-6 gallery-row full mb-0">
                <div className="tileWrapper1280x720 tileFull">
                    <div className="gallery-caption">
                        <div className="col-50 col-100 d-flex justify-content-end">
                        </div>
                    </div> 
                    <img src="https://d1dbtne32ilur4.cloudfront.net/img/tiles/floorPlansTile01.jpg" alt="2D Black &amp; White"/>
                </div>
            </div>
            <div className="col-12 col-lg-6 align-self-center gallery-infomation">
                <h2>2D BLACK &amp; WHITE 
                    <span className="inlineSummary fs-5 text-primary d-block"><span className="priceBlock">US$24.00 </span>
                    </span>
                </h2>
                <p>If you’re looking for the no-nonsense, straight-up floor plan to clearly showcase the home’s layout, then the 2D black and white floor plan is the perfect option. Clear, simple and easy to use, potential buyers will obtain a great understanding of the home’s layout.</p>
            </div>
        </section>


    <section className="section row g-0 p-0 gallery">
        <div className="col-12 col-lg-6 gallery-row full mb-0 order-lg-1">
            <div className="tileWrapper1280x720 tileFull">
                <div className="gallery-caption">
                    <div className="col-70 col-100 d-flex justify-content-end"></div>
                </div> <img src="https://d1dbtne32ilur4.cloudfront.net/img/tiles/floorPlansTile02.jpg" alt="2D Full Color"/>
            </div>
        </div>
        <div className="col-12 col-lg-6 align-self-center gallery-infomation">
            <h2>2D FULL COLOR
            <span className="inlineSummary fs-5 text-primary d-block">
            <span className="priceBlock">US$28.00</span>
            </span>
            </h2>
            <p>Add an extra element of visual interest with a full color 2D floor plan. Potential buyers will be able to clearly visualize the layout of the home. Different types of rooms can be color coded to showcase the layout of the home. </p>
        </div>
    </section>


    <section className="section row g-0 p-0 gallery">
            <div className="col-12 col-lg-6 gallery-row full mb-0">
                <div className="tileWrapper1280x720 tileFull">
                    <div className="gallery-caption">
                        <div className="col-60 col-100 d-flex justify-content-end"></div>
                </div> <img src="https://d1dbtne32ilur4.cloudfront.net/img/tiles/floorPlansTile03.jpg" alt="2D Textured"/>
            </div>
        </div>
        <div className="col-12 col-lg-6 align-self-center gallery-infomation">
            <h2>2D TEXTURED 
            <span className="inlineSummary fs-5 text-primary d-block">
            <span className="priceBlock">US$28.00 </span>
            </span>
            </h2>
            <p>Use a 2D textured floor plan to not only showcase the home’s layout, but also features like textured flooring such as carpets, tiles and decking, as well as furniture. A 2D textured floor plan will highlight these features and provide much detail to potential buyers.</p>
        </div>
    </section>


    <section className="section row g-0 p-0 gallery">
        <div className="col-12 col-lg-6 gallery-row full mb-0 order-lg-1">
            <div className="tileWrapper1280x720 tileFull">
                <div className="gallery-caption">
                    <div className="imgLabelFull col-60 col-100  d-flex justify-content-end"></div>
                </div> <img src="https://d1dbtne32ilur4.cloudfront.net/img/tiles/floorPlansTile04.jpg" alt="3D Full Color"/>
            </div>
        </div>
        <div className="col-12 col-lg-6 align-self-center gallery-infomation">
            <h2>3D FULL COLOR <span className="inlineSummary fs-5 text-primary d-block">
            <span className="priceBlock">US$32.00 PER STORY</span>
            </span>
            </h2>
            <p>Almost as good as walking through the property, a 3D full color floor plan shows the home to a potential buyer in greater detail. From demonstrating the flooring transitions to which way a door swings, a 3D full color floor plan will show off a property and help attract top quality buyers.</p>
        </div>
    </section>


    <section className="section row g-0 p-0 gallery">
    <div className="col-12 col-lg-6 gallery-row full mb-0">
        <div className="tileWrapper1280x720 tileFull">
            <div className="gallery-caption">
                <div className="col-60 col-100 d-flex justify-content-end"></div>
            </div> <img src="https://d1dbtne32ilur4.cloudfront.net/img/tiles/floorPlansTile05.jpg" alt="Floor and Site Plan Combination"/>
        </div>
    </div>
        <div className="col-12 col-lg-6 align-self-center gallery-infomation">
            <h2>FLOOR AND SITE PLAN COMBINATION <span className="inlineSummary fs-5 text-secondary d-block">
            From: <span className="priceBlock">US$32.00</span> </span>
            </h2>
            <p>Add an extra element to your floor plan redraws and give your potential buyers an overall picture of property and land combined. Great to show off external features such as landscaping or pools, large blocks or multiple dwellings.</p>
        </div>
    </section>


    <section className="section row g-0 p-0 gallery">
        <div className="col-12 col-lg-6 gallery-row full  mb-0 order-lg-1">
            <div className="tileWrapper1280x720 tileFull">
                <img src="https://d1dbtne32ilur4.cloudfront.net/img/tiles/floorPlansTile06.jpg" alt="Custom Floor Plan Templates"/>
            </div>
        </div>
        <div className="col-12 col-lg-6 align-self-center gallery-infomation">
            <h2>CUSTOM FLOOR PLAN TEMPLATES 
            <span className="inlineSummary fs-5 text-primary d-block">
            <span className="priceBlock">US$64.00 </span>
            </span>
            </h2>
            <p>Keep your agency’s branding consistent and stand out from the crowd by creating a custom floor plan to support your property listings. 
                We will create a branded template (for a one-off cost of US$64.00) that ensures the output is uniform every time, from placement of your logo, 
                wall dimensions, furniture and fixtures. Once your template has been created, 
                you will only pay for the style of floor plan selected and our editors will ensure the floor plan includes all your custom options.</p>
        </div>
    </section>

    </div>
        );
    }
}

export default Gallery;
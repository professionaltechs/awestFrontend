import React from 'react'

import awestLogo from "../../assets/images/a-west-logo.jpg"
import stagecoachApartments from "../../assets/images/stagecoach-apartments.jpg"
import lumbertonApartments from "../../assets/images/lumberton-tx-apartments.jpg"
import timberwoodApartments from "../../assets/images/timberwood-apartments.jpg"
import useWindowDimensions from '../../hooks/useWindowDimensions'

export const HomeBanner = () => {
    const {width} = useWindowDimensions();
    return (
        <section className="section services first" id="home">
            <div className="container">
                {/* <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center" data-aos="fade-down">
                            <img src={awestLogo} alt="" />
                            <h3 className="title mb-5 custom-txt">A-West Management</h3>

                            <p className="para-desc mb-0 mx-auto">
                                Office located at Timberwood Apartments&nbsp;
                                <strong>&nbsp;(409) 755-3333</strong>
                            </p>
                        </div>
                    </div>
                </div> */}

                <div className="row">
                    <div className="col-12">
                        <div className="text-center" data-aos="fade-down">
                            {width < 600 ? <h3 className="title custom-txt">A-West Management</h3> : null}

                            <p className="mx-auto">
                                We offer the best apartment value in Lumberton Texas.
                            </p>

                            <p className="mx-auto">A-West is the best!.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2" >
                        <div className="service-image rounded shadow" style={{minHeight: "400px"}}>
                            <div className="image">
                                <img
                                    className="img-fluid d-block rounded-top"
                                    src={stagecoachApartments}
                                    alt=""
                                />
                            </div>

                            <div className="content text-center pt-4 pb-4 p-3">
                                <h4 className="title">
                                    <a
                                        className="text-custom apartments"
                                        href="stagecoach.html"
                                    >
                                        Stagecoach West Apartments
                                    </a>
                                </h4>

                                <p className="mt-2 mb-0">
                                    234 Main St
                                    <br />
                                    Lumberton, TX 77657
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2" >
                        <div className="service-image rounded shadow" style={{minHeight: "400px"}}>
                            <div className="image">
                                <img
                                    className="img-fluid d-block rounded-top"
                                    src={lumbertonApartments}
                                    alt=""
                                />
                            </div>

                            <div className="content text-center pt-4 pb-4 p-3">
                                <h4 className="title">
                                    <a
                                        className="text-custom apartments"
                                        href="
                    "
                                    >
                                        Austin West Apartments
                                    </a>
                                </h4>

                                <p className="mt-2 mb-0">
                                    155 Allen Dr
                                    <br />
                                    Lumberton, TX 77657
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2" >
                        <div className="service-image rounded shadow" style={{minHeight: "400px"}}>
                            <div className="image">
                                <img
                                    className="img-fluid d-block rounded-top"
                                    src={timberwoodApartments}
                                    alt=""
                                />
                            </div>

                            <div className="content text-center pt-4 pb-4 p-3">
                                <h4 className="title">
                                    <a
                                        className="text-custom apartments"
                                        href="timberwood.html"
                                    >
                                        Timberwood Apartments
                                    </a>
                                </h4>

                                <p className="mt-2 mb-0">
                                    90 Williams Road
                                    <br />
                                    Lumberton, TX 77657
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

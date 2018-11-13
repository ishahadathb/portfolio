import React from 'react';
import azztech from '../img/aazztech.png';
import rida from '../img/rida.jpg';
import appspress from '../img/appspress.jpg';
import bizillion from '../img/bizillion.png';
import extord from '../img/extord.png';
import chris from '../img/christmas.png';
import trust from '../img/trust.png';
import hostking from '../img/hostking.png';
import arrow from '../img/arrow.png';
import bizness from '../img/bizness.png';
import martplace from '../img/martplace.png';
import dizipro from '../img/digipro.png';
import {Button} from 'reactstrap';

const Work = () => {
    return (
        <section className="section-padding">
            <div className={'container'}>
                <div className="row">
                    <div className="col-md-12">
                        <h2>Here are few of my works.</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <figure className="singleProject">
                            <div className="imageWrapper">
                                <img src={martplace} alt="Portfolio images"/>
                                <div className="overlayContent">
                                    <a href="https://themeforest.net/item/martplace-multipurpose-online-marketplace-html-template/21212869" target="_blank">
                                        <Button outline color={'primary'}>Visit site</Button>
                                    </a>
                                </div>
                            </div>

                            <figcaption>
                                <h4>MartPlace - MarketPlace Template</h4>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-md-4">
                        <figure className="singleProject">
                            <img src={bizillion} alt="Portfolio images"/>
                            <div className="overlayContent">
                                <a href="https://themeforest.net/item/bizillion-multipurpose-business-agency-consultant-and-corporate-html5-template/22696451?ref=AazzTech" target="_blank">
                                    <Button outline color={'primary'}>Visit site</Button>
                                </a>
                            </div>
                            <figcaption>
                                <h4>Bizillion - Multipurpose Business Template</h4>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-md-4">
                        <figure className="singleProject">
                            <img src={azztech} alt="Portfolio images"/>
                            <div className="overlayContent">
                                <a href="https://aazztech.com/" target="_blank">
                                    <Button outline color={'primary'}>Visit site</Button>
                                </a>
                            </div>
                            <figcaption>
                                <h4>AazzTech Official Website (Front end)</h4>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-md-4">
                        <figure className="singleProject">
                            <img src={dizipro} alt="Portfolio images"/>
                            <div className="overlayContent">
                                <a href="https://themeforest.net/item/digipro-digital-marketplace-html-template-with-dashboard/22760122?s_rank=1" target="_blank">
                                    <Button outline color={'primary'}>Visit site</Button>
                                </a>
                            </div>
                            <figcaption>
                                <h4>DigiPro - Digital Marketplace Template</h4>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-md-4">
                        <figure className="singleProject">
                            <img src={rida} alt="Portfolio images"/>
                            <div className="overlayContent">
                                <a href="https://themeforest.net/item/rida-vcard-responsive-html5-portfolioresume-template/19807991" target="_blank">
                                    <Button outline color={'primary'}>Visit site</Button>
                                </a>
                            </div>
                            <figcaption>
                                <h4>Rida- Personal Portfolio</h4>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-md-4">
                        <figure className="singleProject">
                            <img src={hostking} alt="Portfolio images"/>
                            <div className="overlayContent">
                                <a href="https://themeforest.net/item/hostking-responsive-web-hosting-domain-technology-site-template/17591913?s_rank=1" target="_blank">
                                    <Button outline color={'primary'}>Visit site</Button>
                                </a>
                            </div>
                            <figcaption>
                                <h4>Hostking - Hosting Template</h4>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-md-4">
                        <figure className="singleProject">
                            <img src={appspress} alt="Portfolio images"/>
                            <div className="overlayContent">
                                <a href="https://aazztech.com/product/appspress-app-landing-responsive-html5-template/" target="_blank">
                                    <Button outline color={'primary'}>Visit site</Button>
                                </a>
                            </div>
                            <figcaption>
                                <h4>AppsPress - App Landing Template</h4>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-md-4">
                        <figure className="singleProject">
                            <img src={arrow} alt="Portfolio images"/>
                            <div className="overlayContent">
                                <a href="https://themeforest.net/item/arrow-multipurpose-responsive-html-template/17122123?s_rank=5" target="_blank">
                                    <Button outline color={'primary'}>Visit site</Button>
                                </a>
                            </div>
                            <figcaption>
                                <h4>Arrow - Multipurpose Template</h4>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-md-4">
                        <figure className="singleProject">
                            <img src={trust} alt="Portfolio images"/>
                            <div className="overlayContent">
                                <a href="https://themeforest.net/item/trust-transport-transportation-and-logistics-html-template/19393348?s_rank=18" target="_blank">
                                    <Button outline color={'primary'}>Visit site</Button>
                                </a>
                            </div>
                            <figcaption>
                                <h4>Trust Transport - Transport & Logistick Template</h4>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-md-4">
                        <figure className="singleProject">
                            <img src={extord} alt="Portfolio images"/>
                            <div className="overlayContent">
                                <a href="https://aazztech.com/product/extord-multipurpose-wordpress-theme/" target="_blank">
                                    <Button outline color={'primary'}>Visit site</Button>
                                </a>
                            </div>
                            <figcaption>
                                <h4>Extord - Creative Multipurpose (Frontend)</h4>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-md-4">
                        <figure className="singleProject">
                            <img src={chris} alt="Portfolio images"/>
                            <div className="overlayContent">
                                <a href="https://themeforest.net/item/christmas-new-year-party-template-with-wish-mailer/18747732?s_rank=28" target="_blank">
                                    <Button outline color={'primary'}>Visit site</Button>
                                </a>
                            </div>
                            <figcaption>
                                <h4>Christmas - Christmas Eve Theme</h4>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-md-4">
                        <figure className="singleProject">
                            <img src={bizness} alt="Portfolio images"/>
                            <div className="overlayContent">
                                <a href="https://themeforest.net/item/business-agency-corporate-html5-template/18314264?s_rank=21" target="_blank">
                                    <Button outline color={'primary'}>Visit site</Button>
                                </a>
                            </div>
                            <figcaption>
                                <h4>Business - Business Template</h4>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Work;
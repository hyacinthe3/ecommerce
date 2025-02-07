import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
    return (
        <div><br />
            <div className="map-section">
                <div className="map-gframe">
                <iframe width="1240" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=501-521%20Fashion%20Ave,%20New%20York,%20NY%2010018,%20USA+(Botiga)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
                </div>
            </div>
        <div className="contact-container">
            {/* Left: Contact Form */}
            <div className="contact-form">
                <h2 className="form-title">Leave Us a Message</h2>
                <form className="form">
                    <div className="form-group name-group">
                        <div className="first">
                            <div className="name-field">
                                <label>First Name <span className="required">*</span></label>
                                <input type="text" placeholder="First" className="input-field small-input" />
                            </div>
                            <div className="name-field2">
                                <label>Last Name <span className="required">*</span></label>
                                <input type="text" placeholder="Last" className="input-field small-input" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Email <span className="required">*</span></label>
                        <input type="email" placeholder="Enter your email" className="input-field" />
                    </div>
                    <div>
                        <label>Comment or Message</label>
                        <textarea rows="4" className="textarea" placeholder="Your message..."></textarea>
                    </div>
                    <button className="submit-button">Submit</button>
                </form>
            </div>

            {/* Right: Store Info */}
            <div className="store-info">
                <h1 className="store-title">Our Store</h1>
                <h4>501-521 Fashion Ave, New York, NY 10018, USA</h4>

                <h3 className="store-subtitle">PHONE:</h3>
                <p className="store-text">+1 212 244 2681</p>

                <h3 className="store-subtitle">E-MAIL:</h3>
                <p className="store-text">office@example.org</p>

                <h3 className="store-title">Store Hours</h3>
                <p className="store-text">Sun: Closed</p>
                <p className="store-text">Mon to Sat: 10 AM – 5:30 PM</p>
            </div>
        </div>
        </div>
    );
};

export default Contact
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../Styles/Contact.css";

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const { names, mail, subject, message } = data; // Extract fields correctly
        const formData = new FormData();

        try {
            formData.append("names", names);
            formData.append("mail", mail);
            formData.append("subject", subject);
            formData.append("message", message);

            await axios.post(
                "https://botiga-kvf9.onrender.com/contact/createContact",
                formData,
                {
                    headers: 
                    {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            alert("Message sent successfully!");
            reset(); // Reset form fields after submission
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to send message. Please try again later.");
        }
    };

    return (
        <div>
            <br />
            <div className="map-section">
                <div className="map-gframe">
                    <iframe
                        width="1240"
                        height="300"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=501-521%20Fashion%20Ave,%20New%20York,%20NY%2010018,%20USA+(Botiga)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </div>
            </div>
            <div className="contact-container">
                {/* Left: Contact Form */}
                <div className="contact-form">
                    <h2 className="form-title">Leave Us a Message</h2>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group name-group">
                            <div className="first">
                                <div className="name-field">
                                    <label>
                                        First Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="First"
                                        className="input-field small-input"
                                        {...register("names", { required: true })}
                                    />
                                </div>
                                <div className="name-field2">
                                    <label>
                                        Email <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="input-field"
                                        {...register("mail", { required: true })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>
                                Last Name <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Last"
                                className="input-field small-input"
                                {...register("subject", { required: true })}
                            />
                        </div>
                        <div>
                            <label>Comment or Message</label>
                            <textarea
                                rows="4"
                                className="textarea"
                                placeholder="Your message..."
                                {...register("message", { required: true })}
                            ></textarea>
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

export default Contact;

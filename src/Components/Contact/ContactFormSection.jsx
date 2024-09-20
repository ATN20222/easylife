import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const ContactFormSection = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState("");
    const [NameError, setNameError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;

        setEmailError("");
        setNameError("");

        if (!email) {
            setEmailError(t('email_required'));
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError(t('invalid_email'));
            isValid = false;
        }

        if (!Name) {
            setNameError(t('name_required'));
            isValid = false;
        }

        if (!isValid) return;

        setLoading(true);
        try {
            console.log("Logging in with:", { email, Name });
            setTimeout(() => {
                setLoading(false);
                alert(t('message_sent'));
            }, 1000);
        } catch (error) {
            setLoading(false);
            alert(t('message_failed'));
        }
    };

    return (
        <div className="ContactFormSection">
            <div className="container">
                <div className="ServicesCardsTitle">
                    <h1 className="">
                    {t('send_a_message')}
                    </h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3450.207864752344!2d31.331852784882436!3d30.14547258184558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA4JzQzLjciTiAzMcKwMTknNDYuOCJF!5e0!3m2!1sar!2seg!4v1726854883485!5m2!1sar!2seg" 
                            width="100%" 
                            height="450"  
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-lg-6">
                        <form onSubmit={handleSubmit} className="row">
                            <div className="mb-3 FormCol">
                                <label htmlFor="Name" className="form-label">{t('name')}</label>
                                <input
                                    type="text"
                                    className={`form-control ${NameError ? 'is-invalid' : ''}`}
                                    id="Name"
                                    placeholder={t('name_placeholder')}
                                    value={Name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {NameError && <span className="text-danger p-2">{NameError}</span>}
                            </div>

                            <div className="mb-3 FormCol">
                                <label htmlFor="email" className="form-label">{t('email')}</label>
                                <input
                                    type="text"
                                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                                    id="email"
                                    placeholder={t('email_placeholder')}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {emailError && <span className="text-danger p-2">{emailError}</span>}
                            </div>

                            <div className="mb-3 FormCol">
                                <label htmlFor="Message" className="form-label">{t('message')}</label>
                                <textarea
                                    className="form-control ContactMessage"
                                    id="Message"
                                    placeholder={t('message_placeholder')}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>

                            <div className="FormCol LoginBtnsContainer ContactBtnContainer">
                                <button type="submit" className="btn-primary-temp" disabled={loading}>
                                    {loading ? t('sending') : t('send')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;

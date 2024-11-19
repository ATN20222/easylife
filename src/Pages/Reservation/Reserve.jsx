import { t } from "i18next";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Reserve.css';
import toast, { Toaster } from "react-hot-toast";
import { ReservationsService, ServicesService } from '../../Services/Api'; // Assuming this is your service API to fetch services
import i18n from "../../i18n";

const Reserve = () => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [reservationDate, setReservationDate] = useState("");
    const [reservationDateError, setReservationDateError] = useState("");
    const [location, setLocation] = useState("");
    const [locationError, setLocationError] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [details, setDetails] = useState("");
    const [detailsError, setDetailsError] = useState("");
    const [service, setService] = useState("");
    const [serviceError, setServiceError] = useState("");
    const [loading, setLoading] = useState(false);
    const [services, setServices] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        // Fetch available services for the user to choose from
        const fetchServices = async () => {
            try {
                const response = await ServicesService.List();
                setServices(response.data); 
                setService(id)
            } catch (error) {
                console.log(error);
            }
        };

        fetchServices();
    }, []);

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValid = true;

        // Reset errors
        setUsernameError("");
        setReservationDateError("");
        setLocationError("");
        setPhoneNumberError("");
        setDetailsError("");
        setServiceError("");

        // Validate username
        if (!username) {
            setUsernameError(t("name_required"));
            isValid = false;
        }

        // Validate reservation date
        if (!reservationDate) {
            setReservationDateError(t("reservation_date_required"));
            isValid = false;
        }

        // Validate location
        if (!location) {
            setLocationError(t("location_required"));
            isValid = false;
        }

        // Validate phone number
        if (!phoneNumber) {
            setPhoneNumberError(t("phone_number_required"));
            isValid = false;
        }

        // Validate details
        if (!details) {
            setDetailsError(t("details_required"));
            isValid = false;
        }

        // Validate service
        if (!service) {
            setServiceError(t("service_required"));
            isValid = false;
        }

        if (!isValid) return;

        setLoading(true);
        try {
            const response  = await ReservationsService.Add(username,location , details , phoneNumber , reservationDate , 1 , service);
            toast.success(`${t('reservationSuccess')}`);
            setTimeout(() => {
                navigate('/MyReservations');
            }, 2000);
            
        } catch (error) {
            setLoading(false);
            console.log(`${error}`);
            toast.error(`${t('reservationFailed')}`);
        }
        setLoading(false);

    };

    return (
        <div className="Reserve mb-5">
                        <Toaster position="top-right" reverseOrder={false} />

            <div className="Center HomeServicesHeader ReserveHeader">
                <h1>
                    {t('reserve')}
                </h1>
            </div>

            <div className="container ReservationForm">
                <form onSubmit={handleSubmit} className="row">
                    <div className="HomeServicesHeader ReserveHeader d-flex">
                        <h1>
                            {t('please_fill_reservation_form')}
                        </h1>
                    </div>

                    {/* Username Field */}
                    <div className="mb-3 FormCol col-lg-6">
                        <label htmlFor="username" className="form-label">{t('name')}*</label>
                        <input
                            type="text"
                            className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                            id="username"
                            placeholder={t('name_placeholder')}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {usernameError && <span className="text-danger p-2">{usernameError}</span>}
                    </div>

                    {/* Reservation Date Field */}
                    <div className="mb-3 FormCol col-lg-6">
                        <label htmlFor="reservationDate" className="form-label">{t('reservation_date')}*</label>
                        <input
                            type="datetime-local"
                            className="form-control"
                            id="reservationDate"
                            placeholder={t('reservation_date_placeholder')}
                            value={reservationDate}
                            onChange={(e) => setReservationDate(e.target.value)}
                        />
                        {reservationDateError && <span className="text-danger p-2">{reservationDateError}</span>}
                    </div>

                    {/* Location Field */}
                    <div className="mb-3 FormCol col-lg-6">
                        <label htmlFor="location" className="form-label">{t('location')}*</label>
                        <input
                            type="text"
                            className={`form-control ${locationError ? 'is-invalid' : ''}`}
                            id="location"
                            placeholder={t('location_placeholder')}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        {locationError && <span className="text-danger p-2">{locationError}</span>}
                    </div>

                    {/* Phone Number Field */}
                    <div className="mb-3 FormCol col-lg-6">
                        <label htmlFor="phoneNumber" className="form-label">{t('phone_number')}*</label>
                        <input
                            type="number"
                            className={`form-control ${phoneNumberError ? 'is-invalid' : ''}`}
                            id="phoneNumber"
                            placeholder={t('phone_number_placeholder')}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        {phoneNumberError && <span className="text-danger p-2">{phoneNumberError}</span>}
                    </div>

                    {/* Service Select Field */}
                    <div className="mb-3 FormCol col-lg-12">
                        <label htmlFor="service" className="form-label">{t('choose_your_service')}*</label>
                        <select
                            className="form-control"
                            id="service"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                        >
                            <option value="">{t('select_service')}</option>
                            {services.map((serviceItem) => (
                                <option key={serviceItem.id} value={serviceItem.id}>
                                    {serviceItem.name}
                                </option>
                            ))}
                        </select>
                        {serviceError && <span className="text-danger p-2">{serviceError}</span>}
                    </div>

                    {/* Details Field */}
                    <div className="mb-3 FormCol">
                        <label htmlFor="details" className="form-label">{t('details')}*</label>
                        <textarea
                            className={`form-control ${detailsError ? 'is-invalid' : ''}`}
                            id="details"
                            placeholder={t('details_placeholder')}
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                        />
                        {detailsError && <span className="text-danger p-2">{detailsError}</span>}
                    </div>

                    {/* Submit Button */}
                    <div className="mb-3 FormCol" dir={i18n.language==='en'?"rtl":'ltr'}>
                        <button type="submit" className="btn btn-primary">{t('send')}</button>
                    </div>

                </form>
            </div>
        </div>
    );  
}

export default Reserve;

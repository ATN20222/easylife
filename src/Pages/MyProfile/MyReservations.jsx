import React, { useState, useEffect } from "react";
import { t } from "i18next";
import { ReservationsService } from "../../Services/Api"; // Assuming ReservationsService.List fetches user reservations
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MyReservations = () => {
    const [reservations, setReservations] = useState([]);
    const [expandedReservation, setExpandedReservation] = useState(null);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await ReservationsService.List();
                setReservations(response.data.reverse());
            } catch (error) {
                toast.error(`${t("fetch_failed")}`);
                console.log(error);
            }
        };

        fetchReservations();
    }, []);

    const toggleReservation = (id) => {
        setExpandedReservation((prev) => (prev === id ? null : id));
    };

    return (
        <div className="Reserve mb-5">
            <Toaster position="top-right" reverseOrder={false} />

            <div className="Center HomeServicesHeader ReserveHeader">
                <h1>{t("MyReservations")}</h1>
            </div>

            <div className="container ReservationList">
                {reservations.map((reservation) => (
                    <div
                        key={reservation.id}
                        className="ReservationItem"
                        style={{ marginBottom: "1rem", borderRadius: "15px", padding: "0px" }}
                    >
                        <div
                            className={`ReservationHeader d-flex justify-content-between align-items-center ${reservation.reservationStatus.id===1?'bg-warning':reservation.reservationStatus.id===2?'bg-success text-white':'bg-danger'}`}
                            onClick={() => toggleReservation(reservation.id)}
                            style={{ cursor: "pointer", padding: "10px", borderRadius: "15px"}}
                        >
                            <h4 className="p-0 m-0">
                                {t("reservation")} #{reservation.id} - {reservation.service.nameEn}
                            </h4>
                            <span>{expandedReservation === reservation.id ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronRight}/>}</span>
                        </div>

                        {expandedReservation === reservation.id && (
                            <div className="ReservationForm mt-2">
                                <form className="row">
                                    {/* Username Field */}
                                    <div className="mb-3 FormCol col-lg-6">
                                        <label htmlFor="username" className="form-label">
                                            {t("name")}*
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            value={reservation.userName}
                                            disabled
                                        />
                                    </div>

                                    {/* Reservation Date Field */}
                                    <div className="mb-3 FormCol col-lg-6">
                                        <label htmlFor="reservationDate" className="form-label">
                                            {t("reservation_date")}*
                                        </label>
                                        <input
                                            type="datetime-local"
                                            className="form-control"
                                            id="reservationDate"
                                            value={new Date(reservation.reservationTime).toISOString().slice(0, 16)}
                                            disabled
                                        />
                                    </div>

                                    {/* Location Field */}
                                    <div className="mb-3 FormCol col-lg-6">
                                        <label htmlFor="location" className="form-label">
                                            {t("location")}*
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="location"
                                            value={reservation.location}
                                            disabled
                                        />
                                    </div>

                                    {/* Phone Number Field */}
                                    <div className="mb-3 FormCol col-lg-6">
                                        <label htmlFor="phoneNumber" className="form-label">
                                            {t("phone_number")}*
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phoneNumber"
                                            value={reservation.phoneNumber}
                                            disabled
                                        />
                                    </div>

                                    {/* Service Field */}
                                    <div className="mb-3 FormCol col-lg-12">
                                        <label htmlFor="service" className="form-label">
                                            {t("service")}*
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="service"
                                            value={reservation.service.nameEn}
                                            disabled
                                        />
                                    </div>

                                    {/* Details Field */}
                                    <div className="mb-3 FormCol">
                                        <label htmlFor="details" className="form-label">
                                            {t("details")}*
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="details"
                                            value={reservation.details}
                                            rows="3"
                                            disabled
                                        />
                                    </div>

                                    {/* Status Field */}
                                    <div className="mb-3 FormCol col-lg-12">
                                        <label htmlFor="status" className="form-label">
                                            {t("status")}*
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="status"
                                            value={reservation.reservationStatus.name}
                                            disabled
                                        />
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {reservations.length===0&&
                <Link to="/reserve/1" className="Nav-Link">{t('no_reservations_yet')}</Link>
            
            }
        </div>
    );
};

export default MyReservations;

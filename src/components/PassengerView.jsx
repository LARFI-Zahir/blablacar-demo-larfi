import { currentDriver, otherTrip, publishedTrip } from "../data";
import { IconBack } from "./icons";
import CoupDePouceBadge from "./CoupDePouceBadge";

export default function PassengerView({ recommendation, drivers, onOpenDriverProfile }) {
  return (
    <div className="screen">
      <button className="back-arrow" aria-label="Retour">
        <IconBack />
      </button>
      <h1 className="page-title">Rechercher</h1>
      <p className="page-subtitle">Résultat vu par un passager pour {publishedTrip.from} → {publishedTrip.to}.</p>

      <div className="trip-card">
        <div className="trip-card__date">{publishedTrip.date}</div>
        <div className="trip-card__route">
          <div className="trip-card__times">
            <span>{publishedTrip.departureTime}</span>
            <span className="trip-card__duration">{publishedTrip.duration}</span>
            <span>{publishedTrip.arrivalTime}</span>
          </div>
          <div className="trip-card__line">
            <span className="trip-card__dot" />
            <span className="trip-card__dash" />
            <span className="trip-card__dot" />
          </div>
          <div className="trip-card__cities">
            <span>{publishedTrip.from}</span>
            <span />
            <span>{publishedTrip.to}</span>
          </div>
        </div>

        <button className="trip-card__driver-row trip-card__driver-row--link" onClick={onOpenDriverProfile}>
          <span className="trip-card__avatar">{currentDriver.avatar}</span>
          <span>{currentDriver.firstName} {currentDriver.lastNameInitial}</span>
          <span className="trip-card__price">{publishedTrip.price}</span>
        </button>

        <CoupDePouceBadge recommendation={recommendation} drivers={drivers} block />
      </div>

      <div className="trip-card">
        <div className="trip-card__date">{otherTrip.date}</div>
        <div className="trip-card__route">
          <div className="trip-card__times">
            <span>{otherTrip.departureTime}</span>
            <span className="trip-card__duration">{otherTrip.duration}</span>
            <span>{otherTrip.arrivalTime}</span>
          </div>
          <div className="trip-card__line">
            <span className="trip-card__dot" />
            <span className="trip-card__dash" />
            <span className="trip-card__dot" />
          </div>
          <div className="trip-card__cities">
            <span>{otherTrip.from}</span>
            <span />
            <span>{otherTrip.to}</span>
          </div>
        </div>

        <div className="trip-card__driver-row">
          <span className="trip-card__avatar">{otherTrip.driver.avatar}</span>
          <span>{otherTrip.driver.firstName} {otherTrip.driver.lastNameInitial}</span>
          <span className="trip-card__price">{otherTrip.price}</span>
        </div>

        <div className="passenger-badge">⭐ {otherTrip.driver.rating}</div>
      </div>
    </div>
  );
}

import { currentDriver, publishedTrip } from "../data";
import { IconBack, IconCoins, IconCar } from "./icons";
import RecommendationCard from "./RecommendationCard";
import CoupDePouceBadge from "./CoupDePouceBadge";

export default function TripsScreen({ recommendation, drivers, onRequest }) {
  return (
    <div className="screen screen--trips">
      <button className="back-arrow" aria-label="Retour">
        <IconBack />
      </button>

      <h1 className="page-title">Vos trajets</h1>

      <div className="stats-card">
        <div className="stats-card__item">
          <span className="stats-card__icon">
            <IconCoins />
          </span>
          <span>
            <span className="stats-card__value">{currentDriver.savings} €</span>
            <span className="stats-card__label">Économies jusqu'ici</span>
          </span>
        </div>
        <div className="stats-card__divider" />
        <div className="stats-card__item">
          <span className="stats-card__icon">
            <IconCar />
          </span>
          <span>
            <span className="stats-card__value">{currentDriver.tripsAsDriver}</span>
            <span className="stats-card__label">Trajets au total</span>
          </span>
        </div>
      </div>

      <RecommendationCard recommendation={recommendation} drivers={drivers} onRequest={onRequest} variant="insert" />

      <div className="trip-card">
        <div className="trip-card__date">{publishedTrip.date}</div>
        <div className="trip-card__route-row">
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

          <CoupDePouceBadge recommendation={recommendation} drivers={drivers} />
        </div>
      </div>
    </div>
  );
}

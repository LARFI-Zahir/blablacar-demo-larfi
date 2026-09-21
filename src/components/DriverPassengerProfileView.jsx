import { currentDriver } from "../data";
import {
  IconPersonPlaceholder,
  IconStarFilled,
  IconSteeringWheel,
  IconCheckBadgeFilled,
  IconChatDots,
  IconMusicNote,
  IconNoSmoking,
} from "./icons";
import CoupDePouceBadge from "./CoupDePouceBadge";

// Ce que voit un passager qui consulte le profil du nouveau conducteur.
export default function DriverPassengerProfileView({ recommendation, drivers }) {
  const isRecommended = recommendation.status === "accepted";

  return (
    <div className="passenger-profile">
      <div className="passenger-profile__header">
        <div className="profile-identity__avatar-col">
          <span className="passenger-profile__avatar">
            <IconPersonPlaceholder />
          </span>
          {isRecommended && <CoupDePouceBadge recommendation={recommendation} drivers={drivers} inline />}
        </div>
        <div>
          <div className="passenger-profile__name">{currentDriver.firstName}</div>
          <div className="passenger-profile__age">{currentDriver.age} ans</div>
        </div>
      </div>

      <p className="passenger-profile__level">Niveau d'expérience : Débutant</p>

      <div className="passenger-profile__row">
        <IconStarFilled className="passenger-profile__row-icon passenger-profile__row-icon--muted" />
        <span className="passenger-profile__row-text passenger-profile__row-text--muted">Pas encore d'avis</span>
      </div>

      <div className="passenger-profile__row">
        <IconSteeringWheel className="passenger-profile__row-icon passenger-profile__row-icon--muted" />
        <span className="passenger-profile__row-text passenger-profile__row-text--muted">Pas encore évalué</span>
      </div>

      <div className="passenger-profile__divider" />

      <div className="passenger-profile__row">
        <IconCheckBadgeFilled className="passenger-profile__row-icon" />
        <span className="passenger-profile__row-text">Adresse e-mail vérifiée</span>
      </div>
      <div className="passenger-profile__row">
        <IconCheckBadgeFilled className="passenger-profile__row-icon" />
        <span className="passenger-profile__row-text">Numéro de téléphone vérifié</span>
      </div>

      <div className="passenger-profile__section">
        <h2 className="passenger-profile__section-title">Faites connaissance avec {currentDriver.firstName}</h2>
        <div className="passenger-profile__row">
          <IconChatDots className="passenger-profile__row-icon" />
          <span className="passenger-profile__row-text">J'aime bien discuter quand je me sens à l'aise</span>
        </div>
        <div className="passenger-profile__row">
          <IconMusicNote className="passenger-profile__row-icon" />
          <span className="passenger-profile__row-text">Musique tout le long !</span>
        </div>
        <div className="passenger-profile__row">
          <IconNoSmoking className="passenger-profile__row-icon" />
          <span className="passenger-profile__row-text">Pas de cigarette, svp</span>
        </div>
      </div>
    </div>
  );
}

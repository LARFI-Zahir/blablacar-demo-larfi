import { IconThumbUp, IconPeopleStar } from "./icons";

export default function RecommendationCard({ recommendation, drivers, onRequest }) {
  if (recommendation.status === "terminated") return null;

  const driver = recommendation.requestedDriverId
    ? drivers.find((d) => d.id === recommendation.requestedDriverId)
    : null;
  const displayName = driver ? driver.firstName : recommendation.requestedEmail;

  if (recommendation.status === "accepted") {
    return (
      <p className="already-recommended">
        <IconThumbUp className="already-recommended__icon" /> Vous êtes déjà recommandé par {displayName}
      </p>
    );
  }

  return (
    <div className="insert-card">
      <IconPeopleStar className="insert-card__illustration" />
      <div className="insert-card__title">Trouvez vos premiers passagers</div>
      <p className="insert-card__body">
        Demandez à vos proches de vous recommander pour rassurer les passagers et faciliter vos premières réservations
      </p>

      {recommendation.status === "available" && (
        <button className="pill-btn" onClick={onRequest}>
          Demander un coup de pouce
        </button>
      )}

      {recommendation.status === "pending" && (
        <button className="pill-btn pill-btn--pending" disabled>
          ⏳ Demande en attente
        </button>
      )}
    </div>
  );
}

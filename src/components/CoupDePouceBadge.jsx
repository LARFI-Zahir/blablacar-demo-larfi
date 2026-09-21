import { IconThumbUp } from "./icons";

export default function CoupDePouceBadge({ recommendation, drivers, inline = false, block = false }) {
  if (recommendation.status !== "accepted") return null;

  const driver = recommendation.requestedDriverId
    ? drivers.find((d) => d.id === recommendation.requestedDriverId)
    : null;
  const name = driver ? driver.firstName : recommendation.requestedEmail;

  if (inline) {
    return (
      <div className="coup-de-pouce-inline">
        <IconThumbUp className="coup-de-pouce-inline__icon" />
        <span className="coup-de-pouce-inline__name">{name}</span>
        {driver && <span className="coup-de-pouce-inline__rating">⭐ {driver.rating}</span>}
      </div>
    );
  }

  if (block) {
    return (
      <div className="passenger-badge">
        <IconThumbUp className="passenger-badge__icon" /> Coup de pouce / {name}
        {driver && ` · ⭐ ${driver.rating}`}
      </div>
    );
  }

  return (
    <div className="coup-de-pouce-mini">
      <IconThumbUp className="coup-de-pouce-mini__icon" />
      <span className="coup-de-pouce-mini__name">{name}</span>
      {driver && <span className="coup-de-pouce-mini__rating">⭐ {driver.rating}</span>}
    </div>
  );
}

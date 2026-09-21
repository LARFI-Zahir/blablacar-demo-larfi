import { currentDriver } from "../data";
import { IconBack } from "./icons";

export default function Messagerie({ recommendation, drivers, onAccept, onRefuse }) {
  const driver = recommendation.requestedDriverId
    ? drivers.find((d) => d.id === recommendation.requestedDriverId)
    : null;
  const identity = driver ? `${driver.firstName} ${driver.lastNameInitial}` : recommendation.requestedEmail;

  return (
    <div className="screen">
      <button className="back-arrow" aria-label="Retour">
        <IconBack />
      </button>
      <h1 className="page-title">Messages</h1>

      {recommendation.status === "pending" && identity && (
        <div className="message-bubble">
          <div className="message-bubble__title">
            {driver
              ? `${currentDriver.firstName} vous demande une recommandation`
              : `Invitation reçue de ${currentDriver.firstName}`}
          </div>
          <p>
            {currentDriver.firstName} vient de publier son premier trajet en tant que conducteur et souhaite être
            recommandé par vous.
          </p>
          <div className="message-actions">
            <button className="btn btn-secondary" onClick={onRefuse}>Refuser</button>
            <button className="btn btn-primary" onClick={onAccept}>Accepter</button>
          </div>
        </div>
      )}
    </div>
  );
}

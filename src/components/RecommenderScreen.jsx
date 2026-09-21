import { useEffect, useState } from "react";
import { IconBack, IconCheck } from "./icons";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simule un appel réseau avec un délai court.
function fakeRequest({ shouldFail }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (shouldFail ? reject(new Error("network")) : resolve()), 500);
  });
}

export default function RecommenderScreen({ drivers, onClose, onConfirmed }) {
  // loading | ready | error-list | sending | error-send | success
  const [phase, setPhase] = useState("loading");
  const [mode, setMode] = useState("list"); // list | email
  const [knownDrivers, setKnownDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [email, setEmail] = useState("");
  const [simulateListError, setSimulateListError] = useState(false);
  const [simulateSendError, setSimulateSendError] = useState(false);
  const [reloadToken, setReloadToken] = useState(0);

  const emailValid = EMAIL_REGEX.test(email.trim());

  useEffect(() => {
    let cancelled = false;
    fakeRequest({ shouldFail: simulateListError })
      .then(() => {
        if (cancelled) return;
        const known = drivers.filter((d) => d.traveledTogether);
        setKnownDrivers(known);
        setMode(known.length > 0 ? "list" : "email");
        setPhase("ready");
      })
      .catch(() => {
        if (!cancelled) setPhase("error-list");
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadToken]);

  function retryLoad() {
    setPhase("loading");
    setReloadToken((t) => t + 1);
  }

  async function handleConfirmDriver() {
    setPhase("sending");
    try {
      await fakeRequest({ shouldFail: simulateSendError });
      onConfirmed({ type: "driver", id: selectedDriver.id });
      setPhase("success");
    } catch {
      setPhase("error-send");
    }
  }

  async function handleSendEmail() {
    if (!emailValid) return;
    setPhase("sending");
    try {
      await fakeRequest({ shouldFail: simulateSendError });
      onConfirmed({ type: "email", email: email.trim() });
      setPhase("success");
    } catch {
      setPhase("error-send");
    }
  }

  function retrySend() {
    if (selectedDriver) {
      handleConfirmDriver();
    } else {
      handleSendEmail();
    }
  }

  if (phase === "success") {
    return (
      <div className="screen success-screen">
        <div className="nav-header">
          <button className="back-arrow" aria-label="Retour" onClick={onClose}>
            <IconBack />
          </button>
          <span className="nav-header__title">Coup de Pouce</span>
        </div>

        <div className="success-screen__body">
          <div className="success-screen__icon">
            <IconCheck />
          </div>
          <h1 className="success-screen__title">C'est validé !</h1>
          <p className="success-screen__text">
            Nous avons envoyé votre demande à la personne sélectionnée. Elle pourra te soutenir lors de ton premier
            trajet.
          </p>
        </div>

        <button className="pill-btn pill-btn--solid" onClick={onClose}>
          Retour à mes trajets
        </button>
      </div>
    );
  }

  return (
    <div className="screen">
      <button className="back-arrow" aria-label="Retour" onClick={onClose}>
        <IconBack />
      </button>

      {(phase === "ready" || phase === "loading" || phase === "error-list") && (
        <div className="demo-toggle">
          <label>
            <input
              type="checkbox"
              checked={simulateListError}
              onChange={(e) => setSimulateListError(e.target.checked)}
            />
            Démo : simuler une erreur de chargement
          </label>
        </div>
      )}

      {(phase === "ready" || phase === "sending" || phase === "error-send") && (
        <div className="demo-toggle">
          <label>
            <input
              type="checkbox"
              checked={simulateSendError}
              onChange={(e) => setSimulateSendError(e.target.checked)}
            />
            Démo : simuler une erreur d'envoi
          </label>
        </div>
      )}

      {phase === "loading" && <div className="modal-loading">Chargement des conducteurs éligibles…</div>}

      {phase === "error-list" && (
        <div className="modal-error">
          <p>Impossible de charger les recommandations pour le moment. Veuillez réessayer.</p>
          <button className="btn btn-primary" onClick={retryLoad}>Réessayer</button>
        </div>
      )}

      {phase === "ready" && (
        <>
          <h1 className="page-title">Choisir un parrain</h1>
          <p className="page-subtitle">
            {knownDrivers.length > 0
              ? "Sélectionnez le conducteur que vous souhaitez choisir comme parrain, ou invitez-le par email."
              : "Vous n'avez pas encore voyagé avec un conducteur expérimenté. Invitez-le par email."}
          </p>

          {knownDrivers.length > 0 && (
            <div className="mode-switch">
              <button
                className={`mode-switch__btn ${mode === "list" ? "mode-switch__btn--active" : ""}`}
                onClick={() => setMode("list")}
              >
                Suggestions
              </button>
              <button
                className={`mode-switch__btn ${mode === "email" ? "mode-switch__btn--active" : ""}`}
                onClick={() => setMode("email")}
              >
                Par email
              </button>
            </div>
          )}

          {mode === "list" && (
            <>
              <div className="driver-list">
                {knownDrivers.map((d) => (
                  <button
                    key={d.id}
                    className={`driver-card ${selectedDriver?.id === d.id ? "driver-card--selected" : ""}`}
                    onClick={() => setSelectedDriver(d)}
                  >
                    <span className="driver-card__avatar">{d.avatar}</span>
                    <span className="driver-card__info">
                      <span className="driver-card__name">{d.firstName} {d.lastNameInitial}</span>
                      <span className="driver-card__meta">⭐ {d.rating} · {d.trips} trajets 📍 {d.city}</span>
                    </span>
                    <span className="driver-card__choose">
                      {selectedDriver?.id === d.id ? "Sélectionné" : "Choisir"}
                    </span>
                  </button>
                ))}
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-primary btn-block"
                  disabled={!selectedDriver}
                  onClick={handleConfirmDriver}
                >
                  Confirmer mon choix
                </button>
              </div>
            </>
          )}

          {mode === "email" && (
            <>
              <label className="field-label" htmlFor="parrain-email">Adresse email du conducteur</label>
              <input
                id="parrain-email"
                className="search-input"
                type="email"
                placeholder="prenom.nom@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="modal-footer">
                <button className="btn btn-primary btn-block" disabled={!emailValid} onClick={handleSendEmail}>
                  Envoyer la demande
                </button>
              </div>
            </>
          )}
        </>
      )}

      {phase === "sending" && <div className="modal-loading">Envoi de la demande…</div>}

      {phase === "error-send" && (
        <div className="modal-confirm">
          <p className="error-text">Votre demande n'a pas pu être envoyée pour le moment. Veuillez réessayer.</p>
          <div className="modal-footer modal-footer--split">
            <button className="btn btn-secondary" onClick={() => setPhase("ready")}>Annuler</button>
            <button className="btn btn-primary" onClick={retrySend}>Réessayer</button>
          </div>
        </div>
      )}
    </div>
  );
}

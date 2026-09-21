import { useState } from "react";
import { currentDriver, eligibleDrivers } from "./data";
import StatusBar from "./components/StatusBar";
import BottomNav from "./components/BottomNav";
import TripsScreen from "./components/TripsScreen";
import ProfileScreen from "./components/ProfileScreen";
import Messagerie from "./components/Messagerie";
import PassengerView from "./components/PassengerView";
import DriverPublicProfile from "./components/DriverPublicProfile";
import RecommenderScreen from "./components/RecommenderScreen";
import "./App.css";

export default function App() {
  const [tab, setTab] = useState("trips");
  const [showRecommender, setShowRecommender] = useState(false);
  const [showDriverProfile, setShowDriverProfile] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [toast, setToast] = useState(null);
  const [recommendation, setRecommendation] = useState({
    status: "available", // available | pending | accepted | terminated
    requestedDriverId: null,
    requestedEmail: null,
    history: [],
  });

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  }

  function handleTabChange(id) {
    if (id === "publish") {
      showToast("🚧 Publication non simulée dans cette démo");
      return;
    }
    if (id === "messages") {
      setUnreadMessages(0);
    }
    setShowDriverProfile(false);
    setTab(id);
  }

  function handleConfirmed(payload) {
    setUnreadMessages(1);
    if (payload.type === "driver") {
      setRecommendation((r) => ({ ...r, status: "pending", requestedDriverId: payload.id, requestedEmail: null }));
    } else {
      setRecommendation((r) => ({ ...r, status: "pending", requestedDriverId: null, requestedEmail: payload.email }));
    }
  }

  function handleAccept() {
    setRecommendation((r) => ({
      ...r,
      status: "accepted",
      history: [...r.history, { driverId: r.requestedDriverId, email: r.requestedEmail, result: "accepted" }],
    }));
    showToast("🔔 Votre coup de pouce a été accepté 🎉");
  }

  function handleRefuse() {
    setRecommendation((r) => ({
      status: "available",
      requestedDriverId: null,
      requestedEmail: null,
      history: [...r.history, { driverId: r.requestedDriverId, email: r.requestedEmail, result: "refused" }],
    }));
    showToast("🔔 Votre demande de coup de pouce a été refusée.");
  }

  function simulateTripWithPassenger() {
    setRecommendation((r) => ({ ...r, status: "terminated" }));
  }

  function simulateTripWithoutPassenger() {
    setRecommendation((r) =>
      r.status === "terminated"
        ? r
        : { ...r, status: "available", requestedDriverId: null, requestedEmail: null }
    );
  }

  return (
    <div className="phone">
      <div className="app">
        <StatusBar />

        <main className="app-main">
          {showRecommender ? (
            <RecommenderScreen
              drivers={eligibleDrivers}
              onClose={() => setShowRecommender(false)}
              onConfirmed={handleConfirmed}
            />
          ) : showDriverProfile ? (
            <DriverPublicProfile
              recommendation={recommendation}
              drivers={eligibleDrivers}
              onClose={() => setShowDriverProfile(false)}
            />
          ) : (
            <>
              {tab === "trips" && (
                <TripsScreen
                  recommendation={recommendation}
                  drivers={eligibleDrivers}
                  onRequest={() => setShowRecommender(true)}
                />
              )}
              {tab === "profile" && (
                <ProfileScreen recommendation={recommendation} drivers={eligibleDrivers} />
              )}
              {tab === "messages" && (
                <Messagerie
                  recommendation={recommendation}
                  drivers={eligibleDrivers}
                  onAccept={handleAccept}
                  onRefuse={handleRefuse}
                />
              )}
              {tab === "search" && (
                <PassengerView
                  recommendation={recommendation}
                  drivers={eligibleDrivers}
                  onOpenDriverProfile={() => setShowDriverProfile(true)}
                />
              )}
            </>
          )}
        </main>

        {!showRecommender && (
          <BottomNav active={tab} onChange={handleTabChange} unreadCounts={{ messages: unreadMessages }} />
        )}

        {toast && <div className="toast">{toast}</div>}

        <button className="demo-fab" onClick={() => setDemoOpen(true)} aria-label="Contrôles de démo">
          ⚙️
        </button>

        {demoOpen && (
          <div className="modal-overlay" onClick={() => setDemoOpen(false)}>
            <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
              <div className="modal-handle" />
              <h2 className="modal-title">Contrôles de démo</h2>
              <p className="modal-subtitle">
                État du dispositif : <strong>{recommendation.status}</strong> — {currentDriver.firstName} a{" "}
                {currentDriver.hasCompletedTripWithPassenger ? "" : "pas encore "}réalisé de trajet avec passager.
              </p>
              <div className="demo-panel__actions">
                <button
                  className="btn btn-secondary"
                  onClick={simulateTripWithPassenger}
                  disabled={recommendation.status === "terminated"}
                >
                  Simuler : trajet réalisé avec ≥1 passager (fin définitive)
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={simulateTripWithoutPassenger}
                  disabled={recommendation.status === "terminated" || recommendation.status === "available"}
                >
                  Simuler : trajet terminé sans passager (réinitialiser)
                </button>
                <button className="btn btn-primary" onClick={() => setDemoOpen(false)}>
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import { currentDriver } from "../data";
import { IconChevronRight, IconPersonPlaceholder, IconPlusCircle } from "./icons";
import CoupDePouceBadge from "./CoupDePouceBadge";
import DriverPassengerProfileView from "./DriverPassengerProfileView";

const PROFILE_STEPS = 6;

export default function ProfileScreen({ recommendation, drivers }) {
  const [view, setView] = useState("driver"); // driver | passenger
  const [tab, setTab] = useState("about");
  const isRecommended = recommendation.status === "accepted";

  return (
    <div className="screen screen--profile">
      <div className="mode-switch">
        <button
          className={`mode-switch__btn ${view === "driver" ? "mode-switch__btn--active" : ""}`}
          onClick={() => setView("driver")}
        >
          Vue conducteur
        </button>
        <button
          className={`mode-switch__btn ${view === "passenger" ? "mode-switch__btn--active" : ""}`}
          onClick={() => setView("passenger")}
        >
          Vue passager
        </button>
      </div>

      {view === "passenger" ? (
        <DriverPassengerProfileView recommendation={recommendation} drivers={drivers} />
      ) : (
        <>
          <div className="profile-tabs">
            <button
              className={`profile-tabs__btn ${tab === "about" ? "profile-tabs__btn--active" : ""}`}
              onClick={() => setTab("about")}
            >
              À propos de vous
            </button>
            <button
              className={`profile-tabs__btn ${tab === "account" ? "profile-tabs__btn--active" : ""}`}
              onClick={() => setTab("account")}
            >
              Compte
            </button>
          </div>

          <div className="profile-identity">
            <div className="profile-identity__avatar-col">
              <span className="profile-identity__avatar">
                <IconPersonPlaceholder />
              </span>
              {isRecommended && <CoupDePouceBadge recommendation={recommendation} drivers={drivers} inline />}
            </div>
            <div className="profile-identity__info">
              <div className="profile-identity__name">{currentDriver.firstName}</div>
              <div className="profile-identity__status">Débutant</div>
            </div>
            <IconChevronRight className="profile-identity__chevron" />
          </div>

          <div className="complete-profile-card">
            <div className="complete-profile-card__title">Complétez votre profil</div>
            <p className="complete-profile-card__body">
              Un profil complété inspire confiance et encourage les membres à voyager avec vous.
            </p>
            <p className="complete-profile-card__progress-label">0 étape sur {PROFILE_STEPS} complétée</p>
            <div className="complete-profile-card__bar">
              {Array.from({ length: PROFILE_STEPS }).map((_, i) => (
                <span key={i} className="complete-profile-card__segment" />
              ))}
            </div>
            <button className="link-btn">Ajouter une photo de profil</button>
          </div>

          <button className="link-btn link-btn--block">Modifier les informations personnelles</button>

          <div className="profile-section">
            <h2 className="profile-section__title">Vérifiez votre profil</h2>
            <button className="profile-check-row">
              <IconPlusCircle />
              <span>Vérifier une pièce d'identité</span>
            </button>
            <button className="profile-check-row">
              <IconPlusCircle />
              <span>Confirmer l'adresse {currentDriver.email}</span>
            </button>
            <button className="profile-check-row">
              <IconPlusCircle />
              <span>Vérifier un numéro de téléphone</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

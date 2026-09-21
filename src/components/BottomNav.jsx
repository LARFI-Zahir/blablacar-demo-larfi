import { currentDriver } from "../data";
import { IconSearch, IconPlus, IconRidesMark, IconMessage } from "./icons";

const TABS = [
  { id: "search", label: "Rechercher", Icon: IconSearch },
  { id: "publish", label: "Publier", Icon: IconPlus },
  { id: "trips", label: "Vos trajets", Icon: IconRidesMark },
  { id: "messages", label: "Messages", Icon: IconMessage },
];

export default function BottomNav({ active, onChange, unreadCounts = {} }) {
  return (
    <nav className="bottom-nav">
      {TABS.map(({ id, label, Icon }) => {
        const unread = unreadCounts[id] || 0;
        return (
          <button
            key={id}
            className={`bottom-nav__item ${active === id ? "bottom-nav__item--active" : ""}`}
            onClick={() => onChange(id)}
          >
            <span className="bottom-nav__icon-wrap">
              <Icon />
              {unread > 0 && <span className="bottom-nav__badge">{unread}</span>}
            </span>
            <span>{label}</span>
          </button>
        );
      })}
      <button
        className={`bottom-nav__item ${active === "profile" ? "bottom-nav__item--active" : ""}`}
        onClick={() => onChange("profile")}
      >
        <span className="bottom-nav__avatar">{currentDriver.avatar}</span>
        <span>Profil</span>
      </button>
    </nav>
  );
}

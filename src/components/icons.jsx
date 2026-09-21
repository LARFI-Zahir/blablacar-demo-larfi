import blablacarMark from "../assets/blablacar-mark.png";

export function IconRidesMark(props) {
  return <img src={blablacarMark} alt="" className="rides-mark-icon" {...props} />;
}

export function IconBack(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="24" height="24" {...props}>
      <path d="M15 5L8 12l7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


export function IconChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20" {...props}>
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPersonPlaceholder(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="40" height="40" {...props}>
      <circle cx="12" cy="8.5" r="4" fill="currentColor" opacity="0.5" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="32" height="32" {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPlusCircle(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconSearch(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlus(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconMessage(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <path
        d="M4 6.5C4 5.1 5.1 4 6.5 4h11C18.9 4 20 5.1 20 6.5v8c0 1.4-1.1 2.5-2.5 2.5H9l-4 3.5V17c-.6 0-1-.4-1-1V6.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCoins(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <ellipse cx="9" cy="7" rx="6" ry="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 7v4c0 1.7 2.7 3 6 3s6-1.3 6-3V7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15 10.3c2.9.3 5 1.4 5 2.7 0 1.7-2.7 3-6 3-2 0-3.8-.5-4.9-1.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 11v3.5c0 1.7 2.7 3 6 3 1.2 0 2.4-.2 3.3-.6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconCar(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <path
        d="M5 16v-2.5L6.6 9a2 2 0 0 1 1.9-1.4h7a2 2 0 0 1 1.9 1.4L19 13.5V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <rect x="3.5" y="13.8" width="17" height="4.2" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7.3" cy="18" r="1.3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.7" cy="18" r="1.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconPeopleStar(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="48" height="48" {...props}>
      <circle cx="24" cy="20" r="9" fill="#8FD0F7" />
      <path d="M8 50c0-9.4 7.2-15 16-15s16 5.6 16 15" fill="#3FA9F5" />
      <circle cx="43" cy="16" r="7" fill="#BFE3FB" />
      <path d="M30 42c0-6.6 5.8-11 13-11s13 4.4 13 11" fill="#8FD0F7" />
      <g transform="translate(37 21) scale(0.9)">
        <path d="M7 21H4.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1H7v10Z" fill="#3FA9F5" />
        <path
          d="M7 11l3.2-6.8c.3-.6.9-1 1.6-1 1.2 0 2.1 1.1 1.8 2.3L12.7 9H18a2 2 0 0 1 1.9 2.7l-2.4 6.8a2 2 0 0 1-1.9 1.5H7V11Z"
          fill="#FFC93C"
        />
      </g>
    </svg>
  );
}

export function IconThumbUp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="26" height="26" {...props}>
      <path
        d="M7 21H4.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1H7v10Z"
        fill="#3FA9F5"
      />
      <path
        d="M7 11l3.2-6.8c.3-.6.9-1 1.6-1 1.2 0 2.1 1.1 1.8 2.3L12.7 9H18a2 2 0 0 1 1.9 2.7l-2.4 6.8a2 2 0 0 1-1.9 1.5H7V11Z"
        fill="#FFC93C"
      />
    </svg>
  );
}

export function IconStarFilled(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...props}>
      <path
        d="M12 2.5l2.7 6 6.6.6-5 4.4 1.5 6.5L12 16.9l-5.8 3.1 1.5-6.5-5-4.4 6.6-.6L12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconSteeringWheel(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 5v4.6M6.5 15.5l3.7-2.3M17.5 15.5l-3.7-2.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconCheckBadgeFilled(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <circle cx="12" cy="12" r="10" fill="#0693E3" />
      <path d="M7.5 12.5l3 3 6-6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChatDots(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <path
        d="M4 6.5C4 5.1 5.1 4 6.5 4h11C18.9 4 20 5.1 20 6.5v8c0 1.4-1.1 2.5-2.5 2.5H9l-4 3.5V17c-.6 0-1-.4-1-1V6.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="9.5" r="1" fill="currentColor" />
      <circle cx="12" cy="9.5" r="1" fill="currentColor" />
      <circle cx="15.5" cy="9.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconMusicNote(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <path d="M9 18a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11.5 15.5V5.5l7-1.5v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.5 14a2.5 2.5 0 1 1 0-5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconNoSmoking(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
      <rect x="3" y="13" width="13" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 13v4M13 13v4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 20L20 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconHandshake(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20" {...props}>
      <path
        d="M2 12l4-3 4 2 3-2 3 1 4-2 2 1-4 5-3-1-2 2-3-1-2 2-6-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

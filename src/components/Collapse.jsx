import { useState } from "react";
import chevron from "../assets/icons/chevron-up.svg";
import "./Collapse.scss";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse__header">
        <span className="collapse__title">{title}</span>

        <button
          className="collapse__chevron-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir / fermer"
        >
          <img
            src={chevron}
            alt=""
            className={`collapse__chevron ${isOpen ? "is-open" : ""}`}
          />
        </button>
      </div>

      <div className="collapse__content">
        {children}
      </div>
    </div>
  );
}
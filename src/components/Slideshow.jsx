import { useState } from "react";
import leftChevron from "../assets/icons/chevron-left.svg";
import rightChevron from "../assets/icons/chevron-right.svg";
import "../style/Slideshow.scss";

export default function Slideshow({ pictures, title = "Photo du logement" }) { 
  const [current, setCurrent] = useState(0); 

  if (!pictures || pictures.length === 0) return null; 

  const total = pictures.length; 
  const showControls = total > 1; 

  const Next = () => setCurrent((i) => (i + 1) % total); 
  const Prev = () => setCurrent((i) => (i - 1 + total) % total); 

  return ( 
    <div className="slideshow">
      <img
        className="slideshow__image"
        src={pictures[current]}  
        alt={`${title} - ${current + 1}`}
      />

      {showControls && ( 
        <> 
          <button
            type="button"
            className="slideshow__arrow slideshow__arrow--left"
            onClick={Prev}
            aria-label="Photo précédente"
          >
            <img className="slideshow__icon" src={leftChevron} alt="" aria-hidden="true" />
            
          </button>

          <button
            type="button"
            className="slideshow__arrow slideshow__arrow--right"
            onClick={Next}
            aria-label="Photo suivante"
          >
            <img className="slideshow__icon" src={rightChevron} alt="" aria-hidden="true" />
            
          </button>

          <div className="slideshow__counter">
            {current + 1}/{total} 
          </div>
        </>
      )}
    </div>
  );
}

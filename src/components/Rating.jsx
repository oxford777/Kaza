import Star from "../assets/icons/star.svg?react";
import "../style/Rating.scss";

export default function Rating({ value }) {   
  const rating = Number(value) || 0;  

  return (  
    <div className="rating">  
      {[1, 2, 3, 4, 5].map((n) => (    
        <Star
          key={n} 
          className={`rating__star ${n <= rating ? "full" : "empty"}`}  
        />
      ))}
    </div>
  );
}
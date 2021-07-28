import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import farStar from './star-regular.svg'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'



const Rating = ({ value, text }) => {

  return (
    <>
      {value === 0.5 &&
        <span>
          <FontAwesomeIcon icon={faStarHalfAlt} />
          <img src={farStar} alt="" />
          <img src={farStar} alt="" />
          <img src={farStar} alt="" />
          <img src={farStar} alt="" />
        </span>
      }
      
      {value === 1 &&
        <span>
          <FontAwesomeIcon icon={faStar} />
          <img src={farStar} alt="" />
          <img src={farStar} alt="" />
          <img src={farStar} alt="" />
          <img src={farStar} alt="" />
        </span>
      }
      {value === 1.5 &&
        <span>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfAlt} />
          <img src={farStar} alt="" />
          <img src={farStar} alt="" />
          <img src={farStar} alt="" />
        </span>
      }
       {value === 2 &&
        <span>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <img src={farStar} alt="" />
          <img src={farStar} alt="" />
          <img src={farStar} alt="" />
        </span>
      }
      {value === 2.5 &&
       <span>
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStarHalfAlt} />
         <img src={farStar} alt="" />
         <img src={farStar} alt="" />
       </span>
     } 
     {value === 3 &&
      <span>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <img src={farStar} alt="" />
        <img src={farStar} alt="" />
      </span>
    }
    {value === 3.5 &&
     <span>
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStarHalfAlt} />
       <img src={farStar} alt="" />
     </span>
   } {value === 4 &&
    <span>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <img src={farStar} alt="" />
    </span>
  }
   {value === 4.5 &&
     <span>
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStarHalfAlt} />
       
     </span>
   }
    {value === 5 &&
     <span>
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStar} />
     </span>
   }
    <p>{text && text}</p>
    </>
  );
};

export default Rating;
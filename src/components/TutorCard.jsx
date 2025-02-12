import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {styles} from '../Styles'

const TutorCard = ({ tutor }) => {
  const { name, image, language, price, review } = tutor;
  return (
    <div className={`${styles.sectionBG} ${styles.sectionBorder} card bg-base-100 bg-transparent w-96 shadow-xl`}>
      <figure>
        <img
          src={image}
          alt={name} />
      </figure>
      <div className="card-body">
        <h2 className={`card-title ${styles.primary}`}>
          {name}
          <div className="badge border border-white text-xl"><FaStar className="text-orange-500"/>{review}</div>
        </h2>
        <p className="text-gray-700 dark:text-gray-100 font-semibold">{language}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">BDT{price}</div>
          <Link to={`/tutor/${tutor._id}`} className={`badge badge-outline cursor-pointer ${styles.primary } hover:bg-[#578FCA] hover:text-white`}>Details</Link>
        </div>
      </div>
    </div>
  );
};
TutorCard.propTypes = {
  tutor: PropTypes.object.isRequired,
};
export default TutorCard;
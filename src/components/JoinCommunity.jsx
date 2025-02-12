import { Link } from "react-router-dom";
import { styles } from "../Styles";

const JoinCommunity = () => {
  return (
    <div className={`${styles.sectionBorder} ${styles.sectionGapping} text-center`}>
      <h2 className={`${styles.sectionHeadText}`}>Join Our Community</h2>

      <p className={`${styles.sectionSubText}`}>
        Become a part of our growing language club. Interact with experienced tutors, participate in engaging activities, 
        and master your favorite languages in a friendly environment!
      </p>
      <Link to={'/processing'}><button className={`${styles.button}`}>
        Join Now
      </button></Link>
    </div>
  );
};

export default JoinCommunity;

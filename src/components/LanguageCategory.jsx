import { FaChalkboardTeacher, FaLanguage, FaBookReader } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import { styles } from '../Styles'

const LanguageCategory = () => {
  const categories = [
    { icon: <FaChalkboardTeacher />, title: "English", teachers: "28,030" },
    { icon: <FaLanguage />, title: "Spanish", teachers: "8,904" },
    { icon: <FaBookReader />, title: "French", teachers: "3,380" },
    { icon: <FaChalkboardTeacher />, title: "German", teachers: "1,412" },
    { icon: <FaLanguage />, title: "Italian", teachers: "2,276" },
    { icon: <FaBookReader />, title: "Chinese", teachers: "4,887" },
    { icon: <FaChalkboardTeacher />, title: "Arabic", teachers: "3,328" },
    { icon: <FaLanguage />, title: "Japanese", teachers: "2,458" },
    { icon: <FaBookReader />, title: "Portuguese", teachers: "1,375" },
  ];

  return (
    <section className={`${styles.sectionGapping} ${styles.sectionBorder} `}>
      <div>
        <h3 className={`${styles.sectionHeadText}`}>Choose Your Language</h3>
        <p className={`${styles.sectionSubText}`}>Find teachers in the language of your choice</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link
            to={`/findTutors/${category.title}`}
            key={index}
            className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${styles.animation}`}
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl text-gray-700 dark:text-gray-300">{category.icon}</div>
              <div>
                <h3 className={`${styles.primary} text-lg font-semibold`}>{category.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{category.teachers} teachers</p>
              </div>
            </div>
            <div className="text-xl text-gray-700 dark:text-gray-300">
              <MdArrowForward />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LanguageCategory;

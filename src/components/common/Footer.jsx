import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/without-bg.png"

const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content p-10">
            <aside>
                <img src={logo} alt="logo" width={100}/>
                <p>
                    Language Club
                    <br />
                    Providing reliable tech since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4 cursor-pointer">
                    <a href="https://www.linkedin.com/in/riazull-jannat/" target="_blanc">
                       <FaLinkedin className="text-2xl"/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100088792816712" target="_blanc">
                       <FaFacebook className="text-2xl"/>
                    </a>
                    <a href="https://github.com/RiazullJannat" target="_blanc">
                        <FaGithub className="text-2xl"/>
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
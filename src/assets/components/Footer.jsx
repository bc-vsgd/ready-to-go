import logo_react from "../img/logo_react.png";
import logo_reacteur from "../img/Logo_Reacteur.avif";

const Footer = () => {
  return (
    <footer>
      <p>
        <span>Made with </span>
        <a
          href="https://react.dev/blog/2023/03/16/introducing-react-dev"
          target="_blank"
        >
          <img src={logo_react} alt="Logo React" /> React
        </a>{" "}
        <span>at </span>
        <a href="https://www.lereacteur.io/" target="_blank">
          <img src={logo_reacteur} alt="Logo reacteur" />
          Le Reacteur
        </a>{" "}
        <span>by </span>
        <a href="https://github.com/bc-vsgd" target="_blank">
          <i class="fa-brands fa-github"></i> Benoît Charles
        </a>
      </p>
    </footer>
  );
};

export default Footer;

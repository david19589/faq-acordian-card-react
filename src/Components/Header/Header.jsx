import "./Header.css";
import illustration from "/src/assets/illustration-woman-online-mobile.svg";
import pattern from "/src/assets/bg-pattern-mobile.svg";
import illustrationDesktop from "/src/assets/illustration-woman-online-desktop.svg";
import box from "/src/assets/illustration-box-desktop.svg";
import patternDesktop from "/src/assets/bg-pattern-desktop.svg";

const Header = () => {
  return (
    <div>
      <img className="img" src={illustration}></img>
      <img className="shadow" src={pattern}></img>
      <div className="desktopImgDiv">
        <img className="imgDesktop" src={illustrationDesktop}></img>
        <img className="shadowDesktop" src={patternDesktop}></img>
      </div>
      <img className="boxDesktop" src={box}></img>
    </div>
  );
};

export default Header;

import Image from "next/image";
import footerLogo from '../../public/Images/footerLogo.png'
import AppStore from '../../public/Images/AppStore.png'
import GooglePlay from '../../public/Images/GooglePlay.png'
import "./footerOne.css";

function FooterOne() {
  return (
    <div className="footers">
      <div className="footer_one">
        <div className="footer_one-logo">
          <Image src={footerLogo}/>
          <p className="footer_logo-p">
            Продай, найди, купи все что ты пожелаешь 
          </p>
        </div>
        <div className="footer_one-text">
          <p className="footer_text-p">
            Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт обяления
          </p>
        </div>
        <div className="footer_one-btn">
            <Image src={AppStore}/>
            <Image src={GooglePlay}/>
        </div>
      </div>

    </div>
  );
}

export default FooterOne
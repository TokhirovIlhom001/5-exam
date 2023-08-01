import Cards from "@/HomeCards/homeCards"
import './style.css'
import FooterOne from "@/Footer/footerOne"
import FooterTwo from "@/Footer/footerTwo"


export default function Home() {

  return (
    <div>
      <div></div>
      <div className="home_btns">
        <p className="home_btn">Новые объявления</p>
        <p className="home_btn">Лучщие предложение</p>
      </div>
      <Cards/>
      <FooterOne/>
      <FooterTwo/>
    </div>
  )
  
}

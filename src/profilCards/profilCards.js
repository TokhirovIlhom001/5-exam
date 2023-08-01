import './profilCards.css'
import Image from 'next/image'
import cardIMG from '../../public/Images/profilCard.png'

function ProfilCards () {
    return (
        <div className='profil_cards'>
            <div className='profil_cards-object'>
                <div className='profil_cards_one'>
                    <Image src={cardIMG} />
                    <p className='profil_cards-p'>Срочно нужен программист yii2</p>
                    <div className='profil_cards-sum'>
                        <p>2 000 000</p>
                        <p>6 000 000 сум</p>
                    </div>
                    <div className='profil_cards-data'>
                        <p># 345 002</p>
                        <p>С: 28 июнь </p>
                        <p>По: 28 июль</p>
                    </div>
                    <button className="cards_right-btn">
                        <p className="cards_btn-green">
                            ↑
                        </p>
                        <p className="cards_btn-green-p">
                            Поднять
                        </p>
                    </button>
                    <button className="cards_left-btn">
                        <p className="cards_btn-blue">
                            ↑
                        </p>
                        <p className="cards_btn-blue-p">
                            Рекламировать
                        </p>
                    </button>
                    <div className='cards_the'>
                        ○○○
                    </div>
                </div>
            </div>
            <div className='profil_cards-information'>
                <p className='cards_information-blue'>
                    Статистика 
                </p>
                <p  className='cards_information-p'>
                    Просмотры: 195 
                </p>
                <p  className='cards_information-p'> 
                    Тел.: 200 
                </p>
                <p  className='cards_information-p'>
                    В Избранном: 0
                </p>
            </div>
        </div>
    )
}

export default ProfilCards
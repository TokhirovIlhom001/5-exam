import FooterOne from '@/Footer/footerOne'
import './profil.css'
import ProfilCards from '@/profilCards/profilCards'


function Profil () {
    return (
        <div className='profil_div'>
            <div className="profil_shot">
                <p className="shot_name">
                    Здравствуйте Зухриддин Темиров
                </p>
                <div className="shot_left-div">
                    <p className="shot_left-p">
                        Ваш счет: 2 3000 сум
                    </p>
                    <button className="shot_left-btn">
                            <p className="shot_btn-puls">
                                +
                            </p>
                        <p className="shot_btn-p">
                            Пополнить
                        </p>
                    </button>
                </div>
            </div>
            <div className='profil_main-hover'>
                <p className='main_hovers' >
                    Объявления 
                    <div className='hover_one-div'></div>
                </p>
                <p className='main_hovers'>
                    Сообщения 
                </p>
                <p className='main_hovers'>
                    Платежи и счёт
                </p>
                <p className='main_hovers'>
                    Настройки
                </p>
                <p className='main_hovers'>
                    Мой бизнес
                </p>
           
            </div>

            <div className='profil_object-border'>
                <div className='profil_object-name'>
                    <div className='profil_object-right'>
                        <p className='profil_object-p'>
                            Фото        
                        </p>
                        <p className='profil_object-p'>
                            Название
                        </p>
                    </div>
                    <div className='profil_object-left'>
                        <p className='profil_object-p'>
                            Цена
                        </p>
                        <p className='profil_object-p'>
                            Дата
                        </p>
                        <p className='profil_object-p'>
                            Действие
                        </p>
                    </div>
                </div>
            </div>
            <ProfilCards/>
            <ProfilCards/>
            <ProfilCards/>
            <ProfilCards/>
            <ProfilCards/>
            <FooterOne/>
        </div>

    )
}

export default Profil
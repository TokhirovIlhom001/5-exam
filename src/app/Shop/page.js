import FooterTwo from '@/Footer/footerTwo'
import './shop.css'
import FooterOne from '@/Footer/footerOne'


function Shop () {
    return (
        <div className="shop_item">
            <div className="shop_item-name"></div>

            <div className="shop_item-information"> 
                <div className="shop_item-images">
                    <div className="shop_images"></div>
                    <div className="shop_item-img"></div>
                </div>

                <div className="item_information">
                    <div className="item_data-shop">
                        <p className="item_data-p">Артикул: 4418970</p>
                        <p className="item_data-p">обновлено: 28.04.17 добавлено: 28.04.17</p>
                    </div>
                    <p className="item_price"></p>
                    <p className="item_address">Ташкент, Ташкентская область, Юнусабадский район </p>
                    <div className="item_number-one top">
                        99891 166 ****   
                        <button className='item_number-btn'>Покозать польностю</button>
                    </div>
                    <div className="item_number-one buttom">
                        99891 166 ****
                        <button className='item_number-btn'>Покозать польностю</button>
                    </div>
                    <div className="item_owner">
                        <p className='item_owner-one'>Автор обьявлении: </p>
                        <p className='item_owner-two'>Зухриддин Темиров</p>
                    </div>
                    <div className="item_blue-btn">
                        <button  className="item_blue-one">Написать автору</button>
                        <button  className="item_blue-two">Предложить свою цену</button>
                    </div>
                    <div className="shop_object-information">
                        <div className='shop_table-one'>
                            <div className='shop_table-style'>Количество комнат: <br/>6</div>
                            <div className='shop_table-style'>Общая площадь: <br/> 40 м2</div>
                            <div className='shop_table-style'>Этаж: <br/> 32</div>
                        </div>
                        <div className='shop_table-two'>
                            <div className='shop_table-style'>Этажность дома: <br/> 6 </div>
                            <div className='shop_table-style'>Состояние квартиры: <br/>  Первая сдача </div>
                            <div className='shop_table-style'> Этаж: <br/> 32</div>
                        </div>
                        <div className='shop_table-three'>
                            <div className='shop_table-style'>
                                Планировка <br/>
                                <p className='shop_table-style-blue'>
                                    Раздельная 
                                </p>
                            </div >
                            <div className='shop_table-style'>
                                Год постройки/сдачи <br/>
                                <p className='shop_table-style-blue'>
                                    Сдача в 2017 
                                </p>
                            </div>
                            <div className='shop_table-style'>
                                Ремонт <br/> Авторский проект
                            </div>
                        </div> 
                        <div className='shop_table-four'>
                            <div className='shop_table-style'>
                                Санузел <br/>
                                <p className='shop_table-style-blue'>
                                    2 санузла и более 
                                </p>
                            </div>
                            <div className='shop_table-style'>
                                Меблирована <br/>
                                <p className='shop_table-style-blue'>
                                    Да
                                </p>
                            </div>
                            <div className='shop_table-style'>
                            Высота потолков <br/> 32
                            </div>
                        </div>
                        <div>
                            <div className='blue_text'>
                                Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе
                            </div>
                            <div className='text'>
                                Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. Новостройка Голден Хаус жылой комплекс Етти Чинор Очень качественный и дорогой ремонт. Комнаты полнастю разделные болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт шыкарный обсалютно новый. 
                            </div>
                            <div className='text'>
                                Ремонт делолся из очень дорогова материяла. Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие люстры вовсех комнатах решодки на окнах. Теретория охранается. Всё предусмотренно для детей деские площядки качели итд. Торг наместе. Торопитесь продаю нужны денги. Первый золотой этаж и паследний в этом коплексе. Торопитесь.
                            </div>
                        </div>
                        <div className='text_like'>
                            <p className='text_like-p'>
                                Просмотры:1095
                            </p>
                            <p className='text_like-red-p'>
                                Пожаловатся
                            </p>
                        </div>
                    </div>
                    {/* <div className='shop_item-like'></div> */}
                </div>
            </div>
            <FooterOne/>
            <FooterTwo/>

        </div>
    )
}

export default Shop
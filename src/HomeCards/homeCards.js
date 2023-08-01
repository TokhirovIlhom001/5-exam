'use client'
import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import './homeCards.css'
import Shop from '@/app/Shop/page';


export const Cards = () => {
  const [data, setData] = useState([]);

  const [caunt, setCaunt] = useState([])

  const onClick = () => {
    setCaunt(Shop)
  }

  async function getCards() {
    let responce = await fetch('https://fakestoreapi.com/products');
    let data = await responce.json();

    if (data.length) setData(data);
  }

  useEffect(() => {
    if (!data.length) getCards();
  }, [data]);

  console.log(data);
  return (
    <main>
      <div>
        <div className="cards_div">
          {data.map((item) => (
            <div className="home_cards" key={item.id}>
              
              <div className="cards_img">
                <Image src={item.image} width='200' height='300' />
              </div>

              <p className='cards_p'>{item.title}</p>
              <span className='cards_price'>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Cards
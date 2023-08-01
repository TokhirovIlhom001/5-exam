"use client"

import Link from 'next/link';
import Image from 'next/image';
import logIMG from '../../../public/Images/logIMG.png'
import './login.css'
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

function Login () {

    // const [email, setEmail]= useState('')
    // const [password, setPassword]= useState('')

    // const usenavigate = useNavigate ()
    // 
    // const ProcedLogin = (e) => {
        // e.preventDefault ()
        // if(validate() ) {
            // console.log(proceed);
            // fetch('https://reqres.in/api/login'= email).then((res)=> {
                // return res.json()
            // }) .then ((resp) => {
                // console.log(resp);
                // if(Object.keys (resp).length===0){
                    // toast.warning('please:')
                // }else {
                    // if(resp.password === password ) {
                        // toast.success('Success')
                        // usenavigate('/')
                    // }else {
                        // toast.warning('please:')
                    // }
                // }
            // }).catch((err) => {
                // toast.warning('login:' +err.message)
            // })
        // }
    // }

    // const validate= () => {
        // let  result= true;
        // if (email === '' || email === null) {
            // result = false
            // taost.warning('please enter')
        // }
        // if (password === '' || password === null) {
            // result = false
            // taost.warning('please enter')
        // }
        // return result
    // }

    return (
        <div className="nav_login">
            {/* <form onSubmit={ProcedLogin}> */}
                <div className='register'>
                    <p className='register_h2'>
                        Ваша регистрация завершена!
                    </p>
                    <p className='register_h4-blue'>
                        Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в виде смс на ваше телефонный номер
                    </p>
                    <div className='number_div'>
                        <p className='number_p'>Введите email или номер телефона</p>
                        <input className='number_input'
                        // value={email} onChange={e=> setEmail(e.target.value)} 
                        />
                    </div>
                    <div className='password_div'>
                        <p className='password_p'>Пароль</p>
                        <input type='password' className='password_input'
                        //   value={password} onChange={e=> setPassword(e.target.value)}
                         />
                    </div>
                    <Link href={'/'}>
                        <button className='log_btn'>
                            Войти
                        </button>
                    </Link>
                    <div className='log_sector'>
                        <div className='sector_one'></div>
                        <p className='sector_p'>или</p>
                        <div className='sector_two'></div>
                    </div>
                    <Link href='#'>
                        Восстоновить ваше пароль
                    </Link>
                </div>
                <div className='log_img-div'>
                    <Image className='log_img' src={logIMG}/>
                    <div className='log_img-card'></div>
                </div>
            {/* </form> */}

        </div>
    );
};
export default Login
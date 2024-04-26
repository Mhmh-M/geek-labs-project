import { useState } from 'react';
import logo from './../../public/1143ddf5b0c81df102a06725a723d572.png';
import avatarImg from './../../public/imge2.png'

function NabBar() {
    const [activeul, setActiveul] = useState(0);
    const [menuOpen, setmenuOpen] = useState(false);

    const alerts = [{
        'name': 'Traning',
        'liIcon': 'fas fa-graduation-cap',
    }, {
        'name': 'Automation',
        'liIcon': 'fas fa-cogs',

    }, {
        'name': 'Protfolio',
        'liIcon': 'fas fa-folder-open',

    }, {
        'name': 'Trading',
        'liIcon': 'fas fa-graduation-cap',

    }]
    return (
        <>
            <nav id="navBar" className={`${menuOpen ? 'w-[180px] ' : 'w-[47px] lg:w-[67px] '} bg-[#181818] h-[100vh] flex justify-center absolute z-50`}>
                <span onClick={() => setmenuOpen(false)} className={`${menuOpen ? 'inline' : 'hidden'} absolute z-[9999] top-[8px] left-[145px] rounded-full text-center w-7 h-7 text-[#414040] text-xl cursor-pointer transition-[0.4s]`}>X</span>
                <div className={`${menuOpen ? 'top-[-65px]  w-[124px] h-[74px]' : 'top-[2px]  w-[39px] h-[24px]'} absolute  scale-[3] z-[1]`}>
                    <img className='w-full' src={logo} alt="" />
                </div>
                <ul className="links mt-[129px] z-10">
                    <li className='text-[var(--color-1)]  font-semibold leading-[28.5px] cursor-pointer text-[16px] md:text-[19px]'>
                        <i className="fas fa-bell"></i>
                        <span className={`${menuOpen ? '' : 'hidden'}  ml-[11px]`}>Alerts</span>
                    </li>
                    {alerts.map((e, index) => {
                        return (
                            <li onClick={() => setActiveul(index)} className={`${activeul === index ? 'active' : ''} cursor-pointer hover:text-white transition-[0.4s]  text-[#ffffff4d] text-[16px] md:text-[19px] font-normal mt-[15px] leading-[28.5px]`} key={index}><i className={`${e.liIcon}`}></i>
                                <span className={`${menuOpen ? '' : 'hidden'} ml-[11px]`}>{e.name}</span>
                            </li>
                        )
                    })}
                </ul>
                <div className=' absolute bottom-7 left-[50%] translate-x-[-50%] ml-1 z-40'>
                    <div className={`${menuOpen ? ' hidden' : 'flex lg:hidden'} alertNave relative  text-[var(--color-1)] text-[23px] justify-center items-center mb-[15px]`}><i className="fas fa-bell"></i></div>
                    <div className="top flex items-center justify-between">
                        <div className='w-[28.01px] h-[29px] lg:w-[38.02px] lg:h-[41px] lg:mr-[10px]'>
                            <img className='rounded-full w-full' src={avatarImg} alt="" />
                        </div>
                        <div className={`${menuOpen ? 'lg:block ml-2' : 'hidden'} info  `}>
                            <h3 className='text-[12px] md:text-[15px] font-bold leading-[22.5px] text-[#ffffff] min-w-[70px]'>Moni Roy</h3>
                            <p className='text-[11.5px] md:text-[14.5px] text-[#979797]'>Beginner</p>
                        </div>
                    </div>
                    <div className={`${menuOpen ? 'lg:block' : 'hidden'} bottom mt-[20px]`}>
                        <span className='text-[#ffffff4d] text-[12px] md:text-[14px] font-normal'>Street Suite. 2.0</span>
                    </div>
                    <div onClick={() => { setmenuOpen(true) }} className={`${menuOpen ? 'hidden' : ''} transition-[0.4s] hover:text-[var(--color-1)] cursor-pointer text-white text-md lg:text-xl mt-4 border border-solid border-white rounded-full w-7 h-7 lg:w-9 lg:h-9 flex justify-center items-center`}>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>

                </div>
            </nav >
        </>
    )
}

export default NabBar
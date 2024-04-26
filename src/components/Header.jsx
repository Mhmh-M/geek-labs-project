import { useState } from "react"

// eslint-disable-next-line react/prop-types
function Header({ setfilterOpen }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <header className='flex justify-center items-center mx-[25px]'>
                <h2 className='text-[24px] md:text-[35px] lg:text-[48px] font-bold uppercase relative pl-[16px]'>Alerts</h2>
                <form action="" className=' relative w-[100%] h-[38px]  transition-[0.4s] mr-[15px] ml-[35px]'>
                    <input className={`hidden lg:block text-[15px] font-normal rounded-lg hover:rounded-none w-full h-full bg-[var(--color-2)] transition-[0.4s]  outline-none px-4`} type='search' placeholder="Search by..." />
                    <input className={`${open ? 'w-full opacity-100' : 'w-0 opacity-0'} block lg:hidden text-[15px] font-normal rounded-lg hover:rounded-none w-full h-full bg-[var(--color-2)] transition-[0.4s]  outline-none px-4`} type='search' placeholder="Search by..." />
                    <span onClick={() => { setOpen(true) }} className={`${open ? ' hidden' : ''}`}><i className={` fas fa-search text-[#9ca3af] absolute right-[16px] top-[50%] translate-y-[-50%] cursor-pointer`}></i></span>
                    <span onClick={() => { setOpen(!open) }} className={`${open ? ' inline lg:hidden' : 'hidden'} z-40`}><i className={` fa-solid fa-x text-[#9ca3af] absolute right-[16px] top-[50%] translate-y-[-50%] cursor-pointer`}></i></span>
                </form>
                <div className=" cursor-pointer alertNave hidden lg:flex relative text-[var(--color-1)] text-[38px] justify-center items-center"><i className="fas fa-bell h-[33px]"></i></div>
                <div onClick={() => setfilterOpen(true)} className="block lg:hidden bg-[var(--color-1)] text-[11px] md:text-[15px] font-normal rounded-lg px-[25px] py-[10px] cursor-pointer">Filter</div>
            </header>
        </>
    )
}

export default Header
import { useState } from "react"

// eslint-disable-next-line react/prop-types
function Filters({ filterOpen, setfilterOpen }) {

    const [industry, setIndustry] = useState(false);
    const [market, setMarket] = useState(false);
    const [risk, setRisk] = useState(false);

    const industryData = [{
        'name': 'Health care',
        'icon': 'fa-solid fa-heart-circle-plus',
    }, {
        'name': 'IT',
        'icon': 'fa-solid fa-pen-nib',
    }, {
        'name': 'Materials',
        'icon': 'fa-solid fa-recycle',
    }, {
        'name': 'Communication',
        'icon': 'fa-regular fa-comments',
    }, {
        'name': 'Energy',
        'icon': 'fa-solid fa-bolt',
    }, {
        'name': 'Industrials',
        'icon': 'fa-solid fa-city',
    }, {
        'name': 'Consumer discretionary',
        'icon': 'fa-solid fa-credit-card',
    }, {
        'name': 'Consumer staples',
        'icon': 'fa-solid fa-screwdriver-wrench',
    }, {
        'name': 'Health care',
        'icon': 'fa-solid fa-cart-shopping',
    }, {
        'name': 'Financials',
        'icon': 'fa-solid fa-hand-holding-dollar',
    }, {
        'name': 'Real estate',
        'icon': 'fa-solid fa-house-lock',
    }
    ]

    return (
        <section className={`${filterOpen ? 'flex' : ' hidden lg:flex'} filters mt-[15px] bg-[#181818] min-w-[427px] flex-col items-center rounded-lg p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  lg:top-[0%] lg:left-[0%] lg:translate-x-[-0%] lg:translate-y-[-0%] lg:relative`}>
            <span onClick={() => setfilterOpen(false)} className={`${filterOpen ? ' inline lg:hidden' : 'hidden'}  absolute z-[9999] top-[8px] right-[21px] text-[#414040] text-xl cursor-pointer`}>X</span>
            <h2 className="text-[17.36px] md:text-[24px] font-bold ">Filters</h2>
            <div className="filters-applied">
                <div className="info flex justify-between items-center">
                    <h4 className="text-[9.81px] md:text-[14px] text-[#979797] font-normal">Filters Applied</h4>
                    <button className="text-[9.81px] md:text-[14px] font-normal">Clear All</button>
                </div>
                <div className="checked-filters w-[378px] min-h-[26px] bg-[#202020] p-2 rounded-md">
                    <span className=" cursor-pointer bg-[var(--color-1)] text-white text-[8.5px] md:text-[12px] font-normal p-1 rounded-md mr-2">Real Estate<span className="ml-[6px] font-bold">X</span>
                    </span>
                </div>
                <div className="stock w-[378px] bg-[#202020] p-4 rounded-md mt-4">
                    <h4 className="text-[12px] md:text-[16px] font-bold">Stock</h4>
                    <form action="" className='w-full relative transition-[0.4s] text-center'>
                        <input className={`w-full h-[21.5px] md:h-[38px] bg-[#313131] transition-[0.4s] outline-none px-4 rounded-md text-xs md:text-[15px]`} type='search' placeholder="$ TICKER" />
                        <i className="fas fa-search text-[#9ca3af] absolute right-[30px] top-[50%] translate-y-[-50%] text-xs md:text-md lg:text-lg"></i>
                        <button className=" text-[8.5px] md:text-[10px] bd-[var(--color-1)]"></button>
                    </form>
                    {/* Industry */}
                    <div className="ml-2">
                        <div onClick={() => setIndustry(!industry)} className="flex items-center mt-5">
                            <span className={`${industry ? 'rotate-180' : ''} transition-[0.4s] hidden lg:inline`}><i className="fa-solid fa-sort-down"></i></span>
                            <h5 className="text-[12px] lg:text-[15px] font-bold ml-2">Industry</h5>
                        </div>
                        <div className="container-Industry grid grid-cols-2 mt-2 lg:ml-4 gap-x-8">
                            {industryData.map((e, index) => {
                                return (
                                    <div key={index} className={`${industry ? 'hidden' : ''} small-row text-[10px] lg:text-[12px] font-normal p-2 lg:border-l-[1px] border-solid border-white lg:w-[180px]`}>
                                        <i className={`${e.icon}`}></i>
                                        <span className="ml-[5px]">{e.name}</span>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    {/* Market Cap */}
                    <div className="flex ml-2">
                        <div className="left flex-1">
                            <div onClick={() => setMarket(!market)} className="flex items-center mt-5 mb-3 cursor-pointer">
                                <span className={`${market ? 'rotate-180' : ''} transition-[0.4s]`}><i className="fa-solid fa-sort-down"></i></span>
                                <h5 className="text-[12px] lg:text-[15px] font-bold ml-2">Market Cap</h5>
                            </div>
                            <div className={`${market ? 'hidden' : ''} market transition-[0.4s] flex items-center mb-[15px]`}>
                                <input className=" hidden" type="radio" name="market" id="micro" />
                                <label className="text-[10px] lg:text-[13px]" htmlFor="micro">Micro</label>
                            </div>
                            <div className={`${market ? 'hidden' : ''} market transition-[0.4s] flex items-center mb-[15px]`}>
                                <input className=" hidden" type="radio" name="market" id="small" />
                                <label className="text-[10px] lg:text-[13px]" htmlFor="small">Small</label>
                            </div>
                            <div className={`${market ? 'hidden' : ''} market transition-[0.4s] flex items-center mb-[15px]`}>
                                <input className=" hidden" type="radio" name="market" id="large" />
                                <label className="text-[10px] lg:text-[13px]" htmlFor="large">Large</label>
                            </div>


                        </div>
                        <div className="right flex-1 ">
                            <div onClick={() => setRisk(!risk)} className="flex items-center mt-5 mb-3 cursor-pointer">
                                <span className={`${risk ? 'rotate-180' : ''} transition-[0.4s]`}><i className="fa-solid fa-sort-down"></i></span>
                                <h5 className="text-[12px] lg:text-[15px] font-bold ml-2">Risk Level</h5>
                            </div>
                            <div className={`${risk ? 'hidden' : ''} market flex items-center mb-[15px] transition-[0.4s]`}>
                                <input className=" hidden" type="radio" name="risk" id="low" />
                                <label className="text-[10px] lg:text-[13px]" htmlFor="low">Low Risk</label>
                            </div>
                            <div className={`${risk ? 'hidden' : ''} market flex items-center mb-[15px] transition-[0.4s]`}>
                                <input className=" hidden" type="radio" name="risk" id="mid" />
                                <label className="text-[10px] lg:text-[13px]" htmlFor="mid">Mid Risk</label>
                            </div>
                            <div className={`${risk ? 'hidden' : ''} market flex items-center mb-[15px] transition-[0.4s]`}>
                                <input className=" hidden" type="radio" name="risk" id="hight" />
                                <label className="text-[10px] lg:text-[13px]" htmlFor="hight">Hight Risk</label>
                            </div>
                        </div>
                    </div>
                    {/* strategy */}
                    <div className="flex">
                        <div className="left flex-1 text-center">
                            <h4 className="text-[12px] lg:text-[15px] font-bold mb-3">Strategy</h4>
                            <p className="text-[10px] lg:text-sm font-normal gradient ">Big Option Buys</p>
                            <p className=" text-[10px] lg:text-sm font-normal bg-[--color-1] w-fit px-1 py-1 mx-auto my-1 rounded-md hover:bg-[#4486c3] transition-[0.4s]">Merger Arbitrage</p>
                            <p className=" text-[10px] lg:text-sm font-normal gradient2">Short Reports</p>
                        </div>
                        <div className="right flex-1 text-center">
                            <h4 className="text-[12px] lg:text-[15px] font-bold mb-3">Asset</h4>
                            <p className="text-[10px] lg:text-sm font-normal gradient ">Stocks</p>
                            <p className=" text-[10px] lg:text-sm font-normal bg-[--color-1] w-fit px-1 py-1 mx-auto my-1 rounded-md hover:bg-[#4486c3] transition-[0.4s]">Options</p>
                            <p className=" text-[10px] lg:text-sm font-normal gradient2">Futures</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="lg:hidden hover:border-[var(--color-1)] border border-solid border-white transition-[0.4s] font-semibold text-[11px] lg:text-xl py-[7px] px-5 rounded-md mt-4 mr-3">Save Filter</button>
                    <button className="bg-[--color-1] hover:bg-[#4486c3] transition-[0.4s] font-semibold text-[11px] lg:text-xl py-[7px] px-8 rounded-md mt-4">Apply</button>

                </div>
            </div>
        </section>
    )
}

export default Filters
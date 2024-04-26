
// eslint-disable-next-line react/prop-types
function Row({ index, name, number, indicator, color, risk, activeItems }) {
    return (
        <>
            <div className="mb-[24px]">
                <div className={`${activeItems === index ? 'active' : ``} rwo bg-[var(--color-2)] rounded-lg grid  grid-cols-4 h-[59px]  cursor-pointer`} >
                    <div className="flex items-center justify-center ">
                        <i className="fas fa-file-invoice-dollar text-[18px] md:text-[21px] lg:text-[25px] xl:text-[32px] "></i>
                        <span className="text-[10px] md:text-[15px] font-normal ml-[10px] md:ml-[15px] lg:ml-[23px]">{name}</span>
                    </div>
                    <div className="border-here flex items-center justify-center  relative">
                        <i className="fas fa-file-contract text-[18px] md:text-[21px] lg:text-[25px] xl:text-[32px] "></i>
                        <span className="text-[10px] md:text-[15px] font-normal ml-[10px] md:ml-[15px] lg:ml-[23px]">{number}</span>
                    </div>
                    <div className="border-here flex items-center justify-center  relative">
                        <i className="fas fa-chart-line text-[18px] md:text-[21px] lg:text-[25px] xl:text-[32px] "></i>
                        <span style={{ color: `${color}` }} className={`15px font-normal ml-[10px] md:ml-[15px] lg:ml-[23px]`}>{indicator}</span>
                    </div>
                    <div className="border-here flex items-center justify-center  relative">
                        <i className=" fa-regular fa-money-bill-1 text-[18px] md:text-[21px] lg:text-[25px] xl:text-[32px] "></i>
                        <span className="text-[10px] md:text-[15px] font-normal ml-[10px] md:ml-[15px] lg:ml-[23px]">{risk}</span>
                    </div>
                </div>
                <div className={`${activeItems === index ? 'block' : ` hidden`} bg-[#181818] p-3 w-full`}>
                    <p className="text-[10px] md:text-[15px]"><span className="font-bold">$TSLA</span> just announced an acquisition of <span className="font-bold">$NFLX</span> at <span className="font-bold">$200 B</span></p>
                    <p>This is an <span className="text-[var(--color-1)]">arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails, If the deal success is % and therefore the recommended play is <span className="text-[var(--color-1)]">long/short</span> $ABC</p>
                </div>
            </div>
        </>
    )
}

export default Row
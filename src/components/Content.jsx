import { useState } from "react"
import Row from "./Row"
import Header from "./Header"
import Filters from "./Filters"


function Content() {

    const [activeItems, setactiveItems] = useState()
    const [filterOpen, setfilterOpen] = useState(false);

    const items = [
        {
            'name': 'AMZN',
            'number': '200',
            'indicator': '-035 %',
            'color': '#d94111',
            'risk': 'Low Risk',
        }, {
            'name': 'TSLA',
            'number': '200',
            'indicator': '-0.65 %',
            'color': '#118f4b',
            'risk': 'High Risk',
        },
        {
            'name': 'ABQQ',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#118f4b',
            'risk': 'Low Risk',
        }, {
            'name': 'MSFT',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#118f4b',
            'risk': 'High Risk',
        },
        {
            'name': 'PYPL',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#d94111',
            'risk': 'Low Risk',
        }, {
            'name': 'NFLX',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#118f4b',
            'risk': 'High Risk',
        },
        {
            'name': 'AMZN',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#d94111',
            'risk': 'Low Risk',
        }, {
            'name': 'AMZN',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#118f4b',
            'risk': 'High Risk',
        },
        {
            'name': 'AMZN',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#d94111',
            'risk': 'Low Risk',
        }, {
            'name': 'AMZN',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#118f4b',
            'risk': 'High Risk',
        },
        {
            'name': 'AMZN',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#d94111',
            'risk': 'Low Risk',
        }, {
            'name': 'AMZN',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#118f4b',
            'risk': 'High Risk',
        },
        {
            'name': 'AMZN',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#d94111',
            'risk': 'Low Risk',
        }, {
            'name': 'AMZN',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#118f4b',
            'risk': 'High Risk',
        },
        {
            'name': 'AMZN',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#d94111',
            'risk': 'Low Risk',
        }, {
            'name': 'AMZN',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#118f4b',
            'risk': 'High Risk',
        },
        {
            'name': 'AMZN',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#d94111',
            'risk': 'Low Risk',
        }, {
            'name': 'AMZN',
            'number': '200',
            'indicator': '-0.25 %',
            'color': '#118f4b',
            'risk': 'High Risk',
        }]


    return (
        <>
            <section className="text-white py-[10px] w-full overflow-hidden flex ml-[50px] lg:ml-[70px] relative">
                <main className="w-full">
                    <Header setfilterOpen={setfilterOpen} />
                    <section className="content mt-4 ">
                        <div className="w-full h-full overflow-y-auto max-h-[90vh] px-[30px] ">
                            {items.map((e, index) => {
                                return (
                                    <div key={index} onClick={() => { setactiveItems(index) }} >
                                        <Row index={index} {...e} activeItems={activeItems} open={open} />
                                    </div>
                                )
                            })}

                        </div>
                    </section>
                </main>
                <Filters filterOpen={filterOpen} setfilterOpen={setfilterOpen} />
            </section>
        </>
    )
}

export default Content
import { use } from "react"
import { TiTick } from "react-icons/ti"

const pricingPromise = fetch('./pricing-data.json').then(res => res.json())

export const Pricing = () => {

  const pricingData = use(pricingPromise)

  const pricingDataEl = pricingData.map(data => <div key={data.id} className={`flex flex-col text-start p-6 border border-gray-300 rounded-xl ${data.tagType === 'most popular' ? 'bg-purple-600 text-white relative' : 'bg-gray-200'}`}>
    {data.tagType === 'most popular' && <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-900 capitalize text-center absolute -top-4 left-[50%] -translate-x-1/2">{data.tag}</span>}
    <h3 className="font-bold text-2xl capitalize">{data.name}</h3>
    <p>{data.description}</p>
    <p className="my-6"><span className="text-3xl font-bold">${data.price}</span>/{data.period}</p>
    <ul className="mb-4">
      {data.features.map((item, index) => <li key={index} className="flex items-center gap-2"><TiTick className="text-green-600" />{item}</li>)}
    </ul>
    <a className={`mt-auto btn font-semibold py-2.5 px-6 rounded-full transition-all duration-300  hover:scale-105 shadow-md ${data.tagType === 'most popular' ? 'bg-white  text-purple-900' : 'bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white'}`}>{data.button}</a>
  </div>)

  return (
    <div className="bg-white text-center py-30">
      <div className="max-w-300 mx-auto">
        <h2 className="text-5xl font-extrabold mb-4">Simple, Transparent Pricing</h2>
        <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        <div className="my-10 grid grid-cols-3 gap-4">
          {pricingDataEl}
        </div>
      </div>
    </div>
  )
}
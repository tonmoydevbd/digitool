import { use } from "react"

const stepsDataPromise = fetch('./started-steps-data.json').then(res => res.json())

export const GetStarted = () => {

  const stepsData = use(stepsDataPromise)
  const stepsDataEl = stepsData.map(item => <div key={item.id} className="bg-white p-5 border border-gray-300 rounded-xl">
    <div className="text-end"><span className="bg-purple-600 px-2 py-1.5 text-white rounded-full">0{item.id}</span></div>

    <div className="flex flex-col gap-4 items-center">
      <div className="p-4 rounded-full bg-purple-200">
        <img src={item.icon} width={60} alt="" />
      </div>

      <h3 className="text-2xl font-bold">{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </div>)


  return (
    <div className="px-4 xl:px-0 bg-base-200 text-center py-10 lg:py-30">
      <div className="max-w-300 mx-auto">
        <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">Get Started in 3 Steps</h2>
        <p>Start using premium digital tools in minutes, not hours.</p>
        <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {stepsDataEl}
        </div>
      </div>
    </div>
  )
}
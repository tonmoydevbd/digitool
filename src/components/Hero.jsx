import { CiPlay1 } from "react-icons/ci"
import { GoDotFill } from "react-icons/go"

export const Hero = () => {
  return (
    <div className="hero py-10 xl:py-0 bg-base-200 xl:min-h-screen">
      <div className="max-w-300 mx-auto hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.postimg.cc/h4LvT8db/banner.png"
          className="banner-img rounded-lg shadow-2xl"
        />
        <div>
          <div className="badge bg-indigo-200 text-purple-900">
            <GoDotFill />New: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl lg:text-7xl font-extrabold">Supercharge Your Digital Workflow</h1>
          <p className="py-6 text-[1.25rem]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore Products
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-2">
            <button className="btn bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-100 shadow-md">Explore Products</button>
            <button className="inline-flex items-center bg-transparent hover:bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-purple-500 hover:text-white font-semibold py-2 px-4 border border-purple-500 hover:border-transparent rounded-full transition-all transform duration-300 hover:scale-105 active:scale-100">
              <CiPlay1 className="text-xl" />Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
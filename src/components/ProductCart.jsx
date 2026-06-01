
import { FaPencilRuler } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

// "id": "prod_01",
//     "name": "Starter Plan",
//     "description": "Perfect for individuals starting out with basic project tracking needs.",
//     "price": 0.00,
//     "period": "one-time",
//     "tag": "Free",
//     "tagType": "new",
//     "features": [
//       "3 active projects",
//       "Basic task boards",
//       "Export to CSV"
//     ],
//     "icon": "https://i.postimg.cc/9MCxyN8g/writing-2327400-1.png"

export const ProductCart = ({ product }) => {
  const { name, description, price, period, tag, tagType, features, icon } = product

  return (
    <div className="flex flex-col gap-4 text-start p-6 border border-gray-200 rounded-xl ">
      <div className="flex justify-between items-start">
        <img src={icon} alt=" " className="border border-gray-200 rounded-full p-4 text-3xl" />
        <small className={`px-2 py-1  rounded-full ${tagType === 'best seller' ? 'bg-amber-200 text-amber-900' : tagType === 'popular' ? 'bg-purple-300 text-purple-900' : 'bg-green-300 text-green-900'}`}>{tag}</small>
      </div>
      <h3 className="text-2xl font-bold">{name}</h3>
      <p>{description}</p>
      <p><span className="font-bold text-2xl">${price}</span>/{period}</p>
      <ul>
        {features.map((item, index) => <li key={index} className="flex items-center gap-1"><TiTick className="text-green-600" />{item}</li>)}
      </ul>
      <a className="mt-auto btn bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300  hover:scale-105 shadow-md ">Get Started</a>
    </div>
  )
}
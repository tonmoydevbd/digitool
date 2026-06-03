import { AiFillInstagram } from "react-icons/ai"
import { FaFacebookSquare } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const Footer = () => {
  return (
    <div className="bg-[#101727] text-white pt-30 pb-8">
      <div className="max-w-300 mx-auto grid grid-cols-8 gap-12">
        <div className="col-span-3">
          <h2 className="font-extrabold text-4xl mb-4">DigiTools</h2>
          <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h3 className="font-medium text-xl">Product</h3>
          <p>Features</p>
          <p>Pricing</p>
          <p>Templates</p>
          <p>Integrations</p>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h3 className="font-medium text-xl">Company</h3>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Press</p>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h3 className="font-medium text-xl">Resources</h3>
          <p>Documentation</p>
          <p>Help Centar</p>
          <p>Community</p>
          <p>Contact</p>
        </div>
        <div className="col-span-2 ">
          <h3 className="font-medium text-xl">Social Links</h3>
          <div className="flex items-center gap-4 mt-4 text-black">
            <div className="p-2 bg-white  rounded-full">
              <AiFillInstagram />
            </div>
            <div className="p-2 bg-white  rounded-full">
              <FaFacebookSquare />
            </div>
            <div className="p-2 bg-white  rounded-full">
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-300 mx-auto border-t border-t-gray-600 mt-20 pt-8 flex justify-between">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-6">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Cookies</a>
        </div>
      </div>
    </div>
  )
}
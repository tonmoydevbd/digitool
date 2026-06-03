import { GoDotFill } from "react-icons/go"

export const CallToAction = () => {
  return (
    <div className="flex flex-col gap-4 text-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 py-30 text-white">
      <h2 className="font-extrabold text-4xl">Ready to Transform Your Workflow?</h2>
      <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
      <div className="flex items-center gap-4 justify-center pt-6">
        <a className="btn bg-white text-purple-900 p-2 rounded-full">Explore Products</a>
        <a className="btn btn-ghost border border-white p-2 rounded-full hover:text-purple-900">View Pricing</a>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <p>14-day free trial</p> <GoDotFill />
        <p>No credit card required</p> <GoDotFill />
        <p>Cancel anytime</p>
      </div>
    </div>
  )
}
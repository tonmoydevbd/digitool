export const CartSection = () => {
  return (
    <div className="max-w-300 mx-auto mt-10 p-10 border border-gray-300 rounded-xl">
      <h3 className="text-2xl font-bold text-start">Your Cart</h3>
      <div className="my-6 flex flex-col gap-4">
        <div className="flex gap-4 bg-gray-200 rounded-xl items-center">
          <img className="rounded-full p-4" src="https://i.postimg.cc/50bP8k7P/operation.png" alt="" />
          <div className="grow text-start">
            <h4 className="font-semibold text-xl">AI Writing Pro</h4>
            <p>$29</p>
          </div>
          <button className="text-red-800 mr-4">Remove</button>
        </div>
      </div>
    </div>
  )
}
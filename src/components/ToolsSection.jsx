import { use } from "react"
import { ProductCart } from "./ProductCart"
import { ToolsSectionHead } from "./ToolsSectionHead"

const productsPromise = fetch('./products.json').then(res => res.json())

export const ToolsSection = () => {
  const productsData = use(productsPromise)
  console.log(productsData)
  const productsEl = productsData?.map(product => {
    return <ProductCart key={product.id} product={product} />
  })


  return (
    <div className="py-30 text-center bg-base-200">
      <ToolsSectionHead />
      <div className="max-w-300 mx-auto grid grid-cols-3 gap-8 pt-10">
        {productsEl}
      </div>
    </div>
  )
}
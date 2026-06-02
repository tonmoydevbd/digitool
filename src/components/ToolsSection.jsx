import { use, useState } from "react"
import { ProductCart } from "./ProductCart"
import { ToolsSectionHead } from "./ToolsSectionHead"
import { CartSection } from "./CartSection"

const productsPromise = fetch('./products.json').then(res => res.json())

export const ToolsSection = () => {
  const [isActiveProducts, setIsActiveProducts] = useState(true);
  const [isActiveCart, setIsActiveCart] = useState(false);
  const productsData = use(productsPromise)
  console.log(productsData)
  const productsEl = productsData?.map(product => {
    return <ProductCart key={product.id} product={product} />
  })


  return (
    <div className="py-30 text-center bg-base-200">
      <ToolsSectionHead
        isActiveProducts={isActiveProducts}
        setIsActiveProducts={setIsActiveProducts}
        isActiveCart={isActiveCart}
        setIsActiveCart={setIsActiveCart}
      />

      {isActiveProducts && <div className="max-w-300 mx-auto grid grid-cols-3 gap-8 pt-10">{productsEl}</div>}

      {isActiveCart && <CartSection />}

    </div>
  )
}
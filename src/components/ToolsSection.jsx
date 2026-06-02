import { useState } from "react"
import { ToolsSectionHead } from "./ToolsSectionHead"
import { ProductCard } from "./ProductCard"
import { CartSection } from "./CartSection"



export const ToolsSection = (props) => {
  const { productsData, clickedProduct, setClickedProduct, cartProduct, handleRemoveProduct } = props

  const [isActiveProducts, setIsActiveProducts] = useState(true);
  const [isActiveCart, setIsActiveCart] = useState(false);

  const productClick = (id) => {
    setClickedProduct(prev => [...prev, id])
  }

  const productsEl = productsData?.map(product => {
    return <ProductCard key={product.id} product={product} productClick={productClick} />
  })


  return (
    <div className="py-30 text-center bg-base-200">
      <ToolsSectionHead
        isActiveProducts={isActiveProducts}
        setIsActiveProducts={setIsActiveProducts}
        isActiveCart={isActiveCart}
        setIsActiveCart={setIsActiveCart}
        cartProduct={cartProduct}
      />

      {isActiveProducts && <div className="max-w-300 mx-auto grid grid-cols-3 gap-8 pt-10">{productsEl}</div>}

      {isActiveCart && <CartSection productsData={productsData} clickedProduct={clickedProduct} cartProduct={cartProduct} handleRemoveProduct={handleRemoveProduct} />}

    </div>
  )
}
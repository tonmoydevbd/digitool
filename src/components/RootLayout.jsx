
import { use, useState } from "react"
import { Hero } from "./Hero"
import { Navbar } from "./Navbar"
import { StatsSection } from "./StatsSection"
import { ToolsSection } from "./ToolsSection"
import { GetStarted } from "./GetStarted"
import { Pricing } from "./Pricing"
import { CallToAction } from "./CallToAction"
import { Footer } from "./Footer"
import { ToastContainer } from "react-toastify"

const productsPromise = fetch('./products.json').then(res => res.json())

export const RootLayout = () => {

  const productsData = use(productsPromise)
  const [clickedProduct, setClickedProduct] = useState([])

  const cartProduct = productsData.filter(product => clickedProduct.includes(product.id))
  const handleRemoveProduct = (id) => {
    setClickedProduct(prevIds => prevIds.filter(itemId => itemId !== id))
  }


  return (
    <>
      <Navbar cartProduct={cartProduct} />
      <Hero />
      <StatsSection />
      <ToolsSection
        productsData={productsData}
        clickedProduct={clickedProduct}
        setClickedProduct={setClickedProduct}
        cartProduct={cartProduct}
        handleRemoveProduct={handleRemoveProduct}
      />
      <GetStarted />
      <Pricing />
      <CallToAction />
      <Footer />
      <ToastContainer />
    </>
  )
}
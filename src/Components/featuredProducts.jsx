import { useProductContext } from "./context/ProductContext"
import Product from "./Product/Product"
import './Header/Header.css'

function FeaturedProducts() {
    const {isLoading, featureProducts} = useProductContext()

    if(isLoading) {
        return <div className="main-loader">
            <div className="loader"></div>
        </div>
    } 

    return (
        <div className="featureProducts">
            <div className="featuredHeading">
                 <h2>Check it Now !</h2>
            </div>
            <div className="featuredProducts">
                {
                    featureProducts.map((curEle) => {
                        return <Product key={curEle.id} {...curEle} />
                    })
                }
            </div>
        </div>
    )
}

export default FeaturedProducts
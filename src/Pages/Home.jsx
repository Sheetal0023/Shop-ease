import Header from "../Components/Header/Header";
import Product from "../Components/Product/Product";
import FeaturedProducts from "../Components/featuredProducts";
import Footer from "../Components/Footer";
import SaleOffer from "../Components/SaleOffer";

const Home = () => {
    return (
        <div>

            <Header />
            <SaleOffer />
            <FeaturedProducts />
            {/* <Product /> */}
            <Footer />
        </div>
    )
}

export default Home
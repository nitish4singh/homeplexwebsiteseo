import "./clientwork.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./clientworkCard";
import { productData, responsive } from "./clientData";

const ClientWork = () => {
    const product = productData.map((item) => (
        <Product
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}
          alt ={item.alt}
        />
      ));
      return (
        <div className="App">
          <div className="clienth1"> Homeplex Clients Work</div>
          <Carousel showDots={true} responsive={responsive}>
            {product}
          </Carousel>
        </div>
      );
    }
  export default ClientWork;
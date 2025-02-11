import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import product1 from "../img/product_img (1).jpg"
import product2 from "../img/product_img (2).jpg"
import product3 from "../img/product_img (3).jpg"
import product4 from "../img/product_img (4).jpg"
import product5 from "../img/product_img (5).jpg"
import product6 from "../img/product_img (6).jpg"
import product7 from "../img/product_img (7).jpg"
import product8 from "../img/product_img (8).jpg"
import product9 from "../img/product_img (9).jpg"
import product10 from "../img/product_img (10).jpg"
import product11 from "../img/product_img (11).jpg"
import { Card, Image } from "antd";

export default function Home() {
  const products = [
    { image: product1, name: 'new abbaya', price: 100 },
    { image: product2, name: 'Product 2', price: 200 },
    { image: product3, name: 'Product 3', price: 300 },
    { image: product4, name: 'Product 4', price: 400 },
    { image: product5, name: 'Product 5', price: 500 },
    { image: product6, name: 'Product 6', price: 600 },
    { image: product7, name: 'Product 7', price: 700 },
    { image: product8, name: 'Product 8', price: 800 },
    { image: product9, name: 'Product 9', price: 900 },
    { image: product10, name: 'Product 10', price: 1000 },
    { image: product11, name: 'Product 11', price: 1100 }
  ];
  // SLIDER
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow:4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // When screen size is less than 1024px
        settings: {
          slidesToShow: 3, // Show 3 items
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // When screen size is less than 768px
        settings: {
          slidesToShow: 2, // Show 2 items
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // When screen size is less than 480px
        settings: {
          slidesToShow: 1, // Show 1 item
          slidesToScroll: 1,
        },
      },
    ],
  };
  // SLIDER
  function fn(E) {
    // const a = JSON.stringify(E);

    const existingCart = JSON.parse(localStorage.getItem("order")) || [];
    console.log(existingCart);
    
    existingCart.push(E)
    localStorage.setItem("order", JSON.stringify(existingCart));

  }
return(
  <>
  {/* BANNER START */}
<div>
<div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div  className="d-block w-100 img3" alt="..." ></div>
    </div>
    <div className="carousel-item">
      <div  className="d-block w-100 img2" alt="..." ></div>
    </div>
    <div className="carousel-item">
      <div  className="d-block w-100 img1" alt="..."></div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
{/* BANNER END */}
{/* SLIDER START */}
<div className="slider-container container-fluid mx-auto my-5">
      <Slider {...settings} > 
      {products.map((product, index) => (
    <div key={index}>
      <Card
        hoverable
        className='mx-2'
        cover={<Image src={product.image} className='img-product' />}
      >
        <div className='d-flex flex-row justify-content-between align-items-center'>
          <button className='addbtn-1' onClick={() => fn(product)}>Add to Cart</button>
          <h5>Rs:{product.price}</h5>
        </div>

      </Card>
    </div>
  ))}
      </Slider>
    </div>
    <div className="my-5 text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quisquam earum optio ipsam mollitia cum odit officia dolor porro. Nulla laudantium voluptate est, quisquam iusto aliquam, culpa facere beatae vel ex minima numquam quo in ab pariatur. Minus optio dolorem nobis dolores quia dolor incidunt, eligendi nihil molestiae harum modi rem itaque nisi exercitationem magni suscipit cum! Minima possimus, quos itaque pariatur exercitationem necessitatibus cupiditate sit. Earum hic, repellat quibusdam pariatur maiores in rem fugiat ratione fuga natus quia exercitationem est rerum, labore numquam eligendi nesciunt quas facilis eum! Nulla doloribus sint consequatur deserunt ratione ut, modi iste vero! Impedit, quia quam asperiores consectetur voluptatum sed eaque ea quo dolorem culpa, id sapiente, maxime eum nostrum rem. Nisi nesciunt excepturi quidem officiis laudantium quo eaque labore aliquam, asperiores facere minima unde recusandae tempora illo ex sed autem cumque velit necessitatibus facilis voluptatum vitae. Provident ab, iste delectus ea nam id inventore autem voluptas ex optio aperiam ipsa! Inventore labore quasi itaque velit officiis consequatur, minima quia ipsa provident laboriosam dolore veniam eius! Culpa autem blanditiis tenetur neque repellat odio rerum, sapiente minima id, ipsam minus quos! Earum ex distinctio rem alias, inventore, sunt culpa, molestiae quis in ratione consequuntur id.
    </div>
{/* SLIDER END */}
  </>
)
}

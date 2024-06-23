import React, { useEffect, useState } from "react";
import "./index.css";
import { Jumbotron } from "reactstrap";
// import Link  from 'react-router-dom/Link';
import {images} from "../../Assets/Images";
import Heading from "../../Components/Heading";
import { ShopexCard } from "../../Components/ShopexCard";
import FeaturedProducts from "../../Components/FeaturedProductsCard";
import LatestProducts from "../../Components/LatestProducts";
import TrendingProducts from "../../Components/TrendingProductsCard";
import TopCategory from "../../Components/TopCategoryCard";
import { Button } from "../../Components/Button";
import BlogsCard from "../../Components/BlogsCard";
import { useContext } from "react";
import { GetProducts } from "../../Layouts/Main";

export default function Home() {

    const products = useContext(GetProducts);

    return (
      <>
        <Jumbotron>
          <div className="row container">
            <div className="col-sm-2">
              <img src={images.JumboPic2} className="img-fluid h-jp2" />
            </div>

            <div className="col-12 col-sm-7">
              <div className="row row-header">
                <div className="col-12 col-sm-8 heading">
                  <p style={{ color: "var(--primary-color)" }}>
                    Best Furniture For Your Castle....
                  </p>
                  <b>New Furniture Collection Trends in 2020</b>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
                  </p>
                  <button className="btnn">
                    <div className="align-item-center btnn-text">Shop Now</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3 container">
              <img
                src={images.JumboPic1}
                className="img-fluid"
                style={{ height: "450px" }}
              />
            </div>
          </div>
        </Jumbotron>

        <div className="sec-3 my-4 container">
          <div className="row justify-content-center d-flex">
            <Heading props="Featured Products" />
            <div className="row container d-flex justify-content-center my-5">
            {products.featuredProducts && products.featuredProducts.slice(0,4).map(product => <FeaturedProducts product={product} key={product.id} />)}

            </div>
          </div>
        </div>
        <div className="sec-3 my-4 container">
          <div className="row justify-content-center d-flex">
            <Heading props="Latest Products" />
            <div className="row container d-flex justify-content-center my-5">
            {products.latestProducts && products.latestProducts.slice(0,6).map(product => <LatestProducts product={product} key={product.id} />)}
            </div>
          </div>
        </div>
        <div className="sec-3 my-4 container">
          <div className="row justify-content-center d-flex">
            <Heading props="What Shopex Offer!" />
            <div className="row container d-flex justify-content-center my-5">
              
            {products.shopexCard && products.shopexCard.slice(0,4).map(product => <ShopexCard product={product} key={product.id} />)}

            </div>
          </div>
        </div>
        <div className="sec-3 my-4 container">
          <div className="row justify-content-center d-flex">
            <Heading props="Trending Products" />
            <div className="row container d-flex justify-content-center my-5">
            {products.trendingProducts && products.trendingProducts.slice(0,4).map(product => <TrendingProducts product={product} key={product.id} />)}

            </div>
          </div>
        </div>
        <div className="sec-3 my-4 container">
          <div className="row ">
            <div className="col-12 justify-content-center d-flex">
              <Heading props="Discount Item" />
            </div>
            <div className="col-6 col-sm-8 my-5">
              <Heading props="20% Discount Of All Products" />
              <br />
              <span className="chair-para">Eams Sofa Compact</span>
              <br />
              <br />
              <span className="chair-para2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </span>
              <br />
              <br />
              <span className="chair-para2">
                <span className="fa fa-check"></span> Material expose like
                metals &nbsp;&nbsp;
                <span className="fa fa-check"></span> Material expose like
                metals <br />
                <span className="fa fa-check"></span> Material expose like
                metals &nbsp;&nbsp;
                <span className="fa fa-check"></span> Material expose like
                metals
              </span>{" "}
              <br />
              <br />
              <Button props="Shop Now" />
            </div>
            <div className="col-6 col-sm-4">
              <img
                src={images.o}
                className="img-fluid"
                style={{ height: "500px", weight: "515px" }}
              />
            </div>
          </div>
        </div>
        <div className="sec-3 my-4 container">
          <div className="row justify-content-center d-flex">
            <Heading props="Top Categories" />
            <div className="row container d-flex justify-content-center my-5">
            {products.topCategory && products.topCategory.slice(0,4).map(product => <TopCategory product={product} key={product.id} />)}

              {/* <TopCategory image={images.c} />
              <TopCategory image={images.d} />
              <TopCategory image={images.e} />
              <TopCategory image={images.f} /> */}
            </div>
          </div>
        </div>
        <div className="bg-section my-4">
          <div className="row justify-content-center d-flex">
            <div className="my-5 mx-5">
            <Heading props="Get Leatest Update By Subscribe
Our Newslater" />
</div>
            <div className="row container d-flex justify-content-center my-4">
            <div className=""><Button props="Shop Now" /></div>

            </div>
            
          </div>
        </div>
        <div className="sec-3 my-4 container">
          <div className="row justify-content-center d-flex">
            <Heading props="Latest Blogs" />
            <div className="row container d-flex justify-content-center my-5">
            {products.blogsCard && products.blogsCard.slice(0,3).map(product => <BlogsCard product={product} key={product.id} />)}

            </div>
          </div>
        </div>
        {/* <nav>
        <Link to="arrivals">NewArrivals</Link>
        <Link to="bestSeller">BestSeller</Link>
        <Link to="featured">Featured</Link>
        <Link to="specialOffer">SpecialOffer</Link>
      </nav> */}
      </>
    );
}

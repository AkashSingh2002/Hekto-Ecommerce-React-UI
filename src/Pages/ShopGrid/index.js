import React, { useContext, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Jumbotron } from "reactstrap";
import GridCard from "../../Components/GridCard";
import Heading from "../../Components/Heading";
import ListCard from "../../Components/ListCard";
import { GetProducts } from "../../Layouts/Main";
import './index.css';

function ShopGrid() {
  const [view, setView] = useState('grid');
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState(new Set()); // Tracks favorite product IDs

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  return (
    <>
      <Jumbotron style={{ backgroundColor: "#F6F5FF" }}>
        <Container>
          <Row>
            <Col>
              <Heading props="Shop Grid Default" />
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container>
        <Row>
          <Col className="col-12 col-md-5 col-xl-6">
            <h3 className="grid-head">Ecommerce Accessories & Fashion items</h3>
            <h5 className="grid-head">About 9,620 results (0.62 seconds)</h5>
          </Col>

          <Col className="col-12 col-md-7 col-xl-6">
            <Row>
              <Col className="col-4 d-flex align-items-center">
  <Row className="w-100">
    <Col className="col-6 d-flex align-items-center">
      <label htmlFor="sort">
        <h5 className="grid-head">Sort:</h5>
      </label>
    </Col>
    <Col className="col-6">
      <select
        id="sort"
        name="sort"
        className="form-select"
        style={{
          width: "100%", // Ensures it fits well within its column
          maxWidth: "150px", // Limits dropdown width
          marginLeft: "8px", // Adds spacing between label and dropdown
        }}
      >
        <option value="Match">Match</option>
        <option value="Newest">Newest</option>
        <option value="PriceLowHigh">Price: Low to High</option>
        <option value="PriceHighLow">Price: High to Low</option>
      </select>
    </Col>
  </Row>
</Col>


              <Col className="col-4">
                <Row>
                  <Col className="col-12 col-lg-4">
                    <h5 className="grid-head">View-:</h5>
                  </Col>
                  <Col className="col-12 col-lg-8">
                    <Button onClick={() => setView('grid')} className="btn-grid">
                      <i className="fa fa-lg fa-table"></i>
                    </Button>
                    <Button onClick={() => setView('list')} className="btn-grid">
                      <i className="fa fa-lg fa-list"></i>
                    </Button>
                  </Col>
                </Row>
              </Col>

              <Col className="col-4">
                <div className="wrap">
                  <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search" />
                    <button type="submit" className="searchButton">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-end">
            <Button
              className="btn-grid"
              onClick={() => setShowFavorites((prev) => !prev)}
            >
              {showFavorites ? "Show All" : "Show Favorites"}
            </Button>
          </Col>
        </Row>
      </Container>

      {view === 'grid' && (
        <ShopGridDefault
          showFavorites={showFavorites}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
      {view === 'list' && <ShopList />}
    </>
  );
}

function ShopGridDefault({ showFavorites, favorites, toggleFavorite }) {
  const products = useContext(GetProducts);

  const filteredProducts = showFavorites
    ? products.shopGrid?.filter((product) => favorites.has(product.id))
    : products.shopGrid;

  return (
    <div className="row justify-content-center d-flex">
      <div className="row container d-flex justify-content-center my-5">
        {filteredProducts &&
          filteredProducts.slice(0, 12).map((product) => (
            <GridCard
              product={product}
              key={product.id}
              isFavorite={favorites.has(product.id)}
              toggleFavorite={() => toggleFavorite(product.id)}
            />
          ))}
      </div>
    </div>
  );
}

function ShopList() {
  const products = useContext(GetProducts);

  return (
    <div className="row justify-content-center d-flex">
      <div className="row container d-flex justify-content-center my-5">
        {products.listView &&
          products.listView.slice(0, 7).map((product) => (
            <ListCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default ShopGrid;

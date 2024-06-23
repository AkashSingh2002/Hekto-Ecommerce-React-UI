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
  
    

  return (
    <>
      <Jumbotron style={{ "background-color": "#F6F5FF" }}>
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
          <h3 className="grid-head">Ecommerce Accesories & Fashion item</h3>
          <h5 className="grid-head">About 9,620 results (0.62 seconds)</h5>
        </Col>

        <Col className="col-12 col-md-7 col-xl-6">
        <Row>
        <Col className="col-4">
            <Row>
                <Col className="col-12 col-lg-6">
          <label for="cars"> <h5 className="grid-head">Sort -:</h5></label>
                </Col>
                <Col className="col-12 col-lg-6 selectGrid align-item-center d-flex">
        <select id="cars" name="cars" >
            <option value="Match">Match</option>
            <option value="Match">Match</option>
            <option value="Match">Match</option>
            <option value="Match">Match</option>
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
        <Button onClick={() => {setView('grid')}} className="btn-grid">
        <i class="fa fa-lg fa-table"></i>
        </Button>
        <Button onClick={() => {setView('list')}} className="btn-grid">
        <i class="fa fa-lg fa-list"></i>
        </Button>
            </Col>
        </Row>
        </Col>
        <Col className="col-4">
          <div class="wrap">
            <div class="search">
              <input type="text" class="searchTerm" placeholder="Search" />
              <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </Col>
        </Row>
        </Col>
      </Row>
    </Container>
    
   { view === 'grid' && <ShopGridDefault /> }
   { view === 'list' && <ShopList /> }

      
    </>
  );
}

function ShopGridDefault(){

  const products = useContext(GetProducts);
  return (
    <div className="row justify-content-center d-flex">
        <div className="row container d-flex justify-content-center my-5">
          {products.shopGrid &&
            products.shopGrid
              .slice(0, 12)
              .map((product) => (
                <GridCard product={product} key={product.id} />
              ))}
        </div>
      </div>
  )
}

function ShopList(){
  const products = useContext(GetProducts);
  return (
    <div className="row justify-content-center d-flex">
        <div className="row container d-flex justify-content-center my-5">
          {products.listView &&
            products.listView
              .slice(0, 7)
              .map((product) => (
                <ListCard product={product} key={product.id} />
              ))}
        </div>
      </div>
  )
}

export default ShopGrid;

import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";


function Products() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async (page = 1) => {
    setIsLoading(true);
    const resProduct = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`);
    console.log(resProduct);
    setProducts(resProduct.data.products);
    setPagination(resProduct.data.pagination);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [])

  return (<>

    <div className="container mt-md-5 mt-3 mb-7">
      <Loading isLoading={isLoading}/>
      <div className="row">
        <div className="col-md-4">
          <div className="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
            <div className="card border-0">
              <div className="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                <div className="d-flex justify-content-between align-items-center pe-1">
                  <h4 className="mb-0">
                    Lorem ipsum
                  </h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="card-body py-0">
                  <ul className="list-unstyled">
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum123</a></li>
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingTwo" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                <div className="d-flex justify-content-between align-items-center pe-1">
                  <h4 className="mb-0">
                    Lorem ipsum
                  </h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="card-body py-0">
                  <ul className="list-unstyled">
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingThree" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                <div className="d-flex justify-content-between align-items-center pe-1">
                  <h4 className="mb-0">
                    Lorem ipsum
                  </h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="card-body py-0">
                  <ul className="list-unstyled">
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" className="py-2 d-block text-muted">Lorem ipsum</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            {products.map((product) => {
              return (
                <div className="col-md-6" key={product.id}>
                  <div className="card border-0 mb-4 position-relative position-relative">
                    <img src={product.imageUrl} className="card-img-top object-fit rounded-0" alt="..." />
                    <a href="#" className="text-dark">
                      <i className="far fa-heart position-absolute" style={{ right: '16px', top: '16px' }}></i>
                    </a>
                    <div className="card-body p-0">
                      <h4 className="mb-0 mt-3">
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                      </h4>
                      <p className="card-text mb-0">NT$ {product.origin_price}
                        <span className="text-muted float-right "><del>NT${product.price}</del></span>
                      </p>
                      <p className="text-muted mt-3"></p>
                    </div>
                  </div>
                </div>
              )
            })}


          </div>
          <nav className="d-flex justify-content-center">
            <Pagination
              pagination={pagination}
              changePage={getProducts} />
          </nav>
        </div>
      </div>
    </div>

  </>)
}

export default Products;
import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from 'react-rating-stars-component'


const OurStore = () => {
  return (
    <>
      <Meta title={"Our Store"}/>
      <BreadCrumb title="Our Store"/>
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" className='form-check-input' id='1' />
                      <label htmlFor="1" className='form-check-label'>In Stock (1)</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className='form-check-input' id='2' />
                      <label htmlFor="2" className='form-check-label'>Out of Stock (0)</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="Form"/>
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="To"/>
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" className='form-check-input' id='color-1' />
                      <label htmlFor="color-1" className='form-check-label'>S (2)</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className='form-check-input' id='color-2' />
                      <label htmlFor="color-2" className='form-check-label'>M (2)</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tagis flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary roundded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary roundded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary roundded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary roundded-3 py-2 px-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className='img-fluid'  alt="" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                      <p>$ 300</p>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className='img-fluid'  alt="" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                      <p>$ 300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0  col-3">Sort By:</p>
                    <select name="" id="" className='form-control form-select'>
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="">Alphabetically, A-Z</option>
                      <option value="">Alphabetically, A-Z</option>
                      <option value="">Price, low to high</option>
                      <option value="">Price, high to low</option>
                      <option value="">Date, old to new</option>
                      <option value="">Date, new to old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img src="images/gr4.svg" className='d-block img-fluid' alt="" />
                      <img src="images/gr3.svg" className='d-block img-fluid' alt="" />
                      <img src="images/gr2.svg" className='d-block img-fluid' alt="" />
                      <img src="images/gr.svg" className='d-block img-fluid' alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

import floorPlanLogo from '../images/floorplan_site_logo.png';
import banner from '../images/Barn_House.jpg';

export default () => {

  const [plans, setPlans] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState(false);
  const [minSqFt, setMinSqFt] = useState(null);
  const [maxSqFt, setMaxSqFt] = useState(null);
  const [beds, setBeds] = useState(null);
  const [baths, setBaths] = useState(null);
  const [stories, setStories] = useState(null);
  const [chimney, setChimney] = useState(false);
  const [garage, setGarage] = useState(false);

  //Loads only plans that match filter values from DB
  if(filter === true){
    useEffect(() => {
      axios.get('http://localhost:8000/api/plans/minSqFt-' + minSqFt + '/maxSqFt-' + maxSqFt + '/beds-' + beds + '/baths-' + baths + '/stories-' + stories + '/chimney-' + chimney + '/garage-' + garage)
        .then(res => {
          setPlans(res.data)
          setLoaded(true)
        })
    }, [])
  } else {
    // loads all plans from the DB
  useEffect (() => {
    axios.get('http://localhost:8000/api/plans')
      .then(res => {
        setPlans(res.data)
        setLoaded(true)
      })
  }, [])
  }

  const changeChimney = () => {
    setChimney(!chimney);
  }

  const changeGarage = () => {
    setGarage(!garage);
  }

  const changeFilter = () => {
    setFilter(!filter);
  }

  return (
    <div className="container-fluid" style={{margin: "0px", padding: "0px"}}>
      <div className="row bg-primary">
        <p></p>
      </div>
      {/* Navbar */}
      <div className="row">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img className="me-3" src={floorPlanLogo} alt="Floor Plan Logo" id="logo" style={{maxWidth: "50px"}} />
            </a>
              <span class="navbar-text">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                </span>
            </div>
          </nav>
      </div>
      {/* Banner */}
      <div className="row">
        <div className="card">
          <img className="img-fluid card-img" src={banner} alt="exterior home picture" />
          <div className="card-img-overlay d-flex align-items-center justify-content-center">
            <div className="d-flex p-3" style={{backgroundColor: "rgba(38,38,38,.5)"}}>
              <h1 className="card-text p-4 text-white" style={{border: "10px solid white", fontSize: "450%"}}>Blue Home Designers</h1>
            </div>
          </div> 
        </div>
      </div>
      {/* Filter bar */}
      <div className="row mb-3">
        <div className="d-flex justify-content-center bg-dark p-2">
          <form className="d-flex justify-content-evenly align-items-center">
            <div className="mx-2">
              <select className="form-select" onChange={(e) => { setMinSqFt(e.target.value) }}>
                <option selected>Min SqFt</option>
                <option>1000</option>
                <option>1100</option>
                <option>1200</option>
                <option>1300</option>
                <option>1400</option>
                <option>1500</option>
                <option>1600</option>
                <option>1700</option>
                <option>1800</option>
                <option>1900</option>
                <option>2000+</option>
              </select>
            </div>
            <div className="mx-2">
              <select className="form-select" onChange={(e) => { setMaxSqFt(e.target.value) }}>
                <option selected>Max SqFt</option>
                <option>1100</option>
                <option>1200</option>
                <option>1300</option>
                <option>1400</option>
                <option>1500</option>
                <option>1600</option>
                <option>1700</option>
                <option>1800</option>
                <option>1900</option>
                <option>2000+</option>
              </select>
            </div>
            <div className="mx-2">
              <select className="form-select" onChange={(e) => { setBeds(e.target.value) }}>
                <option selected>Beds</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
            <div className="mx-2">
              <select className="form-select" onChange={(e) => { setBaths(e.target.value) }}>
                <option selected>Baths</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </div>
            <div className="mx-2">
              <select className="form-select" onChange={(e) => {setStories(e.target.value)}}>
                <option selected>Stories</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </div>
            <div className="mx-2">
              <input className="form-check-input me-1" type="checkbox" name="" id="" onChange={changeChimney} value={chimney}/>
              <label className="form-check-label text-white">Chimney</label>
            </div>
            <div className="mx-2">
              <input className="form-check-input me-1" type="checkbox" name="" id="" onChange={changeGarage} value={garage}/>
              <label className="form-check-label text-white">Garage</label>
            </div>
            <button className="btn btn-success">Apply</button>
          </form>
        </div>
        {/* Display floor plans */}
        <h1 className="my-5">Floor Plans</h1>
      { loaded && plans.map((layout, idx) =>
        <div key={idx} className="mb-5">
          <img className="mb-2" src={layout.img1} alt="" style={{maxWidth: "300px"}} />
          <Link to={"/view/" + layout._id}><h3>{layout.name}</h3></Link>
        </div>
      )}
      </div>
    </div>
  )
}
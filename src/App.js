import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

function App() {
  return (
    <>
      <card>
      <h2 className='text-left text-black my-5'>
        <label>
          Name: &nbsp;  
          <input type="text" name="name" />
        </label>
      </h2>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div class="card">
              <div class="card-body">
                <h4 class="card-name">
                  <label>
                    Title
                    <input type="text" name="name" />
                  </label>
                </h4>
                <div className="card-img-top" />
                <button class="btn btn-outline-primary mr-1" href="#">Upload file</button>&nbsp;&nbsp;&nbsp;
                <button class="btn btn-outline-primary" href="#">Submit</button>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div class="card">
              <div class="card-body">
                <h4 class="card-name">
                  <label>
                    Title
                    <input type="text" name="name" />
                  </label>
                </h4>
                <div className="card-img-top" />
                <button class="btn btn-outline-primary mr-1" href="#">Upload file</button>&nbsp;&nbsp;&nbsp;
                <button class="btn btn-outline-primary" href="#">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </card>
    </>
  )
}

export default App;
import React,{useState} from 'react';

function App() {
  const [monthly, setMonthly] = useState(false);

  return (
    <div className="wrapper">
      <h2>Our Pricing</h2>
      
      <div className="toggle">
        <p className="toggle__p" style={{color:monthly?'':'black'}}>Anually</p>
        <div className={`toggle__bg-anually${monthly? '-off' : ''}`}>
          <input className="toggle__switch" type="checkbox" onClick={()=>setMonthly(!monthly)} />
        </div>
        <p className="toggle__p" style={{color:monthly?'black':''}}>Monthly</p>
      </div>
      <div className="cards">
        <div className="card">
          <h3>Basic</h3>
          {
          monthly?<h1 class="card__monthly">$19.99</h1>:
          <h1 className="card__annually">$199.99</h1>
          }
          <p>500 GB Storage</p>
          <p>2 Users Allowed</p>
          <p>Send up to 3 GB</p>
          <button>LEARN MORE</button>
        </div>

        <div className="card2">
        <h3>Professional</h3>
        {
        monthly?<h1 class="card__monthly">$24.99</h1>:
        <h1 className="card__annually">$249.99</h1>
        }
        <p>1 TB Storage</p>
        <p>5 Users Allowed</p>
        <p>Send up to 10 GB</p>
        <button>LEARN MORE</button>
        </div>

        <div className="card">
        <h3>Master</h3>
        {
        monthly?<h1 class="card__monthly">$39.99</h1>:
        <h1 className="card__annually">$399.99</h1>
        }
        <p>2 TB Storage</p>
        <p>10 Users Allowed</p>
        <p>Send up to 20 GB</p>
        <button>LEARN MORE</button>
        </div>
      </div>

    </div>
  );
}

export default App;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPage from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import Footer from './Components/Footer';

const App = () => {
  const [category, setCategory] = useState("general");
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingChange = (status) => {
    setIsLoading(status);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Background Gradient */}
      <div
        className="position-fixed top-0 start-0 w-100 h-100 -z-10"
        style={{
          background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)',
        }}
      ></div>

      {/* Navbar */}
      <NavbarPage setCategory={setCategory} />

      {/* Main Content */}
      <div className="flex-grow-1">
        <NewsBoard category={category} onLoadingChange={handleLoadingChange} />
      </div>

      <div className='z-3'>
        {!isLoading && <Footer />}
      </div>
    </div>
  );
};

export default App;

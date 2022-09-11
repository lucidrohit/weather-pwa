import { useState, useRef } from "react";
import "./App.css";
import { getData } from "./utils/weatherApi/weatherApi";
import { BallTriangle } from "react-loader-spinner";

function App() {
  const cityRef = useRef();
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});

  const handleClick = async () => {
    setLoading(true);
    const data = await getData(cityRef.current.value);
    setWeatherData(data);
    setLoading(false);
  };

  return (
    <div className="App">
      {!loading ? (
        <header className="App-header">
          <img
            src={weatherData.icon}
            alt={weatherData.text}
            style={{ width: "200px" }}
          />
          <p>{weatherData.text}</p>
          <h3>Temp:{weatherData.temperature} Deg Celcius</h3>
          <p>
            {weatherData.name},{weatherData.region},{weatherData.country}
          </p>
        </header>
      ) : (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      )}
      <input
        type={"text"}
        ref={cityRef}
        style={{
          height: "40px",
          width: "300px",
          borderRadius: "10px",
          padding: "0.5rem 1rem",
          fontSize: "25px",
          fontWeight:"700",
          outline: "none",
          textAlign: "center",
          display: "block",
          marginTop: "3rem",
        }}
        placeholder="City..."
      />
      <input
        type={"button"}
        onClick={handleClick}
        value="Search"
        style={{
          height: "50px",
          width: "200px",
          borderRadius: "10px",
          padding: "0.5rem 1rem",
          fontSize: "20px",
          margin: "2rem",
          textAlign: "center",
          display: "block",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default App;

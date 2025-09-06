import { useEffect, useState } from "react";

const Card = ({name, flag, abbr}) => {
    return(
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            borderRadius: "4px",
            height: "220px",
            width: "220px",
            textAlign: "center",

        }} 
        >
            <img src={flag} 
            alt={`Flag of ${abbr}`}
            style={{ height: "100px", width: "100px"}}/>
            <h2>{name}</h2>

        </div>
    )
}
export default function Countries(){
    const API = "https://xcountries-backend.azurewebsites.net/all"
    // let temp = [0,1,2,3,4,5,6,7];
    const [countryData, setCountryData] = useState([])

    useEffect(()=>{
        fetch(API)
        .then(response => response.json())
        .then(data => setCountryData(data))
        .catch((error) => console.error("Error fetching data:" + error));
    },[])
    return (
    <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
        {countryData.map((Country) => (
        <Card name={Country.name} flag={Country.flag} abbr={Country.abbr} key={Country.abbr + Country.name + Math.random()}/>
    ))}
    </div>
    );

}
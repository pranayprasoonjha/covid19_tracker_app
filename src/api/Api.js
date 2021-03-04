import axios from 'axios';
const url_world = 'https://covid19.mathdro.id/api';


const url_states_data = 'https://api.covid19india.org/data.json';


export const fetchStateData = async() => {
    try{
        const { data:{statewise} } = await axios.get(url_states_data);
        return statewise;
    }
    catch(err){
        console.log(err);
    }

}







export const fetchData = async (country)  => {
    let changeableUrl =url_world;

    if(country) {
        changeableUrl=`${url_world}/countries/${country}`;
    }

   try {
       const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);

       const req_data = {confirmed,recovered,deaths,lastUpdate};
      
       return req_data;
   }
   catch(error)
   {
       console.log(error);
   }
    
}

export const fetchDailyData = async () => {

    try {
        //the data we need to return here is array
        const { data } = await axios.get(`${url_world}/daily`); //string literal using `${}`
        const req_data = data.map((dailyData) => ({
            //we only want 3 values in object - confirmed, deaths, date.
            confirmed:dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

       
        return req_data; // This will return arrray of objects having three values
    }

    catch(err){
        console.log(err);
    }
}

export const fetchCountries = async () => {
    try{
        const {data : { countries }} = await axios.get(`${url_world}/countries`);
        return countries.map((country) => country.name);
    }
    catch(err){
        console.log(err);
    }
}
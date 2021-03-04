import React from 'react';

import { Navbar, Carousel, Cards, Graph, SelectCountry, Table, Footer, ChatBot } from './components';

import styles from './App.module.css';

import { fetchData } from './api/Api';

import { fetchStateData } from './api/Api';




class App extends React.Component {

    state = {
        data : {},
        data1 : {},
        country : '',

    }

    
  
    

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data : fetchedData});

        const fetchedStateData = await fetchStateData();
        this.setState({data1 : fetchedStateData});
    }


    

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
       
        this.setState({ data: fetchedData, country: country });
      
    }

    render() {
       const {data,country} = this.state;
       const {data1} = this.state;
        

        return (
            <div className={styles.container}>
                <Navbar />
                <Carousel />
                <Cards data= {data} />
                <Graph  data={data} country={country}/>
                
                <SelectCountry  handleCountryChange={this.handleCountryChange}/>
                <Table  data = {data1}/>
               
                <Footer />
                <ChatBot />
                
            </div>
        );
    }
}



export default App;;
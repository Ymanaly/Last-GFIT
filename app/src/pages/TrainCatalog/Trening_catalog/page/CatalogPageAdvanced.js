import React from 'react';
import Navbar from "../../../../components/navbar/Navbar";
import CatalogJun from "../CatalogJun";
import Footer from "../../../../components/footer/Footer";
import '../css/catalog.module.css';
import CatalogSen from "../CatalogSen";


function CatalogPageAdvanced(props) {
    return (
        <div>
            <Navbar/>
            <CatalogSen/>
            <Footer/>
        </div>
    );
}

export default CatalogPageAdvanced;
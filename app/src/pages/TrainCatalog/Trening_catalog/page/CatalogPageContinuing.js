import React from 'react';
import Navbar from "../../../../components/navbar/Navbar";
import CatalogJun from "../CatalogJun";
import Footer from "../../../../components/footer/Footer";
import '../css/catalog.module.css';
import CatalogMid from "../CatalogMid";


function CatalogPageContinuing(props) {
    return (
        <div>
            <Navbar/>
            <CatalogMid/>
            <Footer/>
        </div>
    );
}

export default CatalogPageContinuing;
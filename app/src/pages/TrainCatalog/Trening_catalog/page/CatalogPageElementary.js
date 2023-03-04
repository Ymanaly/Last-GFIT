import React from 'react';
import CatalogJun from "../CatalogJun";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer/Footer";
import '../css/catalog.module.css';


function CatalogPageElementary(props) {
    return (
        <div>
            <Navbar/>
            <CatalogJun/>
            <Footer/>
        </div>
    );
}

export default CatalogPageElementary;
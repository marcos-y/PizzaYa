import React from 'react';
import './Sucursal.css';
import logoContinental from './logoContinental1.jpg';

const Sucursal = () => {

    return (
        <>
            <div className="sucursal">

                <div className="imglogo1">
                    <img src={logoContinental} alt="" className="logo"></img>
                    <div className="descripcion">
                        <div className="clase">
                            <img src="https://cdn.icon-icons.com/icons2/606/PNG/512/store_icon-icons.com_56116.png" alt="" className="fork"></img>
                            <h6>sucursales</h6>
                        </div>

                        <h3>Entre rios 415</h3>
                        <h7>Avenida Entre Rios 415</h7>
                        <h7>Tel. +54 11 2345425</h7>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Sucursal;
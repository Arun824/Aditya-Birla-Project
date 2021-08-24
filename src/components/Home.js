import React, {useEffect, useContext} from 'react'
import ClaimformComponent from "./ClaimformComponent";
import HealthCardComponent from "./HealthCardComponent";
import KycComponent from "./KycComponent";
import ImplantStikerComponent from "./ImplantStikerComponent";
import DocumentComponent from "./DocumentComponent";
import InstructionComponent from "./InstructionComponent";
import FooterButtonComponent from "./FooterButtonComponent";
import Navbar from "./Navbar";

import {useParams} from 'react-router-dom'


import Card from "./Card";
import Query from "./Query";

/* actions */
import userData from '../actions/userData'

/* store */
import { StoreContext } from "../contexts/Store";

const Home = () => {


 const {callid} = useParams();

    const { state, dispatch } = useContext(StoreContext);

    const { userdata } = state;

    useEffect(() => {
        userData(callid,"customer_name" ,dispatch);
    }, [])

    return (
        <div style={{ backgroundColor: "rgb(247 247 247)"}}>
        <Navbar />
        <Card />
        <Query />
        <ClaimformComponent />
        <HealthCardComponent />
        <KycComponent />
        <ImplantStikerComponent />
        <DocumentComponent />
        <InstructionComponent />
        <FooterButtonComponent />
      </div>
    )
}

export default Home;
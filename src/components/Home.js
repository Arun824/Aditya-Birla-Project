import React, {useEffect, useContext} from 'react'
import ClaimformComponent from "./ClaimformComponent";
import HealthCardComponent from "./HealthCardComponent";
import KycComponent from "./KycComponent";
import ImplantStikerComponent from "./ImplantStikerComponent";
import DocumentComponent from "./DocumentComponent";
import InstructionComponent from "./InstructionComponent";
import FooterButtonComponent from "./FooterButtonComponent";
import Navbar from "./Navbar";
import Card from "./Card";
import Query from "./Query";

import {useParams} from 'react-router-dom'

/* actions */
import userData from '../actions/userData'

/* store */
import { StoreContext } from "../contexts/Store";

const Home = () => {

 const {callid} = useParams();
 
  const { state, dispatch } = useContext(StoreContext);
   
    const { userdata } = state;
    
    useEffect(() => {
        userData(callid,"policy_holder_name" ,dispatch);
    }, [])

    return (
        <div style={{ backgroundColor: "rgb(247 247 247)"}} >
        <Navbar />
        <Card data={userdata}/>
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
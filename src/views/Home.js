import React from "react";

import Hero from "../components/Hero";
import CreditCard from "../components/CreditCard";
import CardList from "../components/CardList";
import CenteredButton from "../components/CenteredButton";
import Institutional from "../components/Institutional";
import Faq from "../components/Faq";

import posts from "../data/posts";

const Home = ({onClick}) =>  (
    <>
     
      <Hero onClick={onClick}/>

      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton onClick={onClick}>Abra sua conta</CenteredButton>
      <Institutional onClick={onClick}/>
      <Faq />
     

    </>
  );


export default Home;

import React from 'react';
import Navigation from '../components/Navigation';
import Video from '../components/Video';
import Project from '../components/Project';
import Layout from '../components/Layout';
import RoadMap from '../components/RoadMap';
import RoadMapDesriprtion from '../components/RoadMapDesriprtion';
import Photos from '../components/Photos';
import Tokenomics from '../components/Tokenomics';
import Merchandise from '../components/Merchandise';
import Games from '../components/Games';
import GamePreview from '../components/GamePreview';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Layout>
        <Navigation />
        <Video />
        <Project />
        <RoadMap/>
        <RoadMapDesriprtion/>
        <Photos/>
        <Tokenomics/>
        <Merchandise/>
        <Games/>
        <GamePreview/>
        <SocialMedia/>
        <Footer/>
      </Layout>
    </>
  );
}

export default Home;

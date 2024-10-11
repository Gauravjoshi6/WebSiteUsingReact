import React from "react";
import { Component } from "./Component";
import abilities1 from "../assests/abilities 2.png";
import artifacts1 from "../assests/artifacts 2.png";
import image from "./image.svg";
import locationsPreview1 from "../assests/locations-preview-1.png";
import overview1 from "../assests/overview-1.png";

import "./GamePage2.css";

export const PropertySlide = () => {
  return (
    <div className="property-slide">
      <div className="overlap-group">
        <div className="flexcontainer">
          <p className="text">
            <span className="span">
              ALABAY HERITAGE
              <br />
            </span>
          </p>
          <p className="span-wrapper">
            <span className="text-wrapper-3">tHE LOST ADVENTURE</span>
          </p>
        </div>
        <p className="take-on-the-role-of">
          Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.
        </p>
        <div className="frame-2">
          <img className="overview " alt="Overview" src={overview1} />
          <img className="img-2 " alt="Abilities" src={abilities1} />
          <img className="img-2" alt="Artifacts" src={artifacts1} />
          <img className="locations-preview" alt="Locations preview" src={locationsPreview1} />
        </div>
        <p className="GAME-PREVIEW">
          <span className="text-wrapper-4">GAME</span>
          <span className="text-wrapper-5"> PREVIEW</span>
        </p>
        <Component className="component-14" polygon="polygon-1-3.svg" property1="frame-40" />
        <div className="frame-3">
          <div className="frame-4">
            <img className="polygon-2" alt="Polygon" src={polygon2} />
          </div>
          <div className="rectangle-wrapper">
            <div className="rectangle" />
          </div>
          <div className="frame-5">
            <img className="polygon-3" alt="Polygon" src={image} />
          </div>
        </div>
      </div>
    </div>
  );
};

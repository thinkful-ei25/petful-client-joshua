'use strict';
import './dashboard.css';
import React from 'react';

export default function Dashboard(props) {
  let catName = (<p>{props.catToAdopt.name}</p>);
  let dogName = (<p>{props.dogToAdopt.name}</p>);
  console.log(props.catToAdopt.imageURL);
  let catImageString = props.catToAdopt.imageURL;
  let catImageAlt = props.catToAdopt.imageDescription;
  const catImage = (<img src={catImageString} alt={catImageAlt} />);
  let dogImageString = props.dogToAdopt.imageURL;
  let dogImageAlt = props.dogToAdopt.imageDescription;
  const dogImage = (<img src={dogImageString} alt={dogImageAlt} />);
  const catHeader = (<header className="catSection">{catName}{catImage}</header>);
  const catDl = (<dl>
    <dt>Sex: {props.catToAdopt.sex}</dt>
    <dt>Age: {props.catToAdopt.age}</dt>
    <dt>Breed: {props.catToAdopt.breed}</dt>
    <dt>Story: {props.catToAdopt.story}</dt>
  </dl>);
  const dogDl = (<dl>
    <dt>Sex: {props.dogToAdopt.sex}</dt>
    <dt>Age: {props.dogToAdopt.age}</dt>
    <dt>Breed: {props.dogToAdopt.breed}</dt>
    <dt>Story: {props.dogToAdopt.story}</dt>
  </dl>)
  const adoptButton = (<button>Adopt!</button>);
  const catToAdopt = (<section>{catHeader}{catDl}{adoptButton}</section>);    
  const dogHeader = (<header className="dogSection">{dogName}{dogImage}</header>);
  const dogToAdopt = (<section>{dogHeader}{dogDl}{adoptButton}</section>);
  return (
    <div className="spread">
      {catToAdopt}{dogToAdopt}
    </div>

  );
}


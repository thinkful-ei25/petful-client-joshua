'use strict';
import React from 'react';

export default function Dashboard(props) {
  console.log(props.catToAdopt.imageURL);
  let catImageString = props.catToAdopt.imageURL;
  let catImageAlt = props.catToAdopt.imageDescription;
  const catImage = (<img src={catImageString} alt={catImageAlt}/>);
  let dogImageString = props.dogToAdopt.imageURL;
  let dogImageAlt = props.dogToAdopt.imageDescription;
  const dogImage = (<img src={dogImageString} alt={dogImageAlt} />);
  const catToAdopt = (
  <div className="catSection">{catImage}</div>);
  const dogToAdopt =(
    <div className="dogSection">{dogImage}</div>
  );
  return (
    <div>here be the dashboard arggggghhh!
      {catToAdopt}{dogToAdopt}
    </div>

  );
}


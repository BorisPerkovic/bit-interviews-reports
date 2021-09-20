import React from 'react';
import { DEVELOPER_TEAM } from '../../../constants/endpoints';
import TeamCards from "./TeamCards/TeamCards";

import classes from "./Team.module.css";

/* Developer Team JSX component  */
const Team = () => {
  return (
    <div className={`row vh-100 d-flex justify-content-center align-content-center ${classes["team-text"]}`}>
      <h1 className="text-center mb-5">Our Developer Team</h1>
      {DEVELOPER_TEAM.map((developer, index) => <TeamCards key={index} developer={developer} />)}
    </div>
  );
};

export default Team;



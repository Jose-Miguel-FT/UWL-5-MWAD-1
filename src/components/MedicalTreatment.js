import React from 'react';

function MedicalTreatment(props) {
  return (
    <div>
      <ul>
        <li>{props.treatId}</li>
        <li>{props.treatCourseId}</li>
        <li>{props.type}</li>
        <li>{props.category}</li>
        <li>{props.name}</li>
        <li>{props.StartDate}</li>
      </ul>
    </div>
  )
}

export default MedicalTreatment;
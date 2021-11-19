import React from "react";
import Alert from "react-bootstrap/Alert";

const Alerts = ({ showAlert, setShowAlert }) => {
  if (showAlert) {
    return (
      <div className="value-alert">
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <p>Min Value and Max Value cannot overlap</p>
        </Alert>
      </div>
    );
  }

  return null;
};

export default Alerts;

import React from "react";

const Alerts = (props) => {
    return (
        <div className={`alert alert-${props.alert} d-inline-block p-1`} role="alert">
            {props.msg}
        </div>
    );
};

export default Alerts;

import React from "react";
import DriverPassportForm from "./DriverPassportForm";
import DriverLicenseForm from "./DriverLicenseForm";

const AddDriver = ({state, toggleShowForm, addNewDriver, toggleUpdateDriver, updateDriver}) => {
    return (
        <>
            {state.show_add_form ? <>
                <DriverPassportForm/>
                <DriverLicenseForm/>
            </> : null}
            {state.show_add_form ?
                (state.update_driver !== null ?
                    <button className="button button--add" onClick={updateDriver}>Обновить водителя</button>
                    : <button className="button button--add" onClick={addNewDriver}>Добавить водителя</button>)
                : <button className="button button--add" onClick={() => toggleShowForm(!state.show_add_form)}>Добавить водителя</button>}
        </>
    );
}

export default AddDriver;
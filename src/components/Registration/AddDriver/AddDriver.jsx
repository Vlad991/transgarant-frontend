import React from "react";
import DriverForm from "./DriverForm";

const AddDriver = ({state, toggleShowForm, addNewDriver, toggleUpdateDriver, updateDriver}) => {
    return (
        <>
            {state.show_add_form ? <>
                <DriverForm/>
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
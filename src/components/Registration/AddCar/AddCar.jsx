import React from "react";
import AddCarForm from "./AddCarForm";
import CarCertificateForm from "./CarCertificateForm";

const AddCar = ({state, toggleShowForm, addNewCar, toggleUpdateCar, updateCar}) => {
    return (
        <>
            {state.show_add_form ? <>
                <AddCarForm/>
                <CarCertificateForm/>
            </> : null}
            {state.show_add_form ?
                (state.update_car !== null ?
                    <button className="button button--add" onClick={updateCar}>Обновить машину</button>
                    : <button className="button button--add" onClick={addNewCar}>Добавить машину</button>)
                : <button className="button button--add" onClick={() => toggleShowForm(!state.show_add_form)}>Добавить машину</button>}
        </>
    );
}

export default AddCar;
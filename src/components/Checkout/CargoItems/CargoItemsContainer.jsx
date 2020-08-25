import React from 'react';
import CargoItems from "./CargoItems";
import {connect} from "react-redux";
import {editPackage, editPallet, editPlace, removePackageThunk, removePalletThunk, removePlaceThunk, setActiveTab, updateCargoThunk} from "../../../redux/cargoReducer";

class CargoItemsContainer extends React.Component {
    state = {
        listActive: false
    }

    toggleList = () => {
        this.setState({
            listActive: !this.state.listActive
        })
    }

    render() {
        return (
            <CargoItems pallets={this.props.pallets}
                        places={this.props.places}
                        packages={this.props.packages}
                        palletTypes={this.props.pallet_types}
                        packageTypes={this.props.package_types}
                        editPlaceBool={this.props.edit_place_bool}
                        editPalletBool={this.props.edit_pallet_bool}
                        editPackageBool={this.props.edit_package_bool}
                        listActive={this.state.listActive}

                        toggleList={this.toggleList}
                        editPlace={this.props.editPlace}
                        removePlace={this.props.removePlaceThunk}
                        editPallet={this.props.editPallet}
                        removePallet={this.props.removePalletThunk}
                        editPackage={this.props.editPackage}
                        removePackage={this.props.removePackageThunk}
                        updateCargo={this.props.updateCargoThunk}
            />
        );
    };
}

let mapStateToProps = (state) => ({
    pallets: state.cargoReducer.pallets,
    places: state.cargoReducer.places,
    packages: state.cargoReducer.packages,
    pallet_types: state.cargoReducer.pallet_types,
    package_types: state.cargoReducer.package_types,
    edit_place_bool: state.cargoReducer.edit_place,
    edit_pallet_bool: state.cargoReducer.edit_pallet,
    edit_package_bool: state.cargoReducer.edit_package,
});

export default connect(mapStateToProps, {setActiveTab, editPlace, removePlaceThunk, editPallet, removePalletThunk, editPackage, removePackageThunk, updateCargoThunk})(CargoItemsContainer);
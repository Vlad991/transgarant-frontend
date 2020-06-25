import React from 'react';
import CargoItems from "./CargoItems";
import {connect} from "react-redux";
import {editPackage, editPallet, editPlace, removePackageThunk, removePalletThunk, removePlaceThunk, setActiveTab, setEditMode} from "../../redux/cargoReducer";

class CargoItemsContainer extends React.Component {
    state = {
        placesActive: false,
        palletsActive: false,
        packagesActive: false,
    }

    togglePlaces = () => {
        this.setState({
            placesActive: !this.state.placesActive
        })
    }

    togglePallets = () => {
        this.setState({
            palletsActive: !this.state.palletsActive
        })
    }

    togglePackages = () => {
        this.setState({
            packagesActive: !this.state.packagesActive
        })
    }

    editPlace = (index) => {
        this.props.editPlace(index);
    }

    removePlace = (index) => {
        this.props.removePlaceThunk(index);
    }

    editPallet = (index) => {
        this.props.editPallet(index);
    }

    removePallet = (index) => {
        this.props.removePalletThunk(index);
    }

    editPackage = (index) => {
        this.props.editPackage(index);
    }

    removePackage = (index) => {
        this.props.removePackageThunk(index);
    }

    render() {
        return (
            <CargoItems pallets={this.props.pallets}
                        places={this.props.places}
                        packages={this.props.packages}
                        palletTypes={this.props.pallet_types}
                        packageTypes={this.props.package_types}
                        palletsActive={this.state.palletsActive}
                        placesActive={this.state.placesActive}
                        packagesActive={this.state.packagesActive}
                        togglePlaces={this.togglePlaces}
                        togglePallets={this.togglePallets}
                        togglePackages={this.togglePackages}
                        editPlace={this.editPlace}
                        removePlace={this.removePlace}
                        editPallet={this.editPallet}
                        removePallet={this.removePallet}
                        editPackage={this.editPackage}
                        removePackage={this.removePackage}
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
});

export default connect(mapStateToProps, {setActiveTab, setEditMode, editPlace, removePlaceThunk, editPallet, removePalletThunk, editPackage, removePackageThunk})(CargoItemsContainer);
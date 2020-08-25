import React from 'react';
import {connect} from "react-redux";
import {Map, YMaps} from "react-yandex-maps";
import {setAddressFromMapThunk, toggleAddressMap} from "../../../redux/checkout/pointsReducer";

let mapState = {
    center: [55.754638, 37.621633],
    zoom: 12,
    controls: []
}

class YMap extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
        this.state = {
            myPlacemark: null,
            ymaps: null
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.address !== this.props.address) {
            let coords = [parseFloat(this.props.address.longitude), parseFloat(this.props.address.latitude)];
            this.getAddress(coords, this.state.myPlacemark, this.state.ymaps);
        }
    }

    onLoad = (ymaps) => {
        const thisObj = this;
        let myPlacemark = new ymaps.Placemark(mapState.center,
            {iconCaption: 'поиск...'}, {preset: 'islands#violetDotIconWithCaption', draggable: true});
        myPlacemark.events.add('dragend', function () {
            thisObj.getAddress(myPlacemark.geometry.getCoordinates(), myPlacemark, ymaps);
            thisObj.props.setAddressFromMapThunk(myPlacemark.geometry.getCoordinates());
        });
        myPlacemark.events.add('click', function (e) {
            e.preventDefault();
        });
        this.setState({myPlacemark, ymaps});
        this.map.geoObjects.add(myPlacemark);
        this.map.events.add('click', function (e) {
            let coords = e.get('coords');
            if (myPlacemark) {
                myPlacemark.geometry.setCoordinates(coords);
            }
            thisObj.getAddress(coords, myPlacemark, ymaps);
            thisObj.props.setAddressFromMapThunk(coords);
        });
    }

    getAddress = (coords, myPlacemark, ymaps) => {
        myPlacemark.properties.set('iconCaption', 'поиск...');
        ymaps.geocode(coords).then(function (res) {
            let firstGeoObject = res.geoObjects.get(0);
            myPlacemark.properties
                .set({
                    iconCaption: [
                        firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                    ].filter(Boolean).join(', '),
                    balloonContent: firstGeoObject.getAddressLine()
                });
        });
        this.forceUpdate();
    }

    render() {
        return (
            <div className={"route__map" + (this.props.show_map ? ' route__map_show' : '')}>
                <YMaps query={{apikey: 'efe74c2e-a140-45f7-b21e-e7608b626295', load: 'package.full'}}>
                    <Map state={mapState}
                         className="address-map"
                         instanceRef={(ref) => this.map = ref}
                         onLoad={(ymaps) => this.onLoad(ymaps)}>
                        <button className="button address-map__button" onClick={() => this.props.toggleAddressMap(false)}>OK</button>
                    </Map>
                </YMaps>
            </div>
        );
    };
}

let mapStateToProps = (state) => ({
    address: state.pointsReducer.address,
    show_map: state.pointsReducer.show_map
});

export default connect(mapStateToProps, {setAddressFromMapThunk, toggleAddressMap})(YMap);
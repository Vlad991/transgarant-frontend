import React from 'react';
import {connect} from "react-redux";
import {Map, YMaps} from "react-yandex-maps";

let mapState = {
    center: [55.754638, 37.621633],
    zoom: 12,
    controls: []
}

class YandexMap extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
        this.state = {
            ymaps: null
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.points !== this.props.points) {
            this.map.geoObjects.removeAll();
            this.state.ymaps.route(this.props.points.map(pointVal => ({type: 'wayPoint', point: pointVal.address.string})), {
                mapStateAutoApply: true
            }).then((route) => {
                route.getPaths().options.set({
                    balloonContentBodyLayout: this.state.ymaps.templateLayoutFactory.createClass('$[properties.humanJamsTime]'),
                    strokeColor: '0000ffff',
                    opacity: 0.9
                });
                this.map.geoObjects.add(route);
            });
        }
    }

    onLoad = (ymaps) => {
        ymaps.route(this.props.points.map(pointVal => ({type: 'wayPoint', point: pointVal.address.string})), {
            mapStateAutoApply: true
        }).then((route) => {
            route.getPaths().options.set({
                // в балуне выводим только информацию о времени движения с учетом пробок
                balloonContentBodyLayout: ymaps.templateLayoutFactory.createClass('$[properties.humanJamsTime]'),
                // можно выставить настройки графики маршруту
                strokeColor: '0000ffff',
                opacity: 0.9
            });
            this.map.geoObjects.add(route);
        });
        this.setState({ymaps});
    }

    render() {
        return (
            <YMaps query={{apikey: 'efe74c2e-a140-45f7-b21e-e7608b626295', load: 'package.full'}}>
                <Map state={mapState}
                     width="100%"
                     height="600px"
                     borderRadius="20px"
                     instanceRef={(ref) => this.map = ref}
                     onLoad={(ymaps) => this.onLoad(ymaps)}
                />
            </YMaps>
        );
    };
}

let mapStateToProps = (state) => ({
    points: state.pointsReducer.points,
    docReturn: state.docReturnReducer.show,
    lastPointLongitude: state.docReturnReducer.address_longitude,
    lastPointLatitude: state.docReturnReducer.address_latitude,
});

export default connect(mapStateToProps, {})(YandexMap);


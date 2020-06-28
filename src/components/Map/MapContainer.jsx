import React from 'react';
import {connect} from "react-redux";
import {Map, YMaps} from "react-yandex-maps";
import {mapAPI} from "../../api/api";

const mapState = {
    center: [55.751574, 37.573856],
    zoom: 9,
    controls: []
}

class MapContainer extends React.Component {
    constructor(props){
        super(props);
        this.map = null;
        this.state = {
            ymaps: null
        };
    }

    getMap = async () => {
        debugger;
        let response = await mapAPI.getMap();
        debugger;
        console.log(response);
    }

    componentDidMount() {
        //this.getMap();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.points !== this.props.points) {
            this.map.geoObjects.removeAll();
            let points = this.props.points.map(pointVal => ({type: 'wayPoint', point: pointVal.address}));
            if (this.props.lastPointAddress)
                points.push({type: 'wayPoint', point: this.props.lastPointAddress});
            this.state.ymaps.route(points, {
                mapStateAutoApply: true
            }).then((route) => {
                route.getPaths().options.set({
                    // в балуне выводим только информацию о времени движения с учетом пробок
                    balloonContentBodyLayout: this.state.ymaps.templateLayoutFactory.createClass('$[properties.humanJamsTime]'),
                    // можно выставить настройки графики маршруту
                    strokeColor: '0000ffff',
                    opacity: 0.9
                });

                // добавляем маршрут на карту
                this.map.geoObjects.add(route);
            });
        }
    }

    onLoad = (ymaps) => {
        ymaps.route(this.props.points.map(pointVal => ({type: 'wayPoint', point: pointVal.address})), {
            mapStateAutoApply: true
        }).then((route) => {
            route.getPaths().options.set({
                // в балуне выводим только информацию о времени движения с учетом пробок
                balloonContentBodyLayout: ymaps.templateLayoutFactory.createClass('$[properties.humanJamsTime]'),
                // можно выставить настройки графики маршруту
                strokeColor: '0000ffff',
                opacity: 0.9
            });

            // добавляем маршрут на карту
            this.map.geoObjects.add(route);
        });
        this.setState({ymaps});
    }

    render() {
        return (
            <div className="tariff__map">
                <YMaps query={{apikey: 'efe74c2e-a140-45f7-b21e-e7608b626295', load: 'package.full'}}>
                    <Map state={mapState}
                         width="100%"
                         height="90%"
                         borderRadius="20px"
                         instanceRef={(ref) =>this.map = ref}
                         onLoad={(ymaps) => this.onLoad(ymaps)}
                    />
                </YMaps>
            </div>
        );
    };
}

let mapStateToProps = (state) => ({
    points: state.pointsReducer.points,
    lastPointAddress: state.docReturnReducer.address
});

export default connect(mapStateToProps, {})(MapContainer);
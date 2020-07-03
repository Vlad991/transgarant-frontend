import React from 'react';
import {Map, TileLayer, Polyline, Marker, Tooltip} from 'react-leaflet';
import model from './core/model';
import {swap} from './core/utils';

import {TilesUrl} from './config';
import {connect} from "react-redux";
import './leaflet.css';
import './styles.css';

class LeafletMap extends React.Component {
    constructor(props) {
        super(props);
        this.model = model;
    }

    componentDidMount() {
        this.loadRoute();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((prevProps.points !== this.props.points) || (prevProps.lastPointLatitude !== this.props.lastPointLatitude)) {
            this.loadRoute();
        }
    }

    loadRoute = () => {
        let points = [...this.props.points];
        points = points.map(point => [point.address_longitude, point.address_latitude]);
        if (this.props.docReturn) {
            points.push([this.props.lastPointLongitude, this.props.lastPointLatitude]);
        }
        this.model.setWaypoints(points, 'sk');
        this.forceUpdate();
    }

    render() {
        const routes = this.model.segments.map((item, i) => <Polyline key={i} positions={swap(item.geometry)}
                                                                      color="#007cbf" weight="2"/>);
        const markers = this.model.waypoints.map((item, i) => {
            const label = String.fromCharCode('A'.charCodeAt(0) + i);
            return <Marker key={i} position={swap(item)}><Tooltip permanent={true}>{label}</Tooltip></Marker>
        });

        if (this.model.mkadRoutes.start) {
            routes.unshift(<Polyline key="s" positions={swap(this.model.mkadRoutes.start.geometry)} color="#dd6116"
                                     weight="2"/>);
            markers.unshift(<Marker key="s" position={swap(this.model.mkadRoutes.start.geometry[0])}><Tooltip
                permanent={true}>МКАД старт</Tooltip></Marker>);
        }

        if (this.model.mkadRoutes.end) {
            routes.push(<Polyline key="e" positions={swap(this.model.mkadRoutes.end.geometry)} color="#dd6116"
                                  weight="2"/>);
            markers.push(<Marker key="e"
                                 position={swap(this.model.mkadRoutes.end.geometry[this.model.mkadRoutes.end.geometry.length - 1])}><Tooltip
                permanent={true}>МКАД финиш</Tooltip></Marker>);
        }

        return (
            <div className="tariff__map">
                <a target="_blank" rel="noopener noreferrer"
                   href={"http://37.9.7.75/?coords=" + this.props.points.map((point, index) => (point.address_longitude + ',' + point.address_latitude + (((index + 1) !== this.props.points.length) ? ";" : ""))).join('') + "&exclude=sk"}
                   className="">
                    {"http://37.9.7.75/?coords=" + this.props.points.map((point, index) => (point.address_longitude + ',' + point.address_latitude + (((index + 1) !== this.props.points.length) ? ";" : ""))).join('') + "&exclude=sk"}
                </a>
                <Map bounds={swap(this.model.bounds)} maxZoom="16">
                    <TileLayer url={TilesUrl}/>
                    {routes}
                    {markers}
                </Map>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    points: state.pointsReducer.points,
    docReturn: state.docReturnReducer.show,
    lastPointLongitude: state.docReturnReducer.address_longitude,
    lastPointLatitude: state.docReturnReducer.address_latitude,
});

export default connect(mapStateToProps, {})(LeafletMap);


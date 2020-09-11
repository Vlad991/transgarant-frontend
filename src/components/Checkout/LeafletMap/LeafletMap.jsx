import React from 'react';
import {Map, TileLayer, Polyline, Marker, Tooltip} from 'react-leaflet';
import {swap} from '../../../redux/checkout/leaflet/core/utils';
import {TilesUrl} from '../../../redux/checkout/leaflet/config';
import {connect} from "react-redux";
import './leaflet.css';
import './styles.css';
import {setWaypointsThunk} from "../../../redux/checkout/leaflet/leafletMapReducer";

class LeafletMap extends React.Component {
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
        points = points.map(point => [point.address.longitude, point.address.latitude]);
        if (this.props.docReturn) {
            points.push([this.props.lastPointLongitude, this.props.lastPointLatitude]);
        }
        this.props.setWaypointsThunk(points, '');
        this.forceUpdate();
    }

    render() {
        const routes = this.props.segments.map((item, i) => <Polyline key={i} positions={swap(item.geometry)} color="#007cbf" weight="2"/>);
        const markers = this.props.waypoints.map((item, i) => {
            const label = String.fromCharCode('A'.charCodeAt(0) + i);
            return <Marker key={i} position={swap(item)}><Tooltip permanent={true}>{label}</Tooltip></Marker>
        });

        if (this.props.mkadRoutes.start) {
            routes.unshift(<Polyline key="s" positions={swap(this.props.mkadRoutes.start.geometry)} color="#dd6116" weight="2"/>);
            markers.unshift(<Marker key="s" position={swap(this.props.mkadRoutes.start.geometry[0])}><Tooltip permanent={true}>МКАД старт</Tooltip></Marker>);
        }

        if (this.props.mkadRoutes.end) {
            routes.push(<Polyline key="e" positions={swap(this.props.mkadRoutes.end.geometry)} color="#dd6116" weight="2"/>);
            markers.push(<Marker key="e" position={swap(this.props.mkadRoutes.end.geometry[this.props.mkadRoutes.end.geometry.length - 1])}><Tooltip permanent={true}>МКАД финиш</Tooltip></Marker>);
        }

        return (
            <>
                <Map bounds={swap(this.props.bounds)} maxZoom="16">
                    <TileLayer url={TilesUrl}/>
                    {routes}
                    {markers}
                </Map>
                <a target="_blank" rel="noopener noreferrer" href={"http://37.9.7.75/?coords=" + this.props.points.map((point, index) => (point.address.longitude + ',' + point.address.latitude + (((index + 1) !== this.props.points.length) ? ";" : ""))).join('')} className="">
                    {"http://37.9.7.75/?coords=" + this.props.points.map((point, index) => (point.address.latitude + ',' + point.address.longitude + (((index + 1) !== this.props.points.length) ? ";" : ""))).join('')}
                </a>
            </>
        );
    }
}

let mapStateToProps = (state) => ({
    points: state.pointsReducer.points,
    docReturn: state.docReturnReducer.show,
    lastPointLongitude: state.docReturnReducer.address_longitude,
    lastPointLatitude: state.docReturnReducer.address_latitude,
    segments: state.mapReducer.segments,
    waypoints: state.mapReducer.waypoints,
    mkadRoutes: state.mapReducer.mkadRoutes,
    bounds: state.mapReducer.bounds
});

export default connect(mapStateToProps, {setWaypointsThunk})(LeafletMap);


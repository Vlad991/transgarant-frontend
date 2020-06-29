import React from 'react';
import {Map, TileLayer, Polyline, Marker, Tooltip} from 'react-leaflet';
import model from './core/model';
import {swap} from './core/utils';

import {TilesUrl} from './config';
import {connect} from "react-redux";

class LeafletMap extends React.Component {
    constructor(props) {
        super(props);
        this.model = model;
        const search = "coords=37.505951,55.706611;37.716064,55.796263&exclude=sk";
        if (search.length) {
            const params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
            this.model.setWaypoints(params.coords, params.exclude);
        }
    }

    render() {
        const routes = this.model.segments.map((item, i) => <Polyline key={i} positions={swap(item.geometry)} color="#007cbf" weight="2"/>);
        const markers = this.model.waypoints.map((item, i) => {
            const label = String.fromCharCode('A'.charCodeAt(0) + i);
            return <Marker key={i} position={swap(item)}><Tooltip permanent={true}>{label}</Tooltip></Marker>
        });

        if (this.model.mkadRoutes.start) {
            routes.unshift(<Polyline key="s" positions={swap(this.model.mkadRoutes.start.geometry)} color="#dd6116" weight="2"/>);
            markers.unshift(<Marker key="s" position={swap(this.model.mkadRoutes.start.geometry[0])}><Tooltip permanent={true}>МКАД старт</Tooltip></Marker>);
        }

        if (this.model.mkadRoutes.end) {
            routes.push(<Polyline key="e" positions={swap(this.model.mkadRoutes.end.geometry)} color="#dd6116" weight="2"/>);
            markers.push(<Marker key="e" position={swap(this.model.mkadRoutes.end.geometry[this.model.mkadRoutes.end.geometry.length - 1])}><Tooltip permanent={true}>МКАД финиш</Tooltip></Marker>);
        }

        return (
            <div className="tariff__map">
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
    lastPointAddress: state.docReturnReducer.address
});

export default connect(mapStateToProps, {})(LeafletMap);


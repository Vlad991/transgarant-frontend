import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import model from './core/model';

const RoutesPanel = () => {

	if (!model.distanceTable) {
		return <></>;
	}

	const roundTo = num => Math.round(num * 10) / 10;

	const rows = [];
	
	model.distanceTable.table.forEach((item, i) => {
		let classFrom = "";
		let classTo = "";

		if (item.fromReg) {
			classFrom = item.fromReg;
		}

		if (item.toReg) {
			classFrom = item.toReg;
		}

		rows.push(
			(<tr key={i}>
				<td className={classFrom}>{item.from}</td>
				<td> => </td>
				<td className={classTo}>{item.to}</td>
				<td>{roundTo(item.distance / 1000)} км</td>
				<td>{item.inside ? 'в МКАД' : 'за МКАД'}</td>
			</tr>)
		);
	});

	rows.push((<tr key="inside"><td colSpan="3">в МКАД</td><td colSpan="2">{roundTo(model.distanceTable.inside / 1000)} км</td></tr>));
	rows.push((<tr key="outsideLength"><td colSpan="3">за МКАД</td><td colSpan="2">{roundTo(model.distanceTable.outsideLength / 1000)} км</td></tr>));
	rows.push((<tr key="outsideCount"><td colSpan="3">выездов за МКАД</td><td colSpan="2">{model.distanceTable.outsideCount}</td></tr>));
	rows.push((<tr key="outsideLengthMinus"><td colSpan="3">за МКАД (с учетов вычета 30 км)</td><td colSpan="2">{roundTo(model.distanceTable.outsideLengthMinus / 1000)} км</td></tr>));


	return (
		<div id="RoutesPanel">
			<div id="colors">
				<span className="square" id="bk">БК</span>
				<span className="square" id="sk">СК</span>
				<span className="square" id="ttk">ТТК</span>
			</div>
			<table id="lengthsPanel">
				<tbody>
					{rows}
				</tbody>
			</table>
		</div>
	);
}

export default observer(RoutesPanel);

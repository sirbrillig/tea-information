const teaInfo = {
	green: {
		name: 'Green Tea',
		description: 'Leaves of the tea plant which are harvested, withered, quickly dried to stop the enzymatic oxidation, then possibly shaped.',
	},
	red: {
		name: 'Red Tea',
		description: 'Often called "black" tea in the West, red tea is leaves of the tea plant which are harvested, withered, slowly allowed to oxidize, then dried.',
	},
};

export default function TeaTypeInfo( { teaType } ) {
	if ( ! teaType ) {
		return <p className="tea-type" data-tea-type={ teaType }>No tea type set.</p>;
	}
	if ( ! teaInfo[ teaType ] ) {
		return <p className="tea-type" data-tea-type={ teaType }>Unknown tea type: { teaType }</p>;
	}
	return <div className="tea-type" data-tea-type={ teaType }>
		<em>{ teaInfo[ teaType ].name }</em>
		<p>{ teaInfo[ teaType ].description }</p>
	</div>;
}

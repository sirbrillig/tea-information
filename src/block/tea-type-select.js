import { SelectControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';

function TeaTypeSelect( { teaType, selectedTeaType, setState, onTeaTypeChange } ) {
	const teaTypeOptions = [
		{ label: 'Green', value: 'green' },
		{ label: 'Red', value: 'red' },
	];
	const onChange = selectedType => {
		onTeaTypeChange( selectedType );
		setState( { selectedTeaType: selectedType } );
	};
	return <SelectControl label="Tea Type" value={ teaType || selectedTeaType } options={ teaTypeOptions } onChange={ onChange } />;
}

export default withState( {
	selectedTeaType: 'green',
} )( TeaTypeSelect );

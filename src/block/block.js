/**
 * BLOCK: tea-information
 *
 * Registering a basic block with Gutenberg.
 */
/* eslint valid-jsdoc: 0 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

import TeaTypeSelect from './tea-type-select';
import TeaTypeInfo from './tea-type-info';

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'tea-block/tea-information', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Tea Information' ), // Block title.
	icon: 'carrot', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Tea' ),
	],

	attributes: {
		teaType: {
			type: 'string',
			source: 'attribute',
			selector: '.tea-type',
			attribute: 'data-tea-type',
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		const { teaType } = props.attributes;
		return (
			<div className={ props.className }>
				<p>This will display information about a type of tea. Please select a tea type from the list below.</p>
				<TeaTypeSelect teaType={ teaType } onTeaTypeChange={ selectedType => props.setAttributes( { teaType: selectedType } ) } />
				<TeaTypeInfo teaType={ teaType } />
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( { attributes } ) {
		const { teaType } = attributes;
		return (
			<div>
				<TeaTypeInfo teaType={ teaType } />
			</div>
		);
	},
} );

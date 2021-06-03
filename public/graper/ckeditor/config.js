const font_list = [
	{ value: 'Acme, sans-serif', name: 'Acme' },
	{ value: 'Anton, sans-serif', name: 'Anton' },
	{ value: 'Alegreya, serif', name: 'Alegreya' },
	{ value: 'Alegreya Sans, sans-serif', name: 'Alegreya Sans' },
	{ value: 'Archivo, sans-serif', name: 'Archivo' },
	{ value: 'Archivo Narrow, sans-serif', name: 'Archivo Narrow' },
	{ value: 'Archivo Black, sans-serif', name: 'Archivo Black' },
	{ value: 'Arvo, serif', name: 'Arvo' },
	{ value: 'Arimo, sans-serif', name: 'Arimo' },
	{ value: 'Asap Condensed, sans-serif', name: 'Asap Condensed' },
	{ value: 'Bitter, serif', name: 'Bitter' },
	{ value: 'Bowlby One SC, cursive', name: 'Bowlby One SC' },
	{ value: 'Cabin, sans-serif', name: 'Cabin' },
	{ value: 'Cairo, sans-serif', name: 'Cairo' },
	{ value: 'Crete Round, serif', name: 'Crete Round' },
	{ value: 'Cuprum, sans-serif', name: 'Cuprum' },
	{ value: 'Dosis, sans-serif', name: 'Dosis' },
	{ value: 'Droid Sans, sans-serif', name: 'Droid Sans' },
	{ value: 'Droid Serif, serif', name: 'Droid Serif' },
	{ value: 'EB Garamond, serif', name: 'EB Garamond' },
	{ value: 'Exo, sans-serif', name: 'Exo' },
	{ value: 'Faustina, serif', name: 'Faustina' },
	{ value: 'Fjalla One, sans-serif', name: 'Fjalla One' },
	{ value: 'Francois One, sans-serif', name: 'Francois One' },
	{ value: 'Inconsolata, monospace', name: 'Inconsolata' },
	{ value: 'Indie Flower, cursive', name: 'Indie Flower' },
	{ value: 'Julee, cursive', name: 'Julee' },
	{ value: 'Josefin Sans, sans-serif', name: 'Josefin Sans' },
	{ value: 'Hind, sans-serif', name: 'Hind' },
	{ value: 'Lato, sans-serif', name: 'Lato' },
	{ value: 'Libre Franklin, sans-serif', name: 'Libre Franklin' },
	{ value: 'Lora, serif', name: 'Lora' },
	{ value: 'Mada, sans-serif', name: 'Mada' },
	{ value: 'Manuale, serif', name: 'Manuale' },
	{ value: 'Maven Pro, sans-serif', name: 'Maven Pro' },
	{ value: 'Merriweather, serif', name: 'Merriweather' },
	{ value: 'Montserrat, sans-serif', name: 'Montserrat' },
	{ value: 'Muli, sans-serif', name: 'Muli' },
	{ value: 'Noto Sans, sans-serif', name: 'Noto Sans' },
	{ value: 'Noto Serif, serif', name: 'Noto Serif' },
	{ value: 'Open Sans, sans-serif', name: 'Open Sans' },
	{ value: 'Open Sans Condensed, sans-serif', name: 'Open Sans Condensed' },
	{ value: 'Oswald, sans-serif', name: 'Oswald' },
	{ value: 'Oxygen, sans-serif', name: 'Oxygen' },
	{ value: 'Passion One, cursive', name: 'Passion One' },
	{ value: 'Pathway Gothic One, sans-serif', name: 'Pathway Gothic One' },
	{ value: 'Playfair Display, serif', name: 'Playfair Display' },
	{ value: 'Poppins, sans-serif', name: 'Poppins' },
	{ value: 'PT Sans, sans-serif', name: 'PT Sans' },
	{ value: 'PT Sans Narrow, sans-serif', name: 'PT Sans Narrow' },
	{ value: 'PT Serif, serif', name: 'PT Serif' },
	{ value: 'PT Sans Caption, sans-serif', name: 'PT Sans Caption' },
	{ value: 'Raleway, sans-serif', name: 'Raleway' },
	{ value: 'Roboto, sans-serif', name: 'Roboto' },
	{ value: 'Roboto Condensed, sans-serif', name: 'Roboto Condensed' },
	{ value: 'Roboto Slab, serif', name: 'Roboto Slab' },
	{ value: 'Ropa Sans, sans-serif', name: 'Ropa Sans' },
	{ value: 'Saira, sans-serif', name: 'Saira' },
	{ value: 'Saira Condensed, sans-serif', name: 'Saira Condensed' },
	{ value: 'Saira Semi Condensed, sans-serif', name: 'Saira Semi Condensed' },
	{ value: 'Saira Extra Condensed, sans-serif', name: 'Saira Extra Condensed' },
	{ value: 'Sedgwick Ave, cursive', name: 'Sedgwick Ave' },
	{ value: 'Sedgwick Ave Display, cursive', name: 'Sedgwick Ave Display' },
	{ value: 'Source Code Pro, monospace', name: 'Source Code Pro' },
	{ value: 'Source Sans Pro, sans-serif', name: 'Source Sans Pro' },
	{ value: 'Spectral, serif', name: 'Spectral' },
	{ value: 'Slabo 27px, serif', name: 'Slabo 27px' },
	{ value: 'Titillium Web, sans-serif', name: 'Titillium Web' },
	{ value: 'Ubuntu, sans-serif', name: 'Ubuntu' },
	{ value: 'Vollkorn, serif', name: 'Vollkorn' },
	{ value: 'Zilla Slab, serif', name: 'Zilla Slab' },
	{ value: 'Zilla Slab Highlight, cursive', name: 'Zilla Slab Highlight' },
	
]


CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'about', groups: [ 'about' ] },
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others', groups: [ 'others' ] },
	];


	config.removeButtons = 'Underline,Subscript,Superscript,Anchor';
	config.font_names = ''
	font_list.forEach((font) => {
		config.font_names = config.font_names + font.name + '/' + font.value + ';';
	})
};
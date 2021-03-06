define(["dcl/dcl",
        "delite/register",
        "./Renderer"
], function (dcl, register, Renderer) {
	
	// module:
	//		deliteful/list/CategoryRenderer

	var CategoryRenderer = dcl(Renderer, {
		// summary:
		//		Default category renderer for the deliteful/list/List widget.
		//

		// baseClass: [protected] String
		//		CSS class of a category renderer. This value is expected by the deliteful/list/List widget
		//		so it must not be changed.
		baseClass: "d-list-category",

		//////////// PROTECTED METHODS ///////////////////////////////////////

		render: function () {
			// summary:
			//		render the category of the item inside this.renderNode.
			// tags:
			//		protected
			this.renderNode.innerHTML = this.item.category;
		}

	});

	return register("d-list-category-renderer", [HTMLElement, CategoryRenderer]);
});
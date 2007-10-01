dojo.provide("dojox.image.Gallery");
dojo.experimental("dojox.image.Gallery");
//
// dojox.image.Gallery courtesy Shane O Sullivan, licensed under a Dojo CLA 
// @author  Copyright 2007 Shane O Sullivan (shaneosullivan1@gmail.com)
//
// For a sample usage, see http://www.skynet.ie/~sos/photos.php
//
//	TODO: Make public, document params and privitize non-API conformant methods.
//	document topics.

dojo.require("dojo.fx");
dojo.require("dijit._Widget");
dojo.require("dijit._Templated");
dojo.require("dojox.image.ThumbnailPicker");
dojo.require("dojox.image.SlideShow");

dojo.declare("dojox.image.Gallery",
	[dijit._Widget, dijit._Templated],
	{
	// summary:
	//	Gallery widget that wraps a dojox.image.ThumbnailPicker and dojox.image.SlideShow widget
	
	// imageHeight: Number
	//	Maximum height of an image in the SlideShow widget
	imageHeight: 375,
	
	// imageWidth: Number
	//	Maximum width of an image in the SlideShow widget
	imageWidth: 500,
	
	// numberThumbs: Number
	//	The number of thumbnail images to display
	numberThumbs: 5,
	
	// pageSize: Number
	//	The number of records to retrieve from the data store per request.
	pageSize: dojox.image.SlideShow.prototype.pageSize,
	
	// autoLoad: Boolean
	//	If true, images are loaded before the user views them. If false, an
	//	image is loaded when the user displays it.
	autoLoad: true,
	
	// linkAttr: String
	//	Defines the name of the attribute to request from the store to retrieve the
	//	URL to link to from an image, if any.
	linkAttr: "link",
	
	// imageThumbAttr: String
	//	Defines the name of the attribute to request from the store to retrieve the
	//	URL to the thumbnail image.
	imageThumbAttr: "imageUrlThumb",
	
	// imageLargeAttr: String
	//	Defines the name of the attribute to request from the store to retrieve the
	//	URL to the image.
	imageLargeAttr: "imageUrl",
	
	// titleAttr: String
	//	Defines the name of the attribute to request from the store to retrieve the
	//	title of the picture, if any.
	titleAttr: "title",
 
	// slideshowInterval: Integer
	//	time in seconds, between image changes in the slide show.
	slideshowInterval: 3,
	
	templatePath: dojo.moduleUrl("dojox.image", "resources/Gallery.html"), 

	postCreate: function(){
		// summary: Initializes the widget, creates the ThumbnailPicker and SlideShow widgets
		this.widgetid = this.id;
		this.inherited("postCreate",arguments)
		
		this.thumbPicker = new dojox.image.ThumbnailPicker({
			numberThumbs: this.numberThumbs,
			linkAttr: this.linkAttr,
			imageLargeAttr: this.imageLargeAttr,
			titleAttr: this.titleAttr,
			numberThumbs: this.numberThumbs,
			useLoadNotifier: true
		}, this.thumbPickerNode);
		
		
		this.slideShow = new dojox.image.SlideShow({
			imageHeight: this.imageHeight, 
			imageWidth: this.imageWidth,
			autoLoad: this.autoLoad,
			linkAttr: this.linkAttr,
			imageLargeAttr: this.imageLargeAttr,
			titleAttr: this.titleAttr,
			slideshowInterval: this.slideshowInterval,
			pageSize: this.pageSize 
		}, this.slideShowNode);
		
		var _this = this;
		dojo.subscribe(this.slideShow.getShowTopicName(), function(packet){
			if(packet.index < _this.thumbPicker.thumbIndex
			   || packet.index > _this.thumbPicker.thumbIndex + _this.thumbPicker.numberThumbs -1){
				var index = packet.index - (packet.index % _this.thumbPicker.numberThumbs);
				_this.thumbPicker.showThumbs(index);
			}
		});
	
		dojo.subscribe(this.thumbPicker.getTopicName(), function(evt){
			_this.slideShow.showImage(evt.index);
		});
		
		dojo.subscribe(this.slideShow.getLoadTopicName(), function(index){
			_this.thumbPicker.markImageLoaded(index);
		});
		this._centerChildren();
	},
	  
  	setDataStore: function(dataStore, request, /*optional*/paramNames){
		// summary: Sets the data store and request objects to read data from.
		// dataStore:
		//	An implementation of the dojo.data.api.Read API. This accesses the image
		//	data.
		// request:
		//	An implementation of the dojo.data.api.Request API. This specifies the
		//	query and paging information to be used by the data store
		// paramNames:
		//	An object defining the names of the item attributes to fetch from the
		//	data store.  The four attributes allowed are 'linkAttr', 'imageLargeAttr',
		//	'imageThumbAttr' and 'titleAttr'
		this.thumbPicker.setDataStore(dataStore, request, paramNames);
		this.slideShow.setDataStore(dataStore, request, paramNames);
  	},
  
  	reset: function(){
		// summary: Resets the widget to its initial state
		this.slideShow.reset();
		this.thumbPicker.reset();
  	},
  
	showNextImage: function(inTimer){
		// summary: Changes the image being displayed in the SlideShow to the next
		//	image in the data store
		// inTimer: Boolean
		//	If true, a slideshow is active, otherwise the slideshow is inactive.
		this.slideShow.showNextImage();
	},

	toggleSlideshow: function(){
		// summary: Switches the slideshow mode on and off.
		this.slideShow.toggleSlideshow();
	},

	showImage: function(index, /*optional*/callback){
		// summary: Shows the image at index 'idx'.
		// idx: Number
		//	The position of the image in the data store to display
		// callback: Function
		//	Optional callback function to call when the image has finished displaying.
		this.slideShow.showImage(index, callback);
	},
	
	_centerChildren: function() {
		// summary: Ensures that the ThumbnailPicker and the SlideShow widgets
		//	are centered.
		var thumbSize = dojo.marginBox(this.thumbPicker.outerNode);
		var slideSize = dojo.marginBox(this.slideShow.outerNode);
		
		var diff = (thumbSize.w - slideSize.w) / 2;
		
		if(diff > 0) {
			dojo.style(this.slideShow.outerNode, "marginLeft", diff + "px");
		} else if(diff < 0) {
			dojo.style(this.thumbPicker.outerNode, "marginLeft", (diff * -1) + "px");
		}
	}
});

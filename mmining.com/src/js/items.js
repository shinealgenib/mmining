var ITEM_DRAGGABLE = false;
var BLOCK_MARGIN = 0;
var BLOCK_SCALE = 1;
var ENABLE_TIMELINE = true;

var ptItemList = function(){
	var _this = this;
	var list = new Array();

	this.addList = function(item){
		list.push(item);
		item.setSeqNum(list.length);
	};

	this.appendItem = function(index){
		if( list[index] == undefined )
			return false;

		return list[index].appendItem();
	};

	this.deleteItemById = function(id_list){
		if( id_list == undefined )
			return false;

		if( id_list.length < 1 )
			return false;

		$.each(id_list, function(key, val){
			fItem = _this.findItem(val);
			if( fItem != false ) {
				fItem.deleteItem();
			}
		});

		return ;
	};

	this.deleteItemChecked = function(){
		if( !list.length )
			return false;

		$.each(list, function(key, val){
			if( list[key].isChecked() ) {
				list[key].deleteItem();
			}
		});
	};

	this.deleteInfoChecked = function(){
		if( !list.length )
			return false;

		$.each(list, function(key, val){
			if( list[key].isCheckedInfo() ) {
				list[key].deleteInfo();
			}
		});
	};

	this.findItem = function(id){
		var item = false;
		if( list.length ) {
			$.each(list, function(key, val){
				if( list[key].getId() == id ) {
					item = list[key];
					return;
				}
			});
			return item;
		}
		return false;
	};

	this.findActivedHelper = function(){
		var findItem = false;
		if( list.length ) {
			$.each(list, function(key, val){
				if( (helper = list[key].findActivateHelper()) != false ){
					findItem = helper;
					return false;
				}
			});
		}
		return findItem;
	}

	this.makeModalList = function(){
		if( list.length ) {
			$.each(list, function(key, val){
				list[key].appendModal();

				if( list[key].isEnabled() )
					list[key].appendItem();

				if( list[key].isEnabledInfo() )
					list[key].appendInfo();
			});
			return list.length;
		}
		return false;
	};

	this.pushItemBlockList = function(data){
		var find_key = false;
		if( data == undefined ) return false;
		if( data['item_num'] == undefined ) return false;

		if( list.length ) {
			$.each(list, function(key, val){
				if( list[key].getItemNum() == data['item_num']) {
					list[key].appendItem();
					list[key].appendInfo();
					block = list[key].makeItemHandler(false);
					block.setType("load");
					list[key].pushItemBlock(block, data['start'], data['end']);
					list[key].clickHelper(block, false);
					list[key].pushItemHelper(block, data['position']);
					block.reOrderBlock(list[key].getItemHandler());

					find_key = key;
				}
			});
			return find_key;
		}
		return false;
	}
	/*
	this.rePosition = function(){
		if( list.length ) {
			$.each(list, function(key, val){
				list[key].rePosition();
			});
			return list.length;
		}
		return false;
	};*/

	//////////////////////
	// helper
	this.getActivateHelperInfo = function(){
		var data = undefined;
		if( list.length ) {
			$.each(list, function(key, val){
				if( (helper = list[key].findActivateHelper()) != false ){
					data = list[key].getHelperInfo(helper);
					return true;
				}
			});
		}
		if( data )
			return data;

		return false;
	};

	this.disableHelperAll = function(){
		if( list.length ) {
			$.each(list, function(key, val){
				if( (helper = list[key].findActivateHelper()) != false ){
					list[key].disableHelper(helper);
				}
			});
			return list.length;
		}
		$("#work_delete").css('display', 'none');
		$("#work_done").css('display', 'none');
		return false;
	};

	this.removeActivateHelper = function(){
		if( list.length ) {
			$.each(list, function(key, val){
				if( (helper = list[key].findActivateHelper()) != false ){
					list[key].removeHelper(helper);
					return true;
				}
			});
		}
		return false;
	};

	this.extendActivedHelper = function(direction, size){
		ret = false;
		var next;
		if( list.length ) {
			$.each(list, function(key, val){
				if( (helper = list[key].findActivateHelper()) != false ){
					if( list[key].extendHelper(helper, direction, size) != false ){
						ret = true;
					} else {
						ret = false;
					}
					return false;
				}
			});
		}
		return ret;
	};

	this.visiableHelper = function(position){
		if( list.length ) {
			$.each(list, function(key, val){
				list[key].visiableHelper(position);
			});
			return true;
		}
		return false;
	};

	this.hiddenHelper = function(){
		if( list.length ) {
			$.each(list, function(key, val){
				list[key].hiddenHelper();
			});
			return true;
		}
		return false;
	};

	this.reDrawBlock = function(){
		if( list.length ) {
			$.each(list, function(key, val){
				list[key].reDrawBlock();
			});
			return true;
		}
		return false;
	}
}

var ptItem = function( _object ){
	var _this = this;
	var parent = ptItems;
	var seq_num = 0;

	var PREFIX = "item";
	var item_num = "";
	var item_name = "";
	var id = "";
	var img_src = "";
	var description = "";
	var long_description = "";
	var enable = true;
	var enable_info = true;

	var object = _object;

	var left_item = undefined;
	var modal_item = undefined;

	var item_list = $("#item_list");
	var base_item = $("#base_item");
	var modal_item_list = $("#modal_item_list");
	var base_modal_item = $("#base_modal_item");
	var right_pannel = new rightPanel();

	var item_info = undefined;
	var item_info_list = $("#item_info_list .time-control-list");
	var base_item_info = $("#base_item_info");

	var item_time = undefined;
	var item_time_list = $("#item_time_list .time-control-list");
	var base_item_time = $("<li></li>");

	//var item_helper = undefined;
	var item_handler = new Array();

	/////////////////////////////////
	//
	(function(){
		item_num = object['item_num'];
		item_name = object['item_name'];
		id = PREFIX + object['item_num'];
		if( object['image_link'] == undefined )
			img_src = '/src/img/i1.png';
		else
			img_src = object['image_link'];
		description = object['description'];
		long_description = object['long_description'];
		enable = object['status']?"Active":true,false;
		enable_info = false;
	})();
	/////////////////////////////////

	// get
	this.getId = function(src){
		return id;
	};
	this.getItemNum = function(){
		return item_num;
	};
	this.getItemHandler = function(){
		return item_handler;
	}

	// set
	this.setSeqNum = function(num){
		seq_num = num;
	};

	this.setImgSrc = function(src){
		img_src = src;
	};

	this.setDescription = function(desc){
		description = src;
	};

	this.setEnabled = function(flag){
		enable = flag;
	};

	this.setEnabledInfo = function(flag){
		enable_info = flag;
	};

	this.isEnabled = function(){
		return enable;
	};

	this.isEnabledInfo = function(){
		return enable_info;
	};

	this.findActivateHelper = function(){
		var find = undefined;
		if( item_handler.length ) {
			$.each(item_handler, function(key, val){
				if( item_handler[key].isActivateHelper() ){
					find = item_handler[key];
					return false;
				}
			});
			if( find != undefined ) {
				return find;
			} else {
				return false;
			}
		}
		return false;
		//return $(item_helper).hasClass('item-helper-active');
	};

	this.getNextHelper = function(helper){
		var find = undefined;
		var _index = helper.getIndex();
		if( item_handler.length ) {
			$.each(item_handler, function(key, val){
				if( item_handler[key].getIndex() == _index){
					if( item_handler[key+1] != undefined )
						find = item_handler[key+1];
					return false;
				}
			});
			if( find != undefined ) {
				return find;
			} else {
				return false;
			}
		}
		return false;
	};

	this.isChecked = function(){
		return $("#"+id).find("input[type='checkbox']").prop("checked");
	};

	this.isCheckedInfo = function(){
		return $("#"+id+"_info").find("input[type='checkbox']").prop("checked");
	};

	// item list
	this.appendItem = function(){
		if( $("#"+id).attr('id') != undefined )
			return false;

		var new_item = base_item.clone().appendTo(item_list);
		new_item.attr('id', id);
		new_item.removeClass('items-hide');
		new_item.find('img').attr('src', img_src);
		//new_item.find('.description').html(description);
		new_item.find('.description').html(item_name);

		_this.initCheckbox(new_item);
		if( ITEM_DRAGGABLE )
			_this.draggableItem(new_item);
		_this.clickItem(new_item);

		return (left_item = new_item);
	};

	this.deleteItem = function(){
		if( $("#"+id).attr('id') == undefined )
			return false;

		$("#"+id).find("input[type='checkbox']").prop("checked", false);
		$("#"+id).remove();
	};

	this.deleteInfo = function(){
		if( $("#"+id+"_info").attr('id') == undefined )
			return false;

		$("#"+id+"_info").find("input[type='checkbox']").prop("checked", false);
		$("#"+id+"_info").remove();
		$("#"+id+"_time").remove();

		_this.removeHelperAll();

		if(ENABLE_TIMELINE)
			init_timebar_design();
	};

	// modal list
	this.appendModal = function(){
		if( $("#"+id).attr('id') != undefined )
			return false;

		var new_item = base_modal_item.clone().appendTo(modal_item_list);
		new_item.attr('id', id+"_modal");
		new_item.removeClass('modal-item-hide');
		new_item.find('img').attr('src', img_src);
		new_item.find('.modal-item-name').html(description);
		new_item.find('.modal-description').html(description);
		new_item.find('input').attr('id', id+"_modal_check");

		new_item.dblclick(function(){
			_this.appendItem();
		});

		return (modal_item = new_item);
	};

	// item info
	this.appendInfo = function(){
		if( $("#"+id+"_info").attr('id') != undefined )
			return false;

		// item info
		var new_item = base_item_info.clone().appendTo(item_info_list);
		new_item.attr('id', id+"_info");
		new_item.removeClass('item-info-hide');
		_this.initCheckbox(new_item, "_info");
		//new_item.find('.number').html(seq_num);
		new_item.find('.number').html($(".time-control-list:first li").length);
		//new_item.find('.item-name').html(description);
		new_item.find('.item-name').html(item_name);

		// item time
		var new_time = base_item_time.appendTo(item_time_list);
		$(new_time).children().remove();
		new_time.attr('id', id+"_time");
		new_time.css("width", $(".item-time-info li").width());
		item_time = new_time;

		$('<div class="item-time-line"></div>').appendTo(new_time);
		$('<div class="item-time-data"></div>').appendTo(new_time.find('div:last'));

		if(ENABLE_TIMELINE)
			init_timebar_design();

		return (item_info = new_item);
	};

	this.setPanel = function(item, suff){
		right_pannel.setPanel(img_src, description, long_description);
	};

	//////////////////
	// check box
	this.initCheckbox = function(item, suff){
		if( suff == undefined ) suff="";
		item.find("input[type='checkbox']").attr("id", "check_"+id+suff);
		item.find("input[type='checkbox']").prop("checked", false);
	};

	//////////////////////////////////
	// helpers
	this.makeItemHandler = function(enable){
		if( enable == undefined ) enable = true;

		handler = new timeBlock(item_handler.length);
		handler.reOrderBlock(item_handler);
		handler.appendToTime(item_time);
		if( enable )
			handler.enableBlock(true);

		helper = handler.makeHelper(id);
		helper.appendTo('#droppable');

		item_handler.push(handler);

		return handler;
	};

	this.draggableItem = function(item){
		item.draggable({
			scroll: false,
			helper: function (event) {
				if( item_helper == undefined ) {
					_this.appendInfo();
					item_helper = _this.makeItemHandler();
					_this.clickHelper(item_helper, true);
				}
				return item_helper;
			},
			stop: function (event, ui) {
			},
			cursorAt : { top: 10, left: 10 },
			containment : "#droppable"
		});
	};

	this.clickItem = function(item){
		item.on("click", function(e){
			right_pannel.setPanel(img_src, description, long_description);
		})
		.on("dblclick", function(e){
			if( $("#work_done").css("display") != "none" ){
				alert("Need done.");
				return false;
			}

			if( item_handler.length == 0 ) {
				if( ITEM_DRAGGABLE )
					item.draggable('disable');

				_this.appendInfo();
			}
			handler = _this.makeItemHandler();
			_this.clickHelper(handler, true);

			return handler;
		});
	};

	this.removeHelper = function(item){
		item.removeBlock();
		item.removeHelper();

		// remove handler array
		index = item.getIndex();
		item_handler.splice(index, 1);

		if( item_handler.length ) {
			_this.reOrderHandler(); // block re-indexing
			if( item_handler[index] != undefined )
				item_handler[index].reOrderBlock(item_handler);
		}
	}

	this.removeHelperAll = function(){
		if( item_handler.length ) {
			$.each(item_handler, function(key, val){
				item_handler[key].removeBlock();
				item_handler[key].removeHelper();
			});
			item_handler = new Array();
			return true;
		}
		return false;
	}

	this.enableHelper = function(item){
		//$(item).addClass("item-helper-active");

		if( item_handler.length ) {
			item.enableBlock(true);
		}
	};

	this.disableHelper = function(item){
		//$(item).removeClass("item-helper-active");

		if( item_handler.length ) {
			item.enableBlock(false);
			item.setType("load");
		}
	};

	this.clickHelper = function(item, flag){
		// Helper
		$(item.getHelper()).on("mousedown", function(e){
			if( $("#work_done").css("display") != "none" ){
				return false;
			}
			parent.disableHelperAll();
			item.enableBlock(true);
			_this.setPanel();
		});
		$(item.getHelper()).click(function(e){
			if( ENABLE_TIMELINE == false ){
				// TODO : show popup.
				console.log("ITEM NUM = "+item_num);
			}
		});

		// Block
		$(item.getBlock()).on("mousedown", function(e){
			if( $("#work_done").css("display") != "none" ){
				return false;
			}
			parent.disableHelperAll();
			//_this.enableHelper(item);
			if( item.gotoBlockCursor(e) == false )
				item.enableBlock(true);
		});

		// Block
		$(item.getBlock()).dblclick(function(e){
			//window.event.cancleBubble = true;
			if( $("#work_done").css("display") != "none" ){
				return false;
			}
			parent.disableHelperAll();
			item.enableBlock(true);
			_this.setPanel();
		});

		// make New
		if( flag ) {
			parent.disableHelperAll();
			//_this.enableHelper(item);
			item.enableBlock(true);
		}
	};

	this.extendHelper = function(item, direction, size){
		if( item ) {
			next = _this.getNextHelper(helper);

			if( (ret = item.extendBlock(direction, size, next)) == true ) {
				if( next != false )
					next.moveBlock(direction, timebar_tick_size);
				return true;
			} else if( ret == "move" ) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};

	this.moveHelper = function(item, direction, size){
		if( item ) {
			if( item.moveBlock(direction, size) == false ) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	};

	this.pushItemBlock = function(item, left, size){
		if( item ) {
			if( item.remakeBlock(left, size) == false ) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	};

	this.pushItemHelper = function(item, position){
		if( item ) {
			if( item.setBulkLocationHelper(position) == false ) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	};

	this.visiableHelper = function(position){
		if( item_handler.length ) {
			$.each(item_handler, function(key, val){
				if( item_handler[key].getVisible(position) ){
					item_handler[key].setVisibleHelper(true);
				} else {
					item_handler[key].setVisibleHelper(false);
				}
				item_handler[key].setCurrentLocationHelper(position);
			});
			return true;
		}
		return false;
	};

	this.hiddenHelper = function(){
		if( item_handler.length ) {
			$.each(item_handler, function(key, val){
				item_handler[key].setVisibleHelper(false);
			});
			return true;
		}
		return false;
	};

	this.reDrawBlock = function(){
		if( item_handler.length ) {
			$.each(item_handler, function(key, val){
				item_handler[key].reDrawBlock();
			});
			return true;
		}
		return false;
	};

	this.reOrderHandler = function(){
		if( item_handler.length ) {
			_index = 0;
			$.each(item_handler, function(key, val){
				item_handler[key].setIndex(_index);
				_index++;
			});
			return true;
		}
		return false;
	}

	/////////////////

	this.getHelperInfo = function(){
		var data = new Array();

		f_helper = _this.findActivateHelper();

		if( f_helper ){
			h = f_helper.getLocation();
			$.each(h, function(key, val){
				if( isNaN(val['left']) )
					_x = val['left'].split("px")[0];
				else
					_x = val['left'];

				if( isNaN(val['top']) )
					_y = val['top'].split("px")[0];
				else
					_y = val['top'];

				data.push({item_num:item_num, frame_num:key, x:_x, y:_y});
			});
			data['type'] = f_helper.getType();

			return data;
		}

		return false;
	}

	/*
	this.rePosition = function(item){
		id = $(item_helper).attr("id");
		$("#"+id).css({"left": "320px" , "top":"-180px", "position":"relative"});
	};*/
}

var timeBlock = function(_index){
	var _this = this;
	if( $("#timebar").attr('id') != undefined )
		var _left = $("#timebar").css("left").split("px")[0];
	_left = Number(_left)+BLOCK_MARGIN;

	var index = _index;
	var block = $("<div></div>");
	var left = Number(_left);
	var left_absolute = Number(_left);
	var width = 1;
	var type = "new";
	var start_frame = 0;
	var end_frame = 0;
	var location = new Object();

	$(block).addClass("block");
	$(block).css("margin-left", left);
	$(block).css("width", width);
	//$(block).html(index);

	var helper = undefined;

	// helper
	this.getHelper = function(){
		return helper;
	};

	this.getBlock = function(){
		return block;
	};

	this.getIndex = function(){
		return index;
	};
	this.setIndex = function(_index){
		index = _index;
	};

	this.getLeft = function(){
		return left;
	};
	this.getLeftAbs = function(){
		return left_absolute;
	};

	this.getWidth = function(){
		return width;
	};

	this.getLocation = function(){
		return location;
	}

	this.getType = function(){
		return type;
	}
	this.setType = function(_type){
		type = _type;
	}

	this.getStartFrame = function(){
		return start_frame;
	}
	this.getEndFrame = function(){
		return end_frame;
	}

	this.makeHelper = function(id){
		_width_half = get_video_width()/2;
		_height_half = get_video_height()/2;

		var img = $("<img>");
		img.attr("id", id+'_helper');
		img.attr("src", '/src/img/box.png');
		img.addClass("item-helper");
		img.addClass('coord');
		img.css({"left": _width_half+"px" , "top":"-"+_height_half+"px", "position":"relative"});
		img.draggable({
			containment: '#droppable',
			stop: function (event, ui) {
				_this.setLocationHelper(img);
			}
		});

		_this.setLocationHelper(img);

		start_frame = video.get();
		end_frame = start_frame;

		helper = img;
		return helper;
	};

	this.reOrderBlock = function(list){
		if( list.length ){
			if( index > 0 ) {
				left = left_absolute - ( list[index-1].getLeftAbs() + list[index-1].getWidth());
				//width = 1;
			} else if( index == 0 ) {
				left = left_absolute;
			}
			//$(block).css("margin-left", left);
			//$(block).css("width", width);
			_this.reDrawBlock();
		}
	};

	this.removeHelper = function(){
		$(helper).remove();
	};

	this.setVisibleHelper = function(flag){
		if( flag ) {
			$(helper).css("display", "");
		} else {
			$(helper).css("display", "none");
		}
	};

	this.setLocationHelper = function(_helper){
		if( _helper == undefined )
			_helper = helper;

		location[video.get()] = {left:_helper.css("left"), top:_helper.css("top")};
	}

	this.setCurrentLocationHelper = function(position){
		//loc = Number(video.get());
		loc = position;
		if( location[loc] != undefined ){
			$(helper).css("left", location[loc]["left"]);
			$(helper).css("top", location[loc]["top"]);
		}
	}

	this.setBulkLocationHelper = function(data){
		var startF = -1;
		var lastF = 0;
		if( data == undefined ) return false;

		delete location[0];

		$.each(data, function(key, val){
			if( startF == -1 ) startF = val['frame_num'];

			location[val['frame_num']] = {left:val['x'], top:val['y']};
			lastF = val['frame_num'];
		});
		start_frame = Number(startF);
		end_frame = Number(lastF);
		return true;
	}

	this.isActivateHelper = function(){
		return $(helper).hasClass('item-helper-active');
	};

	///////

	this.appendToTime = function(item){
		//block.appendTo($(item).find('div:last'));
		block.appendTo($(item).find('.item-time-data'));
	};

	this.enableBlock = function(flag){
		if( flag ) {
			$(block).addClass("block-active");
			$(helper).addClass("item-helper-active");
			$(helper).attr("src", '/src/img/box_act.png');

			$("#work_delete").css('display', '');
			$("#work_done").css('display', '');
		} else {
			$(block).removeClass("block-active");
			$(helper).removeClass("item-helper-active");
			$(helper).attr("src", '/src/img/box.png');

			$("#work_delete").css('display', 'none');
			$("#work_done").css('display', 'none');
		}
	};

	this.removeBlock = function(){
		$(block).remove();
	};

	this.reDrawBlock = function(){
		$(block).css("margin-left", left/BLOCK_SCALE);
		$(block).css("width", width/BLOCK_SCALE);
	};

	this.extendBlock = function(direction, size, _next){
		var ret = true;

		if( size == undefined )
			size = 1;

		if( direction == undefined )
			direction = "forward";

		switch(direction)
		{
			case "forward" :
			case "right" :
				if( (_next != undefined) && (next != false) ){
					if( end_frame == _next.getStartFrame() )
						return false;
				}

				if( video.get() != end_frame+1 )
					return "move";

				width = (size-left_absolute)+BLOCK_MARGIN;
				_this.setLocationHelper();
				break;
			case "backward" :
			case "left" :
				//if( video.get() <= start_frame-1 )
				//	return false;

				if( video.get() != end_frame-1 )
					return "move";

				width = (size-left_absolute)+BLOCK_MARGIN;
				if( location[video.get()+1] != undefined )
					delete location[video.get()+1];

				if( width == 0 ){
					width = 1;
				} else if( width < 0 ){
					width = 1;
					ret = false;
				}
				break;
			default:
				width += size;
		}
		$(block).css("width", width/BLOCK_SCALE);

		if(ret){
			end_frame = video.get();
		}

		return ret;
	};

	this.moveBlock = function(direction, size){
		var ret = true;

		if( size == undefined )
			size = timebar_tick_size;

		if( direction == undefined )
			direction = "forward";

		switch(direction)
		{
			case "forward" :
			case "right" :
				left = left - size;
				break;
			case "backward" :
			case "left" :
				left = left + size;
				break;
			default:;
		}
		$(block).css("margin-left", left);

		return ret;
	}

	this.remakeBlock = function(_left, _size){
		left_absolute = _left;
		left = left_absolute;
		//left = left_absolute - ( list[index-1].getLeftAbs() + list[index-1].getWidth());
		width = _size - left_absolute;

		_this.reDrawBlock();
	};

	this.getVisible = function(position){
		/*
		if( ( (left_absolute/BLOCK_SCALE)-BLOCK_MARGIN) <= position ){
			if( position <= left_absolute+(width/BLOCK_SCALE) ){
				return true;
			}
		}*/
		//current = video.get();
		current = position;
		if( start_frame <= current && current <= end_frame ){
			return true;
		}
		return false;
	};

	this.gotoBlockTail = function(){
		current = video.get();
		if( end_frame > current ){
			// goto FW
			video.seekForward(end_frame - current);
		} else if( end_frame < current ) {
			// goto BW
			video.seekBackward(current - end_frame);
		}
		else {
			return false;
		}
	};

	this.gotoBlockCursor = function(e){
		current = video.get();
		pos = e.offsetX/width;
		frame1 = ((end_frame - start_frame) * pos) + 0.5;
		frame2 = start_frame + frame1;
		if( frame2 > current ){
			// goto FW
			video.seekForward(frame2 - current);
		} else if( frame2 < current ) {
			// goto BW
			video.seekBackward(current - frame2);
		}
		else {
			return false;
		}
	};

	//return block;
}

var rightPanel = function(_panel){
	if( _panel == undefined )
		_panel = $("#right-panel");

	var panel = _panel;
	var img = panel.find("img");
	var description1 = $("#right-panel_desc1");
	var description2 = $("#right-panel_desc2");
	//img.css("width", 200);

	this.getPanel = function(){
		return panel;
	};

	this.setPanel = function(src, desc1, desc2){
		if( src == undefined ) src="";
		if( desc1 == undefined ) desc1="";
		if( desc2 == undefined ) desc2="";

		img.attr("src", src);
		description1.html(desc1);
		description2.html(desc2);
	};
}

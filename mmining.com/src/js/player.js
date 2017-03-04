var isPaused = true;
var currentFrame = $('#currentFrame');
var video = new Object();
video_info = {video_num:"1", width:960, height:540, frame_rate:23.98, frame_half:12};

var ptItems = new ptItemList();
var TIME_BAR_ENABLE = false;
ENABLE_TIMELINE = false;
var DEFAULT_URL = "http://www.mmining.com";

//$(window).load(function() {
function init_new_video() {
    resizeBlocks();

    $(window).resize(function() {
        resizeBlocks();
    })

    $('.slide').hover(
      function(){
        $(this).find('.caption').slideDown(250);
      },
      function(){
        $(this).find('.caption').slideUp(250);
      }
    );

	//////////////////

	$('#myCarousel').on('slid', '', checkitem);  // on caroussel move

	checkitem();

	video = VideoFrame({
		id: 'video',
		frameRate: get_video_frame_rate(),
		callback: function(frame) {
			currentFrame.html(frame);

			if (isPaused && frame % get_video_frame_half() === 0) {
			video.video.pause();
			ptItems.visiableHelper(video.get());
			video.stopListen();
			}
		}
	});

	$('.carousel .item').each(function(){
	  var next = $(this).next();
	  if (!next.length) {
		next = $(this).siblings(':first');
	  }
	  next.children(':first-child').clone().appendTo($(this));

	  for (var i=0;i<2;i++) {
		next=next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	  }
	});

	$('#play-pause').click(function() {
		if (video.video.paused) {
			video.video.play();
			ptItems.hiddenHelper();
			video.listen('frame');
			$(this).html('Pause');
			isPaused = false;
			$(".inner").hide();
			$(".vidlayer").hide();
		} else {
			var curF = video.get();
			//console.log("request pause : " + curF);
			/*
			$(".inner").show(function(){
				$(".inner").hover(function(){
					$(".inner img").attr("src", "../src/img/itemsample.png");
				},
				function(){
					$(".inner img").attr("src", "../src/img/box.png");
				});
			});*/
			$(".vidlayer").show();

			if (curF % get_video_frame_half() === 0) {
				//console.log("pause called : " + curF);
				video.video.pause();
				//ptItems.visiableHelper(video.get());
				video.stopListen();
				$(this).html('Play');
				isPaused = true;
			} else {
				$(this).html('Play');
				isPaused = true;
			}
		}

		$('#forward').click(function() {
			video.seekForward();
		});

		$('#backward').click(function() {
			video.seekBackward();
		});

	});

	exec_load_account_list();
  init_video_overlay();
//});
};


function resizeBlocks(){

    $('.item img').height($('.i1 img').height());
    $('.item img').width($('.i1 img').width());
    $('.music img').width($('.i1 img').width());
    $('.location img').width($('.i1 img').width());
}

function checkitem()                        // check function
{
  var $this = $('#myCarousel');
  if($('.carousel-inner .item:first').hasClass('active')) {
    $this.children('.left.carousel-control').hide();
  } else if($('.carousel-inner .item:last').hasClass('active')) {
    $this.children('.right.carousel-control').hide();
  } else {
    $this.children('.carousel-control').show();

  }
}



/////////////////////////////////////////////
// Account
function exec_load_account_list()
{
	data = new Object();
	data['login_id'] = "david@nike.com";
	exec_ajax(DEFAULT_URL+"/index.php/database/account/get_account_info", "GET", data, success_load_account_list);
}

function success_load_account_list(ret)
{
	login_info = ret;

	init_item_list();
}

function get_login_id()
{
	var id = 0;
	//id = login_info[0]['login_id'];
	id = $.cookie('logged_user_num');

	if( id == undefined ) id = 1;

	return id;
}

/////////////////////////////////////////////
// video overlay control
function init_video_overlay(){
  $('#video_overlay_play_pause').click(function(){
    $('#play-pause').click();
  });

  $("#video_overlay").mouseover(function(){
    $(".video_overlay_background").css("opacity", 0.5);
    alert();
  })
  .mouseout(function(){
    $(".video_overlay_background").css("opacity", 0.0);
  });

  $(".video_overlay").mouseover(function(){
    //$(".video_overlay_panel").css("opacity", 0.5);
    $(".video_overlay_panel").addClass("over");
    $(".video_overlay_panel").removeClass("out");
  })
  .mouseout(function(){
    //$(".video_overlay_panel").css("opacity", 0.0);
    $(".video_overlay_panel").addClass("out");
    $(".video_overlay_panel").removeClass("over");
  });

}

/////////////////////////////////////////////
// item control
function init_item_list()
{
	exec_load_item_list();
}

function exec_load_item_list()
{
	data = new Object();
	data['login_id'] = get_login_id();
	exec_ajax(DEFAULT_URL+"/index.php/database/items/get_items", "GET", data, success_load_item_list);
}

function success_load_item_list(data)
{
	if( data == undefined )	return;

	for(i=0;i<data.length;i++){
		ptItems.addList(new ptItem(data[i]));
	}

	ptItems.makeModalList();

	//
	exec_load_item_info_list();
}

function exec_load_item_info_list()
{
	data = new Object();
	//data['login_id'] = login_info[0]['user_num'];
	data['video_num'] = video_info['video_num'];
	exec_ajax(DEFAULT_URL+"/index.php/database/items/get_item_info", "GET", data, success_load_item_info_list);
}

function success_load_item_info_list(data)
{
	var pushlist = new Object();

	$.each(data, function(index, val){
		if( pushlist[val['item_num']] == undefined ) {
			pushlist[val['item_num']] = [];
			if( pushlist[val['item_num']][val['start']] == undefined ) {
				pushlist[val['item_num']][val['start']] = {item_num:val['item_num'], start:val['start'], end:val['end'], position:[]};
			}
			conv = video_to_helper({frame_num:val['frame_num']*get_video_frame_half(), x:val['x'], y:val['y']});
			pushlist[val['item_num']][val['start']]['position'].push( conv );

		} else {
			if( pushlist[val['item_num']][val['start']] == undefined ) {
				pushlist[val['item_num']][val['start']] = {item_num:val['item_num'], start:val['start'], end:val['end'], position:[]};
			}
			conv = video_to_helper({frame_num:val['frame_num']*get_video_frame_half(), x:val['x'], y:val['y']});
			pushlist[val['item_num']][val['start']]['position'].push( conv );
		}
	});

	$.each(pushlist, function(index, val){
		$.each(val, function(index2, val2){
			if( val2 == undefined ) return true;
			ptItems.pushItemBlockList({item_num:val2['item_num'], start:Number(val2['start'])*10, end:Number(val2['end'])*10, position:val2['position']});
		});
	});

	ptItems.visiableHelper(0);
	ptItems.hiddenHelper();

	/*
	ptItems.pushItemBlockList({item_num:1, start:10, end:40,
		position:[{frame_num:1, x:320, y:-180}, {frame_num:2, x:330, y:-180}, {frame_num:3, x:340, y:-180}]}
		);
		*/
}

/////////////////////////////////////////////

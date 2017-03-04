//var video = new Object();
var video_time = new Date();
var video_info = {video_num:"1", width:640, height:360};
//$("video").get(0).controls = true;

/////////////////////////////////////////////
// Timer
function init_timer()
{
	video_time = new Date('1/1/1990');
}

function set_timer_milli(loc)
{
	init_timer();
	time = loc*500;
	video_time.setMilliseconds( time );
}

function get_timer_milli()
{
	str = leadingZeros(video_time.getHours(), 2) + ":" +
		  leadingZeros(video_time.getMinutes(), 2) + ":" +
		  leadingZeros(video_time.getSeconds(), 2) + "." +
		  leadingZeros(video_time.getMilliseconds(), 3);
			
	return str;
}

////////////////////////////////////////////////
// Video Info
function helper_to_video(data){
	var arr = data;
	
	if( data != undefined )	{
		if( arr['x'] != undefined )
			arr['x'] = ( Number(data['x']) / video_info['width']) * 100;
		
		if( arr['y'] != undefined )
			arr['y'] = ( (Number(data['y'])+video_info['height']) / video_info['height']) * 100;
		
		return arr;
	}
}

function video_to_helper(data){
	var arr = data;
	
	if( data != undefined )	{
		if( arr['x'] != undefined )
			arr['x'] = (Number(data['x'])/100) * video_info['width'];
		
		if( arr['y'] != undefined )
			arr['y'] = ((Number(data['y'])/100) * video_info['height']) - video_info['height'];
		
		return arr;
	}
}

function video_to_helper_p(data){
	var arr = data;
	
	if( data != undefined )	{
		if( arr['x'] != undefined )
			arr['x'] = Number(data['x']);
		
		if( arr['y'] != undefined )
			arr['y'] = (Number(data['y'])*(-1));
		
		return arr;
	}
}

function get_video_width(){
	return video_info['width'];
}
function get_video_height(){
	return video_info['height'];
}
function get_video_frame_rate(){
	return video_info['frame_rate'];
}
function get_video_frame_half(){
	return video_info['frame_half'];
}
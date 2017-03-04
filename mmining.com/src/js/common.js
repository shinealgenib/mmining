function show_confirm(msg, fn)
{
	if( confirm(msg) ) {
		fn();
		return true;
	} else {
		return false;
	}
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (var i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

function exec_ajax(url, type, data, exec_fn, timeout) {	
	if( typeof(timeout) === 'undefined' ) timeout = 0;
	if( typeof(type) === 'undefined' ) type = "GET";
	//if( typeof(stop_aync) === 'undefined' ) stop_aync = false;
	//if(stop_aync) $.ajaxSetup({async:false});
	var result;
 	jQuery.ajax({
		 accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
 	     type: 		type,
		 data: 		data,
		 dataType:	'json',
		 timeout : timeout * 1000,
 	     url: url,
		 beforeSend: function() {},
 	     success: function (responseJSON) {
				if (responseJSON == null) return;
				if (exec_fn != null) 
					exec_fn(responseJSON);
				else
					result = responseJSON;
			 },
		 complete:	function() {
			},	
 	     error: function (jqXHR, status) {
 	     }
   	});
	
	if (exec_fn == null) return result;
}

////////////////////////////////////
// video
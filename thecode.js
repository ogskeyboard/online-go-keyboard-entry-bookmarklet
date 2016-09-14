(function(){ 
	if ($("#bookmarklet-move").length==0) {
		$("#game-controls").prepend("<input placeholder='Type coords (ie: q17), press enter' type='text' id='bookmarklet-move' style='color:black !important;font-weight:bold;background:#F5E59F !important;height:50px;width:94%;margin:10px;outline:2px solid #0A0 !important;text-transform: uppercase;' />");
	
		$("#bookmarklet-move").on('keyup', function(ev) {
			if (ev.which==13||ev.which==32) {
				var mv=$("#bookmarklet-move").val().toLowerCase();
				if (mv.length>=2 && mv.length<=3) {
					var x=mv.charAt(0);
					var y=mv.substring(1);
					y=parseInt(y);
					if (x.charCodeAt(0) > 104)
						x = String.fromCharCode(x.charCodeAt(0)-1);
						
					if (y>0 && y<26 && x.charCodeAt(0)>=97 && x.charCodeAt(0)<=115) {
						y = String.fromCharCode((goban.height+1-y)+64);	
						
						x=x.toLowerCase();
						y=y.toLowerCase();
						
						if (y.charCodeAt(0)>=97 && y.charCodeAt(0)<=115) {
							window.goban.sendMove({move:x+y,auth:goban.game_connection_data.auth,game_id:goban.game_id,player_id:goban.player_id});
							$("#bookmarklet-move").val("");	
						}
					}
				}
			}
		});
	}
})();

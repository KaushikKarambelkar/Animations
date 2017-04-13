$(document).ready(function(){
	runtext();
});

function runtext() {
	$("#text1").show(500, function(){
		$("#text1").hide(1500, function(){
			$("#text2").fadeIn(1000, function(){
				$("#text2").fadeOut(1000, function(){
					$("#text3").fadeIn(1000, function(){
						$("#text3").fadeOut(1000, function(){
							$("#text4").fadeIn(1000, function(){
								$("#text4").fadeOut(1000, function(){
									$("#text5").fadeIn(1000, function(){
										$("#text5").fadeOut(1000, function(){
											$("#text6").fadeIn(1000, function(){
												$("#text6").fadeOut(1000, function(){
													$("#text7").fadeIn(1000, function(){
														$("#text7").fadeOut(1000, function(){
															runtext();
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

function temp() {
	$("#text1").fadeIn();
}
$(function()
{


	var moveSpeed = 10;
	var AnimateSpeed = 100;
	var keypresses = {"left":0, "right":0};


	var EngineChecker =window.setInterval(function(event)
	{
		console.log(Engine);
	},1000);

	var Engine = window.setInterval(function(event)
	{

		if(keypresses['left'] == 1)
		{
			Animate();
			Move('left');
		}
		else if(keypresses['right'] == 1)
		{
			Animate();
			Move('right')
		}

	},AnimateSpeed);	


	$("#walk").click(function()
	{	
		$("#speed").text("Walk");
		moveSpeed = 10;
		animateSpeed = 1000;
	});


	$("#run").click(function()
	{	
		$("#speed").text("Run");
		moveSpeed = 25;
		animateSpeed = 100;
	});

	$("#zoom").click(function()
	{	
		$("#speed").text("Zoom");
		moveSpeed = 50;
		animateSpeed = 50;
	});


	function Move(dir)
	{
		if(dir == "right")
		{
			var img = $("#sprite");
			var pxInclude = img.css("margin-left");
			img.css("-webkit-transform","scaleX(1)");
			pos = pxInclude.split("px");
			if(pos[0] > (window.outerWidth-180))
			{
				return;
			}
			else
			{
				img.css("margin-left", (parseInt(pos[0])+moveSpeed)+"px");
			}
		}
		else if(dir == "left")
		{
			var img = $("#sprite");
			var pxInclude = img.css("margin-left");
			img.css("-webkit-transform","scaleX(-1)");
			pos = pxInclude.split("px");
			if(pos[0] < 10)
			{
				return;
			}
			else
			{
				img.css("margin-left", (parseInt(pos[0])-moveSpeed)+"px");
			}
		}
	}



	function Animate()
	{
		var img = $("#sprite");

		var pos = img.css('object-position');
		
		if(pos == "0px 0px")
		{
			img.css('object-position', "-145px 0px" );
		}
		else if(pos == "-145px 0px")
		{
			img.css('object-position', "-290px 0px" );
		}
		else if(pos == "-290px  0px")
		{
			img.css('object-position', "-435px  0px" );
		}
		else
		{
			img.css('object-position', "0px 0px" );
		}	
      
		
	}



	window.addEventListener("keydown",function(event)
	{

		if(event.key == "ArrowLeft")
		{
			keypresses['left'] = 1;
		}
		
		if(event.key == "ArrowRight")
		{
			keypresses.right = 1;
		}
	});

	window.addEventListener("keyup", function(event)
	{
		if(event.key == "ArrowLeft")
		{
			keypresses['left'] = 0;
		}
		
		if(event.key == "ArrowRight")
		{
			keypresses['right'] = 0;
		}

	});

});
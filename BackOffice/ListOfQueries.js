function tableDisplay()
			{

				var s = document.getElementById("status").selectedIndex;
					
				var t0=document.getElementById(0);
				var t1=document.getElementById(1);
				
				t0.style.display = "none";
   				t1.style.display = "none";
    					
							
				if(s==0)
				{
					
					t0.style.display = "table";
				}
				if(s==1)
				{
					
					t1.style.display = "table";
				}
									
			}

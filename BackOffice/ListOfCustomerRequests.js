function tableDisplay()
			{

				var r = document.getElementById("Req").selectedIndex;
				var s = document.getElementById("status").selectedIndex;
					

				var t0=document.getElementById(0);
				var t1=document.getElementById(1);
				var t2=document.getElementById(2);
				var t3=document.getElementById(3);
				var t4=document.getElementById(4);
				var t5=document.getElementById(5);
				
				t0.style.display = "none";
   				t1.style.display = "none";
    				t2.style.display = "none";
				t3.style.display = "none";
   				t4.style.display = "none";
    				t5.style.display = "none";
				
				if(r==0 && s==0)
				{
					
					t0.style.display = "table";
				}
				if(r==0 && s==1)
				{
					
					t1.style.display = "table";
				}
				if(r==0 && s==2)
				{
					
					t2.style.display = "table";
				}
				if(r==1 && s==0)
				{
					
					t3.style.display = "table";
				}
				if(r==1 && s==1)
				{
					
					t4.style.display = "table";
				}
				if(r==1 && s==2)
				{
					
					t5.style.display = "table";
				}
									
			}

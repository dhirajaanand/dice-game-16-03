      var spann=document.getElementById("declare").innerHTML
      var ran2,ran1
      var pp1=document.getElementById("pi1")
      var pp2=document.getElementById("pi2")
      console.log(ran1,ran2)
      function funn(a,b){
         b.setAttribute("src",`images/${a}.png`)    
      }
      function demo(){
         pp1.setAttribute("src","images/dice.gif")
         setTimeout(()=>{ 
            btnF1()
         },500)
      }
      function demo2(){
         pp2.setAttribute("src","images/dice.gif")
         setTimeout(()=>{ 
            btnF2()
         },500)
      }
      function btnF1(){
               ran1=Math.ceil(Math.random()*6)
               funn(ran1,pp1)  
            }
      setTimeout(btnF2,5000)
      
      function btnF2(){
         ran2=Math.ceil(Math.random()*6)
         funn(ran2,pp2) 
         if(ran1>ran2){
         document.getElementById("declare").innerHTML=" Player-1, Congratulations!"
         document.getElementById("imggg").setAttribute("src","https://media3.giphy.com/media/kf3EjrAsKp3P9bhYHG/giphy.gif?cid=6c09b952kytoq56ypa69oayans2jyppd7lonkrirkq64v1tg&rid=giphy.gif&ct=s")
         document.getElementById("imggg").classList.add("anim")
         }
         else if(ran1==ran2){
            document.getElementById("declare").innerHTML="Draw!"
            document.getElementById("imggg").setAttribute("src","https://i.pinimg.com/originals/c6/8e/c0/c68ec09fdbceffd2e47de2ea17f96d3d.gif")
            document.getElementById("imggg").style.width="250px"
            document.getElementById("imggg").classList.add("anim")
         }
         else if(ran1<ran2){
            document.getElementById("declare").innerHTML=" Player-2, Congratulations!"
            document.getElementById("imggg").setAttribute("src","https://media4.giphy.com/media/JRsQiAN79bPWUv43Ko/giphy.gif")
            document.getElementById("imggg").classList.add("anim")
         }
      }
   
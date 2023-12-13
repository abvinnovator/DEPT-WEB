  var p1 =  document.querySelector('.div1');
var p2 = document.querySelector('.div2');
var p3 =  document.querySelector('.div3');
var p4 =  document.querySelector('.div4');
$(".dis1").click(function(){ 
  $(".div1").toggleClass("disdiv");
  $(".dis1").toggleClass("distyle1");
  if($(".div2").hasClass("disdiv") && $(".dis2").hasClass("distyle2")){
    $(".div2").removeClass("disdiv");
      $(".dis2").removeClass("distyle2");
    }
    if($(".div3").hasClass("disdiv") && $(".dis3").hasClass("distyle3")){
    $(".div3").removeClass("disdiv");
      $(".dis3").removeClass("distyle3");
    }
          if($(".div4").hasClass("disdiv") && $(".dis4").hasClass("distyle4")){
            $(".div4").removeClass("disdiv");
            $(".dis4").removeClass("distyle4");
        }  
          });
          $(".dis2").click(function(){ 
            $(".div2").toggleClass("disdiv");
            $(".dis2").toggleClass("distyle2");
            if($(".div1").hasClass("disdiv") && $(".dis1").hasClass("distyle1")){
                $(".div1").removeClass("disdiv");
                $(".dis1").removeClass("distyle1");
            }
            if($(".div3").hasClass("disdiv") && $(".dis3").hasClass("distyle3")){
              $(".div3").removeClass("disdiv");
              $(".dis3").removeClass("distyle3");
          }
          if($(".div4").hasClass("disdiv") && $(".dis4").hasClass("distyle4")){
            $(".div4").removeClass("disdiv");
            $(".dis4").removeClass("distyle4");
        }  
          });
          $(".dis3").click(function(){ 
            $(".div3").toggleClass("disdiv");
            $(".dis3").toggleClass("distyle3");
            if($(".div1").hasClass("disdiv") && $(".dis1").hasClass("distyle1")){
                $(".div1").removeClass("disdiv");
                $(".dis1").removeClass("distyle1");
            }
            if($(".div2").hasClass("disdiv") && $(".dis2").hasClass("distyle2")){
              $(".div2").removeClass("disdiv");
              $(".dis2").removeClass("distyle2");
          }
          if($(".div4").hasClass("disdiv") && $(".dis4").hasClass("distyle4")){
            $(".div4").removeClass("disdiv");
            $(".dis4").removeClass("distyle4");
        }  
          });
          $(".dis4").click(function(){ 
            $(".div4").toggleClass("disdiv");
            $(".dis4").toggleClass("distyle4");
            if($(".div2").hasClass("disdiv") && $(".dis2").hasClass("distyle2")){
                $(".div2").removeClass("disdiv");
                $(".dis2").removeClass("distyle2");
            }
            if($(".div3").hasClass("disdiv") && $(".dis3").hasClass("distyle3")){
              $(".div3").removeClass("disdiv");
              $(".dis3").removeClass("distyle3");
          }
          if($(".div1").hasClass("disdiv") && $(".dis1").hasClass("distyle1")){
            $(".div1").removeClass("disdiv");
            $(".dis1").removeClass("distyle1");
        }  
          });
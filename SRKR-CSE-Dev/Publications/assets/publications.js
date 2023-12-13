$('.year').click(function(){
    var but=parseInt($(this).html());
    var t=document.getElementsByClassName('table');
    var heading=document.getElementsByClassName('year-heading');
    var year=document.getElementsByClassName('year');
    for(i=0;i<t.length;i++)
    {
        var elem1=heading[i];
        var elem2=year[i];
        $(elem1).css("display","none");
        if(elem2.classList.contains('year-focused'))
        {
            elem2.classList.remove('year-focused');
            var k=$(elem2).html();
            var prev=document.getElementById(k);;
            prev.classList.remove('table-display');
            var k1=document.getElementById(k+'c');
            $(k1).css("display",'none');
        }
    }
    var dis=document.getElementById(but);
    var dis1=document.getElementById(but+'h');
    var dis3=document.getElementById(but+'y');
    var dis4=document.getElementById(but+'c');
    dis.classList.add('table-display');
    $(dis1).css("display","block");
    dis3.classList.add('year-focused');
    $(dis4).css("display",'block');
});

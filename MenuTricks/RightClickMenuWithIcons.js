// Menu script created by Kari Hollo, Finland
//
// Wish I got a job :(
//
// Use these files "as is". You may modify them freely.
// If you can't get them work after modifications, I don't care...
// Wrote and tested with MS IE6 only...
// Modified by JavaScript Kit (http://www.javascriptkit.com)
// constants ********

//default/required menu images:
var myi=new Image; myi.src="./arrow__r.gif";      //submenu arrow
var myiw=new Image; myiw.src="./arrow__rw.gif";   //same as white
var myie=new Image; myie.src="./arrow__e.gif";    //empty pic
var myis=new Image; myis.src="./spacer.gif";      //spacer
var myisb=new Image; myisb.src="./spacer__b.gif"; //enpty end pic left to spacer


var kto=2000;                 // killTimeout [ms]
var mymenuwidth="160px"       // menu width
var bg_color="#D6D6D6";       // colors...
var bg_color_hl="navy";       // syncronize with css file!!
var fg_color="black";         //
var fg_color_hl="white";      //
var spc="#SPACER#";           // spacer sign
var arrow2SubMenu="#ARROW#";  // submenu sign


// *********************************************************
// ***
// ***   Note to developers:
// ***   ===================
// ***
// ***   Edit the main menu and/or sub-menus as needed.
// ***
// *********************************************************
// ***
// ***   This is the main menu.
// ***
// ***   format = caption/spacer,icon,gimmick/submenu
// ***
// *********************************************************
var m1=new Array;
m1[0]=new Array("");
m1[1]=new Array("JavaScript Kit","./telkku.gif","goto('http://www.javascriptkit.com'    )");
m1[2]=new Array(spc);   // ---> this is how to add a menu divider   <------
m1[3]=new Array("Freewarejava"+arrow2SubMenu,"./pelle.gif",11); //denote sub menu (using "arrow2SubMenu")
m1[4]=new Array("Dynamic Drive","./pelle.gif","goto('http://www.dynamicdrive.com')");
m1[5]=new Array("Coding Forums","./pelle.gif","goto('http://www.codingforums.com')");
m1[6]=new Array("Technology Sites"+arrow2SubMenu,"./pelle.gif",12); //denote sub menu (using "arrow2SubMenu")


// name submenus reasonable!
// m1## 1.level, m2## 2.level and so on...
// *********************************************************
// ***
// ***   This is the first sub-menu
// ***
// ***   format = caption/spacer,icon,gimmick/submenu
// ***
// *********************************************************
var m11=new Array;
m11[0]=new Array("");
m11[1]=new Array("Java Applets","./putki.gif","goto('http://freewarejava.com/applets/')");
m11[2]=new Array("Tutorials"+arrow2SubMenu,"./pelle.gif",21);
m11[3]=new Array("Java Sites","./telkku.gif","goto('http://freewarejava.com/javasites/')");
m11[4]=new Array("Java Books","./telkku.gif","goto('http://freewarejava.com/books/')");
m11[5]=new Array("JSP and Servlets","./telkku.gif","goto('http://freewarejava.com/jsp/')");

// *********************************************************
// ***
// ***   This is the first sub-menu of the first sub-menu
// ***
// ***   format = caption/spacer,icon,gimmick/submenu
// ***
// *********************************************************
var m21=new Array;
m21[0]=new Array("");
m21[1]=new Array("Java Tutorials","./telkku.gif","goto('http://freewarejava.com/tutorials/')");
m21[2]=new Array("JavaScript Tutorials","./telkku.gif","goto('http://www.javascriptkit.com/javaindex.shtml')");

// *********************************************************
// ***
// ***   This is the second sub-menu
// ***
// ***   format = caption/spacer,icon,gimmick/submenu
// ***
// *********************************************************
var m12=new Array;
m12[0]=new Array("");
m12[1]=new Array("News.com","./telkku.gif","window.open('http://www.news.com')");
m12[2]=new Array("Wired News","./putki.gif","window.open('http://wired.com')");
m12[3]=new Array("SlashDot","./telkku.gif","window.open('http://slashdot.org')");

//ENTER MENU IDs of above. UPDATE IF ADD/REMOVE MENUS!
var mvect=new Array(1,11,12,21);


// END OF EDITTING. variables ********
var th;          // menu height
var tw;          // menu width
var vas=0;       // on left flag
var llv=false;   // menu visible flag
var tid;         // timeout id
var ksm=0;       // known sub sub menu id


//************** FUNCTIONS
//******** base function to create menus

// error handler ***************
function stoperror()
{
   return true;
}

window.onerror=stoperror;  //suppress potential JS errors. Comment line if you need to debug page.

function createMenus(){
   for(xyzzy=0;xyzzy<mvect.length;xyzzy++)
   {
      document.write("<DIV id='teva"+mvect[xyzzy]+"' class='men'>");
      document.write("<TABLE WIDTH='100%' BORDER=0 CELLSPACING=0 CELLPADDING=0>");
      initMenu(mvect[xyzzy]);
      document.write("</TABLE></DIV>");
   }
}

//******** initialization
function initMenu(t)
{
   var obj=eval("teva"+t); // container
   var vect=eval("m"+t);   // menu
   var ve1;                // caption
   var ve2;                // picture
   var ve3;                // trick/no of submenu
   var spacers=0;          // spacer counter

   obj.style.height=(vect.length-1)*16+"px";
   obj.style.width=mymenuwidth;
   if(t==1)
   {
      th=obj.style.height.substr(0,obj.style.height.length-2);
      tw=obj.style.width.substr(0,obj.style.width.length-2);
   }
   for(i=1;i<vect.length;i++)
   {
      ve1=eval("vect["+i+"][0]");
      document.write("<TR>");
      if(ve1==spc)
      {
         spacers++;
         document.write("<TD colspan=3 style='height:8px;'>"+
            "<img src='"+myisb.src+"' style='width:3px;height:2px;'>"+
            "<img src='"+myis.src+"' style='width:95%;height:2px;'></TD>");
      }
      else
      {
         ve2=eval("vect["+i+"][1]");
         ve3=eval("vect["+i+"][2]");
         if(ve1.match(arrow2SubMenu))
         {
            var oy=16*(i-1)-spacers*8;
            document.write("<TD class='imgtd' style='border:1px solid "+bg_color+";' "+
               "id='m_"+t+"_"+i+"a' onmouseover='act_td("+t+","+i+");showSubMenu("+t+","+ve3+","+oy+");' "+
               "onmouseout='nonact_td("+t+","+i+");'>"+
               "<img id='m_"+t+"_"+i+"ap' src='"+ve2+"' class='icondimensions'></TD>");
            document.write("<TD onmouseover='act_td("+t+","+i+");showSubMenu("+t+","+ve3+","+oy+");' "+
               "onmouseout='nonact_td("+t+","+i+");' class='tdmenu' "+
               "id='m_"+t+"_"+i+"'>&nbsp;"+ve1.substr(0,ve1.length-7)+"</TD>");
            document.write("<td class='imgtd' id='m_"+t+"_"+i+"b' "+
               "onmouseover='act_td("+t+","+i+");showSubMenu("+t+","+ve3+","+oy+");' "+
               "onmouseout='nonact_td("+t+","+i+");'>"+
               "<img class='arrow2SubMenu' id='m_"+t+"_"+i+"bp' src='"+myi.src+"'></td>");
         }
         else
         {
            document.write("<TD class='imgtd' style='border:1px solid "+bg_color+";' "+
               "id='m_"+t+"_"+i+"a' onmouseover='act_td("+t+","+i+");' "+
               "onmouseout='nonact_td("+t+","+i+");' "+
               "onclick='eval(m"+t+"["+i+"][2]);'>"+
               "<img id='m_"+t+"_"+i+"ap' src='"+ve2+"' class='icondimensions'></TD>");
            document.write("<TD onmouseover='act_td("+t+","+i+");'   "+
               "onmouseout='nonact_td("+t+","+i+");' onclick='eval(m"+t+"["+i+"][2]);' "+
               "class='tdmenu' id='m_"+t+"_"+i+"'>&nbsp;"+ve1+"</TD>");
            document.write(   "<td class='imgtd' id='m_"+t+"_"+i+"b' "+
               "onmouseover='act_td("+t+","+i+");' "+
               "onmouseout='nonact_td("+t+","+i+");' "+
               "onclick='eval(m"+t+"["+i+"][2]);'>"+
               "<img class='emp' id='m_"+t+"_"+i+"bp' src='' width='12px' height='12px'></td>");
         }
      }
      document.write("</TR>");
   }
   if(t==1)
   {
      obj.style.height=(vect.length-1)*16-spacers*8+"px";
      th=obj.style.height.substr(0,obj.style.height.length-2);
   }
}
// on hover **********
function act_td(t,i)
{
   window.clearTimeout(tid);
   var obj=eval("m_"+t+"_"+i);
   if(t==1)
      hideSubMenu();
   else
      hideKnownSubMenu(t);
   obj.style.backgroundColor=bg_color_hl;
   obj.style.color=fg_color_hl;
   act1_td(eval(obj.id+"a")); //send cell id

   act2_td(eval(obj.id+"b"));
}
// on mouse out *********
function nonact_td(t,i)
{
   var obj=eval("m_"+t+"_"+i);
   obj.style.backgroundColor=bg_color;
   obj.style.color=fg_color;
   nonact1_td(eval(obj.id+"a"));
   nonact2_td(eval(obj.id+"b"));
   tid=setTimeout('showMenu("mousedown")',kto);
}
//******** left=icon cell hover...
function act1_td(t)
{
   var cel=eval(t);
   var pix=eval(t.id+"p");
   if(pix.src!=myie.src)
      cel.style.border='1px outset';
   else
   {
      cel.style.border="1px solid "+bg_color_hl;
      cel.style.backgroundColor=bg_color_hl;
   }
}
// icon cell on mouse out *********
function nonact1_td(t)
{
   var cel=eval(t);
   var pix=eval(t.id+"p");
   if(pix.src!=myie.src)
      cel.style.border="1px solid "+bg_color;
   else
   {
      cel.style.border="1px solid "+bg_color;
      cel.style.backgroundColor=bg_color;
   }
}
//******** right cell for submenu arrow on hover
function act2_td(t)
{
   var cel=eval(t);
   var pix=eval(t.id+"p");
   cel.style.backgroundColor=bg_color_hl;
   if(cel.className!="emp") pix.src=myiw.src;
}
//********** same onmouseout........
function nonact2_td(t)
{
   var cel=eval(t);
   var pix=eval(t.id+"p");
   cel.style.backgroundColor=bg_color;
   cel.style.color=fg_color;
   if(cel.className!="emp") pix.src=myi.src;
}
// needs explanations?
function showMenu(e)
{
   if(llv==true)
      hideMenu();
   else
   {
      clearTimeout(tid);
      var ah=document.body.clientHeight-th;
      var aw=document.body.clientWidth-tw;

      if(e.clientY < ah) teva1.style.top=e.clientY;
      else teva1.style.top=e.clientY-th;

      if(e.clientX < aw)
      {
         teva1.style.left=e.clientX;vas=0;
      }
      else
      {
         teva1.style.left=e.clientX-tw;vas=1;
      }

      teva1.style.visibility='visible';
      llv=true;
      tid=window.setTimeout("hideMenu()",kto);
   }
}
// ...........
function showSubMenu(c,t,y)
{
   clearTimeout(tid);
   var tobj=eval("teva"+c);
   var obj=eval("teva"+t);
   var ox=tobj.style.left.substr(0,tobj.style.left.length-2);
   var oy=tobj.style.top.substr(0,tobj.style.top.length-2);
   var oh=obj.style.height.substr(0,obj.style.height.length-2);
   var ow=obj.style.width.substr(0,obj.style.width.length-2);
   if(vas==0)
   {
      if(Math.round(ox) > Math.round(document.body.clientWidth)-Math.round(ow)*2-10)
         obj.style.left=Math.round(ox)-Math.round(ow)+2;
      else
         obj.style.left=Math.round(ox)+Math.round(ow)-5;
   }
   else
       obj.style.left=Math.round(ox)-Math.round(ow)+2;
   if(Math.round(oy)+Math.round(y) < Math.round(document.body.clientHeight)-Math.round(oh))
      obj.style.top=Math.round(oy)+Math.round(y);
   else
      obj.style.top=Math.round(oy)+Math.round(y)-Math.round(oh);
   obj.style.visibility='visible';
   ksm=t;
}
//...............
function hideMenu()
{
   clearTimeout(tid);
   teva1.style.visibility='hidden';
   hideSubMenu();
   llv=false;
}
//.................
function hideSubMenu()
{
   var obj;
   for(j=1;j<mvect.length;j++)
   {
      obj=eval("teva"+mvect[j]);
      obj.style.visibility='hidden';
   }
}
//.................
function hideKnownSubMenu(t)
{
   if(ksm>0 && ksm!=t)
   {
      var obj;
      for(j=1;j<mvect.length;j++)
      {
         if(mvect[j]>t)
         {
            obj=eval("teva"+mvect[j]);
            obj.style.visibility='hidden';
         }
      }
      ksm=0;
   }
}

function goto(url)
{
  window.location=url
}


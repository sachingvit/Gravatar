function  switcher(){
  bg= $('body').css('background-image');
  bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "").split('/');

  max= 5;
  min=1;
  x = "./images/"+(Math.floor(Math.random() * 5) + 1)+".jpg";

  $('body').css({'background-image':'url("'+x+'")'});
}
setInterval(switcher,15000);

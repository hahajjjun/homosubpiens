var flag = 1;
function drawblock() {
    document.write('<span class = block id = block'+flag+'>');
    document.write('    <div class = imgblock id = imgblock'+flag+'>');
    document.write('        <img src = img\\sub_logos\\LOGO'+flag+'.png height=70px>');
    document.write('    </div>');
    document.write('    <div class = infoblock id=infoblock'+flag+'>');
    document.write('        <span class = time>12</span>');
    document.write('        <sup>개월 동안&ensp;</sup>');
    document.write('        <span class = subtotpay>120000</span>');
    document.write('        <sup>원</sup>');
    document.write('        &emsp;');
    document.write('        이번 달 : ');
    document.write('        <span class = pay>10000</span>');
    document.write('        <sup>원</sup>                ');
    document.write('    </div>');
    document.write('</span>');
    styleblock();
    flag++;
}
function drawbtn() {
    document.write('<button id = "add">+</button>');
    stylebtn();
}
function drawfooter() {
    document.write('<footer id="footer">');
    document.write('    <div>');
    document.write('        <span> made by hahajjjun </span>');
    document.write('    </div>');
    document.write('    <a id="inspire" href="https://blog.naver.com/hahajjjun/222254849192">개발일지 </a>');
    document.write('</footer> ');
    stylefooter();
}
function styleblock() {
    const blockflag = document.getElementById('block'+flag.toString());
    //console.log(flag);
    var mTop = flag*180-110;
    var tDelay = 3+flag*0.3;
    //console.log(mTop);
    blockflag.style.marginTop = mTop+"px";
    blockflag.style.animationDelay = tDelay+"s";
    //console.log(blockflag.style.marginTop);
}
function stylebtn() {
    const addbtn = document.getElementById("add");
    var mTopbtn = flag*180-110+5;
    var tDelaybtn = 3+flag*0.3+0.3;
    addbtn.style.marginTop = mTopbtn+"px";
    addbtn.style.animationDelay = tDelaybtn+"s";
}

/*function init(){
    const addbtn = document.getElementById("add");
    console.log(addbtn);
    addbtn.addEventListener('click',drawblock);
}
init();
*/
function stylefooter(){
    const footer = document.getElementById("footer");
    var mTopfooter = flag*180-110+50;
    var tDelayfooter = 3+flag*0.3+0.6;
    footer.style.marginTop = mTopfooter+"px";
    footer.style.animationDelay = tDelayfooter+"s";
}
drawblock();
drawblock();
drawblock();
drawbtn();
drawfooter();
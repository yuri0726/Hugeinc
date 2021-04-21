const gnbWindow = document.getElementById('gnb_window');
const gnbLogoWrap = document.getElementsByClassName('gnb_logo_wrap')[0];
const gnbLogo = document.getElementsByClassName('gnb_logo')[0];

function gnbLogoHover(state) {

   if (navOpenState == false) {

      if (state == 0) {
         // 화면 테두리 보이기
         gnbWindow.style.borderWidth = "50px";
         gnbWindow.style.borderTopWidth = "90px";
         gnbWindow.style.zIndex = "100";

         // 로고 배경 및 색상 변경
         gnbLogoWrap.style.backgroundColor = "rgb(0,0,0)";
         gnbLogo.style.fill = "rgb(255,255,255)";
      } // if close
      
      else {
         // 화면 테두리 사라지기
         gnbWindow.style.borderWidth = "0px";
         gnbWindow.style.zIndex = "-1";

         // 로고 배경 및 색상 초기화
         gnbLogoWrap.style.backgroundColor = "rgb(255,255,255)";
         gnbLogo.style.fill = "rgb(0,0,0)";
      } // else close

   } // if close

} // function close

const gnbWide = document.getElementById('gnb_wide');
const gnbLogoHuge = document.getElementsByClassName('gnb_logo_huge')[0];
const mainContent = document.querySelector('main');

var navOpenState = false; // 네비게이션 오픈 상태 변수

function gnbWideOpen() {

   if (navOpenState == false) {

      // logo Change
      gnbLogoWrap.style.backgroundColor = "rgb(244,244,244)";
      gnbLogoHuge.style.display = "block";
      gnbLogo.style.display = "none";

      // gnb_wide 보여지기
      gnbWide.style.top = "0px";

      // Main Content 아래로 440px 이동
      mainContent.style.marginTop = "440px";
      gnbWindow.style.top="350px";

      navOpenState = true;

   }  // if close 
   
   else {

      // logo Change
      gnbLogoWrap.style.backgroundColor = "rgb(255,255,255)";
      gnbLogoHuge.style.display = "none";
      gnbLogo.style.display = "block";

      // gnb_wide 숨기기
      gnbWide.style.top = "-440px";

      // Main Content 아래로 440px 이동
      mainContent.style.marginTop = "0px";
      gnbWindow.style.top = "0px"

      navOpenState = false;

   } // else close

} // function close
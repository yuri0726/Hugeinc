// Hero Title Auto Change
var titleText = [
   "Hello.",
   "Hola.",
   "Buenas.",
   "Ola.",
   "Ei.",
   "你好.",
   "E'yo.",
   "Ello.",
   "Aye.",
   "안녕.",
]; // 1차원 배열
var titleTextNum = 0;

//titleText.length; - titleText의 배열의 갯수

function titleChange() {
   titleTextNum++; // Hello가 이미 h1에 있기 때문에 더하기 먼저 해줌!

   if (titleTextNum > titleText.length - 1) {
      titleTextNum = 0;
   }

   document.getElementById("hero_title").innerHTML =
      titleText[titleTextNum];
}

var titleI = setInterval(titleChange, 1000);

// Talk Form Focus
// 초점이 잡힐 때 Focus고 벗어나는 이벤트는 Blur/ 값이 변경되는 건 Change
function talkFocus(target) {

   if (target == 0) {
      document.getElementsByClassName("talk_name_eyebrow")[0].style.display = "block";
      document.getElementsByClassName("talk_name_eyebrow")[0].style.color = "#3a97f5";
      document.getElementById("talk_name").placeholder = "";
   }

   else if (target == 1) {
      document.getElementsByClassName("talk_email_eyebrow")[0].style.display = "block";
      document.getElementsByClassName("talk_email_eyebrow")[0].style.color = "#3a97f5";
      document.getElementById("talk_email").placeholder = "";
   }

   else if (target == 2) {
      document.getElementsByClassName("talk_company_eyebrow")[0].style.display = "block";
      document.getElementsByClassName("talk_company_eyebrow")[0].style.color = "#3a97f5";
      document.getElementById("talk_company").placeholder = "";
   }

   else {
      document.getElementsByClassName("talk_message_eyebrow")[0].style.display = "block";
      document.getElementsByClassName("talk_message_eyebrow")[0].style.color = "#3a97f5";
      document.getElementById("talk_message").placeholder = "";
   }
}

// Talk Form Blur
// 초점이 잡힐 때 Focus고 벗어나는 이벤트는 Blur/ 값이 변경되는 건 Change
function talkBlur(target) {

   if (target == 0) {

      if (document.getElementById("talk_name").value == "") {
         document.getElementsByClassName("talk_name_eyebrow")[0].style.display = "none";
         document.getElementById("talk_name").placeholder = "| Your name.";
      } // if close

      else {
         document.getElementsByClassName("talk_name_eyebrow")[0].style.color = "rgb(0,0,0)";
      } // else close

   }// if close

   else if (target == 1) {

      if (document.getElementById("talk_email").value == "") {
         document.getElementsByClassName("talk_email_eyebrow")[0].style.display = "none";
         document.getElementById("talk_email").placeholder = "| Your name.";
      } // if close

      else {
         document.getElementsByClassName("talk_email_eyebrow")[0].style.color = "rgb(0,0,0)";
      } // else close

   }// else if close

   else if (target == 2) {

      if (document.getElementById("talk_company").value == "") {
         document.getElementsByClassName("talk_company_eyebrow")[0].style.display = "none";
         document.getElementById("talk_company").placeholder = "| Your name.";
      } // if close

      else {
         document.getElementsByClassName("talk_company_eyebrow")[0].style.color = "rgb(0,0,0)";
      } // else close

   }// else if close

   else {

      if (document.getElementById("talk_message").value == "") {
         document.getElementsByClassName("talk_message_eyebrow")[0].style.display = "none";
         document.getElementById("talk_message").placeholder = "| Your name.";
      } // if close

      else {
         document.getElementsByClassName("talk_message_eyebrow")[0].style.color = "rgb(0,0,0)";
      } // else close

   }// else close

} // function close

// Talk Send Button
function talkSend() {

   var isCheck = true;

   // 사용자 입력 값에 문제가 있을 때

   // Name 입력 값 체크
   if (document.getElementById("talk_name").value == "") {
      document.getElementsByClassName("talk_name_require")[0].style.display = "block";
      document.getElementById("talk_name").style.borderBottomColor = "#ea178c";
      isCheck = false;
   } // if close

   if (document.getElementById("talk_email").value == "") {
      document.getElementsByClassName("talk_email_require")[0].style.display = "block";
      document.getElementById("talk_email").style.borderBottomColor = "#ea178c";
      isCheck = false;
   } // if close

   if (document.getElementById("talk_company").value == "") {
      document.getElementsByClassName("talk_company_require")[0].style.display = "block";
      document.getElementById("talk_company").style.borderBottomColor = "#ea178c";
      isCheck = false;
   } // if close

   if (document.getElementById("talk_message").value == "") {
      document.getElementsByClassName("talk_message_require")[0].style.display = "block";
      document.getElementById("talk_message").style.borderColor = "#ea178c";
      isCheck = false;
   } // if close

   // 사용자 입력 값이 모두 정상일 때
   if (isCheck) {
      document.getElementsByClassName("talk_right_title")[0].innerHTML = "Thanks for reaching out! We'll get back to you as soon as possible.";
      document.getElementById("talk_form").style.display = "none";
   } // if close

   isCheck = true;
} // function close

// Talk Form Change
// 초점이 잡힐 때 Focus고 벗어나는 이벤트는 Blur/ 값이 변경되는 건 Change / 값을 입력하는 건 Input
function talkChange(target) {

   // Input Event
   if (target == 0 && document.getElementById('talk_name').value.length > 1) {
      document.getElementsByClassName('talk_name_require')[0].style.display = "none";
      document.getElementById("talk_name").style.borderBottomColor = "rgba(0,0,0,0.6)";
   } // if close

   else if (target == 1 && document.getElementById('talk_email').value.length > 1) {
      document.getElementsByClassName('talk_email_require')[0].style.display = "none";
      document.getElementById("talk_email").style.borderBottomColor = "rgba(0,0,0,0.6)";
   } // else if close

   // Change Event
   else if (target == 2) {
      document.getElementsByClassName('talk_company_require')[0].style.display = "none";
      document.getElementById("talk_company").style.borderBottomColor = "rgba(0,0,0,0.6)";
   } // else if close

   else {
      document.getElementsByClassName('talk_message_require')[0].style.display = "none";
      document.getElementById("talk_message").style.borderColor = "rgba(0,0,0,0.6)";
   } // else close

} // functio close


/* ID로 작업한 것!!!
// Offiice Time

// 브라우저 날짜 Object 생성
var presentTime = new Date();

// 세계 표준 시 계산
var utcHour = presentTime.getUTCHours();
var utcMinute = presentTime.getUTCMinutes();

// 도시별 시간으로 계산
var atlHour = utcHour - 0 + 1;
var atlAmPm;

if (atlHour < 0) { atlHour += 24; }; // 24시간제 시간 값

// AM PM 결정
if (atlHour >= 12) { atlAmPm = "PM" } else { atlAmPm = "AM" };

// 화면 색상 및 아이콘 변경
if (atlHour >= 9 && atlHour <= 18) {
   document.getElementsByClassName('office_item')[0].style.backgroundColor = "rgb(255,255,255)";
   document.getElementsByClassName('office_item')[0].style.color = "rgb(0,0,0)";
   document.getElementsByClassName('icon_night')[0].style.display = "none";
   document.getElementsByClassName('icon_day')[0].style.display = "block";
}
else {
   document.getElementsByClassName('office_item')[0].style.backgroundColor = "rgb(22,22,22)";
   document.getElementsByClassName('office_item')[0].style.color = "rgb(255,255,255)";
   document.getElementsByClassName('icon_night')[0].style.display = "block";
   document.getElementsByClassName('icon_day')[0].style.display = "none";
}

// 12시간제로 변경
if (atlHour > 12) { atlHour -= 12; }

// 도시별 시간을 화면에 표시
document.getElementById('atl_hour').innerHTML = atlHour;
document.getElementById('atl_minute').innerHTML = utcMinute;
document.getElementById('atl_ampm').innerHTML = atlAmPm;
*/



// Class 사용으로 변경!!!

// 브라우저 날짜 Object 생성
var presentTime = new Date();

// 세계 표준 시 계산
var utcHour = presentTime.getUTCHours();
var utcMinute = presentTime.getUTCMinutes();

if (utcMinute < 10) { utcMinute = "0" + utcMinute; };

// 도시별 시간으로 계산
var cityHour = [];
var cityTimeOffset = [-4, -5, -4, -5, -4, -4, 1, -7, -5, -7, 8, -5, 9];
var cityAmPm = [];

// 도시별 시간으로 계산
for (i = 0; i < 13; i++) {

   cityHour[i] = utcHour + cityTimeOffset[i]

   // 24시간제 시간 값으로 조정
   if (cityHour[i] < 0) { cityHour[i] += 24; };

   // AM PM 결정
   if (cityHour[i] >= 12) { cityAmPm[i] = "PM" } else { cityAmPm[i] = "AM" };



   // 화면 색상 및 아이콘 변경
   if (cityHour[i] >= 8 && cityHour[i] <= 18) {
      document.getElementsByClassName('office_item')[i].style.backgroundColor = "rgb(255,255,255)";
      document.getElementsByClassName('office_item')[i].style.color = "rgb(0,0,0)";
      document.getElementsByClassName('icon_night')[i].style.display = "none";
      document.getElementsByClassName('icon_day')[i].style.display = "block";
   }
   else {
      document.getElementsByClassName('office_item')[i].style.backgroundColor = "rgb(22,22,22)";
      document.getElementsByClassName('office_item')[i].style.color = "rgb(255,255,255)";
      document.getElementsByClassName('icon_night')[i].style.display = "block";
      document.getElementsByClassName('icon_day')[i].style.display = "none";
   }

   // 12시간제로 변경
   if (cityHour[i] > 12) { cityHour[i] -= 12 };

   // 도시별 시간을 화면에 표시
   document.getElementsByClassName('city_hour')[i].innerHTML = cityHour[i];
   document.getElementsByClassName('city_minute')[i].innerHTML = utcMinute;
   document.getElementsByClassName('city_ampm')[i].innerHTML = cityAmPm[i];

}



// Magenta Random Change

var magentaBg = [
   'magenta_bg_1.jpg',
   'magenta_bg_2.png',
   'magenta_bg_3.png'
];

var magentaTitle = [
   "Should Logo Designers Fear the Internet’s Id?",
   "Greatly simplified to focus on accessible design.",
   "Good Content Isn’t Enough."];

var magentaDetail = [
   "When a company rebrands, one thing nearly always follows: backlash. But can designers always avoid the criticism? Should they?",
   "Her technical expertise launched a billion phone calls, yet now she is routinely thwarted by what many hail as one of the most accessible UIs on the planet.",
   "How to find — and grow — audience in 2018 and beyond."
];

// 랜덤 번호 결정
var magentaNum = Math.floor(Math.random()*magentaBg.length);


// 화면에 표시
document.getElementById('magenta').style.backgroundImage = "url(img/" + magentaBg[magentaNum] + ")";

document.getElementsByClassName('magenta_title')[0].innerHTML = magentaTitle[magentaNum];

document.getElementsByClassName('magenta_detail')[0].innerHTML = magentaDetail[magentaNum];
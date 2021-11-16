const originText = document.querySelector('.originText');
const MD5Text = document.querySelector('.MD5Text');
const MD5TextSpecial = document.querySelector('.MD5Text-special');
const capital = document.querySelector('#capital');
const btn = document.querySelector('.btn');
const Pbox = document.querySelector('.prompt-box');
const Pclose = document.querySelector('.prompt-close');

// 關閉 提示框
function PcloseBox() {
  Pbox.classList.remove('open-box');
}

// Enter關閉 提示框
function PcloseBoxEnter(e) {
  if (e.keyCode === 13) {
    PcloseBox();
    originText.focus();
  }
}

// 特別算法函式
function MD5Special() {
  let MD5S = md5(originText.value).toUpperCase();
  MD5S = md5(MD5S.substring(0, 3) + MD5S.substring(29, 32)).toUpperCase();
  const MD5Sa = MD5S.substring(0, 3) + MD5S.substring(29, 32);
  MD5TextSpecial.innerHTML = `特別算法 :  ${MD5Sa}`;
}

// 執行加密主程序
function start() {
  if (originText.value === '') {
    Pbox.classList.add('open-box');
    Pclose.focus();
    // // 兩秒關閉，使用立即函式解決非同步
    // setTimeout(function () {
    //   PcloseBox();
    // }, 2000);
  } else if (capital.checked === false) {
    const MD5Num = md5(originText.value);
    MD5Text.value = MD5Num;
    // 特別算法
    MD5Special();
  } else if (capital.checked === true) {
    const MD5Num = md5(originText.value).toUpperCase();
    MD5Text.value = MD5Num;
    // 特別算法
    MD5Special();
  }
}

// Enter執行主程序
function startEnter(e) {
  if (e.keyCode === 13) {
    start();
  }
}

btn.addEventListener('click', start);
originText.addEventListener('keydown', startEnter);
originText.addEventListener('click', function () {
  this.value = '';
});
Pclose.addEventListener('click', PcloseBox);
Pbox.addEventListener('keydown', PcloseBoxEnter);

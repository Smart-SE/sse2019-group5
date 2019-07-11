"use strict";

document.addEventListener("DOMContentLoaded", event => {
  console.log("purchase.js");
  init().catch(e => {
    console.error("init fail");
  });
});

async function init() {
  const response = await executeGetPurchases();
  displayOrderList(response);
  initOrderModal();
  initOrderButton();
}

function executeGetPurchases() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 10000;
    xhr.onreadystatechange = () => {
      console.log(`xhr.status: ${xhr.status}`);
      // なぜか初回にstatus = 0 が返ってくる。
      if (300 <= xhr.status) {
        reject();
        return;
      }
      if (xhr.readyState == 4) {
        const responseText = xhr.responseText;
        const response = JSON.parse(responseText);
        console.log(`purchases response: ${JSON.stringify(response)}`);
        resolve(response);
      }
    };
    xhr.ontimeout = () => {
      console.log("purchases timeout!!");
      reject();
    };
    xhr.open("GET", "http://localhost:3004/purchases?_page=1&_limit=7");
    xhr.send();
  });
}

function displayOrderList(response) {
  for (let i = 0; i < response.length; i++) {
    const orderTableBodyElement = document.getElementById("order-course-table-body");
    orderTableBodyElement.insertAdjacentHTML(
      "beforeend",
      `<tr><td>${i + 1}</td><td>${response[i].date} ${response[i].course_name}</td><td>￥${
        response[i].total_price
      }</td></tr><tr>`
    );
  }
}

function initOrderButton() {
  document.getElementById("button-order").addEventListener("click", event => {
    $("#order-modal").modal("show");
  });
}

function initOrderModal() {
  document.getElementById("button-order-ok").addEventListener("click", event => {
    $("#order-modal").modal("hide");
    // TODO なぜか画面遷移しない。
    // location.assign(`${window.location.host}/history.html`);
    // location.href = `${window.location.host}/history.html`;
    // console.log(window.location.href);
  });
  document.getElementById("button-back").addEventListener("click", event => {
    history.back();
  });
}

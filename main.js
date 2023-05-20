/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/load/load.js
class Load {
  constructor() {
    this.message = JSON.stringify([{
      id: 26,
      title: "Побег из Шоушенка",
      imdb: 9.3,
      year: 1994
    }, {
      id: 25,
      title: "Крёстный отец",
      imdb: 9.2,
      year: 1972
    }, {
      id: 27,
      title: "Крёстный отец 2",
      imdb: 9.0,
      year: 1974
    }, {
      id: 1047,
      title: "Тёмный рыцарь",
      imdb: 9.0,
      year: 2008
    }, {
      id: 223,
      title: "Криминальное чтиво",
      imdb: 8.9,
      year: 1994
    }]);
  }
  getMessage() {
    return JSON.parse(this.message);
  }
}
;// CONCATENATED MODULE: ./src/js/sortwidget/sortwidget.js
class SortWidget {
  constructor(object) {
    this.object = object;
    this.orders = [{
      callback: (a, b) => a.dataset.id - b.dataset.id,
      arg: "id"
    }, {
      callback: (a, b) => b.dataset.id - a.dataset.id,
      arg: "id"
    }, {
      callback: (a, b) => a.dataset.title.length - b.dataset.title.length,
      arg: "title"
    }, {
      callback: (a, b) => b.dataset.title.length - a.dataset.title.length,
      arg: "title"
    }, {
      callback: (a, b) => a.dataset.year - b.dataset.year,
      arg: "year"
    }, {
      callback: (a, b) => b.dataset.year - a.dataset.year,
      arg: "year"
    }, {
      callback: (a, b) => a.dataset.imdb - b.dataset.imdb,
      arg: "imdb"
    }, {
      callback: (a, b) => b.dataset.imdb - a.dataset.imdb,
      arg: "imdb"
    }];
    this.body = document.querySelector("body");
    this.callbackIndex = 0;
    this.intervalId = null;
  }
  startSorting() {
    this.setObject();
    this.intervalId = setInterval(() => this.sortItems(this.orders[this.callbackIndex % this.orders.length]), 2000);
  }
  sortItems(settings) {
    const {
      callback,
      arg
    } = settings;
    const div = document.querySelector("div");
    let children = [...div.children].filter(el => el.dataset[arg]);
    children = children.sort(callback);
    const clonedChildren = [...children];
    children.forEach(el => el.remove());
    clonedChildren.forEach(el => div.appendChild(el));
    this.callbackIndex += 1;
  }
  setObject() {
    const div = document.createElement("div");
    const tr = document.createElement("tr");
    const id = document.createElement("td");
    id.textContent = `id`;
    tr.appendChild(id);
    const title = document.createElement("td");
    title.textContent = `title`;
    tr.appendChild(title);
    const year = document.createElement("td");
    year.textContent = `year`;
    tr.appendChild(year);
    const imdb = document.createElement("td");
    imdb.textContent = `imdb`;
    tr.appendChild(imdb);
    div.appendChild(tr);
    this.object.forEach(el => {
      const tr = document.createElement("tr");
      tr.dataset.id = el.id;
      tr.dataset.title = el.title;
      tr.dataset.year = el.year;
      tr.dataset.imdb = el.imdb;
      const id = document.createElement("td");
      id.textContent = `#${el.id}`;
      tr.appendChild(id);
      const title = document.createElement("td");
      title.textContent = el.title;
      tr.appendChild(title);
      const year = document.createElement("td");
      year.textContent = `(${el.year})`;
      tr.appendChild(year);
      const imdb = document.createElement("td");
      imdb.textContent = `imbd: ${el.imdb}`;
      tr.appendChild(imdb);
      div.appendChild(tr);
    });
    this.body.appendChild(div);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const load = new Load();
const sortWidget = new SortWidget(load.getMessage());
sortWidget.startSorting();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
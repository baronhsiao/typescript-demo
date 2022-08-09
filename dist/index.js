"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// --------- 基本類型 ---------
let member = 'Baron';
let str = '';
let num = 123;
let boo = true;
let n = null;
let un = undefined;
let test;
// 陣列
let arr = ['a', 'b', 'c'];
let arr1 = [['aa', 'bb', 'cc']];
// 元組
let tuple = [1, 'a', true];
// --------- Enum 列舉 ---------
// 開直播API -> 取得直播狀態
// -1（失敗） 0（成功）1（直播中）
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["LIVE"] = 1] = "LIVE";
})(LiveStatus || (LiveStatus = {}));
let failStatus = LiveStatus;
console.log(failStatus);
// --------- Union ---------
let twoType;
twoType = 1;
twoType = 'test';
let a;
(a = 1), (a = 'test');
const obj = {
    name: 'Baron',
    desc: '1',
};
const obj2 = {
    name: 'Baron',
    desc: '1',
    age: 20,
    //tall: 180
};
//  --------- function ---------
// 參數
function hello(a, b) {
    return a + b;
}
function hello2(a, b) {
    return a + b;
}
// undefined
function test2(a) {
    //console.log(a)
}
function hello3(a, age) {
    //console.log(a)
    if (age)
        test2(age);
}
function fetcher() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/2');
        const data = (yield res.json());
        return data;
    });
}
const data2 = {
    completed: false,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    userId: 1,
};
const rsData = data2;
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const rsData = (yield fetcher());
        //console.log('fetch data = ', (await fetcher()).title)
    });
}
getData();
//  --------- 泛型 ---------
function printSomething(a) {
    //console.log(a)
}
printSomething(1);
printSomething('A');
printSomething(true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJCQUEyQjtBQUMzQixJQUFJLE1BQU0sR0FBVyxPQUFPLENBQUE7QUFDNUIsSUFBSSxHQUFHLEdBQVcsRUFBRSxDQUFBO0FBQ3BCLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQTtBQUNyQixJQUFJLEdBQUcsR0FBWSxJQUFJLENBQUE7QUFDdkIsSUFBSSxDQUFDLEdBQVMsSUFBSSxDQUFBO0FBQ2xCLElBQUksRUFBRSxHQUFjLFNBQVMsQ0FBQTtBQUM3QixJQUFJLElBQVMsQ0FBQTtBQUNiLEtBQUs7QUFDTCxJQUFJLEdBQUcsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDbkMsSUFBSSxJQUFJLEdBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUMzQyxLQUFLO0FBQ0wsSUFBSSxLQUFLLEdBQThCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUVyRCw4QkFBOEI7QUFDOUIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixJQUFLLFVBSUo7QUFKRCxXQUFLLFVBQVU7SUFDYiw0Q0FBUyxDQUFBO0lBQ1QsaURBQVcsQ0FBQTtJQUNYLDJDQUFRLENBQUE7QUFDVixDQUFDLEVBSkksVUFBVSxLQUFWLFVBQVUsUUFJZDtBQUVELElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQTtBQUUzQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBRXZCLDRCQUE0QjtBQUM1QixJQUFJLE9BQXdCLENBQUE7QUFDNUIsT0FBTyxHQUFHLENBQUMsQ0FBQTtBQUNYLE9BQU8sR0FBRyxNQUFNLENBQUE7QUFLaEIsSUFBSSxDQUFJLENBQ1A7QUFBQSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQTtBQWN0QixNQUFNLEdBQUcsR0FBUztJQUNoQixJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxHQUFHO0NBQ1YsQ0FBQTtBQVlELE1BQU0sSUFBSSxHQUFVO0lBQ2xCLElBQUksRUFBRSxPQUFPO0lBQ2IsSUFBSSxFQUFFLEdBQUc7SUFDVCxHQUFHLEVBQUUsRUFBRTtJQUNQLFdBQVc7Q0FDWixDQUFBO0FBRUQsZ0NBQWdDO0FBQ2hDLEtBQUs7QUFDTCxTQUFTLEtBQUssQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDZCxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2QsQ0FBQztBQUVELFlBQVk7QUFDWixTQUFTLEtBQUssQ0FBQyxDQUFTO0lBQ3RCLGdCQUFnQjtBQUNsQixDQUFDO0FBQ0QsU0FBUyxNQUFNLENBQUMsQ0FBUyxFQUFFLEdBQVk7SUFDckMsZ0JBQWdCO0lBQ2hCLElBQUksR0FBRztRQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNyQixDQUFDO0FBVUQsU0FBZSxPQUFPOztRQUNwQixNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFBO1FBQ3ZFLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQVMsQ0FBQTtRQUV2QyxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7Q0FBQTtBQU1ELE1BQU0sS0FBSyxHQUFHO0lBQ1osU0FBUyxFQUFFLEtBQUs7SUFDaEIsRUFBRSxFQUFFLENBQUM7SUFDTCxLQUFLLEVBQUUsb0NBQW9DO0lBQzNDLE1BQU0sRUFBRSxDQUFDO0NBQ1YsQ0FBQTtBQUVELE1BQU0sTUFBTSxHQUFHLEtBQXlCLENBQUE7QUFFeEMsU0FBZSxPQUFPOztRQUNwQixNQUFNLE1BQU0sR0FBRyxDQUFDLE1BQU0sT0FBTyxFQUFFLENBQW9CLENBQUE7UUFFbkQsdURBQXVEO0lBQ3pELENBQUM7Q0FBQTtBQUVELE9BQU8sRUFBRSxDQUFBO0FBR1QsMEJBQTBCO0FBQzFCLFNBQVMsY0FBYyxDQUFJLENBQUk7SUFDN0IsZ0JBQWdCO0FBQ2xCLENBQUM7QUFDRCxjQUFjLENBQVMsQ0FBQyxDQUFDLENBQUE7QUFDekIsY0FBYyxDQUFTLEdBQUcsQ0FBQyxDQUFBO0FBQzNCLGNBQWMsQ0FBVSxJQUFJLENBQUMsQ0FBQSJ9
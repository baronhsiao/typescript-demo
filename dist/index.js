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
let failStatus = LiveStatus.FAIL;
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
    console.log(a);
}
function hello3(a, age) {
    console.log(a);
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
        console.log('fetch data = ', (yield fetcher()).title);
    });
}
getData();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJCQUEyQjtBQUMzQixJQUFJLE1BQU0sR0FBVyxPQUFPLENBQUE7QUFDNUIsSUFBSSxHQUFHLEdBQVcsRUFBRSxDQUFBO0FBQ3BCLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQTtBQUNyQixJQUFJLEdBQUcsR0FBWSxJQUFJLENBQUE7QUFDdkIsSUFBSSxDQUFDLEdBQVMsSUFBSSxDQUFBO0FBQ2xCLElBQUksRUFBRSxHQUFjLFNBQVMsQ0FBQTtBQUM3QixJQUFJLElBQVMsQ0FBQTtBQUNiLEtBQUs7QUFDTCxJQUFJLEdBQUcsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDbkMsSUFBSSxJQUFJLEdBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUMzQyxLQUFLO0FBQ0wsSUFBSSxLQUFLLEdBQThCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUVyRCw4QkFBOEI7QUFDOUIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixJQUFLLFVBSUo7QUFKRCxXQUFLLFVBQVU7SUFDYiw0Q0FBUyxDQUFBO0lBQ1QsaURBQVcsQ0FBQTtJQUNYLDJDQUFRLENBQUE7QUFDVixDQUFDLEVBSkksVUFBVSxLQUFWLFVBQVUsUUFJZDtBQUNELElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUE7QUFFaEMsNEJBQTRCO0FBQzVCLElBQUksT0FBd0IsQ0FBQTtBQUM1QixPQUFPLEdBQUcsQ0FBQyxDQUFBO0FBQ1gsT0FBTyxHQUFHLE1BQU0sQ0FBQTtBQUtoQixJQUFJLENBQUksQ0FDUDtBQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFBO0FBY3RCLE1BQU0sR0FBRyxHQUFTO0lBQ2hCLElBQUksRUFBRSxPQUFPO0lBQ2IsSUFBSSxFQUFFLEdBQUc7Q0FDVixDQUFBO0FBWUQsTUFBTSxJQUFJLEdBQVU7SUFDbEIsSUFBSSxFQUFFLE9BQU87SUFDYixJQUFJLEVBQUUsR0FBRztJQUNULEdBQUcsRUFBRSxFQUFFO0lBQ1AsV0FBVztDQUNaLENBQUE7QUFFRCxnQ0FBZ0M7QUFDaEMsS0FBSztBQUNMLFNBQVMsS0FBSyxDQUFDLENBQVMsRUFBRSxDQUFTO0lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNkLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDZCxDQUFDO0FBRUQsWUFBWTtBQUNaLFNBQVMsS0FBSyxDQUFDLENBQVM7SUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNoQixDQUFDO0FBQ0QsU0FBUyxNQUFNLENBQUMsQ0FBUyxFQUFFLEdBQVk7SUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNkLElBQUksR0FBRztRQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNyQixDQUFDO0FBVUQsU0FBZSxPQUFPOztRQUNwQixNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFBO1FBQ3ZFLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQVMsQ0FBQTtRQUV2QyxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7Q0FBQTtBQU1ELE1BQU0sS0FBSyxHQUFHO0lBQ1osU0FBUyxFQUFFLEtBQUs7SUFDaEIsRUFBRSxFQUFFLENBQUM7SUFDTCxLQUFLLEVBQUUsb0NBQW9DO0lBQzNDLE1BQU0sRUFBRSxDQUFDO0NBQ1YsQ0FBQTtBQUVELE1BQU0sTUFBTSxHQUFHLEtBQXlCLENBQUE7QUFFeEMsU0FBZSxPQUFPOztRQUNwQixNQUFNLE1BQU0sR0FBRyxDQUFDLE1BQU0sT0FBTyxFQUFFLENBQW9CLENBQUE7UUFFbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdkQsQ0FBQztDQUFBO0FBRUQsT0FBTyxFQUFFLENBQUEifQ==
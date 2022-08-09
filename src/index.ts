// ----------------------------- 基本類型
let member: string = 'Baron'
let str: string = ''
let num: number = 123
let boo: boolean = true
let n: null = null
let un: undefined = undefined
let test: any
// 陣列
let arr: string[] = ['a', 'b', 'c']
let arr1: string[][] = [['aa', 'bb', 'cc']]
// 元組
let tuple: [number, string, boolean] = [1, 'a', true]

// ----------------------------- Enum 列舉
// 開直播API -> 取得直播狀態
// -1（失敗） 0（成功）1（直播中）
enum LiveStatus {
  FAIL = -1,
  SUCCESS = 0,
  LIVE = 1,
}
let failStatus = LiveStatus.SUCCESS

// 跟一般的物件差異在哪？差在「常數」，不可之後修改
let LiveState = {
  FAIL: -1,
  SUCCESS: 0,
  LIVE: 1
}
let successStatus = LiveState.SUCCESS
//console.log(failStatus)

// ----------------------------- Union
let twoType: number | string
twoType = 1
twoType = 'test' 

// ----------------------------- type
type A = string | number

let a: A
;(a = 1), (a = 'test')

// ----------------------------- interface 
interface User {
  name: string
  age: number
}

// ----------------------------- Object
type Card = {
  name: string
  desc: string
}

const obj: Card = {
  name: 'Baron',
  desc: '1',
}

interface Card2 {
  name: string
  desc: string
}
// 兩者之間的差異：interface能夠擴充及能夠被class繼承，type不能擴充，
interface Card2 {
  age: number
  tall?: number
}

const obj2: Card2 = {
  name: 'Baron',
  desc: '1',
  age: 20,
  //tall: 180
}

// ----------------------------- function
// 參數
function hello(a: string, b: string) {
  return a + b
}

function hello2(a: number, b: number): number {
  return a + b
}

// undefined
function test2(a: number) {
  //console.log(a)
}
function hello3(a: number, age?: number) {
  // 問號（選填）的定義要放在最後
  //console.log(a)
  if (age) test2(age)
}

// ----------------------------- 斷言 as unknow
type Data = {
  userId: number
  id: number
  title: string
  completed: boolean
}

async function fetcher() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/2')
  const data = (await res.json()) as Data

  return data
}

type Data2 = {
  name: string
} 

const data2 = {
  completed: false,
  id: 2,
  title: 'quis ut nam facilis et officia qui',
  userId: 1,
}

const rsData = data2 as unknown as Data2

async function getData() {
  const rsData = (await fetcher()) as unknown as Data

  //console.log('fetch data = ', (await fetcher()).title)
}

getData()


// ----------------------------- 泛型
// 同一隻function 但可能有多種不同type的參數，此時就可以使用泛型，達到使用時再來定義type即可
function printSomething<T>(a: T) {
  //console.log(a) 
}
printSomething<number>(1)
printSomething<string>('A')
printSomething<boolean>(true)


// ----------------------------- utility
// Record<Keys, Type>
interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
}; 

// Pick<Type, Keys>
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// Omit<Type, Keys>
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview1 = Omit<Todo, "description">;
 
const todo1: TodoPreview1 = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};


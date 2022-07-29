// --------- 基本類型 ---------
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

// --------- Enum 列舉 ---------
// 開直播API -> 取得直播狀態
// -1（失敗） 0（成功）1（直播中）
enum LiveStatus {
  FAIL = -1,
  SUCCESS = 0,
  LIVE = 1,
}
let failStatus = LiveStatus.FAIL

// --------- Union ---------
let twoType: number | string
twoType = 1
twoType = 'test'

//  --------- type ---------
type A = string | number

let a: A
;(a = 1), (a = 'test')

//  --------- interface ---------
interface User {
  name: string
  age: number
}

//  --------- object ---------
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
// interface 能夠擴充
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

//  --------- function ---------
// 參數
function hello(a: string, b: string) {
  return a + b
}

function hello2(a: number, b: number): number {
  return a + b
}

// undefined
function test2(a: number) {
  console.log(a)
}
function hello3(a: number, age?: number) {
  console.log(a)
  if (age) test2(age)
}

//  --------- 斷言 as unknow ---------
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

  console.log('fetch data = ', (await fetcher()).title)
}

getData()

//  --------- 泛型 ---------
function printSomething<T>(a: T) {
  console.log(a)
}
printSomething<number>(1)
printSomething<string>('A')
printSomething<boolean>(true)

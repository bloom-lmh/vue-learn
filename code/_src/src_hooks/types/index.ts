// 定义person类接口
export interface IPerson {
  id: string,
  name: string,
  age: number
}

// 定义一个自定义类型Persons
export type Persons = Array<IPerson>
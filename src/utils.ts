/*
  Coding interview task #0

  Create a function that returns the sum of two numbers.
  The function could be called in two modes:
    - sumNumbers(1,2)
    - sumNumbers(1)(2)
*/
export function sumNumbers(a: number, b?: number): ((c: number) => number) | number {
  return 0;
}


/*
  Coding interview task #1

  Create a function that filters an array of objects and returns
  only objects that have all key-value pairs provided in sample object
*/
export const objFilter = (arr: any, sampleObj: any) => {
  return [];
};


/*
  Code interview task #2

  Create a function that returns people with siblings using
  getPeople and getSiblings functions
*/
const getPeople = async () => [
  { age: 44, name: 'John' },
  { age: 18, name: 'Peter' },
  { age: 23, name: 'Claire' },
  { age: 23, name: 'Jason' },
  { age: 32, name: 'Luke', email: 'luke@gmail.com' }
];

const getSiblings = async (name: string) => {
  if (['John', 'Luke'].includes(name)) return 3;
  return 0;
};

export const getPeopleWithSiblings = async () => {
  return [
    { age: 44, name: 'John', siblings: 3 },
    { age: 32, name: 'Luke', email: 'luke@gmail.com', siblings: 3 }
  ];
};

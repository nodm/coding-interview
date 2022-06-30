import { sumNumbers, objFilter, getPeopleWithSiblings } from './utils';

describe('Test suite for the sumNumber function', () => {
  test('should return the right value when called with two arguments', () => {
    expect(sumNumbers(3, 5)).toEqual(8);
  });
  test('should return the right value when called twice with one argument', () => {
    // @ts-ignore
    expect(sumNumbers(3)(5)).toEqual(8);
  });
  test('should return the right value when called with two arguments (edge case)', () => {
    expect(sumNumbers(3, 0)).toEqual(3);
  });
});

xdescribe('Tests suite for the objFilter function', () => {
  test('with simple filtering object', () => {
    expect(
      objFilter(
        [
          { age: 44, name: 'John' },
          { age: 18, name: 'Peter' },
          { age: 23, name: 'Claire' },
          { age: 23, name: 'Jason' },
          { age: 32, name: 'Luke', email: 'luke@gmail.com' }
        ],
        { age: 23 }
      )
    ).toEqual([
      { age: 23, name: 'Claire' },
      { age: 23, name: 'Jason' }
    ]);
  });

  test('with complex filtering object', () => {
    expect(
      objFilter(
        [
          { age: 44, name: 'John' },
          { age: 18, name: 'Peter' },
          { age: 23, name: 'Claire' },
          { age: 23, name: 'Jason' },
          { age: 32, name: 'Luke', email: 'luke@gmail.com' }
        ],
        { age: 32, name: 'Luke' }
      )
    ).toEqual([{ age: 32, name: 'Luke', email: 'luke@gmail.com' }]);
  });

  test('edge case', () => {
    expect(objFilter([
          {age: 44, name: 'John'},
          {age: 18, name: 'Peter'},
          {age: 23, name: 'Claire'},
          {age: 23, name: 'Jason'},
          {age: 32, name: 'Luke', email: 'luke@gmail.com'},
          {age: 0, name: 'Newborn'},
        ],
        {age: 0}
      )
    ).toEqual([{age: 0, name: 'Newborn'}]);
  });
});

xdescribe('Test suite for the getPeopleWithSiblings function', () => {
  test('Solution for getPeopleWithSiblings', async () => {
    expect(await getPeopleWithSiblings()).toEqual([
      { age: 44, name: 'John', siblings: 3 },
      { age: 32, name: 'Luke', email: 'luke@gmail.com', siblings: 3 }
    ]);
  });
});

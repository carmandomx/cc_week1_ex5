const { flatten } = require('../exercise');
const fs = require('fs');
const path = require('path');

const helper = __dirname.split('/');

helper.pop();
const filepath = path.resolve(helper.join('/'), 'exercise.js');
let file;

beforeAll( async() => {

     file = await fs.promises.readFile(filepath, 'utf-8')
 
 })
test('Testing the function exercise', () => { 
    expect(flatten([])).toBeDefined();
    expect(flatten([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4])
    expect(flatten([1, [], [3, [[4]]]])).toEqual([1,3,4]);
    expect(!file.match(/\.\s*flat\s*\(/) && !file.match(/\.\s*flatMap\s*\(/)).toBe(true)
 })
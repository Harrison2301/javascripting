
// Typescript is essentially optional - just a super-set of JS. however should be used for cleaner and described code
import { NumsEnum } from './example.enum';
import { INumsExample } from './numsExampleinterface';
type numExample = { num1: number, num2: number}
type intersection = INumsExample & numExample;

function add(nums: intersection): number {
    return nums.num1 + nums.num2;
}

add({num1: 1, num2: 2, num3: 3, num4: 3});
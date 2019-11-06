
// Typescript is essentially optional - just a super-set of JS. however should be used for cleaner and described code
import { NumsEnum } from './example.enum';
function add(num1: NumsEnum, num2: NumsEnum): string {
    return (num1 + num2).toString();
}

add(NumsEnum.Num1, NumsEnum.Num2)
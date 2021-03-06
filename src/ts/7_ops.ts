/*
input -> 複数
output -> 1つ と定義する。

class処理を使用し、コンストラクタ部分でmodelのinput部分を辞書化させる。
例: {'1': 'input_a', '2': 'input_b'}

 function Add(inputs: number[], output)
*/
import {Data, Node, Input, Output} from './7';

interface inputDict {
    num: number,
    name: string
}


export class Opsets {
    inputDict: inputDict[];
    outputData: Output;
    nodes: ReadonlyArray<Node>;

    constructor (data: Data){
        const dict: inputDict[] = [];

        for (const index in data.inputs){
            for (const output of data.inputs[index].outputs){
                dict.push({
                    num: output,
                    name: data.inputs[index].name
                });
            }
        }

        this.inputDict = dict;
        this.outputData = data.output;
        this.nodes = data.nodes;
    }

    Add(node: Node): string[] {
        if (node.opType != 'Add'){
            return [];
        }

        const output: string[] = [];
        return output;
    }

    print(): void {
        console.log(this.inputDict);
    }
}


function test(): void{
    const node1: Node = {
        name: 'tf_op_layer_add/add',
        opType: 'Add',
        inputs: [1, 2],
        outputs: [3]
    }

    const input1: Input = {
        name: 'a',
        outputs: [0]
    }

    const input2: Input = {
        name: 'b',
        outputs: [1]
    }

    const output: Output = {
        name: 'tf_op_layer_truediv',
        outputs: [3]
    }

    const inputData: Data = {
        inputs: [input1, input2],
        output: output,
        nodes: [node1]
    }

    const op = new Opsets(inputData);
    op.print();

}
test()

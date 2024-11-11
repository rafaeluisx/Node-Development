import { Writable } from "node:stream";

class MultiplybyTen extends Writable{
    _write(chunk, encoding, callback){
        console.log(Number(String(chunk)) * 10);
        callback();
    }
}

new OneToHundredStream()
.pipe(new NegateNumber())
.pipe(new MultiplybyTen());
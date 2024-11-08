import { Readable, Writable, Transform } from "node:stream";

class OneToHundredStream extends Readable{
    index = 1;
    _read(){
        const i = this.index++;

        setTimeout(() => {
            if (i > 10){
                this.push(null);
            }
            else{
                const buf = Buffer.from(String(i));
                this.push(buf);
            }
        }, 500)
    }
}

class NegateNumber extends Transform{
    _transform(chunk, encoding, callback){
        const transformedNumeber = Number(chunk.toString()) * -1;
        callback(null, Buffer.from(transformedNumeber.toString()));
    }
}

class MultiplybyTen extends Writable{
    _write(chunk, encoding, callback){
        console.log(Number(String(chunk)) * 10);
        callback();
    }
}

new OneToHundredStream()
.pipe(new NegateNumber())
.pipe(new MultiplybyTen());
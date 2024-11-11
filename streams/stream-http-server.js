import http from 'node:http';
import { Transform } from 'node:stream';

class NegateNumber extends Transform{
    _transform(chunk, encoding, callback){
        const transformedNumber = Number(chunk.toString()) * -1;
        console.log(`Transformed number: ${transformedNumber}.`);
        callback(null, Buffer.from(transformedNumber.toString()));
    }

}

const server = http.createServer((request, response) => {

    const teste = new NegateNumber();

    return request
    .pipe(new NegateNumber())
    .pipe(response);
});

server.listen(3334);
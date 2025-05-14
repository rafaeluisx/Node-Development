import http from 'node:http';
import { Transform } from 'node:stream';

class SayMyName extends Transform{

    _transform(chunk, encoding, callback){
        const firstName = chunk.toString();

        const fullName = firstName + ' Luis';
        console.log(fullName);

        const fullNameBuffer = Buffer.from(fullName);
        console.log(fullNameBuffer);

        console.log(`My full name after converting to buffer then to string again is: ${fullNameBuffer.toString()}`);

        const randomNumber = Math.floor(Math.random() * 100);
        console.log(`My random number is: ${randomNumber}`);
        const randomNumberBuffer = Buffer.from(randomNumber.toString());
        console.log(randomNumber);
        console.log(randomNumberBuffer);
        console.log(Number(randomNumberBuffer));

        callback(null, randomNumberBuffer);
    }
}

const servidor = http.createServer((request, response)=> {
    return request.pipe(new SayMyName).pipe(response);
});

servidor.listen('3335');
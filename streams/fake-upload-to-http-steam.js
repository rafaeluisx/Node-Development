import { Readable } from 'node:stream';

class OneToHundredStream extends Readable{
    index = 1;
    _read(){
        const i = this.index++;

        setTimeout(() => {
            if (i > 10){
                this.push(null);
            }
            else{
                console.log(`Original number: ${i}.`);
                const buf = Buffer.from(String(i));
                this.push(buf);
            }
        }, 500)
    }
}

fetch('http://localhost:3334', {
    method: 'POST',
    body: new OneToHundredStream(),
    duplex: 'half'
}).then(response => {
    return response.text()
}).then(data => {
    console.log(data);
});
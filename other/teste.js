import { Readable } from 'node:stream';

class ClasseTeste extends Readable{
    i = false;

    _read(){
        
        const jaPassou = this.i;
        if (jaPassou){
            this.push(null);
        } else{
            const buf = Buffer.from('Rafael');
            this.i = true;
            this.push(buf);
        }
    }
}

fetch('http://localhost:3335', {
    method: 'POST',
    body: new ClasseTeste(),
    duplex: 'half'
});
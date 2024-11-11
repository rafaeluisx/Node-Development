import { Readable } from 'node:stream';

class ClasseTeste extends Readable{

    _read(){
        
        const buf = Buffer.from('Rafael');
        this.i = true;
        this.push(buf);
        this.push(null);
    }
}

fetch('http://localhost:3335', {
    method: 'POST',
    body: new ClasseTeste(),
    duplex: 'half'
});
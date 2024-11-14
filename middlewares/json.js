export async function json(request, response){

    const buffers = [];

    try {

    for await (const chunk of request){
        buffers.push(chunk);
    }
    request.body = JSON.parse(Buffer.concat(buffers).toString());
    
    } catch (error){
    request.body = null;
    }

    response.setHeader("Content-type", "application/json");
}
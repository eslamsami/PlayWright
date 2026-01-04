import { test, expect } from '@playwright/test';
//import { log } from 'node:console';
//import { request } from 'node:http';



const BaseUrl = 'https://api.restful-api.dev/';
const ObjectPath ='objects'
const FullUrlWithObjectPath=BaseUrl+ObjectPath;
///////////////////////////////////////////////////////////////

let objectID :string;
let FullPathWithId :string;
////////////////////////////////////////////////////////////

test('get api',async({request})=>{

const starttime =Date.now ();
    const response =await request.get(FullUrlWithObjectPath);
    let responseBodyy = await response.json();
    let responseheaders = response.headers();
    console.log(responseBodyy);
    expect(response.status()).toBe(200);
    expect(responseBodyy[0].name).toBe('Google Pixel 6 Pro');
    console.log(responseheaders);
    expect(responseheaders['content-type']).toContain('application/json');
    let responsesize = (await response.body()).byteLength;
    expect(responsesize).toBeLessThan(1240);
    console.log(responsesize);
    let responetime =Date.now() - starttime ;
    console.log(responetime);
    expect(responetime).toBeLessThan(2000);
    
})

test('Post API',async({request})=>{

    const payload ={
        "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
    }
}
    //console.log(payload);
const Response = await request.post(FullUrlWithObjectPath,{
    data : payload
})
    let responseBody  = await Response.json();
    console.log(responseBody);
    expect(Response.status()).toBe(200);

    expect(responseBody.name).toContain(payload.name);

 //FullPathWithId = FullUrlWithObjectPath +'/'+objectID;
 
 objectID = responseBody.id;
FullPathWithId = `${FullUrlWithObjectPath}/${objectID}`;

})


test('Put API',async({request})=>{

    const payload ={
        "name": "Apple MacBook Pro 1133333333",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
    }
}
    //console.log(payload);
const Response = await request.put(FullPathWithId,{
    data : payload
})
    let responseBody  = await Response.json();
    console.log(responseBody);
    expect(Response.status()).toBe(200);

    expect(responseBody.name).toContain(payload.name);

  
})

test('Patch API',async({request})=>{

    const payload ={
         "name": "Apple MacBook Pro 16666666666666666"
    }

    //console.log(payload);
const Response = await request.patch(FullPathWithId,{
    data : payload
})
    let responseBody  = await Response.json();
    console.log(responseBody);
    expect(Response.status()).toBe(200);

    expect(responseBody.name).toContain(payload.name);

   // let objectID = responseBody.id;
    objectID = responseBody.id;

    // ff8081819782e69e019b56301c8f7794
})


test('Delete API',async({request})=>{

   
const Response = await request.delete(FullPathWithId)
    let responseBody  = await Response.json();
    console.log(responseBody);
   //expect(Response.status()).toBe(200);

    expect(responseBody.message).toContain('Object with ');


})
import * as express from "express";
import {Server} from "ws";
import * as path from "path";
const app = express();
// app.get('/',(req,res)=>{
//     res.send("Hello Express");
// })
app.use('/',express.static(path.join(__dirname,'..','client')))
export class Product{
    constructor(
      public id:number,
      public title:string,
      public price:number,
      public rating:number,
      public desc:string,
      public categories:Array<string>
    ){}
  }
export class Comment{
    constructor(
      public id:number,
      public productId:number,
      public timestamp:string,
      public user:string,
      public rating:number,
      public content:string
    ){}
  }
const products : Product[]=[
    new Product(1,"Demo1",1.99,3.5,"This is the first Demo",["Computers","Tablets"]),
    new Product(2,"Demo2",2.99,2.5,"This is the second Demo",["TVs"]),
    new Product(3,"Demo3",3.99,4.5,"This is the third Demo",["Phones"]),
    new Product(4,"Demo4",4.99,1.5,"This is the fourth Demo",["Phones"]),
    new Product(5,"Demo5",5.99,3.5,"This is the fifth Demo",["Computers","Tablets"]),
    new Product(6,"Demo6",6.99,2.5,"This is the sixth Demo",["Book"]),
  ];
const comments : Comment[]=[
    new Comment(1,1,"2018-02-03 22:12:12","Tom",3,"It is very good"),
    new Comment(2,1,"2018-02-03 12:02:12","Jerry",3,"It is good"),
    new Comment(3,2,"2018-02-03 08:12:12","Sam",2,"It is not bad"),
    new Comment(4,2,"2018-02-03 07:12:13","Bruce",1,"It is bad"),
    new Comment(5,2,"2018-02-03 19:12:12","Harry",2,"It is so so"),
 
  ];
app.get('/api/products',(req,res)=>{
  let result =products;
  let params= req.query;
  console.log(params);
  
  if(params.title){
    result=result.filter((p)=>p.title.indexOf(params.title)!==-1);
    console.log(result.length);
    
    console.log('title');
  }
  if(params.price&&result.length>0){
    result=result.filter((p)=>p.price<=parseInt(params.price));
    console.log('price');
  }
  if(params.category&&params.category!=="-1"&&result.length>0){
    result=result.filter((p)=>p.categories.indexOf(params.category)!==-1);
  }
    console.log('categories:'+params.category);
    res.json(result);
})
app.get('/api/product/:id',(req,res)=>{
    res.json(products.find((product)=>product.id==req.params.id));
})
app.get('/api/product/:id/comments',(req,res)=>{
  res.json(comments.filter((comment:Comment)=>comment.productId==req.params.id));
})
const server =app.listen(8000,"localhost",()=>{
    console.log("server is running, the address is http://localhost:8000");
});
const subscriptions = new Map<any,number[]>();

const wsServer = new Server({port: 8085});
wsServer.on("connection", websocket => {
    // websocket.send('This is a message from server');
    websocket.on('message',message=>{
      console.log('http://localhost:8085 websocket');
      
      let messageObj=JSON.parse(message.toString());
      let productIds=subscriptions.get(websocket)|| [];
      subscriptions.set(websocket,[...productIds,messageObj.productId]);
    });
    
});

const currentBids= new Map<number,number>();

setInterval(() => {
    products.forEach(p => {
      let currentlatestBids = currentBids.get(p.id)||p.price;
      let newBid= currentlatestBids+Math.random()*5;
      if (newBid>500)
      {
        newBid=0;
      }
      currentBids.set(p.id,newBid); 
    });
    subscriptions.forEach((productIds:number[],ws)=>{
      if(ws.readyState===1){
      let newBid= productIds.map(pid=>({
        productId:pid,
        bid:currentBids.get(pid)
      }));
      ws.send(JSON.stringify(newBid));
    }else{
      subscriptions.delete(ws);
    }
    });
}, 2000);
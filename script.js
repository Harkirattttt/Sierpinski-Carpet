let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.height = 400;
canvas.width = 400;

let x = 0;
let y= 0;
let w = 400;

ctx.strokeStyle = 'black'

class Box{
    constructor(x,y,w){
        this.x = x;
        this.y = y;
        this.w = w;
    }

    makeBox(){
        let boxes = []
        let newW = this.w/3;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(!(i==1 && j==1)){
                    ctx.strokeRect(this.x+i*newW,this.y+j*newW,newW,newW);
                    let b = new Box(this.x+i*newW,this.y+j*newW,newW);
                    boxes.push(b);
                }
            }
        }
        return boxes;
    }
}

let sponge = [];
let bx = new Box(x,y,w);
sponge.push(bx);

window.addEventListener('keydown',(e)=>{
    e.preventDefault();
    if(e.key == " "){
        let next = [];
        sponge.forEach((box)=>{
            let newBox = box.makeBox();
            next.push.apply(next,newBox)
        })
        sponge = next;
    }
})
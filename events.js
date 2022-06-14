const EventEmitter =require ('events');

const emmiter =new EventEmitter();

emmiter.on("hour",({period,name,age})=>{

    console.log(`after 1 hours I need a break after ${period}.my name is ${name}.my age is ${age}`)
})

//emmiter raise 
setTimeout(()=>{

    emmiter.emit("hour", {
        period:"5 years",
        name:"forhad hossain redoy",
        age :22
    });
})


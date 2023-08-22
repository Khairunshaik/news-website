const obj = {
    name : "Chinnu",
    greet : function(){
        setTimeout(() => {
            console.log(this.name);  //undefined
        }, 1000);
    },
};
obj.greet();
const candyMachine = {
    status: {
        name : 'node',
        count : 5,
    },
    getCandy : function() {
        this.status.count--;
        return this.status.count;
    }
};
const {getCandy, status: {count}} = candyMachine;
console.log(candyMachine.status.count); //현재는 5
console.log(getCandy()); //count를 1감소
console.log(candyMachine.status.count); //값은 4
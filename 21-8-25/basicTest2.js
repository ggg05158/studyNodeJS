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

//객체_1
const famaily = {
    address:'seoul',
    member:{},
    addFamily : function(age,name,role){
        this.member[role]={
            age:age,
            name:name
        };
    },
    getHeadcount:function(){
        return Object.keys(this.member).length;
    }

};
famaily.addFamily(30,'chloe','aunt');
famaily.addFamily(3,'lyn','niece');
famaily.addFamily(18,'ryan','aunt');
famaily.addFamily(20,'uil','cousin');
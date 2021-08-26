/* function findAndSaveUser(Users){   // 함수 선언(매개변수 : Users)
    Users.findOne({}, (err,user)=>{ //첫 번째 콜백
        if(err){ //오류처리1
            return console.log(err);
        }
        user.name = 'zero';
        user.save((err)=> { //두 번째 콜백
            if(err){ //오류처리2
                return console.error(err);
            }
            Users.findOne({gender: 'm'},(err,user)=>{ //세 번째 콜백
            //생략
            });
        });
    });
} */

function findAndSaveUser(Users){
    Users.findOne({})
        .then((user)=>{
            user.name = 'zero';
            return user.save();
        })
        .then((users)=> {
            return Users.findOne({gender: 'm'});
        })
        .then((user)=>{
            //생략
        })
        .catch(err=>{
            console.error(err);
        });
}
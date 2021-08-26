async function findAndSaveUser(User){
    try{
        let user = await URLSearchParams.findOne({});
        user.name = 'zero'
        user = await user.save();
        user = await URLSearchParams.findOne({gender:'m'})
        //생략
    }
    catch(error){
        console.error(error);
    }
}
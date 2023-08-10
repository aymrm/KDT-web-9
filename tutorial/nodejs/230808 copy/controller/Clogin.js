import * as Mlogin from "../model/Mlogin";

export const main = (req,res)=>{
    res.render("index");
}

export const userMain = (req,res)=>{
    res.render("login");
}

export const registerMain = (req,res)=>{
    res.render("register");
}

export const registerId = async (req,res)=>{
    try{
        await Mlogin.registerId(req.body);
        res.send({
            userid:req.body.userid,
            result,
        })
    } catch(error){
        console.log(error);
    }
}

export const postProfile=(req,res)=>{
    UserActivation.postProfile(req.body,(result)=>{
        if(result.length>0){
            res.render("profile",{data : result[0]});
        }
    })
}

export const userLogin = (req,res)=>{
    Mlogin.userLogin(req.body,(result)=>{
        res.send({
            userid:req.body.userid,
            result,
        })
    })
}

export const editProfile=(req,res)=>{
    Mlogin.editProfile(req.body,()=>{
        res.send({result:true});
    })
}

export const deleteProfile=(req,res)=>{
    Mlogin.deleteProfile(req.body.id,()=>{
        res.send({result:true});
    })
}
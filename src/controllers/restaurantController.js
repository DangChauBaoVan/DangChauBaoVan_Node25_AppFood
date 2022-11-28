const { errorCode, successCode, failCode } = require("../configs/response");
const sequelize = require("../models/index");
const init_model = require("../models/init-models");
const model = init_model(sequelize)

const getAllRes = async (req, res) => {
    try {
        let data = await model.restaurant.findAll();
        successCode(res, data, "Get Data Success")
    } catch (error) {
        errorCode(res, "Unknow err")
    }

}

//Like resraunt if not like before else unlike
const likeUnlikeRes = async (req, res) => {
    try {
        let { res_id, user_id } = req.body;
        let checkLike = await model.like_res.findOne({
            where: {
                user_id,
                res_id
            }
        });
        if (checkLike) {
            let result = model.like_res.destroy({
                where: {
                    user_id,
                    res_id,
                }
            })
            successCode(res, result, "Unlike Success")
        } else {
            let date_like = Date.now();
            let result = await model.like_res.create({
                user_id,
                res_id,
                date_like
            })

            successCode(res, result, "Like Success")
        }

    } catch (error) {
        console.log(error)
        errorCode(res, "Unknow err")
    }
}

//Get list like by restaurant
const getLikeRes = async (req, res) => {
    try {
        let data = await model.restaurant.findAll(
            {
                include: ["like_res"]
            }
        )
        successCode(res, data, "Get Like Res Success")
    } catch (error) {
        failCode(res, "Unknow Err")
    }
}

//Get list like by restaurant ID
const getLikeResByID = async (req, res) => {
    const {res_id}= req.params;
    try {
        let data = await model.restaurant.findAll(
            {
                include: ["like_res"],
                where:{
                    res_id
                }
            }
        )
        
        successCode(res, data, "Get Like Res By ID Success")
    } catch (error) {
        failCode(res, "Unknow Err")
    }
}

//Get list like by user
const getLikeUser = async (req, res) => {
    try {
        let data = await model.user.findAll(
            {
                include: ["like_res"]
            }
        )
        successCode(res, data, "Get Like User Success")
    } catch (error) {
        failCode(res, "Unknow Err")
    }
}

//Get list like by User ID
const getLikeUserByID = async (req, res) => {
    const {user_id}= req.params;
    try {
        let data = await model.user.findAll(
            {
                include: ["like_res"],
                where:{
                    user_id
                }
            }
        )
        
        successCode(res, data, "Get Like By User ID Success")
    } catch (error) {
        failCode(res, "Unknow Err")
    }
}

//Rate restaurant if not rate before else update rate amount by new one
const rateRes = async (req, res) => {
    try {
        let { res_id, user_id, amount } = req.body;
        let date_rate = Date.now();

        let checkRate = await model.rate_res.findOne({
            where: {
                user_id,
                res_id
            }
        });

        if (checkRate) {
            let result = model.rate_res.update({
                amount
            }, {
                where: {
                    user_id,
                    res_id,
                }
            })
            successCode(res, result, "Update Rate Success")
        } else {
            let result = await model.rate_res.create({
                user_id,
                res_id,
                amount,
                date_rate
            })

            successCode(res, result, "Rate Success")
        }

    } catch (error) {
        console.log(error)
        errorCode(res, "Unknow err")
    }
}

//Get rate list by restaurant
const getRateRes = async (req, res) => {
    try {
        let data = await model.restaurant.findAll(
            {
                include: ["rate_res"]
            }
        )
        successCode(res, data, "Get Rate Res Success")
    } catch (error) {
        failCode(res, "Unknow Err")
    }
}

//Get rate list by restaurant ID
const getRateResByID = async (req, res) => {
    const {res_id} = req.params;
    try {
        let data = await model.restaurant.findAll(
            {
                include: ["rate_res"],
                where: {
                    res_id
                }
            }
        )
        successCode(res, data, "Get Rate Res Success")
    } catch (error) {
        failCode(res, "Unknow Err")
    }
}

//Get rate list by user
const getRateUser = async (req, res) => {
    try {
        let data = await model.user.findAll(
            {
                include: ["rate_res"]
            }
        )
        successCode(res, data, "Get Rate User Success")
    } catch (error) {
        failCode(res, "Unknow Err")
    }
}

//Get rate list by user ID
const getRateUserID = async (req, res) => {
    const {user_id} = req.params;
    try {
        let data = await model.user.findAll(
            {
                include: ["rate_res"],
                where: {
                    user_id
                }
            }
        )
        successCode(res, data, "Get Rate User By ID Success")
    } catch (error) {
        failCode(res, "Unknow Err")
    }
}
module.exports = {
    likeUnlikeRes,
    getAllRes,
    getLikeRes,
    getLikeUser,
    rateRes,
    getRateRes,
    getRateUser,
    getLikeResByID,
    getLikeUserByID,
    getRateResByID,
    getRateUserID
}
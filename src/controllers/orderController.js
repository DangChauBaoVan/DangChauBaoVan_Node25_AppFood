const { errorCode, successCode, failCode } = require("../configs/response");
const sequelize = require("../models/index");
const init_model = require("../models/init-models");

const model = init_model(sequelize)

const orderFood = async (req, res) => {
    try {
        let { user_id, food_id, amount, code, arr_sub_id } = req.body
        let result = await model.order.create({
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id
        })
        successCode(res, result, "Order Success")
    } catch (error) {
        console.log(error)
        errorCode(res, error)
    }
}

module.exports = orderFood
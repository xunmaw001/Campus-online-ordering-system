const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"菜品管理",
                        "menuJump":"列表",
                        "tableName":"caipin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"菜品评价管理",
                        "menuJump":"列表",
                        "tableName":"caipinCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"菜品收藏管理",
                        "menuJump":"列表",
                        "tableName":"caipinCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"菜品订单管理",
                        "menuJump":"列表",
                        "tableName":"caipinOrder"
                    }
                ],
                "menu":"菜品管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"一级分类管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryCaipin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改"
                        ],
                        "menu":"会员等级类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryHuiyuandengji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"学院管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYonghu"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"菜品管理",
                        "menuJump":"列表",
                        "tableName":"caipin"
                    }
                ],
                "menu":"菜品管理"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"菜品评价管理",
                        "menuJump":"列表",
                        "tableName":"caipinCommentback"
                    }
                ],
                "menu":"菜品评价管理"
            }
			,
			{
                "child":[
                    
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"菜品收藏管理",
                        "menuJump":"列表",
                        "tableName":"caipinCollection"
                    }
                ],
                "menu":"菜品收藏管理"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "订单",
                            "查看"
                        ],
                        "menu":"菜品订单管理",
                        "menuJump":"列表",
                        "tableName":"caipinOrder"
                    }
                ],
                "menu":"菜品订单管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;

//操作local数据的工具模块

//保存数据
export const saveUser = (user) => localStorage.setItem("user_key", JSON.stringify(user))

//读取user
export const getUser = ()=> JSON.parse(localStorage.getItem('user_key' || '{}'))

export const removeUser = ()=>{localStorage.removeItem("user_key")}

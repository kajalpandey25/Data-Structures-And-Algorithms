function salary(num){
    return num * .7
}

setTimeout(salary(), 300)

const mySalaries = [50, 40, 60, 20, 300, 400]

mySalaries.filter(salary).filter(tax).map()

// () => {}
// (func) => {}
// (func) => () => {}
// (func) => async() => {}

const asyncHandler =  (fn) => async(req, res, next)=>{
    try{
        await fn(req, res, next)
    } catch(error){

    }
}


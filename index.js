// Code your solution here
function  findMatching(driversArray,name){
    const matched=driversArray.filter(driver=>driver.toLowerCase()===name.toLowerCase())
    return matched

}
function fuzzyMatch(drivers,name){
    const matched=drivers.filter(driver=>driver[0]===name[0])
    return matched

}
function matchName(objectArray,name){
    const matched=objectArray.filter(driver=>driver.name===name)
    return matched

}
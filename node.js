function greeting(){
    return 'welcome to NODE.JS'
}
var x = "hello";
var num = 'lala';

// module.exports = greeting;
module.exports = {

    greeting : greeting,
           x : x,
         num : num,
};
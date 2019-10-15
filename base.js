// 模块化编程思想----本质上就是闭包
// 闭包----匿名函数自执行
// var a=1;
// var a=3;
// 会产生冲突，后面的变量会覆盖前面的


// 引用下面这种闭包的方式,大大的提高了代码的可读性，也提高安全性
// 不会相互影响---不会产生冲突
// var moduleA=(function(){
//     var a=1;
// })()

// var moduleB=(function(){
//     var a=3;
// })()
// 定义一个模块---module
var module=(function(){
    // 初始化变量
    var task_list=[];
    var $ipt,$addTaskBtn,$task_list;
    // 第一步初始化jq对象
    var initJqVar=function(){
        $ipt=$('.ipt');
        $addTaskBtn=$('.addTaskBtn');
        $task_list=$('.task-list');
    }
    // // 页面初始化时从store中取出item并渲染到页面上
    var initRenderIndex=function(){
        $task_list.html('');
        // 取出数据
        task_list=store.get('task_list');

        // 存储新添加的数据
        store.set('task_list',task_list);
    }
    // 第二步:将初始化的页面都放在initModule方法里
    var initModule=function(){
        initJqVar();
        // alert(1)
        initRenderIndex();
    }    
    
    return{
        initModule:initModule
        // 因为引用了闭包，所以说要return出来这个函数
        // 第一个 initModule是对象的名字
        // 第二个initModule是方法名
        // 方法名叫什么我们的对象名就叫啥
    }
})()
// 如何调用?---通过模块名.方法名
$(function(){
    module.initModule();
})
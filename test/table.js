(function($){
    $.fn.test = function(){};
    $.fn.test.table = function(opt) {
        var defaults = {   //默认参数
            tableId:"#tableId",
        };
        var options = $.extend(defaults,opt);   //合并参数

        this._add=function(){
            controller._add();
        };
        this._delete=function(element){
            controller._delete(element);
        };
        this._update=function(){
        };

        var controller = {
            _add:function(){
                var newTr='<tr><td>小明</td><td>28</td><td><button class="del">删除</button></td></tr>';
               $(options.tableId).append(newTr);
            },
            _delete:function(element){
                $(element).parents("tr").remove();
            },
            _update:function(){
            }
        };
        return this;
    }
})(jQuery);





$(function () {
    $('table').on('click','#delete',function () {
        if(confirm('你确认要删除吗?')){
            $.ajax({
                type:'GET',
                url:'/admin/news/delete',
                data: {"id": $(this).prev().attr('href').substring(20)},
                success:function () {
                    $(window).attr('location','http://localhost:3000/admin/news');
                },
                async:true
            });
        }
    })
});
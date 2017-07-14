/**
 * 个人资料页面
 */
require(['/assets/js/config.js'], function ()  {
  require(['jquery',
    'template',
    'form',
    'validate',
    'datepicker',
    '/assets/js/common.js'], function ($, template) {
    // 获取个人资料，并展示
    var options = {
      url: '/api/teacher/profile',
      type: 'get',
      success: function (data) {
        if (data.code === 200) {
          var result = template('tmpl', {list: data.result})
          $('.settings').html(result)
        }
      }
    }
    $.ajax(options)
  })
})

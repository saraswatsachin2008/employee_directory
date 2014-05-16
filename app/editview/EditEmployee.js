/**
 * Created by synerzip on 14/5/14.
 */

define([ 'jquery','underscore','backbone','../employee/EmployeeModel','text!../editview/edittemplate.html'],function($,_,Backbone,EmployeeModel,tpl) {
    var employee = new EmployeeModel();


    return Backbone.View.extend({

        el: '.container',

        events: {
            'submit .employee-form': 'saveEmployee',
            'click .delete': 'deleteEmployee'
        },

        render: function (options) {
            var that = this;
            if (options.id) {
                that.employee = new EmployeeModel({id: options.id});
                that.employee.fetch({
                    success: function (employee) {
                        var template = _.template(tpl, {employee: employee});
                        that.$el.html(template);
                    }
                })
            }
            else {
                var template = _.template(tpl, {employee: null});
                this.$el.html(template);
            }

        },
        saveEmployee: function (event) {
            console.log("save employee");
            var employeeDetails = $(event.currentTarget).serializeObject();
            employee.save(employeeDetails, {
                success: function (employee) {
                    router.navigate('', {trigger: true});
                }
            });


            return false;
        },
        deleteEmployee: function (event) {
            this.employee.destroy({
                success: function () {
                    router.navigate('', {trigger: true});
                }
            });
            return false;
        }


    });
});
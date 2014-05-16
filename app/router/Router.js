/**
 * Created by synerzip on 15/5/14.
 */
define(['backbone','../listview/EmployeeListView','../employee/EmployeeModel','../editview/EditEmployee'],
    function(Backbone,EmployeeListView,EmployeeModel,EditEmployee){
        var employeeListView = new EmployeeListView();
        var addview = new EditEmployee();

        return  Backbone.Router.extend({
            routes: {
                '': 'defaultRoute',
                'new': 'editEmployee',
                'edit/:id': 'editEmployee'
            },
            editEmployee:function(id){
                addview.render({id: id});
            },
            defaultRoute:function(){
                employeeListView.render();
            }
        });
    });
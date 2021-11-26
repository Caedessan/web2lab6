$(document).ready(function(){
    function getUsers(){
        $.get('/getusers',function(data){
            createTable($('#table',data))
        })
    }
    getUsers();
})
$(document).ready(function(){
    function createTable(container, mas){
        var tbl = document.createElement('table');
        tbl.setAttribute('class', 'users-table');
        var tbdy = document.createElement('tbody');
        var rowTitle = document.createElement('tr');
        rowTitle.setAttribute('class','title-row');
        var userTitle = document.createElement('td');
        userTitle.appendChild(document.createTextNode('User'));
        var ageTitle = document.createElement('td');
        ageTitle.appendChild(document.createTextNode('Age'));
        var passwordTitle = document.createElement('td');
        passwordTitle.appendChild(document.createTextNode('Password'));
        rowTitle.appendChild(userTitle);
        rowTitle.appendChild(ageTitle);
        rowTitle.appendChild(passwordTitle);
        tbdy.appendChild(rowTitle);
        for (var i = 0; i < mas.length; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute('class','user');
            for (var j = 0; j < 3; j++) {
                var text = "";
                if (j === 0 ){ text = mas[i].username }
                if (j === 1 ){ text = mas[i].age }
                if (j === 2 ){ text = mas[i].password }
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(text))

                tr.appendChild(td)

            }
            tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);
        document.getElementById(container).appendChild(tbl)
    }

    function getusers(){
        $.get('/getusers',function(data){
            var data = JSON.parse(data);
            createTable('table', data)
        })
    }

    getusers();
})

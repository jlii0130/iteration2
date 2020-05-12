function choose(name, fruit) {
    $.ajax({
        url: 'http://localhost:3000/api/' + name + '/' + fruit,
        success:function(data) {
            let div = $("#fruit")
            let para = '<p>' + data + '</p>'
            fruit.append(para)
        }
    })
} 
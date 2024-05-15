function add(a , b, cb){

    let result = a + b;
    cb(result);
}

add( 2, 4, function(value){console.log(value)});
const image = document.getElementById( 'productImg' );
const btn = document.getElementsByClassName( 'btn' );

btn[0].addEventListener( 'click', function(){
    console.log("test1")
    image.src = './img/aespa merch 1.jpg';
    for( bt of btn ){
        bt.classList.remove( 'active' );  
    }
    this.classList.add( 'active' );
} );
btn[1].addEventListener( 'click', function(){
    console.log("test2")
    image.src = './img/aespa merch 2.jpg';
    for( bt of btn ){
        bt.classList.remove( 'active' );  
    }
    this.classList.add( 'active' );
} );
btn[2].addEventListener( 'click', function(){
    console.log("test3")
    image.src = './img/aespa merch 3.jpg';
    for( bt of btn ){
        bt.classList.remove( 'active' );  
    }
    this.classList.add( 'active' );
} );
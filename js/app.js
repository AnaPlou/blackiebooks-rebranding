let avanzar = ( ...args ) =>{
    let [ tipo, sum , limit , init ] = args
    if( tipo ){
        foto += sum
        foto = (foto===limit) ?  foto=init : foto    
    }
    $('.slider__grande').css('transform', `translateX(-${foto*33.333}%)`)
    $('.slider__pequeno').css('transform', `translateX(-${foto*33.333}%)`)
}

let foto = 0

$('.siguiente').on('click',()=>{
    avanzar( true, 1  , 3 , 0) 
})
$('.anterior').on( 'click',()=>{
    avanzar( true , -1 , -1 , 2) 
})


$('.li').on('click',function(){
    let posicion = $('.li').index($(this))
    $('.li , .p').removeClass('activo')
    $(`.li${posicion}, .p${posicion}`).addClass('activo')
})
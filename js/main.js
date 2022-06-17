function initMap(){
    const loc = {lat:17.285110, lng:74.232162};
    const map = new google.maps.Map(document.querySelector('.map')
    ,{
        zoom: 12,
        center: loc
    });
    const marker = new google.maps.Marker({position: loc, map:map});
}

window.addEventListener('scroll', function(){
    if(this.window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        this.document.querySelector('#navbar').style.opacity = 1;
    }
});

$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            600
        );
    }
});


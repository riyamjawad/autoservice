function FooterView(props) {
    return (
        <div class='footer'>
            <img class='logo logo-footer' height='50%' src='./logo.png'></img>
            <a class='link'>BOKA</a>
            <a class='link'>VÅRA TJÄNSTER</a>
            <a class='link'>OM OSS</a>
            <a class='link' onClick={e => { window.location.hash = "kontakt" }}>KONTAKT</a>


            <a href="#" class="fa fa-instagram"></a>
            <a href="https://www.facebook.com/AutoserviceHindby/?ti=as" target="_blank" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>

        </div>
    );
}
function HeaderView(props) {
    return (
        <div class='header'>
        <img onClick={e => {window.location.hash="home"}}class='logo' height='90%' src='./logo.png'></img>
        <a class='link'>BOKA</a>
        <a class='link'>VÅRA TJÄNSTER</a>
        <a class='link'>OM OSS</a>
        <a class='link' onClick={e => {window.location.hash="kontakt"}}>KONTAKT</a>
      </div>
    );
  }
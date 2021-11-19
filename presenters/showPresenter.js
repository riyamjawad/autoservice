function Show(props) { // subscribe to browser-wide event (location.hash as "mini-model")
    const [hashState, setHash] = React.useState(window.location.hash);
    React.useEffect(function () {
        const listener = function () { setHash(window.location.hash); }
        window.addEventListener("hashchange", listener);   // 1 subscribe
        return function () { window.removeEventListener("hashchange", listener) } // 2
    }, []);
    let nest;
    if (hashState === props.hash) {
        nest = "";
    } else {
        nest = "hidden"
    }
    return (<div class={nest}>
        {props.children}
    </div>)
}  

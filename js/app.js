
function App() {
  return (
    <div>
      <HeaderView />
      <Show hash="#home"><HomePresenter /></Show>
      <Show hash="#kontakt"><KontaktPresenter /></Show>
      <FooterView />
    </div>
  );
}
window.addEventListener("hashchange", defaultRoute/*TODO */);  // test at Console by setting windows.location.hash
function defaultRoute() {
  if (!(["#home", "#kontakt"].find((knownRoute) => window.location.hash === knownRoute))) {
    window.location.hash = "#home";
  }
}

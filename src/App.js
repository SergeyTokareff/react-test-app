import AppHeader from "./components/HeaderBlock";
import AppLayout from "./components/LayoutBlock";
import AppFooter from "./components/FooterBlock";

import bg1 from "./assets/bg1.jpg";
import bg3 from "./assets/bg3.jpg";

const App = () => {
  
  return (
      <>
        <AppHeader title="This is title" descr="This is Description!" />          
        <AppLayout 
          id="first" 
          title="First Layout" 
          desc="Description first layout" 
          urlBg={bg1}  />
        <AppLayout 
          id="second" 
          title="Second Layout" 
          desc="Description second layout"
          colorBg="#808080" />
        <AppLayout 
          id="third" 
          title="Third Layout" 
          desc="Description third layout"
          urlBg={bg3} />
        <AppFooter />
      </>
  );
}

export default App;

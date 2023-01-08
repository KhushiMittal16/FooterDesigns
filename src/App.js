import AvoFooter from "./components/AvoFooter";
import CladeFooter from "./components/CladeFooter/CladeFooter";
import FlowbaseFooter from "./components/FlowbaseFooter/FlowbaseFooter";
import GetastraFooter from "./components/GetAstraFooter/GetastraFooter";
import VectornatorFooter from "./components/VectornatorFooter/VectornatorFooter";
import ViewportProvider from "./viewport";
function App() {
  return (
    <>
      <ViewportProvider>
        <AvoFooter />
        <CladeFooter />
        <GetastraFooter />
        <VectornatorFooter />
        <FlowbaseFooter />
      </ViewportProvider>
    </>
  );
}

export default App;

import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import CounterBroken from "./CounterBroken";
import PassingDataOnEvent from "./PassingDataOnEvent";
//import PassingFunctions from "./PassingFunctions";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DataStateVariable from "./DataStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import PropDrilling from "./PropDrilling";
import URLEncoding from "./UrlEncoding";
import ZustandExamples from "./zustand/ZustandExamples";
import ReduxExamples from "./redux/ReduxExamples";
//import ChildStateComponent from "./ChildStateComponent";

export default function Lab4() {
  console.log("Lab 4 loaded");
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      {/* <PassingFunctions
          message="Hello from Lab 4"
          theFunction={(message: string) => alert(message)}
        /> */}
      <CounterBroken />
      <Counter></Counter>
      <BooleanStateVariables />
      <StringStateVariables />
      <DataStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <PropDrilling />
      <URLEncoding />
      {/* <ChildStateComponent counter={0} setCounter={() => {}} /> */}
      <ZustandExamples />
      <ReduxExamples />
      <hr />
    </div>
  );
}

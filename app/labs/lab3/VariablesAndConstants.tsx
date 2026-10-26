export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let blockScoped2 = 1;
  const constant2 = blockScoped - blockScoped2;
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1}    <br />
      constant2 = {constant2}    <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
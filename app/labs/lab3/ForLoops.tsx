export default function ForLoops() {
  let stringArray1 = ["string1", "string3"];
  let stringArray2: string[] = [];
  const stringLengths: number[] = [];
  for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
    stringLengths.push(string1.length);
  }
  let stringArray3 = ["string1", "string3"];
  let stringArray4: string[] = [];
  for (let i = 0; i < stringArray3.length; i++) {
    const string1 = stringArray3[i];
    stringArray4.push(string1.toLowerCase());
  }
  return (
    <div id="wd-for-loops">
      <h4>Looping through arrays</h4>
      stringArray2 = {stringArray2}
      stringLengths = {stringLengths}
      stringArray4 = {stringArray4}
      <hr />
    </div>
  );
}
export default function TemplateLiterals() {
  const five = 2 + 3;
  const result1 = "2 + 3 = " + five;
  const result2 = `2 + 3 = ${2 + 3}`;
  const username = "alice";
  const greeting1 = `Welcome home ${username}`;
  const loggedIn = false;
  const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
  const name = "MK";
  const hour = 10;
  const statusMessage = `Is ${name} sleepy? It's currently ${hour} o'clock, so the answer is: `;
  const published = true;
  const courseStatus = `RS101 published: ${published ? "Yes" : "No"}`;
  return (
    <div id="wd-template-literals">
      <h4>Template Literals</h4>
      result1 = {result1}     <br />
      result2 = {result2}     <br />
      greeting1 = {greeting1} <br />
      greeting2 = {greeting2} <br />
      courseStatus = {courseStatus} <br />
      statusMessage = {statusMessage}
      {hour <= 18 ? <p>yes!</p> : <p>no!</p>}
      <hr />
    </div>
  );
}
export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">Bootstrap</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">React</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Node.js</td>
            <td align="center">3/10/21</td>
            <td align="right">80</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">Express</td>
            <td align="center">3/17/21</td>
            <td align="right">97</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">MongoDB</td>
            <td align="center">3/24/21</td>
            <td align="right">89</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">REST APIs</td>
            <td align="center">3/31/21</td>
            <td align="right">93</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Final Review</td>
            <td align="center">4/7/21</td>
            <td align="right">91</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">90</td>
          </tr>
        </tfoot>
      </table>
    
    <div id="wd-your-table">
      <h4>KABIZINE Original Characters</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th align="center">Art-ivist Role</th>
            <th align="center">Visual Motif</th>
            <th>Pronouns</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kiilo</td>
            <td align="center">The Visionary</td>
            <td align="center">Stars</td>
            <td align="right">Genderqueer (they/aer)</td>
          </tr>
          <tr>
            <td>Coco</td>
            <td align="center">The Icon</td>
            <td align="center">Clouds</td>
            <td align="right">Demigirl (she/they)</td>
          </tr>
          <tr>
            <td>Charisma</td>
            <td align="center">The Advocate</td>
            <td align="center">Waterfalls</td>
            <td align="right">Agender (she/her)</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Gender Umbrella</td>
            <td align="right">Non-Binary</td>
          </tr>
        </tfoot>
      </table>
    </div>
    </div>
    
  );
}
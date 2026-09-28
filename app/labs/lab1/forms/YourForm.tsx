export default function YourForm() {
  return (
    <div id="wd-your-form">
      <h4>Form Elements</h4>
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >

      <h5>Text Fields</h5>
      <label htmlFor="wd-text-fields-password">Password:</label>
      <input
        type="password"
        placeholder="Sample123!"
        defaultValue="Sample123!"
        id="wd-text-fields-password"
      />
      <br />
      <label htmlFor="wd-text-fields-first-name">First name:</label>
      <input
        type="text"
        placeholder="MK"
        defaultValue="MK"
        id="wd-text-fields-first-name"
      />{" "}
      <br />
      <label htmlFor="wd-text-fields-last-name">Last name:</label>
      <input
        type="text"
        placeholder="Magoola"
        defaultValue="Magoola"
        id="wd-text-fields-last-name"
      />

      <h5>Text boxes</h5>
      <label htmlFor="wd-textarea">Short Bio:</label>
      <br />
      <textarea
        id="wd-textarea"
        cols={30}
        rows={10}
        defaultValue="Sample bio: I aspire to carve out a space online for my fellow black sheep, and shift the social impact and activist space to be more inclusive and accessible for marginalized communities and allies alike. I want to tell the stories that I needed as a kid, using animation, music, fashion, and coding. And finally, I’d love to make this small business, content creation, and freelance work my full-time job post-grad!"
      />

      <h5 id="wd-radio-buttons">Radio buttons</h5>
      <label>Class Standing:</label>
      <br />
      <input type="radio" name="radio-class" id="wd-radio-first" defaultChecked />
      <label htmlFor="wd-radio-first">First Year</label>
      <br />
      <input type="radio" name="radio-class" id="wd-radio-second" />
      <label htmlFor="wd-radio-second">Second Year</label>
      <br />
      <input type="radio" name="radio-class" id="wd-radio-third" />
      <label htmlFor="wd-radio-third">Third Year</label>
      <br />
      <input type="radio" name="radio-class" id="wd-radio-Fourth" />
      <label htmlFor="wd-radio-Fourth">Fourth Year</label>
      <br />
      <input type="radio" name="radio-class" id="wd-radio-Fifth" />
      <label htmlFor="wd-radio-Fifth">Fifth Year</label>
      <br />
      <label>Enrollment Status:</label>
      <br />
      <input type="radio" name="radio-enrollment" id="wd-radio-full-time" defaultChecked />
      <label htmlFor="wd-radio-full-time">Full-time</label>
      <br />
      <input type="radio" name="radio-enrollment" id="wd-radio-part-time" />
      <label htmlFor="wd-radio-part-time">Part-time</label>
      <br />

      <h5 id="wd-checkboxes">Checkboxes</h5>
      <label>Favorite My Little Pony character:</label>
      <br />
      <input type="checkbox" name="check-mlp" id="wd-chkbox-twilight" defaultChecked />
      <label htmlFor="wd-chkbox-twilight">Twilight Sparkle</label>
      <br />
      <input type="checkbox" name="check-mlp" id="wd-chkbox-pinkie" />
      <label htmlFor="wd-chkbox-pinkie">Pinkie Pie</label>
      <br />
      <input type="checkbox" name="check-mlp" id="wd-chkbox-rainbow" defaultChecked />
      <label htmlFor="wd-chkbox-rainbow">Rainbow Dash</label>
      <br />
      <input type="checkbox" name="check-mlp" id="wd-chkbox-rarity" />
      <label htmlFor="wd-chkbox-rarity">Rarity</label>
      <br />
      <input type="checkbox" name="check-mlp" id="wd-chkbox-fluttershy" />
      <label htmlFor="wd-chkbox-fluttershy">Fluttershy</label>
      <br />
      <input type="checkbox" name="check-mlp" id="wd-chkbox-apple" />
      <label htmlFor="wd-chkbox-apple">Applejack</label>
      <br />
      <input type="checkbox" name="check-mlp" id="wd-chkbox-sunset" />
      <label htmlFor="wd-chkbox-sunset">Sunset Shimmer</label>

      <h4 id="wd-dropdowns">Dropdowns</h4>
      <h5>Select one: Major</h5>
      <label htmlFor="wd-select-one-major">Favorite movie genre: </label>
      <br />
      <select id="wd-select-one-major" defaultValue="DESIGN">
        <option value="DESIGN">Design</option>
        <option value="CS">Computer Science</option>
        <option value="MEDIA ARTS">Media Arts</option>
        <option value="MUSIC">Music</option>
      </select>
      <h5>Select many: Topics</h5>
      <label htmlFor="wd-select-many-topics">Topics for Web Dev Fall 2026: </label>
      <br />
      <select
        multiple
        id="wd-select-many-topics"
        defaultValue={["EXPERIMENTAL DEV", "INTERACTIVE ANIMATION"]}
      >
        <option value="EXPERIMENTAL DEV">Experimental Development</option>
        <option value="INTERACTIVE ANIMATION">Interactive Animation</option>
        <option value="ACCESSIBILITY">Accessibilitiy</option>
        <option value="APIs">APIs</option>
      </select>

      <h4>Typed Fields</h4>
      <label htmlFor="wd-text-fields-school-email">Email: </label>
      <input
        type="email"
        placeholder="magoola.a@northeastern.edu"
        defaultValue="magoola.a@northeastern.edu"
        id="wd-text-fields-school-email"
      />
      <br />
      <label htmlFor="wd-text-fields-grad-year">Graduation year: </label>
      <input
        type="number"
        defaultValue="2028"
        placeholder="2028"
        min={1970}
        max={2070}
        id="wd-text-fields-grad-year"
      />
      <br />
      <label htmlFor="wd-text-fields-excitement">How Excited You Are For Web Dev: </label>
      <input
        type="range"
        defaultValue="7"
        min="0"
        max="10"
        id="wd-text-fields-excitement"
      />
      <br />
      <label htmlFor="wd-text-fields-dob">Date of birth: </label>
      <input
        type="date"
        defaultValue="2000-01-01"
        min="1900-01-01"
        max="2025-12-31"
        id="wd-text-fields-dob"
      />
      <br />

      <h4>Submit</h4>
      <button id="wd-html-button-submit" type="submit">
        Submit!
      </button>
      <button id="wd-html-button-cancel" type="button">
        Cancel...
      </button>

      </form>
    </div>
  );
}

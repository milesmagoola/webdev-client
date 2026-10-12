import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Margins from "./Margins";
import Padding from "./Padding";
import Dimensions from "./Dimensions";
import Corners from "./Corners";
import BoxModel from "./BoxModel";
import Display from "./Display";
import Positions from "./Positions";
import ZIndex from "./ZIndex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        The style attribute applies CSS declarations directly to a single
        element, overriding rules from external or internal style sheets.
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>

      <div id="wd-css-id-selectors">
  <h3>ID selectors</h3>
  <p id="wd-id-selector-1">
    Instead of changing the look and feel of all the
    elements of the same name, e.g., P, we can refer to a
    specific element by its ID
  </p>
  <p id="wd-id-selector-2">
    Here&apos;s another paragraph using a different ID and a
    different look and feel
  </p>
  <p id="wd-ai-id-selector">
    An ID selector matches exactly one element, so this paragraph can
    have its own look and feel without affecting any other paragraph
  </p>
  <p id="wd-id-selector-3">
    Here&apos;s another paragraph using a different ID and a
    different look and feel
  </p>
</div>

<div id="wd-css-class-selectors">
  <h3>Class selectors</h3>
  <p className="wd-class-selector">
    Instead of using IDs to refer to elements, you can use an
    element&apos;s CLASS attribute
  </p>
  <h4 className="wd-class-selector">
    This heading has same style as paragraph above
  </h4>
  <p className="wd-ai-class-selector">
    A class selector can be reused on many elements, so this paragraph
    shares its look and feel with the heading below
  </p>
  <h4 className="wd-ai-class-selector">
    This heading has same style as the paragraph above
  </h4>
  <p className="wd-your-class">
    Instead of using IDs to refer to elements, you can use an
    element&apos;s CLASS attribute
  </p>
  <h4 className="wd-your-class">
    This heading has same style as paragraph above
  </h4>
</div>

<div id="wd-css-document-structure">
  <div className="wd-selector-1">
    <h3>Document structure selectors</h3>
    <div className="wd-selector-2">
      Selectors can be combined to refer elements in particular
      places in the document
      <p className="wd-selector-3">
        This paragraph&apos;s red background is referenced as
        <br />
        .wd-selector-1 .wd-selector-3
        <br />
        meaning the descendant of some ancestor.
        <br />
        <span className="wd-selector-4">
          Whereas this span is a direct child of its parent
        </span>
        <br />
        <span className="wd-ai-selector-6">
          This span is a descendant of .wd-selector-1 through .wd-selector-3
        </span>
        <br />
        <span className="wd-ai-selector-5">
          This span is a descendant of .wd-selector-1 through .wd-selector-3
        </span>
        <br />
        You can combine these relationships to create specific
        styles depending on the document structure
      </p>
    </div>
  </div>
</div>

<div id="wd-your-cascade">
  <p id="wd-your-cascade" className="wd-your-cascade">
    Lorem ipsum
  </p>
</div>

<div id="wd-ai-cascade-demo">
  <h3>Cascade: tag vs class vs id</h3>
  <p id="wd-ai-cascade" className="wd-ai-cascade">
    This paragraph matches a p rule (green), a class rule (yellow) and an id
    rule (red). The id rule wins because it is the most specific.
  </p>
</div>

<ForegroundColors />
<BackgroundColors />
<Borders />
<Margins />
<Padding />
<BoxModel /> 
<Corners />
<Dimensions />
<Display />
<Positions />
<ZIndex /> 
<Float />
<GridLayout />
<Flex /> 
<MediaQueriesDemo /> 

    </div> 
  );
}
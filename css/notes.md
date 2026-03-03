# CSS Properties
## 1. Text Styling
1. ### Font-weight
   - to make text bolder or lighter.
   - value ranges from 100-900 with 100 increamenting per step.
   - can even give value in form of bold, bolder etc.
   - `Heading should be 500-900 and other text 300-400`.
   - font-weight: 400; font-weight: bolder; etc.
2. ### Text-Decoration
   - Sets Decorative Lines on Text.
   - text-decoration: "line value" "color value" "style value";<br>text-decoration: underline blue dotted;
   - <b>Line Value</b>: line-through, overline, underline(default for anchor tag), none(default for most of the element).
   - <b>Color Value:</b>named, hex, rgb.
   - <b>Style Value:</b>double, dotted, wavy, solid(default), dashed.
   - `always remove underline form anchor tags and very rarely use test-decoration, instead use color and weight.`
3. ### Font-style
   - set the style of a font.
   - font-style: italic;
   - Value: normal(default), italic, oblique, oblique 10deg.
   - `can sometimes use to draw attention. use weight and color instead.`
   - difference b/w italic and oblique??: Basically oblique tilts the text with certain degree and italic is predefined style in computers.
4. ### Text-transform
   - Sets the capitalisation of Text
   - text-transform: value;
   - <b>Value:</b>uppercase, lowercase, capitalise(first letter of each word gets uppercased).
5. ### List-style
   - sets the style of a  list.
   - list-style: Value;
   - <b>Value</b>: none, disc circle, square, decimal(defaulted for order lists).
   - `always set list-style to none when they are used for structural purposes.`
   - `This sets three properties in single declaration: list-style-type, list-style-position, list-style-image.`
   - `e.g, list-style: square inside url('img.jpg');`
## 2. Text Spacing
1. ### text-align
   - specifies the horizontal alignment of text within an element.
   - text-align: left(default)/right/center/justify;
   - only effects to block level elements, as inline elements don't have spacing.
   - `don't justify text, long blocks of text should be left-aligned and do not center large blocks of text.`
2. ### line-height
   - Sets the height of text and is commonly used to set distance b/w multiple lines of text.
   - line-height: value;
   - <strong>Value:</strong>unitless(number that multiplies font size), pixels, ems, percentage.
   - `Headings should be <1.5 and regular text 1.5-2 to improve readability.
3. ### letter-spacing:
   - sets horizontal spcae b/w characters.
   - letter-spacing:8px;
   - Value: pixels, percentage, ems.
## 3. Text size
1. ### font-size
   - size of text
   - <b>Absolute units:</b>Size is fixed and does not change in relation to parent elements. e.g, px, pt, in, cm, mm.
   - <b>Relative Units: </b> sie is based on the size of a parent element and adjusts proportionally to changes in the parent element. e.g, %, em rem  vh vw.
   - `regular text should be 16-32px and headings can be >60px.`
   - use a type scale which provides a structured hierarchy of font sizes to create visual consistency and limits choices. multiplying or dividing pixels size by 1.25.
## 4. Font
1. ### Typeface
   - characters with consistent visual characteristics.
   - <b> Typefaces are organised into groups</b>:serif, sans-serif,monospace, cursive, display.
2. ### Font-family
   - sets a prioritised list of font names(typeface) or font categories.
   - font-family: 'firstchoice' , fall-back;
   - ` Select one or two fonts, no more`
3. ### Google fonts
## Kuch kam ki baat:: 
<b>`The Cascade: conflicting Styles declared later will take priority` </b>

## 5. Selectors
1. ### Type Selector
   - Select elements based on their tag names
   - Useful fo rsetting global styles to ensure consistency
2. ### Grouping Selectors
   - Selectors can be comma separated to apply shared styles
3. ### ID selector
   - selects an element based on a unique id attribute and can only be used once.
4. ### Class Selector
   - slects one or more elements based on a class attribute that can be used multiple times.
5. ### Pseudo -classes
   - Defines styles for a specific state or condition of an html element
   - a keyword with a colon added to the end of a selector: a:hover{}
   - <b>State pseudo classes:</b> Dynamic styling basedon user interaction and commonly used for hyperlinks.
     - a:link=> targets anchor tags that have not yet been visited
     - a:visited=> targets anchor tags that have been visited.
     - a:hover=> targets an element when the cursor is placed over it.
     - a:active=> targets an elements when it is being clicked
     - `it is best practice ot syle the pseudo classes of anchor tags instead of styling the anchor element directly`
   - <b> Conditional pseudo class:</b> styling based on elements position i n relation to other elements
     - li:`first-child`=> targets the first child element
     - li:`last-child`=> targets the last child element
     - li:`nth-child(n)`=> targets child elements based on their position(`every nth child`)
       - li:nth-child(2n)=> means every child elements 2,4,6,8..etc
       - li:nth-child(2n+1) => 1,3,5,7,..etc
6. ### Combinator selectors
   - Combines two or more selectors to target elements based on their positions relative to each other
   - <b>Descendant Selector: </b>Targets all descendant  elements of a parent.
     - div p=> targets every p of  div
   - <b> Direct Descendant Selector:</b>Targets only direct children elements of a parent
    - div >p=> targets only the first child of div... not other p tag inside other tags inside div
* <b>`Specifity: priority => ID>Classes & Pseudo classes>type/tag > inheritance`</b>
* <b>`Inheritance and text-align: when applying the test align property to a block level parent containing inline elements, all children will be impacted`</b>
* <b>` Body tag and inheritance v/s the Universal Selector:`</b><br>
    - Body tag: Only applies text properties, used to set default text properites across application.
    - Universal: appplies all properties, used to reset default styles.
<!-- Pseudo elements padhna h abhi -->
## 6. Pseudo elements:
   -  Used to style specific part of an element.
      - h2::"pseudo-selectorname";
      - h2:: first-letter{};
   - <b>Text Styling:</b> Used ot enhance visual appearance of text.
     - :: first-letter, ::first-line(paragraph openeing line);
   - <b>Selection:</b> Used to visual enhance the text a user selects.
      - :: selection{};
   - <b>Content Insetion: </b> used for adding decorative elements without altering html structure.
      - ::before
      - ::after
## 7. CSS Box Model
   - All html element are treated as rectangular boxes.
   - Each box has its own set of properties.
   - Border, Space between content and border(padding) and space between boxes(margin).
   ### 1. Background color

   - <b> Background color property</b>: Sets the bg color of an element and applies to the content  annd any padding.
   ### 2. Width and Height
   - <b>Default block level element dimensions:</b> Just big enough to fits its content vertically and `stretches full width horizonatally`.
      - block elements container also spans full width of webpage and `height is sum of fontsize and some margins`.
   - <b> Inline-Level Elements dimensions:</b> By default inline-level elements are just big enough to `fits its contents both Vertically and Horizontally`.
   - <b>widht and height:</b> The default box dimensions can be overwritten by the width and height properties.
   - <b> `Individual elements (h1,p,ul,li, etc,.) :<br> Height:: usually don't set height but let it be automatically determined.<br>
   Width:: Usualy don't set width which will stretch to fill the parent container.`</b>.
   - <b>` Container elements:<br>
   Height:: Usually don't set height but let it be automatically determined.<br>
   Width:: Depending on the layout it can be common to set a width.`</b>
   - `Margins, padding and font size determines height in both the cases.`
   - `This Approach ensures flexibility where content better adapts to different screen sizes.`
   - <b > Inline level elements where height and width can be applied::<br>img, input, select, textarea, button:: (setting height or width will adjust the other dimension automatically to preserve aspect ratio.)
   - <b> Can't apply width and height::
   span, a (can use padding) ,sub, sup </b></b>
   ### 3. Border
   - Width: border-width:5px;
   - style: border-style:solid;
   - color: border-color:red;
   - border: 5px solid red;
   - #### border radius
      - Pills: border radius = half of the elements height given the element is in rectangle earlier.
      - Circles: from square border-radius= half of height.
   ### 4. Box sizing:
   -  How total width and height of an element is calculated
   - box-sizing:border-box; box-sizing:content-box;  
   - ` set the border-box on the universal selector`
   
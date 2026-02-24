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
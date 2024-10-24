import './App.css';

function CSSLearning() {
  return (
    <body>
        <div id="wrapper">
          <h2>Hyperlinks:</h2>
          <h3><a href="#flexbox">Flexbox Section</a></h3>
          <h3><a href="#css-grid">CSS Grid Section</a></h3>
          <h1>HTML Components in React</h1>
          <div id="elements">
            <div className="hyperlink">
              <h2>&lt;a&gt;</h2>
              <p>A hyperlink (used for putting in pieces of data, including images, audio, video, etc.)<br/>&lt;a href="https://www.gofundme.com/f/Uisce-for-Gaza?qid=41c081f63db01a54bc2639218b6edc0f"&gt;&lt;/a&gt; returns a link to a GoFundMe for fresh water to people in Gaza. (put the words you want to the link to be on in between the opening and closing tags).</p>  
              <p>Example: <a href="https://www.gofundme.com/f/Uisce-for-Gaza?qid=41c081f63db01a54bc2639218b6edc0f">Click Here</a></p>
            </div>
            <div className="abbr">
              <h2>&lt;abbr&gt;</h2>
              <p>Used to abbrviate a title (original title put in title attribute); users don't see the original title, but search engines, browsers and accessibility tools use it.</p>
              <p>Example: The <abbr title="National Association for the Advancemenet of Coloreed People">NAACP</abbr> was founded in 1909.</p>
            </div>
            <div className="address">
              <h2>&lt;address&gt;</h2>
              <p>Used to give contact information.</p>
              <p>Example:<address>Find our organization website at <a href="https://www.thetrevorproject.org/blog/reintroducing-the-trevor-project-with-a-brand-identity-that-reflects-a-new-generation-of-lgbtq-young-people/?gad_source=1&gad_source=1&gclid=Cj0KCQjwxsm3BhDrARIsAMtVz6NZ3vhKHqX7fhodc4ogukK_nfiy4CMvB_w617YADpb3oSd_h1z-Td8aAux3EALw_wcB"> here!</a><br/>Phone Number: 123-456-7890<br/>Address: 123 Street</address></p>
            </div>
            <div className="area">
            <h2>&lt;area&gt; UNFINISHED</h2>
            <p>Used to set areas in an image map (where links are for an image with clickable areas); &lt;area&gt; goes inside of a &lt;map&gt; tag.<br/>Example:<br/></p>
            <img src="flowers.png" />
            {/* <area>
              
              <map>

              </map>
            </area> */}
            </div>
            <div id="article">
              <h2>&lt;article&gt;</h2>
              <p>Used to define an article.<br/>Example:</p>
              <article>
              <h3>The Trevor Project</h3>
              <p>This organization helps to reduce LGBTQIA+ youth suicide rates.
              </p>
              </article>
            </div>
            <div className="aside">
            <h2>&lt;aside&gt;</h2>
            <p>Used to put content separate from other content.<br/>Example:<br/></p>
            <article>
              <h3>The Trevor Project</h3>
              <p>This organization helps to reduce LGBTQIA+ youth suicide rates.
              </p>
              <aside>Burrito bowls are the best food in the world.</aside>
              </article>
            </div>
            <div className="audio">
              <h2>&lt;audio&gt;</h2>
              <p>Used to put in audio content.<br/>Example:<br/></p>
              <audio controls src="audioExample.mp3"/>
            </div>
            <div className="b">
              <h2>&lt;b&gt;</h2>
              <p>Makes text bold.<br/>Example:<br/>This is an example of <b>bold</b> text. Use to highlight <b>important</b> things, like <b>organizations</b>.</p>
            </div>
            <div className="base">
              <h2>&lt;base&gt;</h2>
              <p></p>
            </div>
          </div>
          <div id="flexbox">
            <h2>Flexbox Display</h2>
            <ul>
              <li>display: flex; goes first</li>
              <li>The border is the flex container</li>
              <li>Flex Container: a layout component in CSS that groups and aligns elements on a web page</li>
              <h3>Properties:</h3>
              <ul>
                <li>display: defining the container</li>
                <li><a href="#flex-direction">flex-direction</a>: defining the main axis direction</li>
                <li><a href="#flex-wrap">flex-wrap</a>: allows items the wrap onto multiple lines</li>
                <li><a href="#flex-flow">flex-flow</a>: shorthand for flex-direction and flex-wrap (research more!)</li>
                <li><a href="#justify-content">justify-content</a>: moving elements across the x-axis</li>
                <li><a href="#align-content">align-content</a>: moving elements across the y-axis</li>
                <li><a href="#align-items">align-items</a>: moving multiple lines of items on the y-axis</li>
              </ul><br/>
              <li>Flex Child/Item: the elements in the flex container</li>
              <h3>Properties:</h3>
              <ul>
                <li><a href="#order">order</a>: changes the order of items (display only, not the source's order)</li>
                <li><a href="#flex-grow">flex-grow</a>: makes an item grow to fill available space</li>
                <li><a href="#flex-shrink">flex-shrink</a>: makes an item shrink if there's not enough space for the set size</li>
                <li><a href="#flex-basis">flex-basis</a>: sets the initial size of an item</li>
                <li><a href="#flex">flex</a>: shorthand for flex-grow, flex-shrink and flex-basis</li>
                <li><a href="#align-self">align-self</a>: aligns a single item within the flex container</li>
              </ul>
            </ul>
            <p><b/>----------------------------------------------------------------------------------------------</p>
           <h4>No Flexbox Applied (this is the same for flex-direction: row)</h4>
           <img src="./no-flexbox.png" width="600"/>
           <div id="flex-direction">
            <h2>flex-direction</h2>
            <h4>flex-direction: row-reverse</h4>
            <img src="./row-reverse.png" width="600"/>
            <h4>flex-direction: column</h4>
            <img src="./column.png" height="600"/>
            <h4>flex-direction: column-reverse</h4>
            <img src="./column-reverse.png" height="600"/>
           </div>
           <div id="flex-wrap">
            <h2>flex-wrap</h2>
           </div>
           <h4>nowrap</h4>
           <p>(This is the default value; the flexible items won't wrap)</p>
           <h4>wrap</h4>
           <p>Items will wrap when there is insufficient space.</p>
           <video controls src="wrap-video.mp4" width="600"/>
           <h4>wrap-reverse</h4>
           <p>Wraps it in the reverse order when there is insufficient space.</p>
           <video controls src="wrap-reverse-video.mp4" width="600"/>
           <h4>initial</h4>
           <p>Items won't wrap, meaning some items will be obscured when there is insufficient space<br/>
           (property is set to its default value).</p>
           <video controls src="initial-video.mp4" width="600"/>
           <h4>inherit</h4>
           <p>Items will inherit the property from its parent element.<br/>
           (This is what it does when squares's parent element, flexbox, is set to wrap-reverse.)</p>
           <video controls src="inherit-video.mp4" width="600"/>
           
           <h2>General/Uncategorized Things</h2>
           <div id="flex-shrink">
            <h3>flex-shrink</h3>
           </div>
           <p>Sets how an item will shrink compared to the other flexible items.</p>
           <video controls src="flex-shrink-video.mp4" width="600"/>
           <div id="flex-grow">
            <h3>flex-grow</h3>
           </div>
           <p>Sets how an item will grow compared to the other flexible items.</p>
           <video controls src="flex-grow-video.mp4" width="600"/>
           <div id="flex-basis">
            <h3>flex-basis</h3>
            <p>Sets the initial length of a flexible item (a value of auto sets it to the same length as the other items).</p>
            <video controls src="flex-basis-video.mp4" width="600"/>
           </div>
           <div id="order">
            <h3>order</h3>
            <p>Sets the order of a specified flex item.</p>
            <video controls src="order-video.mp4" width="600"/>
           </div>
           <div id="align-self">
            <h3>align-self</h3>
            <p>Aligns a singular specified flex item among others.</p>
            <video controls src="align-self-video.mp4" width="600"/>
           </div>
           <div id="flex">
            <h3>flex</h3>
            <p>A shorthand property for flex-grow, flex-shrink and flex-basis in that order<br/>
            (default value: 0 1 auto)</p>
            <video controls src="flex-video.mp4" width="600"/>
           </div>
           <div id="flex-flow">
            <h3>flex-flow</h3>
            <p>Shorthand for flex-direction and flex-wrap (default value: row nowrap).</p>
            <video controls src="flex-flow-video.mp4" width="600"/>
           </div>

           <div id="justify-content">
            <h2>justify-content</h2>
           </div>
           <p><i>Note: the start and end of flex-direction depends on the settings. For example, English is read left to right, so the<br/> start of the flex-direction would be left.</i></p>
           <h3>flex-start</h3>
           <p>Aligns flex items to the start of the flex-direction (this is the default value).</p>
           <img src="flex-start.png" width="600"/>
           <h3>flex-end</h3>
           <p>Aligns flex items to the end of the flex-direction.</p>
           <img src="flex-end.png" width="600"/>
           <h3>space-between</h3>
           <p>Evenly distributes the flex items.</p>
           <img src="space-between.png" width="600"/>
           <h3>start</h3>
           <p>Just like flex-start, but for writing purposes.</p>
           {/* Example? */}
           <h3>end</h3>
           <p>Just like flex-end, but for writing purposes.</p>
           {/* Example? */}
           <h3>left</h3>
           <p>Flex items go to the left of the container (if flex-direction contradicts it, it does what start does)</p>
           <h3>right</h3>
           <p>Flex items go to the right of the container (if flex-direction contradicts it, it does what end does)</p>
           <h3>center</h3>
           <p>Flex items are centered.</p>
           <img src="center.png" width="600"/>
           <h3>space-around</h3>
           <p>Behaves like space-between, but puts space in between the first and last flex items from the edges.</p>
           <img src="space-around.png" width="600"/>
           <h3>space-evenly</h3>
           <p>Behaves like space-around, but sets the spaces between the flex items and on the ends of the<br/>first and last items equal.</p>
           <img src="space-evenly.png" width="600"/>
           
           <div id="align-items">
            <h2>align-items</h2>
            <h3>stretch</h3>
            <p>Flex items stretch to fill the container (this is the default value).</p>
            <img src="stretch.png" width="600"/>
            <h3>flex-start/start/self-start</h3>
            <p>Flex items go to the start of the flex container on the y-axis (differences are the same as the ones in justify-content).</p>
            <img src="flex-start (align-items).png" width="600"/>
            <h3>flex-end/end/self-end</h3>
            <p>Flex items go to the end of the flex container on the y-axis (differences are the same as the ones in justify-content).</p>
            <img src="flex-end (align-items).png" width="600"/>
            <h3>center</h3>
            <p>Flex item are centered on the y-axis.</p>
            <img src="center (align-items).png" width="600"/>
            <h3>baseline</h3>
            <p>Flex items are aligned by way of their baselines (the line under where the text in each box stops).</p>
            <p><i>*Can be specified by the first baseline (the line before where the text begins) or the last baseline (the line after the text in each box ends).</i></p>
            <img src="baseline.png" width="600"/>
           </div>


           <div id="align-content">
            <h2>align-content</h2>
            <h3>normal</h3>
            <p>Flex items look the same (this is a default value).</p>
            <h3>flex-start/start</h3>
            <p>Flex items are sent to the start of the flex container (start is for writing-mode).</p>
            <img src="flex-start (align-content).png" width="600"/>
            <h3>flex-end/end</h3>
            <p>Flex items are sent to the end of the flex container (end is for writing-mode).</p>
            <img src="flex-end (align-content).png" width="600"/>
            <h3>center</h3>
            <p>Flex items are centered.</p>
            <img src="center (align-content).png" width="600"/>
            <h3>space-between</h3>
            <p>Flex items are evenly distributed.</p>
            <img src="space-between (align-content).png" width="600"/>
            <h3>space-around</h3>
            <p>Flex items are evenly distributed with equal space around them.</p>
            <img src="space-around (align-content).png" width="600"/>
            <h3>space-evenly</h3>
            <p>Behaves like space-between, but puts space in between the first and last rows of flex items from the edges.</p>
            <img src="space-evenly (align-content).png" width="600"/>
            <h3>stretch</h3>
            <p>Rows of flex items stretch to fill the flex container.</p>
            <img src="stretch (align-content).png" width="600"/>
           </div>

           <h2>gap</h2>
           <p>Spaces out the flex items, but not on the outer edges.</p>
           <video controls src="gap-video.mp4" width="600"/>
           <h3>row-gap</h3>
           <img src="row-gap.png" width="600"/>
           <h3>column-gap</h3>
           <img src="column-gap.png" width="600"/>

           <div className="squares">
            <div className="green">
              <img src="./green-square.png" height="200" width="200"/>
              </div>
              <div className="blue">
              <img src="./blue-square.png" height="200" width="200"/>
              </div>
              <img src="./red-square.png" height="200" width="200"/>
            </div><br/><br/><br/><br/>
          </div>
          {/* Look at squares above this comment! (flex-grow doesn't work with pictures; neither does flex-shrink :) or flex-basis )*/}
          <div id="main">
            <div id="pink" style={{"background-color": "pink"}}>This is a pink block. Very important things about the color pink are said here.</div>
            <div id="green" style={{"background-color": "green"}}>This is a green block. Go home, green.</div>
            <div id="blue" style={{"background-color": "blue"}}>This is a blue block.</div>
          </div>

          <div id="css-grid">
            <h2><a href="#wrapper">CSS Grid</a></h2>
            <h3>Important Terminology</h3>
            <ul>
              <li>Grid Container: the element that results from display: grid and the direct parents of all grid items.</li>
              <li>Grid Line: the dividing lines that are the structure of the grid (can be column grid lines (vertical) or row grid lines (horizontal); these also include the edges of the grid).</li>
              <li>Grid Track: the space between two grid lines, AKA the rows and columns.</li>
              <li>Grid Item: direct descendants of the grid container.</li>
              <li>Grid Cell: the space between two row grid lines and two column grid lines, AKA a single unit (think of it as a box).</li>
            </ul>
            <h4><a href="#table">Tables to Test On</a></h4>

            <h3><a href="#grid-container">Grid Container Properties</a></h3>
            <ul>
              <li><a href="#display">display</a></li>
              <li><a href="#rows-and-columns">grid-template-columns</a></li>
              <li><a href="#rows-and-columns">grid-template-rows</a></li>
              <li><a href="#grid-template-areas">grid-template-areas</a></li>
              <li><a href="#grid-template">grid-template</a></li>
              <li><a href="#grid-column-gap">grid-column-gap</a></li>
              <li><a href="#grid-row-grid">grid-row-gap</a></li>
              <li><a href="#grid-gap">grid-gap</a></li>
              <li><a href="#justify-items">justify-items</a></li>
              <li>align-items</li>
              <li>place-items</li>
              <li>justify-content</li>
              <li>align-content</li>
              <li>place-content</li>
              <li>grid-auto-columns</li>
              <li>grid-auto-rows</li>
              <li>grid-auto-flow</li>
              <li><a href="#grid">grid</a></li>
            </ul>

            <h3><a href="#grid-items">Grid Items Properties</a></h3>
            <ul>
              <li><a href="#grid-column-start">grid-column-start</a></li>
              <li><a href="#grid-column-end">grid-column-end</a></li>
              <li><a href="#grid-row-start">grid-row-start</a></li>
              <li><a href="#grid-row-end">grid-row-end</a></li>
              <li><a href="#grid-column">grid-column</a></li>
              <li><a href="#grid-row">grid-row</a></li>
              <li><a href="#grid-area">grid-area</a></li>
              <li><a href="#justify-self">justify-self</a></li>
              <li><a href="#align-self">align-self</a></li>
              <li><a href="#place-self">place-self</a></li>
            </ul>

            <h3><a href="#general-grid">General/Uncategorized Stuff</a></h3>
            <ul>
              <li><a href="#padding">padding</a></li>
            </ul>
            
          <div id="grid-container">
            <h2>Grid Container Properties</h2>
          </div>
          <div id="display">
            <h3>display</h3>
            <p>Defines a grid container and establishes a new grid formatting context.</p>
          </div>
          <div id="grid">
            <h4>grid</h4>
            <p>For a block-level grid.</p>
          </div>
          <div id="inline-grid">
            <h4>inline-grid</h4>
            <p>For an inline-level grid.</p>
          </div>
          <div id="rows-and-columns">
          <h3>grid-template-columns, grid template-rows</h3>
          <p>Defines the columns and rows.</p>
          <p>Example:</p>
          <img src="rows-and-columns-example.png" width="600"/>
          <h4>&lt;track-size&gt;</h4>
          <p>Can be put in as a length, a percentage or a fraction (unit: fr).</p>
          </div>
          <div id="grid-template-areas">
            <h4>grid-template-areas</h4>
            <p>Specifies areas within the grid layout (specify names for the items using grid-area; use periods for a grid item with no name).</p>
            <p>Example:</p>
            <video controls src="grid-template-areas-video.mp4" width="600"/>
          </div>
          <div id="grid-template">
            <h4>grid-template</h4>
            <p>Shorthand for grid-template-rows, grid-template-columns and grid-template-areas.</p>
            <p>Example:</p>
            <video controls src="grid-template-video (pt1).mp4" width="600"/>
          </div>
          <div id="grid-column-gap">
            <h4>grid-column-gap</h4>
            <p>Controls how much gap there is between columns.</p>
            <p>Example:</p>
            <img src="grid-column-gap.png" width="600"/>
          </div>
          <div id="grid-row-gap">
            <h4>grid-row-gap</h4>
            <p>Controls how much gap there is between rows.</p>
            <p>Example:</p>
            <img src="grid-row-gap.png" width="600"/>
          </div>
          <div id="grid-gap">
            <h4>grid-gap</h4>
            <p>Shorthand for grid-row-gap and grid-column-gap (in that order).</p>
            <p>Example:</p>
            <video controls src="grid-gap-video.mp4" width="600"/>
          </div>
          <div id="justify-items">
            <h4>justify-items</h4>
            <p>Used to move grid items in the inline direction (left and right).</p>
            <p>Example:</p>
            <video controls src="justify-items-video.mp4" width="600"/>
          </div>
          <div id="align-items">
            <h4>align-items</h4>
            <p>Used to move grid items in the block direction (downwards); align-self overrides this.</p>
            <p>Example:</p>
            <video controls src="" width="600"/>
          </div>

          <h4>&lt;line-name&gt;</h4>
          <p>Can name columns and rows any name you want.</p>
          <p>Grid lines are automatically assigned positive numbers based on where they're placed (-1 is an alternate for the last row).<br/>However, they can be named whatever you want them to be.</p>
          <p>Example:</p>
          <img src="<line-name>-example.png" width="600"/>
          <p>Note: lines can have two names at the same time.</p>
          <p>Example:</p>
          <img src="one-line-two-names-example.png" width="600"/>
          <p>Use the repeat() notation as a trick for repeating parts.</p>
          <p>Example:</p>
          <div id="table">          
          <div className="test">
            <div className="item1">1</div>
            <div className="item2">2</div>
            <div className="item3">3</div>  
            <div className="item4">4</div>
            <div className="item5">5</div>
          </div>
          </div>

          <div className="test2">
            <div className="thing1">1</div>
            <div className="thing2">2</div>
            <div className="thing3">3</div>
            <div className="thing4">4</div>
          </div>
          

          <div id="grid-items">
            <h2><a href="#css-grid">Grid Items Properties</a></h2>


          <div id="grid-area">
            <h4>grid-area</h4>
            <p>Shorthand for grid-row-start, grid-column-start, grid-row-end and grid-column-end; specifies a grid item's size and location in a grid layout.</p>
          </div>
          <div id="grid-row-start">
            <h4>grid-row-start</h4>
            <p>Specifies which row a specific item will start on.</p>
            <video controls src="grid-row-start-video.mp4" width="600"/>
          </div>
          <div id="grid-column-start">
            <h4>grid-column-start</h4>
            <p>Specifies which column a specific items will be aligned with.</p>
            <video controls src="grid-column-start-video.mp4" width="600"/>
          </div>
          <div id="grid-row-end">
            <h4>grid-row-end</h4>
            <p>Specifies how many rows a grid item will span.</p>
            <video controls src="grid-row-end-video.mp4" width="600"/>
          </div>
          <div id="grid-column-end">
            <h4>grid-column-end</h4>
            <p>Specifies how many columns a grid item will span.</p>
            <video controls src="grid-column-end-video.mp4" width="600"/>
          </div>
          <div id="grid-column">
            <h4>grid-column</h4>
            <p>Shorthand for grid-column-start and grid-column-end (in that order).</p>
            <p>Example:</p>
            <video controls src="grid-column-video.mp4" width="600"/>
          </div>
          <div id="grid-row">
            <h4>grid-row</h4>
            <p>Shorthand for grid-row-start and grid-row-end (in that order).</p>
            <p>Example:</p>
            <video controls src="grid-row-video.mp4" width="600"/>
          </div>
          <div id="justify-self">
            <h4>justify-self</h4>
            <p>Used for moving a specified grid item in the inline direction (left and right).</p>
            <p>Example:</p> {/* CURRENTLY WORKING ON THIS */}
            <video controls src="justify-self-video.mp4" width="600"/>
          </div>
          <div id="align-self">
            <h4>align-self</h4>
            <p>Used for moving a specified grid item in the block direction (downward).</p>
            <p>Example:</p>
            <video controls src="align-self-video (grid items).mp4" width="600"/>
          </div>
          <div id="place-self">
            <h4>place-self</h4>
            <p>Shorthand for align-self and justify-self.</p>
            <p>(Two values = first is align-self, second is justify-self. One value = value is set for both align-self and justify-self.)</p>
            <p>Example:</p>
            <video controls src="place-self-video.mp4" width="600"/>
          </div>
          </div>

          <h2>General Things</h2>
          <h3>CSS Combinators</h3>
          <p>Definition: something that explains the relationship between CSS selectors (CSS selector example: using div to style)</p>
          <h4>Descendant selector</h4>
          <p>Marked with a space; specifies all elements that are descendants of the specified element.</p>
          <div className="desEx">
            <div>
              <p>Example: this is purple because it's a descendant of desEx (see video)</p>
              <video controls src="descendants-selector-video.mp4" width="600"/>
            </div>
          </div>
          <h4>Child selector</h4>
          <p>Marked with a &gt;; specifies all elements that are children of the specified element.</p>
          <video controls src="child-selector-video.mp4" width="600"/>
          <h4>Adjacent Sibling selector</h4>
          <p>Marked with a +; specifies an element directly after another specific element.</p>
          <p>Example (see video for further explanation):</p>
          <div>
            <p>This won't turn blue.</p>
            <p>Neither will this.</p>
          </div>
          <p>This will, though.</p> {/* this is right after a div, so this turns blue :) */}
          <video controls src="adjacent-sibling-selector.mp4" width="600"/>
          <h4>General Sibling selector</h4>
          <p>Marked with a ~; specifies elements that are specifically siblings of other elements.</p>
          {/* LOOK BELOW HERE! */}
          <p>Example (see video for further explanation):</p>
          <div className="apple">
            <p>This isn't purple.</p>
          </div>
          <p>But this is!</p>
          <p>And this will be too!</p>
          <video controls src="general-sibling-selector.mp4" width="600"/>
          </div>

        <div id="general-grid">
          <h2>General/Uncategorized Stuff</h2>
        </div>
        <h4>padding (shorthand)</h4>
        <p>Meant to go clockwise; 1st value is top, 2nd value is right, 3rd value is bottom and 4th value is left.</p>
        </div>
        </body>
  )
  
}

export default CSSLearning;
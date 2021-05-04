
//mains
var homeContent = `
<div id="homeLanding">
<!-- Hero -->
<div class="hero">
<div class="centered-content">
    <h1>Header goes here</h1>
    <p class="textOne">Less important text goes here</p>
    <p class="textTwo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
        aliquid minus nemo sed est.
    </p>
    <div class="button">Read More</div>
</div>
</div>

<!-- Quote -->
<div class="quote-area">
<div class="content">
    <p class="quote-text">
        “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Iste natus error sit voluptatem accusantium doloremque
        laudantium totam rem aperiam eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt explicabo”
    </p>
    <p class="author">John Smith</p>
    <p class="title">Corporation CEO, books author.</p>
</div>
</div>

<!-- Upcoming-Events-Div -->
<div class="upcoming-events">
<div class="title">
    <h1>Upcoming Events:</h1>
</div>

<!-- Events-Div -->
<div class="events">
<div class="event">
    <div class="date">
        <span class="number">06</span>
        <span class="date">JUN</span>
    </div>
    
    <div class="event-detail">
        <p class="highlight">Sed et persipiatis unde omnis iste</p>
        <p class="details">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            temporibus quos aspernatur
        </p>
    </div>
</div>
    <div class="event">
        <div class="date">
            <span class="number">30</span>
            <span class="date">JUL</span>
        </div>
        <div class="event-detail">
            <p class="highlight">Sed et persipiatis unde omnis iste</p>
            <p class="details">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                temporibus quos aspernatur
            </p>
        </div>
    </div>
    <div class="event">
        <div class="date">
            <span class="number">30</span>
            <span class="date">AUG</span>
        </div>
        <div class="event-detail">
            <p class="highlight">Sed et persipiatis unde omnis iste</p>
            <p class="details">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                temporibus quos aspernatur
            </p>
        </div>
    </div>
    <div class="event">
        <div class="date">
            <span class="number">23</span>
            <span class="date">NOV</span>
        </div>
        <div class="event-detail">
            <p class="highlight">Sed et persipiatis unde omnis iste</p>
            <p class="details">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                temporibus quos aspernatur
            </p>
        </div>
    </div>
    <div class="event">
        <div class="date">
            <span class="number">23</span>
            <span class="date">DEC</span>
        </div>
        <div class="event-detail">
            <p class="highlight">Sed et persipiatis unde omnis iste</p>
            <p class="details">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                temporibus quos aspernatur
            </p>
        </div>
    </div>
</div>
</div>
</div>
`;
var aboutContent = `
<div id="aboutLanding">
<!-- Hero-Div -->
<div class="hero"></div>

<!-- About (history)-Div -->

<div class="about">
  <span class="about-title">Our History:</span>
  <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
    fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
    sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
    amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
</div>
</div>
`;
var galleryContent = `

<div id="galleryLanding">
<!-- Gallery-Div -->
<div class="gallery">
<!-- Gallery Title -->
<span> Gallery: </span>
<!-- Gallery Images -->
<div class="gallery-images">
  <div class="rowOne">
    <a id="gallery01" href="gallery01.html#gallery01Landing"> <div class="imageOne"></div> </a>
    <a id="gallery02" href="gallery02.html#gallery02Landing"> <div class="imageTwo"></div> </a>
    <a id="gallery03" href="gallery03.html#gallery03Landing"> <div class="imageThree"></div> </a>
  </div>
  <!-- Row Two Starts... -->
  <div class="rowTwo">
    <a id="gallery04" href="gallery04.html#gallery04Landing"> <div class="imageFour"></div> </a>
    <a id="gallery05" href="gallery05.html#gallery05Landing"> <div class="imageFive"></div> </a>
  </div>
</div>
</div>
</div>
`;
var blogContent = `
<div id="blogLanding">
<div class="blogArea">
    <h1 id="blogheader">Blog:</h1>

    <div class="blogMain">
        <!-- row A -->
        <div class="rowA">
            <!-- 06 Jun -->
            <a href="blog01.html#blog01Landing">
                <div class="blog1">
                    <div class="blueSquare" id="jun">
                        <p id="num">06</p>
                        <p id="month">JUN</p>
                    </div>
                    <div class="blogimg"></div>
                    <div class="blogtext">
                        <h1>Sed et persipiatis unde omnis iste natus</h1>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                        </p>
                    </div>
                </div>
            </a>

            <!-- 30 Jul -->
            <a href="blog02.html#blog02Landing">
                <div class="blog2">
                    <div class="blueSquare" id="jun">
                        <p id="num">30</p>
                        <p id="month">JUL</p>
                    </div>
                    <div class="blogimg"></div>
                    <div class="blogtext">
                        <h1>Sed et persipiatis unde omnis iste natus</h1>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                        </p>
                    </div>
                </div>
            </a>
        </div>

        <!-- row B -->
        <div class="rowB">
            <!-- 06 Jun -->
            <a href="blog03.html#blog03Landing">
                <div class="blog3">
                    <div class="blueSquare" id="jun">
                        <p id="num">30</p>
                        <p id="month">AUG</p>
                    </div>
                    <div class="blogimg"></div>
                    <div class="blogtext">
                        <h1>Sed et persipiatis unde omnis iste natus</h1>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                        </p>
                    </div>
                </div>
            </a>
            
            <!-- 30 Jul -->
            <a href="blog04.html#blog04Landing">
                <div class="blog4">
                    <div class="blueSquare" id="jun">
                        <p id="num">23</p>
                        <p id="month">NOV</p>
                    </div>
                    <div class="blogimg"></div>
                    <div class="blogtext">
                        <h1>Sed et persipiatis unde omnis iste natus</h1>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                        </p>
                    </div>
                </div>
            </a>
        </div>
        
        <!-- row C -->
        <div class="rowC">
            <!-- 06 Jun -->
            <a href="blog05.html#blog05Landing">
                <div class="blog5">
                    <div class="blueSquare" id="jun">
                        <p id="num">23</p>
                        <p id="month">DEC</p>
                    </div>
                    <div class="blogimg"></div>
                    <div class="blogtext">
                        <h1>Sed et persipiatis unde omnis iste natus</h1>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                        </p>
                    </div>
                </div>
            </a>
        </div>
    </div>    
</div>
</div>
`;
var contactContent = `
<div id="contactLanding">
<div class="contactUs">
    <h1>Contact Us:</h1>
    <div class="contactMain">
        
        <div class="formside">
            <form class="form">
                <div>
                    <input type="text" id="yname" name="yname" placeholder="Your name...">
                    <input type="text" id="email" name="email" placeholder="Email Address...">
                    <input type="text" id="company" name="company" placeholder="Company...">
                </div>
                    <textarea id="fmessage" type="text" name="fmessage" placeholder="Message..."></textarea>
                    <input type="submit" value="Submit">
            </form>
        </div>

        <div class="imgside">
            <div class="mapimg"></div>
        </div>
    </div>
</div>
</div>
`;

//galleries I could not get to load - sorry
var gallery01Content = `
<div id="gallery01Landing">
<!-- Gallery One Hero-Div -->
<div class="galleryOneHero" id="gallery01">
<div class="galleryOneTitle">
  <span class="title-1">1</span>
  <span class="title-food">.food festival</span>
</div>
</div>

<!-- Gallery Info-Div -->
<div class="gallery-info">
<div class="row">
  <div class="column">
    <i>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt.
    </i>
  </div>
  <div class="column">
    <i>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </i>
  </div>
</div>
</div>
</div>
`;
var gallery02Content = `
<div id="gallery02Landing">
<!-- Gallery Two Hero-Div -->
<div class="galleryTwoHero">
  <div class="galleryTwoTitle">
    <span class="title-2">2</span>
    <span class="title-dj">.dee-jay</span>
  </div>
</div>

<!-- Gallery Info-Div -->

<div class="gallery-info">
  <div class="row">
    <div class="column">
      <i>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </i>
    </div>
    <div class="column">
      <i>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </i>
    </div>
  </div>
</div>
</div>
`;
var gallery03Content = `
<div id="gallery03Landing">
<!-- Gallery Three Hero-Div -->
<div class="galleryThreeHero">
<div class="galleryThreeTitle">
  <span class="title-3">3</span>
  <span class="title-speech">.speech</span>
</div>
</div>

<!-- Gallery Info-Div -->

<div class="gallery-info">
<div class="row">
  <div class="column">
    <i>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
    </i>
  </div>
  <div class="column">
    <i>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </i>
  </div>
</div>
</div>
</div>
`;
var gallery04Content = `
<div id="gallery04Landing">
<!-- Gallery Four Hero-Div -->
<div class="galleryFourHero">
    <div class="galleryFourTitle">
      <span class="title-4">4</span>
      <span class="title-openfest">.open foodfest</span>
    </div>
  </div>

  <!-- Gallery Info-Div -->

  <div class="gallery-info">
    <div class="row">
      <div class="column">
        <i>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt.
        </i>
      </div>
      <div class="column">
        <i>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </i>
      </div>
    </div>
  </div>
  </div>
`;
var gallery05Content = `
<div id="gallery05Landing">
<!-- Gallery Five Hero-Div -->
<div class="galleryFiveHero">
<div class="galleryFiveTitle">
<span class="title-5">5</span>
<span class="title-int">.international</span>
</div>
</div>

<!-- Gallery Info-Div -->

<div class="gallery-info">
<div class="row">
<div class="column">
  <i>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
    eos qui ratione voluptatem sequi nesciunt.
  </i>
</div>
<div class="column">
  <i>
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </i>
</div>
</div>
</div>
</div>
`;






export function getPageContent(pageId) {
    $('#app').html(eval(pageId));
}


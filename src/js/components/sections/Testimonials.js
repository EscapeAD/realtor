import React from 'react';

export default class Testimonials extends React.Component {
  render() {
    return (
      <div>
      <div id="real-testimonials" data-section="testimonials">
        <div class="container">
          <div class="row">
            <div class="col-md-12 section-heading text-center">
              <h2 class="to-animate">Happy Clients Say...</h2>
              <div class="row">
                <div class="col-md-8 col-md-offset-2 subtext to-animate">
                  <h3>Chedder cheese box</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="box-testimony to-animate">
                <blockquote>
                  <span class="quote"><span><i class="fa fa-quote-left" aria-hidden="true"></i></span></span>
                  <p>&ldquo;  &rdquo;</p>
                </blockquote>
                <p class="author">Wakka Tse</p>
               </div>

            </div>
            <div class="col-md-4">
              <div class="box-testimony to-animate">
                <blockquote>
                  <span class="quote"><span><i class="fa fa-quote-left" aria-hidden="true"></i></span></span>
                  <p>&ldquo;  &rdquo;</p>
                </blockquote>
                <p class="author">Wakka Tse</p>
              </div>


            </div>
            <div class="col-md-4">
              <div class="box-testimony to-animate">
                <blockquote>
                  <span class="quote"><span><i class="fa fa-quote-left" aria-hidden="true"></i></span></span>
                  <p>&ldquo;  &rdquo;</p>
                </blockquote>
                <p class="author">Wakka Tse</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

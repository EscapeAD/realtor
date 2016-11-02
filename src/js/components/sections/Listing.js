import React from 'react';

export default class Listing extends React.Component {
  render() {
    return (
      <div id="real-our-listing" data-section="Listing">
        <div class="container">
          <div class="row row-bottom-padded-sm">
            <div class="col-md-12 section-heading text-center">
              <h2 class="to-animate">FEATURED LISTINGS</h2>
              <div class="row">
                <div class="col-md-8 col-md-offset-2 to-animate">
                  <h3>Current Featured Listings</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="box to-animate">
                <h3>100% free</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>

            </div>
            <div class="col-md-4">
              <div class="box to-animate">
                <h3>Fully responsive</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>

            </div>
            <div class="col-md-4">
              <div class="box to-animate">
                <h3>Retina-ready</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

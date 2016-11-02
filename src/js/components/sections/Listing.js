import React from 'react';

import List from '../List';

export default class Listing extends React.Component {
  render() {

    const Lists = [
   "Some Article",
   "Some Other Article",
   "Yet Another Article",
   "Still More",
   "Some Article",
   "Some Other Article",
   "Yet Another Article",
   "Still More",
   "Some Article",
   "Some Other Article",
   "Yet Another Article",
   "Still More",
 ].map((title, i) => <List key={i} title={title}/> );

    return (
      <div id="real-press" data-section="press">
    		<div class="container">
    			<div class="row">
    				<div class="col-md-12 section-heading text-center">
    					<h2 class="single-animate animate-press-1">Featured Listings</h2>
    					<div class="row">
    						<div class="col-md-8 col-md-offset-2 subtext single-animate animate-press-2">
    							<h3>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h3>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div class="row">
          {Lists}
    			</div>
    		</div>
    	</div>
    );
  }
}

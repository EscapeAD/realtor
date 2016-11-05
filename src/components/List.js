import React from "react";

export default class List extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-6">
        <div class="real-press-item to-animate" >
          <div class="real-press-img">
            <img src='http://placehold.it/350x350'/>
          </div>
          <div class="real-press-text">
            <h3 class="h2 real-press-title">{title} <span class="real-border"></span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eius quos similique suscipit dolorem cumque vitae qui molestias illo accusantium...</p>
            <p><a href="#" class="btn btn-primary btn-sm">Learn more</a></p>
          </div>
        </div>
      </div>
    );
  }
}

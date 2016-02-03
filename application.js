thumbOptions = {
  thumbnailData: [{
    header: 'Learn React',
    description: 'Learn how to use React in your applications',
    imageUrl: 'https://cdn.auth0.com/blog/react-js/react.png',
    title: 'Courses Available',
    count: 5
  }, {
    header: 'Learn Flux',
    description: 'Learn how to use Flux in your applications',
    imageUrl: 'http://objectpartners.github.io/react-workshop/assets/img/flux-logo.png',
    title: 'Courses Available',
    count: 2
  }]
};

element = React.createElement(ThumbnailList, thumbOptions)
ReactDOM.render(element, document.querySelector('.target'))

Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.count)
    )
  }
});

ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return React.createElement("div", null, 
      list
    )
  }
});

Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageUrl}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement(Badge, {title: this.props.title, count: this.props.count})
      )
    )
  }
});

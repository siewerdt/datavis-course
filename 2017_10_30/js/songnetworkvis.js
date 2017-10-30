function Network() {
  var allData = [],
      width = 960,
      height = 800,
      // our force directed layout
      force = d3.layout.force(), 
      // these will point to the circles and lines
      // of the nodes and links
      link = null,
      node = null,
      // these will hold the svg groups for
      // accessing the nodes and links display
      linksG = null,
      nodesG = null,
      // tooltip used to display details
      tooltip = Tooltip("vis-tooltip", 230),
      network; //function

  // Helper function to map node id's to node objects.
  // Returns d3.map of ids -> nodes
  function mapNodes(nodes) {
    var nodesMap;
    nodesMap = d3.map();
    nodes.forEach(function(n) {
      return nodesMap.set(n.id, n);
    });
    return nodesMap;
  }

  function setupData(data) {
    //First let's randomly dispose data.nodes (x/y) within the the width/height
    // of the visualization and set a fixed radius for now

    // Then we will create a map with
    // id's -> node objects
    // using the mapNodes function above and store it in the nodesMap variable.

    
    // Then we will switch links to point to node objects instead of id's

    // Finally we will return the data
  }

  // Mouseover tooltip function
  function showDetails(d, i) {
    
  }

  // Mouseout function
  function hideDetails(d, i) {
    
  }

  // enter/exit display for nodes
  function updateNodes() {
    //select all node elements in svg group of nodes
    
    // set cx, cy, r attributes and stroke-width style
  }

  // enter/exit display for links
  function updateLinks() {
    //select all link elements in svg group of nodes
    
  }

  // tick function for force directed layout
  var forceTick = function(e) {
    
  };

  // Starting point for network visualization
  // Initializes visualization and starts force layout
  network = function(selection, data) {

    // format our data

    // create our svg and groups

    // setup the size of the force environment

    // set the tick callback, charge and linkDistance

    // setup nodes and links

    // perform rendering and start force layout

  };
  // Final act of Network() function is to return the inner 'network()' function.
  return network;
}

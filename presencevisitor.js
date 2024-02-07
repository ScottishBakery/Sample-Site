console.log('presence wrapper script loaded');

// Instantiate a Visitor presence object
var presencevisitor = new GLANCE.Presence.Visitor({
    groupid : 21489, // optional, defaults to GLANCE_COBROWSE.groupid
    visitorid : "jose" // optional, defaults to GLANCE_COBROWSE.visitorid
  });
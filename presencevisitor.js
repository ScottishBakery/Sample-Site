console.log('presence wrapper script loaded');

document.addEventListener('DOMContentLoaded', () => {
    // Instantiate a Visitor presence object
    const presencevisitor = new GLANCE.Presence.Visitor({
        groupid : 21489, // optional, defaults to GLANCE_COBROWSE.groupid
        visitorid : "jose" // optional, defaults to GLANCE_COBROWSE.visitorid
    })
  
    // Start sending regular presence updates (by default, every 60 seconds)
    presencevisitor.presence();
  
    // Send a presence update (now) with some custom data
    presencevisitor.presence({ data : { subdata : 3} })
  
    // Listen for agent messages.  
    presencevisitor.onsignal = function (msg) { console.log("Received", msg); }
    presencevisitor.connect();
})
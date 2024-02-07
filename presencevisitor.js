console.log('presence wrapper script loaded');

document.addEventListener('DOMContentLoaded', () => {
    const presencevisitor = new GLANCE.Presence.Visitor({
        groupid : 21489, // optional, defaults to GLANCE_COBROWSE.groupid
        visitorid : "jose" // optional, defaults to GLANCE_COBROWSE.visitorid
    })
})
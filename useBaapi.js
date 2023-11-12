document.addEventListener("DOMContentLoaded", function() {  
  GLANCE.Agent.addEventListenerAll(function (eventname, eventdata) {
    console.log({eventname, eventdata})
  })
  
  const authenticate = (loginKey, partnerId, partnerUserId) => {
    GLANCE.Agent.authenticate({
      loginkey: loginKey,
      partnerid: partnerId,
      partneruserid: partnerUserId
    })
  }

  const loginKeyInput = document.getElementById('loginKey')
  const partnerIdInput = document.getElementById('partnerId')
  const partnerUserIdInput = document.getElementById('partnerUserId')
  const authButton = document.getElementById('authButton');

  authButton.addEventListener('click', () => authenticate(loginKeyInput.value, partnerIdInput.value, partnerUserIdInput.value));

  const keyInput = document.getElementById('sessionKey');
  const joinButton = document.getElementById('joinButton');

  const joinSession = (key) => {
    console.log(key);
    // console.log(`joining session with key ${key}`)
    GLANCE.Agent.joinSession(key)
  };

  joinButton.addEventListener('click', () => joinSession(keyInput.value));
});


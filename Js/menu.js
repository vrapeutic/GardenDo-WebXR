

function set_language(lang){
  sessionStorage.setItem('langauage',lang);

  if ( IAM == 'doctor' ) {
    var data = {
      funcName: 'set_language',
      params: [
        lang
      ]
    }
    conn.send(JSON.stringify(data));
  }
}

function set_level(level){
  sessionStorage.setItem('level',level);  
 //  alert(sessionStorage.getItem('level'));
  if ( IAM == 'doctor' ) {
    var data = {
      funcName: 'set_level',
      params: [
        level
      ]
    }
    conn.send(JSON.stringify(data));
  }
}

function set_growth_time(animationSpeed){
  sessionStorage.setItem('animationSpeed',animationSpeed);
  if ( IAM == 'doctor' ) {
    var data = {
      funcName: 'set_growth_time',
      params: [
        animationSpeed
      ]
    }
    conn.send(JSON.stringify(data));
  }
}

function set_npc(npc){
  if(sessionStorage.getItem('langauage') =='A') {
    if(npc =='male') {
      sessionStorage.setItem('npc','H');  
  //    alert(sessionStorage.getItem('npc'));
    }
    else {
      sessionStorage.setItem('npc','Re');  
    //    alert(sessionStorage.getItem('npc'));
    }
  }
  else {
    if(npc =='male') {
      sessionStorage.setItem('npc','Ri');  
      //alert(sessionStorage.getItem('npc'));
    }
    else {
      sessionStorage.setItem('npc','L');  
        // alert(sessionStorage.getItem('npc'));
    } 
  }

  if ( IAM == 'doctor' ) {
    var data = {
      funcName: 'set_npc',
      params: [
        npc
      ]
    }
    conn.send(JSON.stringify(data));
  }
}

function start_game() {
  var gameDiv = document.getElementById('game');
  // window.open('game.html',"_self");

  if ( IAM == 'doctor' ) {
    var data = {
      funcName: 'start_game',
      params: []
    }
    conn.send(JSON.stringify(data));

    var drMenuDiv = document.getElementById('dr-menu');

    drMenuDiv.style.visibility = 'hidden';
  } else if ( IAM == 'child' ) {
    var childWaitDiv = document.getElementById('child-wait');
    childWaitDiv.style.visibility = 'hidden';

    // startCall();
  } else if ( IAM == 'standalone' ) {
    console.log('standalone')
    var chooseRoleDiv = document.getElementById('choose-role');
    chooseRoleDiv.style.visibility = 'hidden';
  }

  gameDiv.style.visibility = 'visible';
  gameStarted = true;

  document.getElementById('injectable').innerHTML = gameHTMLFile['gardenDo']
  document.querySelector('a-scene').setAttribute('vr-mode-ui', 'enabled', true)

  if ( IAM == 'doctor' ) {
    // var camera = document.getElementById('cam');
    // camera.setAttribute('enabled', 'false')
    // camera.setAttribute('hmdEnabled', 'false')
    // camera.setAttribute('touchEnabled', 'false')
    // camera.setAttribute('mouseEnabled', 'false')
    // camera.setAttribute('pointerLockEnabled', 'false')
    // camera.setAttribute('magicWindowTrackingEnabled', 'false')
  }
}




function selectRole(role) {
  var chooseRoleDiv = document.getElementById('choose-role');
  var drGenIDDiv = document.getElementById('dr-gen-id');
  var transitDiv = document.getElementById('transit');
  var childDiv = document.getElementById('child-enter-id');
  
  chooseRoleDiv.remove();
  transitDiv.style.visibility = 'visible';

  console.log('my role is', role);

  IAM = role;

  if ( role == 'child' ) {
    childDiv.style.visibility = 'visible';
  } else if ( role == 'doctor' ) {
    drGenIDDiv.style.visibility = 'visible';
  }

  initPeerJS(role);
}

function copyToClipboard() {
  var drIDElement = document.getElementById('dr-id');
  var tmp = drIDElement.innerHTML.split( "<br>" );

  var childURL = tmp[tmp.length - 1];
  
  const el = document.createElement('textarea');
  el.value = childURL;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function initPeerJS(role, drIDElement) {
  var drIDElement = document.getElementById('dr-id');
  var status = document.getElementById("status");

  peer = new Peer(null, 
    {
      config: {
        'iceServers': [
          { url: 'stun:stun.l.google.com:19302' },
          { 
            url: 'turn:192.158.29.39:3478?transport=tcp',
            credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
            username: '28224511:1379330808'
          }
        ]
      } /* Sample servers, please use appropriate ones */
  });

  peer.on('open', function (id) {
    // Workaround for peer.reconnect deleting previous id
    if (peer.id === null) {
        console.log('Received null id from peer open');
        peer.id = lastPeerId;
    } else {
        lastPeerId = peer.id;
    }
    
    if ( role == 'doctor' ) {
      console.log('ID: ' + peer.id);
      console.log(`${document.URL}/?id=` + peer.id);
      drIDElement.innerHTML = drIDElement.innerHTML + "<br>" + `${document.URL}?id=` + peer.id;
    } else if ( role == 'child' ) {
      var currentURL = document.URL;
      var tokens = currentURL.split("=");

      if ( tokens.length > 1 ) {
        var id = tokens[tokens.length - 1];
        document.getElementById('receiver-id').value = id;
        document.getElementById('connect-button').click();
      }
    }
  });
  peer.on('connection', function (c) {
    if ( role == 'child' ) {
      // Disallow incoming connections
      c.on('open', function() {
          c.send("Sender does not accept incoming connections");
          setTimeout(function() { c.close(); }, 500);
      });
    }

    if ( role == 'doctor' ) {
      // Allow only a single connection
      if (conn && conn.open) {
          c.on('open', function() {
              c.send("Already connected to another client");
              setTimeout(function() { c.close(); }, 500);
          });
          return;
      }

      conn = c;
      console.log("Connected to: " + conn.peer);
      status.innerHTML = "Connected";
      ready();
    }
  });
  peer.on('call', onReceiveCall);
  peer.on('disconnected', function () {
    status.innerHTML = "Connection lost. Please reconnect";
    console.log('Connection lost. Please reconnect');

    // Workaround for peer.reconnect deleting previous id
    peer.id = lastPeerId;
    peer._lastServerId = lastPeerId;
    peer.reconnect();
  });
  peer.on('close', function() {
    conn = null;
    status.innerHTML = "Connection destroyed. Please refresh";
    console.log('Connection destroyed');
  });
  peer.on('error', function (err) {
    console.log(err);
    alert('' + err);
  });
}

function objectToPos(posObject) {
  return posObject.x + " " + posObject.y + " " + posObject.z;
}

function objectToRot(posObject) {
  return posObject._x + " " + posObject._y + " " + posObject._z;
}

document.addEventListener("keydown", function(e){
  if ( e.key == 'e' ) {
    var camRig = document.querySelector("#camRig");

    console.log(camRig.getAttribute('position'))
    camRig.setAttribute('position', "3 3 3")
    console.log(camRig.getAttribute('position'))

    console.log(camRig)
  }
});

function ready() { // DOCTOR ONLY
  console.log('I am ready');

  var transitDiv = document.getElementById('transit');
  var drMenuDiv = document.getElementById('dr-menu');

  transitDiv.remove();
  drMenuDiv.style.visibility = 'visible';

  conn.on('data', function (data) {
    var incomingData = JSON.parse(data)
    console.log(IAM, 'got data', incomingData);

    if ( incomingData.object3D == 'camera' ) {
      // var camRig = document.querySelector("#camRig");
      var camRig = document.querySelector('[camera]');

      var newPos = objectToPos(incomingData.position);

      camRig.removeAttribute('wasd-controls');
      camRig.setAttribute('position', newPos);
      camRig.setAttribute('wasd-controls');
      camRig.setAttribute('wasd-controls', true);
      camRig.setAttribute('wasd-controls', 'true');
      camRig.setAttribute('wasd-controls-enabled', true);

      camRig.removeAttribute('look-controls');
      camRig.object3D.rotation.x = incomingData.rotation._x
      camRig.object3D.rotation.y = incomingData.rotation._y
      camRig.object3D.rotation.z = incomingData.rotation._z
      camRig.setAttribute('look-controls');
      camRig.setAttribute('look-controls', true);
      camRig.setAttribute('look-controls', 'true');
      camRig.setAttribute('look-controls-enabled', true);

    }
  });
  conn.on('close', function () {
      conn = null;
  });
}

function rad2deg(radians) {
  var pi = Math.PI;
  return radians * (180/pi);
}

function join() { // CHILD ONLY
  var recvIdInput = document.getElementById('receiver-id');
  var status = document.getElementById("status");
  var transitDiv = document.getElementById('transit');
  var childWaitDiv = document.getElementById('child-wait');

  transitDiv.remove();
  childWaitDiv.style.visibility = 'visible';

  // Close old connection
  if (conn) {
    console.log('closing old connection...')
    conn.close();
  }

  // Create connection to destination peer specified in the input field
  conn = peer.connect(recvIdInput.value, {
      reliable: true
  });

  conn.on('open', function () {
      status.innerHTML = "Connected to: " + conn.peer;
      console.log("Connected to: " + conn.peer);

      // Check URL params for comamnds that should be sent immediately
      var command = getUrlParam("command");
      console.log('command', command);
      if (command)
          conn.send(command);
  });
  // Handle incoming data (messages only since this is the signal sender)
  conn.on('data', function (data) {
    var incomingData = JSON.parse(data);
    console.log(IAM, 'got data', incomingData);

    console.log(incomingData.funcName);
    console.log(incomingData.params);

    executeFunctionByName(incomingData.funcName, window, incomingData.params);
  });
  conn.on('close', function () {
      status.innerHTML = "Connection closed";
  });
}

function getUrlParam( name ) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results == null)
      return null;
  else
      return results[1];
};

function executeFunctionByName ( functionName, context /*, args */ ) {
  var args, namespaces, func;

  if( typeof functionName === 'undefined' ) { throw 'function name not specified'; }

  if( typeof eval( functionName ) !== 'function' ) { throw functionName + ' is not a function'; }

  if( typeof context !== 'undefined' ) { 
      if( typeof context === 'object' && context instanceof Array === false ) { 
          if( typeof context[ functionName ] !== 'function' ) {
              throw context + '.' + functionName + ' is not a function';
          }
          args = Array.prototype.slice.call( arguments, 2 );

      } else {
          args = Array.prototype.slice.call( arguments, 1 );
          context = window;
      }

  } else {
      context = window;
  }

  namespaces = functionName.split( "." );
  func = namespaces.pop();

  for( var i = 0; i < namespaces.length; i++ ) {
      context = context[ namespaces[ i ] ];
  }

  return context[ func ].apply( context, args );
}


function getAudio(successCallback, errorCallback){
  navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
  }).then(successCallback)
    .catch(errorCallback)
}

function onReceiveCall(call){

  console.log('peer is calling...');
  console.log(call);

  getAudio(
      function(MediaStream){
          call.answer(MediaStream);
          console.log('answering call started...');
      },
      function(err){
          console.log('an error occured while getting the audio');
          console.log(err);
      }
  );

  call.on('stream', onReceiveStream);
}

function onReceiveStream(stream){
  var audio = document.querySelector('audio');
  console.log(stream)
  audio.srcObject = stream;
  audio.onloadedmetadata = function(e){
      console.log('now playing the audio');
      audio.play();
  }
}

function startCall() {
  console.log('starting call...');

  getAudio(
      function(MediaStream){
        var currentURL = document.URL;
        var tokens = currentURL.split("=");

        if ( tokens.length > 1 ) {
          var id = tokens[tokens.length - 1];
          console.log('now calling ' + id);
          myCall = peer.call(id, MediaStream);
          myCall.on('stream', onReceiveStream);
        }
      },
      function(err){
        console.log('an error occured while getting the audio');
        console.log(err);
      }
  );

}
window.addEventListener('load', function() {
  'use strict';

  new LeaderLine(
    document.getElementById('ex-020-a'),
    document.getElementById('ex-020-b'),
    {
      color: '#ef1e28',
      startPlug: 'square',
      endPlug: 'arrow2',
      startPlugColor: '#43bc5b',
      endPlugColor: '#1085e0',
      startPlugSize: 1.5,
      endPlugSize: 1.5,
      dash: true,
      endLabel: LeaderLine.pathLabel('This is additional label')
    }
  );

  new LeaderLine(
    document.getElementById('ex-020-f'),
    document.getElementById('ex-020-g'),
    {
      size: 8,
      startPlugColor: '#ffff05',
      endPlugColor: '#0c7d1a',
      gradient: true
    }
  );

  new LeaderLine(
    document.getElementById('ex-020-c'),
    document.getElementById('ex-020-d'),
    {
      color: 'black',
      startPlug: 'disc',
      endPlug: 'hand',
      path: 'grid'
    }
  );

  new LeaderLine(
    document.getElementById('ex-020-h'),
    document.getElementById('ex-020-f'),
    {
      size: 6,
      outlineColor: '#1e71ef',
      outline: true,
      endPlugOutline: true,
      dash: true,
      path: 'arc',
      startSocket: 'left',
      endSocket: 'bottom'
    }
  );

  new LeaderLine(
    document.getElementById('ex-020-e'),
    document.getElementById('ex-020-c'),
    {
      color: '#ecf373',
      dropShadow: true,
      endSocket: 'bottom'
    }
  );

  var lineC = new LeaderLine(
    document.getElementById('ex-020-c'),
    document.getElementById('ex-020-b'),
    {
      path: 'straight'
      // dash: {animation: true}
    }
  );
  inView('#ex-020')
    .on('enter', function() { lineC.dash = {animation: true}; })
    .on('exit', function() { lineC.dash = false; });

  new LeaderLine(
    document.getElementById('ex-020-f'),
    document.getElementById('ex-020-c'),
    {
      startPlug: 'arrow1',
      startSocket: 'left',
      endSocket: 'right',
      startSocketGravity: [-140, -80],
      endSocketGravity: [220, 180]
    }
  );

  var lineH = new LeaderLine(
    document.getElementById('ex-020-h'),
    document.getElementById('ex-020-i')
  );
  document.getElementById('ex-020-frame').addEventListener('scroll', AnimEvent.add(function() {
    lineH.position();
  }), false);

  new LeaderLine(
    LeaderLine.mouseHoverAnchor(document.getElementById('ex-020-j'), 'draw', {style: {backgroundImage: null}}),
    document.getElementById('ex-020-h'),
    {color: 'rgba(255, 127, 80, 0.8)'}
  );

});

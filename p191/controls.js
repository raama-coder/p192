AFRAME.registerComponent('aircraft-controls', {
  init: function () {
    this.cameraEntity = document.querySelector('#cameraRig');

    // Listen for keydown events
    window.addEventListener('keydown', this.onKeyDown.bind(this));
  },
  onKeyDown: function (event) {
    var rotation = this.cameraEntity.getAttribute("rotation");
    var position = this.cameraEntity.getAttribute("position");

    if (event.key === 'ArrowLeft') {
      // Turn left
      rotation.y += 1;
    }
    if (event.key === 'ArrowRight') {
      // Turn right
      rotation.y -= 1;
    }
    if (event.key === 'ArrowUp') {
      // Move forward along the camera's direction
      position.z == 1
    }
    if (event.key === ' ') {
      position.y += 1
    }
    if (event.key === 'z') {
      position.y -= 1
    }

    // Set the new rotation and position for the camera entity
    this.cameraEntity.setAttribute('rotation', rotation);
    this.cameraEntity.setAttribute('position', position);
  }
});

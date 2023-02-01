$(function() {
  if (window.DeviceMotionEvent && window.DeviceMotionEvent.requestPermission) {
    // デバイスの加速度センサーへのアクセス許可を確認する必要がある
    DeviceMotionEvent.requestPermission()
      .then(state => {
        // アクセスを許可する場合のみ実行可能
        console.log(state);
        if (state === 'granted') {
          // 方向の計測結果を取得
          $(document).on('deviceorientation', event => {
            $('#orientation').text(`X: ${precision(event.beta)} / Y: ${precision(event.gamma)} / Z: ${precision(event.alpha)}`);
          });
          // 加速度の計測結果を取得
          $(document).on('devicemotion', event => {
            const accel = event.acceleration;
            const accelG = event.accelerationIncludingGravity;
            const rotation = event.rotationRate;
            $('#acceleration').text(`X: ${precision(accel.x)} / Y: ${precision(accel.y)} / Z: ${precision(accel.z)}`);
            $('#acceleration-gravity').text(`X: ${precision(accelG.x)} / Y: ${precision(accelG.y)} / Z: ${precision(accelG.z)}`);
            $('#rotation-rate').text(`X: ${precision(rotation.beta)} / Y: ${precision(rotation.gamma)} / Z: ${precision(rotation)}`);
          });
        }
      })
  }

  function precision(num) {
    return num.toPrecision(4);
  }
});

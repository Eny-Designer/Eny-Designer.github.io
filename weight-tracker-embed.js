<!DOCTYPE html>
<html>
<head>
  <style>
    .weight-tracker {
      font-family: system-ui, sans-serif;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 20px;
      max-width: 400px;
      margin: 20px auto;
    }

    .weight-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      font-size: 16px;
    }

    .progress-container {
      background: #e5e7eb;
      border-radius: 999px;
      height: 20px;
      overflow: hidden;
      margin-bottom: 20px;
    }

    #progress-bar {
      background: #3b82f6;
      height: 100%;
      transition: width 0.3s ease;
      width: 0%;
    }

    .button-container {
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    button {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      width: 40px;
      height: 40px;
      font-size: 20px;
      cursor: pointer;
      transition: all 0.2s;
    }

    button:hover:not(:disabled) {
      background: #e2e8f0;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <div class="weight-tracker">
    <div class="weight-info">
      <span>Peso: <span id="weight-value">0</span>kg</span>
      <span id="percentage">0%</span>
    </div>
    <div class="progress-container">
      <div id="progress-bar"></div>
    </div>
    <div class="button-container">
      <button onclick="decrease()" id="decrease-btn" disabled>-</button>
      <button onclick="increase()" id="increase-btn">+</button>
    </div>
  </div>

  <script>
    let weight = 0;
    const maxWeight = 60;
    
    function update() {
      const percentage = (weight / maxWeight) * 100;
      document.getElementById('weight-value').textContent = weight;
      document.getElementById('percentage').textContent = percentage.toFixed(1) + '%';
      document.getElementById('progress-bar').style.width = percentage + '%';
      document.getElementById('decrease-btn').disabled = weight === 0;
      document.getElementById('increase-btn').disabled = weight === maxWeight;
    }
    
    function increase() {
      if (weight < maxWeight) {
        weight++;
        update();
      }
    }
    
    function decrease() {
      if (weight > 0) {
        weight--;
        update();
      }
    }
  </script>
</body>
</html>

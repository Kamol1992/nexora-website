<template>
  <div class="container">
    <div class="map">
      <span class="pin"></span>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .map { margin-top:60px; min-height:360px; background:
  linear-gradient(45deg, transparent 49%, #ddd 50%, transparent 51%),
  linear-gradient(-45deg, transparent 49%, #ddd 50%, transparent 51%),
  #efefeb; background-size:90px 90px; position:relative; }
  .pin { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:38px;height:38px;border-radius:50% 50% 50% 0; background:var(--dark); rotate:-45deg; }
  .pin::after { content:""; position:absolute; width:10px;height:10px;border-radius:50%; background:white; left:14px;top:14px; }
</style>

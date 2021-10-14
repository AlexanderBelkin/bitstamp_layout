<template>
  <div
    class="flex justify-between bg-third border-b-2 border-primary items-center  "
  >
    <div class="mx-4 flex uppercase text-xs pt-1 pb-1 text-gray-500">
      Start trading
    </div>
  </div>
  <div class="flex flex-col p-4">
    <div class="flex flex-col">
      <button
        class="cursor-pointer button-color hover:bg-blue-700 text-white py-2 px-3 mb-2 rounded"
      >
        Log In
      </button>
      <button
        class="cursor-pointer bg-transparent hover:bg-blue-500 text-blue-400 hover:text-white py-2 px-3 mt-2 border border-blue-500 rounded"
      >
        Register
      </button>
    </div>
    <div class="pt-6 text-left">
      <div class="text-xs text-white font-bold">Welcome to Bitstamp</div>
      <div class="text-xs text-gray-500">
        The world's longest-standing crypto exchange.
        <br />
        We provide premium access to cryptocurrency trading for both individuals
        and institutional clients through:
        <br />
        <ul class="list-disc pl-4">
          <li>Volume-based fee structure</li>
          <li>High performance matching engine</li>
          <li>FIX, Websocket and HTTP API connectivity</li>
          <li>24/7 service and dedicated</li>
          <li>Premium support Industry-leading security practices</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RightWidget",
};
</script>

<style scoped>
.button-color {
  background-color: #60a5fa;
}
</style>

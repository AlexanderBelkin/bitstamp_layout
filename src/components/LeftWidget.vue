<template>
  <div
    class="flex justify-between bg-third border-b-2 border-primary items-center  "
  >
    <div class="mx-4 flex uppercase text-xs pt-1 pb-1 text-gray-500">
      Trades
      <svg
        data-v-372b4326=""
        data-v-14f1d576=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 13"
        style="enable-background:new 0 0 16 13"
        xml:space="preserve"
        class="sound--disabled widget-layout-header__icon h-auto w-5 mx-1.5"
      >
        <g data-v-372b4326="" data-v-14f1d576="" fill="currentColor">
          <path
            data-v-372b4326=""
            data-v-14f1d576=""
            d="M8.5 13c-.1 0-.2 0-.3-.1L2.3 9H.5C.2 9 0 8.8 0 8.5v-4c0-.3.2-.5.5-.5h1.8L8.2.1c.2-.1.4-.1.5 0 .2 0 .3.2.3.4v12c0 .2-.1.4-.3.4 0 .1-.1.1-.2.1zM1 8h1.5c.1 0 .2 0 .3.1L8 11.6V1.4L2.8 4.9c-.1.1-.2.1-.3.1H1v3z"
          ></path>
          <g
            data-v-372b4326=""
            data-v-14f1d576=""
            data-test="soundWave"
            class="sound-wave"
          >
            <path
              data-v-372b4326=""
              data-v-14f1d576=""
              d="M12.3 9.8c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7.7-.7 1-1.5 1-2.5 0-.9-.4-1.8-1-2.5-.2-.2-.2-.5 0-.7s.5-.2.7 0c.8.8 1.3 2 1.3 3.2 0 1.2-.5 2.3-1.3 3.2 0 .1-.1.1-.3.1z"
            ></path>
            <path
              data-v-372b4326=""
              data-v-14f1d576=""
              d="M10.9 8.4c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7.6-.6.6-1.5 0-2.1-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 1 1 1 2.6 0 3.5 0 .1-.2.1-.3.1zm2.8 2.8c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7 1-1 1.6-2.4 1.6-3.9s-.6-2.9-1.6-3.9c-.2-.2-.2-.5 0-.7s.5-.2.7 0c1.3 1.2 2 2.9 2 4.6s-.7 3.4-1.9 4.6c-.1.1-.2.1-.4.1z"
            ></path>
          </g>
          <path
            data-v-372b4326=""
            data-v-14f1d576=""
            d="M2.5 9c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0 .3-.2.5-.5.5z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="text-white border-b-1 border-white mx-4 text-xs">Last</div>
  </div>
  <table class="w-full table-auto striped hovered">
    <thead class="border-b-2 border-t-1 border-primary bg-third">
      <tr>
        <th class="text-gray-500 text-xs">Amount</th>
        <th class="text-gray-500 text-xs">Time</th>
        <th class="text-gray-500 text-xs">Price</th>
      </tr>
    </thead>
    <tbody class="bg-secondary">
      <tr>
        <td class="text-white text-xs border-red-600 border-l-2">1231233</td>
        <td class="text-xs text-gray-400">332222</td>
        <td class="text-red-500 text-xs">858</td>
      </tr>
      <tr>
        <td class="text-white text-xs border-green-600 border-l-4">
          321
        </td>
        <td class="text-xs text-gray-400">32321</td>
        <td class="text-xs text-green-500">112</td>
      </tr>
      <tr>
        <td class="text-white text-xs border-green-600 border-l-2">1233333t</td>
        <td class="text-xs text-gray-400">3123213213</td>
        <td class="text-green-500 text-xs">1,280</td>
      </tr>
      <tr>
        <td class="text-white text-xs border-red-600 border-l-2">1231233</td>
        <td class="text-xs text-gray-400">332222</td>
        <td class="text-red-500 text-xs">858</td>
      </tr>
      <tr>
        <td class="text-white text-xs border-green-600 border-l-4">
          321
        </td>
        <td class="text-xs text-gray-400">32321</td>
        <td class="text-xs text-green-500">112</td>
      </tr>
      <tr>
        <td class="text-white text-xs border-green-600 border-l-2">1233333t</td>
        <td class="text-xs text-gray-400">3123213213</td>
        <td class="text-green-500 text-xs">1,280</td>
      </tr>
      <tr>
        <td class="text-white text-xs border-red-600 border-l-2">1231233</td>
        <td class="text-xs text-gray-400">332222</td>
        <td class="text-red-500 text-xs">858</td>
      </tr>
      <tr>
        <td class="text-white text-xs border-green-600 border-l-4">
          321
        </td>
        <td class="text-xs text-gray-400">32321</td>
        <td class="text-xs text-green-500">112</td>
      </tr>
      <tr>
        <td class="text-white text-xs border-green-600 border-l-2">1233333t</td>
        <td class="text-xs text-gray-400">3123213213</td>
        <td class="text-green-500 text-xs">1,280</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "LeftWidget",
};
</script>

<template>
  <div class="flex">
    <div class="flex flex-col">
      <div class="bg-third border-b-2 border-primary">
        <div class="mx-4 flex uppercase text-xs pt-1 pb-1 text-gray-500">
          Depth Chart
        </div>
      </div>
      <img
        alt="Bitstamp"
        src="@/assets/left.png"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="flex flex-col w-full pl-1">
      <div class="bg-third border-b-2 border-primary">
        <div class="mx-4 flex uppercase text-xs pt-1 pb-1 text-gray-500">
          Order Book
        </div>
      </div>
      <table class="w-full table-auto striped hovered">
        <thead class="border-b-2 border-t-1 border-primary bg-third">
          <tr>
            <th class="text-gray-500 text-xs">Sum</th>
            <th class="text-gray-500 text-xs">Value</th>
            <th class="text-gray-500 text-xs">Amount</th>
            <th class="text-gray-500 text-xs">Bid</th>
            <th class="text-gray-500 text-xs">Ask</th>
            <th class="text-gray-500 text-xs">Amount</th>
            <th class="text-gray-500 text-xs">Value</th>
            <th class="text-gray-500 text-xs">Sum</th>
          </tr>
        </thead>
        <tbody class="bg-secondary">
          <tr>
            <td class="text-gray-400 text-xs border-red-600 border-l-2">
              1231
            </td>
            <td class="text-xs text-white">332</td>
            <td class="text-white text-xs">858</td>
            <td class="text-green-500 text-xs">12312</td>
            <td class="text-xs text-red-500">3322</td>
            <td class="text-white text-xs">858</td>
            <td class="text-xs text-white">332222</td>
            <td class="text-xs text-gray-400">0.5</td>
          </tr>
          <tr>
            <td class="text-gray-400 text-xs border-green-600 border-l-4">
              321
            </td>
            <td class="text-xs text-white">32321</td>
            <td class="text-xs text-white">112</td>
            <td class="text-green-500 text-xs">
              321
            </td>
            <td class="text-xs text-red-500">32321</td>
            <td class="text-xs text-white">112</td>
            <td class="text-xs text-white">32321</td>
            <td class="text-xs text-gray-400">0.5</td>
          </tr>
          <tr>
            <td class="text-gray-400 text-xs border-green-600 border-l-2">
              12333
            </td>
            <td class="text-xs text-white">31233</td>
            <td class="text-white text-xs">1,280</td>
            <td class="text-green-500 text-xs">123333</td>
            <td class="text-xs text-red-500">312321</td>
            <td class="text-white text-xs">1,280</td>
            <td class="text-white text-xs">12333</td>
            <td class="text-xs text-gray-400">0.1</td>
          </tr>
          <tr>
            <td class="text-gray-400 text-xs border-red-600 border-l-2">
              1231
            </td>
            <td class="text-xs text-white">332</td>
            <td class="text-white text-xs">858</td>
            <td class="text-green-500 text-xs">12312</td>
            <td class="text-xs text-red-500">3322</td>
            <td class="text-white text-xs">858</td>
            <td class="text-xs text-white">332222</td>
            <td class="text-xs text-gray-400">0.5</td>
          </tr>
          <tr>
            <td class="text-gray-400 text-xs border-green-600 border-l-4">
              321
            </td>
            <td class="text-xs text-white">32321</td>
            <td class="text-xs text-white">112</td>
            <td class="text-green-500 text-xs">
              321
            </td>
            <td class="text-xs text-red-500">32321</td>
            <td class="text-xs text-white">112</td>
            <td class="text-xs text-white">32321</td>
            <td class="text-xs text-gray-400">0.5</td>
          </tr>
          <tr>
            <td class="text-gray-400 text-xs border-green-600 border-l-2">
              12333
            </td>
            <td class="text-xs text-white">31233</td>
            <td class="text-white text-xs">1,280</td>
            <td class="text-green-500 text-xs">123333</td>
            <td class="text-xs text-red-500">312321</td>
            <td class="text-white text-xs">1,280</td>
            <td class="text-white text-xs">12333</td>
            <td class="text-xs text-gray-400">0.1</td>
          </tr>
          <tr>
            <td class="text-gray-400 text-xs border-green-600 border-l-2">
              12333
            </td>
            <td class="text-xs text-white">31233</td>
            <td class="text-white text-xs">1,280</td>
            <td class="text-green-500 text-xs">123333</td>
            <td class="text-xs text-red-500">312321</td>
            <td class="text-white text-xs">1,280</td>
            <td class="text-white text-xs">12333</td>
            <td class="text-xs text-gray-400">0.1</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomWidget",
};
</script>

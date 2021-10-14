<template>
  <nav
    class="relative flex flex-wrap items-center justify-between px-4 py-1 bg-secondary border-grey-light "
  >
    <div class="container px-1 flex flex-wrap items-center justify-between">
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start items-center"
      >
        <a
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap text-white"
          href="#"
        >
          Bitstamp
        </a>
        <span
          class="hidden md:inline-block text-gray-500 text-xs no-underline text-left self-center"
        >
          Tradeview
        </span>
        <div
          class="xs:flex md:hidden flex pt-1 pl-4 justify-start items-center w-full"
        >
          <div
            class="flex flex-shrink align-middle text-blue-500 text-xs items-center"
          >
            BTC / USD
            <ChevronDownIcon class="h-6 w-6 text-blue-500" />
          </div>
          <div class="text-gray-500 font-light text-xs ml-2">
            USD
            <strong class="text-white font-bold">54,968.03</strong>
          </div>
        </div>
        <button
          class="outline-none mobile-menu-button text-white bg-transperent cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <svg
            class="w-6 h-6 text-gray-500"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div
        v-bind:class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a
              class="text-gray-500 px-3 py-2 flex items-center text-xs leading-snug text-white hover:opacity-75"
              href="#"
            >
              <span class="ml-2">Account</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="text-gray-500 px-3 py-2 flex items-center text-xs leading-snug text-white hover:opacity-75"
              href="#"
            >
              <span class="ml-2">Markets</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="text-gray-500 px-3 py-2 flex items-center text-xs leading-snug text-white hover:opacity-75"
              href="#"
            >
              <span class="ml-2">Deposit</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="text-gray-500 px-3 py-2 flex items-center text-xs leading-snug text-white hover:opacity-75"
              href="#"
            >
              <span class="ml-2">Withdrawal</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="text-gray-500 px-3 py-2 flex items-center text-xs leading-snug text-white hover:opacity-75"
              href="#"
            >
              <span class="ml-2">News</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="hidden md:flex pt-1 pl-4 bg-primary justify-start items-center">
    <div
      class="flex flex-shrink align-middle text-blue-500 text-sm items-center xs:hidden"
    >
      BTC / USD
      <ChevronDownIcon class="h-6 w-6 text-blue-500" />
    </div>
    <div class="text-gray-500 font-light text-sm ml-5">
      USD
      <strong class="text-white font-bold">54,968.03</strong>
    </div>
    <div class="ml-auto">
      <DotsVerticalIcon class="h-5 w-5 text-blue-500" />
    </div>
  </div>
</template>
<script>
import { ChevronDownIcon, DotsVerticalIcon } from "@heroicons/vue/solid";
export default {
  name: "CoreHeader",
  components: {
    ChevronDownIcon,
    DotsVerticalIcon,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

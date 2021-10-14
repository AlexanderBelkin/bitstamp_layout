<template>
  <div>
    <core-header />
    <div
      class="flex flex-col md:flex-row md:flex-nowrap md:justify-between md:content-stretch md:items-start"
    >
      <div
        class="hidden md:flex flex-initial flex-col w-1/5 order-none self-stretch border-primary border-8 border-r-0 border-t-4 bg-secondary"
      >
        <left-widget />
      </div>
      <div
        class="xs:order-1 xs:w-full md:w-3/5 order-none flex-initial self-stretch border-primary border-8 border-t-4 bg-primary"
      >
        <div class="pb-1">
          <center-widget-chart />
        </div>
        <div class>
          <bottom-widget />
        </div>
      </div>
      <div
        class="xs:order-2 xs:w-full md:w-1/5 order-none flex-initial self-stretch border-primary border-8 border-l-0 border-t-4 bg-secondary"
      >
        <right-widget />
      </div>
    </div>
  </div>
</template>

<script>
import CoreHeader from "./components/Header";
import CenterWidgetChart from "./components/CenterWidgetChart";
import BottomWidget from "./components/BottomWidget";
import RightWidget from "./components/RightWidget";
import LeftWidget from "./components/LeftWidget";

export default {
  name: "App",
  components: {
    CoreHeader,
    CenterWidgetChart,
    BottomWidget,
    RightWidget,
    LeftWidget,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
.content-stretch {
  align-content: stretch;
}
</style>

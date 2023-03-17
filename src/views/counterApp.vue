<template>
  <div>
    <h1>Counter</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
    <br />
    <button @click="setValue">Set Value</button>
    <input type="number" v-model="value" />
  </div>

  <router-link to="/" class="link">Home</router-link>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import counterModule from "@/store/modules/counter";

export default {
  name: "counterApp",
  setup() {
    const store = useStore();

    const count = computed(() => store.state.counter.count);
    const value = computed({
      get: () => counterModule.state.count,
      set: (value) => store.dispatch("counter/setValue", value),
    });

    const increment = () => store.dispatch("counter/increment");
    const decrement = () => store.dispatch("counter/decrement");
    const reset = () => store.dispatch("counter/reset");
    const setValue = () => store.dispatch("counter/setValue", value.value);

    return {
      store,
      count,
      value,
      increment,
      decrement,
      reset,
      setValue,
    };
  },
};
</script>

<style>
button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
}
.link {
  display: block;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.link:hover {
  background-color: #3e8e41;
}
</style>

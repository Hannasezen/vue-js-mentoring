<template>
  <form class="form" @submit.prevent="submitSearchForm">
    <Input
      :type="input.type"
      :placeholder="input.placeholder"
      :name="input.name"
      v-model="model"
    />
    <Button type="submit" :name="buttonName" />
  </form>
</template>

<script>
import { defineComponent } from "vue";
import Button from "../atoms/Button.vue";
import Input from "../atoms/Input.vue";

export default defineComponent({
  name: "SearchForm",
  components: {
    Button,
    Input,
  },
  data() {
    return {
      input: {
        name: "find-film",
        type: "text",
        placeholder: "What do you want to watch?",
      },
      buttonName: "Search",
      model: "",
    };
  },
  methods: {
    submitSearchForm() {
      console.log(this.model);
      this.model = "";
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  margin: 0 auto;
  display: flex;

  button {
    min-width: 233px;
    margin: 0 0 0 12px;
  }
}
</style>

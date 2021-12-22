<template>
  <form class="form" @submit.prevent="submitSearchForm">
    <Input
      v-model="model"
      :type="input.type"
      :placeholder="input.placeholder"
      :name="input.name"
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
  flex-direction: column;
  justify-content: space-between;

  input {
    margin: 0 0 12px;

    @media screen and (min-width: 768px) {
      margin: 0;
    }
  }

  button {
    min-width: 233px;
    margin: 0;

    @media screen and (min-width: 768px) {
      margin: 0 0 0 12px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}
</style>

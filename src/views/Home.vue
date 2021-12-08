<template>
  <form class="form">
    <Input placeholder="What do you want to watch?" />
    <Button name="Search" buttonType="secondary" />
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@/components/atoms/Button.vue";
import Input from "@/components/atoms/Input.vue";

@Options({
  components: {
    Button,
    Input,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.form {
  display: block;
  margin: 0 120px;
  display: flex;
  justify-content: space-between;

  button {
    min-width: 230px;
  }
}
</style>

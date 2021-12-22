<template>
  <abstract-modal>
    <template #title>
      <Headline headline="Add movie" level="2" class="h1" />
    </template>
    <template #text>Modal text </template>
    <template #button>
      <Button
        buttonType="secondary"
        name="Reset"
        type="reset"
        class="modalButton"
      />
      <Button
        buttonType="primary"
        name="Submit"
        type="submit"
        class="modalButton"
      />
    </template>
    <template #openTrigger>
      <Button buttonType="tertiary" name="+ add movie" type="button" />
    </template>
  </abstract-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/atoms/Button.vue";
import Headline from "@/components/atoms/Headline.vue";

export default defineComponent({
  name: "AddFilmModal",
  components: {
    Button,
    Headline,
  },
});
</script>

<style scoped>
.modalButton {
  min-width: 180px;
  margin: 0 0 0 15px;
}
</style>

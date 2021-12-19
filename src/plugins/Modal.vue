<template>
  <teleport to="body" v-if="isOpen">
    <div class="modal-holder">
      <div class="modal">
        <div class="crossIconHolder">
          <button
            class="crossIcon"
            @click="closeModal"
            tabindex="0"
            ref="focusRef"
          >
            <CrossIcon />
          </button>
        </div>
        <div class="title">
          <slot name="title" />
        </div>
        <p>
          <slot name="text" />
        </p>
        <div class="closeButton" @click="closeModal">
          <slot name="button" />
        </div>
      </div>
    </div>
  </teleport>
  <div v-else class="openTrigger" @click="openModal">
    <slot name="openTrigger" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CrossIcon from "@/components/icons/CrossIcon.vue";

export default defineComponent({
  name: "Modal",
  components: { CrossIcon },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
  updated() {
    this.$refs.focusRef?.focus();
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  font-family: $vue-font;
  color: $white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.07),
    0px 10px 20px rgba(0, 0, 0, 0.05), 0px 10px 50px rgba(0, 0, 0, 0.05);
  background: $black;

  &-holder {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #232323ea;
  }
}

.crossIcon {
  @include button();

  &Holder {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 12px;
  }

  svg {
    cursor: pointer;
  }
}

.title {
  text-transform: uppercase;
}
</style>

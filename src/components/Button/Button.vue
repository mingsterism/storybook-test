<template>
  <button>{{ buttonText }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonText: {
      type: String,
      default: "Button",
    },
  },
};
</script>

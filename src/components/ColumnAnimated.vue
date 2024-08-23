<template>
  <div
    :class="[animationClass, { startInvisible: !TargetIsVisible }]"
    class="col"
    ref="Target"
    client:load
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const props = defineProps({
  animationClass: {
    type: String,
    default: "fadeIn", // Default animation if none is provided
  },
});

const Target = ref(null);
const TargetIsVisible = ref(false);

useIntersectionObserver(Target, ([{ isIntersecting }]) => {
  TargetIsVisible.value = isIntersecting;

  if (isIntersecting) {
    resetAnimation();
  }
});

const resetAnimation = () => {
  if (Target.value) {
    // Remove the animation class to trigger reflow
    Target.value.classList.remove(props.animationClass);
    void Target.value.offsetWidth; // Trigger reflow
    // Re-add the animation class
    Target.value.classList.add(props.animationClass);
  }
};
</script>

<style>
/* Base styles for all animations */
.col {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out,
    filter 0.5s ease-in-out;
}

/* Default invisible state */
.startInvisible {
  opacity: 0;
  filter: blur(20px);
  transform: translateY(20px);
}

/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
.fadeIn {
  animation: fadeIn 0.5s forwards;
}

/* Slide-in from left animation */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.slideInLeft {
  animation: slideInLeft 0.5s forwards;
}

/* Slide-in from right animation */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.slideInRight {
  animation: slideInRight 0.5s forwards;
}

/* Slide-in from top animation */
@keyframes slideInTop {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.slideInTop {
  animation: slideInTop 0.5s forwards;
}

/* Slide-in from bottom animation */
@keyframes slideInBottom {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.slideInBottom {
  animation: slideInBottom 0.5s forwards;
}

/* Scale-up animation */
@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.5);
    filter: blur(20px);
  }
  to {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
}
.scaleUp {
  animation: scaleUp 0.5s forwards;
}

/* Scale-down animation */
@keyframes scaleDown {
  from {
    opacity: 0;
    transform: scale(1.5);
    filter: blur(20px);
  }
  to {
    opacity: 1;
    transform: scale(0.5);
    filter: blur(0);
  }
}
.scaleDown {
  animation: scaleDown 0.5s forwards;
}

/* Rotate animation */
@keyframes rotate {
  from {
    opacity: 0;
    transform: rotate(-360deg);
  }
  to {
    opacity: 1;
    transform: rotate(0);
  }
}
.rotate {
  animation: rotate 0.5s forwards;
}
</style>

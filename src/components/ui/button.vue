<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    class="btn"
    :class="[variantClass, sizeClass]"
  >
  <slot/>
  </component>
</template>

<script setup>
  import { ref, computed } from "vue";

  const props = defineProps({
    variant:{type: String, default: 'dark'},
    size: {type: String, default: 'md'},
    href: String,
    to: [String, Object]
  })

  const tag = computed(()=>{
    if (props.to) return 'RouterLink'
    if (props.href) return 'a'
    return 'button'
  })

  const variantClass = computed(() => `btn-${props.variant}`)
  const sizeClass = computed(() => `btn-${props.size}`)

</script>

<style>
.btn {
display: inline-flex; align-items: center; justify-content: center; gap: 12px;
padding: 13px 20px; border: 0; cursor: pointer; font-size: 13px; font-weight: 600;
}
.btn-dark { background: var(--dark); color: white; }
.btn-gold { background: var(--accent); color: #111; }
.btn-outline { background: transparent; color: white; border: 1px solid #777; }
.btn-link { font-size: 12px; text-decoration: underline; text-underline-offset: 5px; }
</style>
